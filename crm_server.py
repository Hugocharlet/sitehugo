#!/usr/bin/env python3
"""
Serveur local pour editeur_crm_tracker.html
Lance avec : python crm_server.py
Ecoute sur  : http://localhost:8787
"""

import http.server
import json
import os
import sys
from pathlib import Path

# ─────────────────────────────────────────
# CONFIGURATION
# ─────────────────────────────────────────
HOST      = 'localhost'
PORT      = 8787
BASE_DIR  = Path(__file__).resolve().parent
HTML_FILE = BASE_DIR / 'editeur_crm_tracker.html'
DATA_FILE = BASE_DIR / 'crm_data.json'


def cors_headers():
    """Retourne les headers CORS communs."""
    return {
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Access-Control-Max-Age':       '86400',
    }


# ─────────────────────────────────────────
# HANDLER
# ─────────────────────────────────────────
class CRMHandler(http.server.BaseHTTPRequestHandler):

    # ── Silence le log verbeux par défaut ──
    def log_message(self, fmt, *args):
        method = args[0] if args else '?'
        # Affiche seulement les erreurs et les requêtes utiles
        if len(args) >= 2 and not str(args[1]).startswith('2'):
            print(f'  [{self.address_string()}] {method}', flush=True)

    # ── OPTIONS (preflight CORS) ──
    def do_OPTIONS(self):
        self.send_response(204)
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()

    # ── GET ──
    def do_GET(self):
        path = self.path.split('?')[0]  # ignore query string

        # Servir le fichier HTML principal
        if path in ('/', '/index.html', '/editeur_crm_tracker.html'):
            self._serve_html()
            return

        # API : lire les données
        if path == '/api/data':
            self._api_get()
            return

        # Tout le reste → 404
        self._send_json(404, {'error': 'Not found'})

    # ── POST ──
    def do_POST(self):
        path = self.path.split('?')[0]

        if path == '/api/data':
            self._api_post()
            return

        self._send_json(404, {'error': 'Not found'})

    # ─────────────────────────────────────
    # Handlers internes
    # ─────────────────────────────────────
    def _serve_html(self):
        if not HTML_FILE.exists():
            self._send_text(404, f'Fichier introuvable : {HTML_FILE.name}')
            return
        content = HTML_FILE.read_bytes()
        self.send_response(200)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(content)))
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(content)

    def _api_get(self):
        """Renvoie le contenu de crm_data.json (crée le fichier si absent)."""
        if not DATA_FILE.exists():
            DATA_FILE.write_text('[]', encoding='utf-8')
        try:
            payload = DATA_FILE.read_text(encoding='utf-8')
            # Valider que c'est du JSON valide
            json.loads(payload)
        except (json.JSONDecodeError, OSError) as e:
            print(f'  Erreur lecture {DATA_FILE.name}: {e}', flush=True)
            self._send_json(500, {'error': str(e)})
            return
        body = payload.encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def _api_post(self):
        """Reçoit du JSON dans le body et l'écrit dans crm_data.json."""
        length = int(self.headers.get('Content-Length', 0))
        if length == 0:
            self._send_json(400, {'error': 'Corps vide'})
            return
        raw = self.rfile.read(length)
        try:
            parsed = json.loads(raw.decode('utf-8'))
        except json.JSONDecodeError as e:
            self._send_json(400, {'error': f'JSON invalide : {e}'})
            return
        if not isinstance(parsed, list):
            self._send_json(400, {'error': 'Le corps doit être un tableau JSON'})
            return
        try:
            DATA_FILE.write_text(
                json.dumps(parsed, ensure_ascii=False, indent=2),
                encoding='utf-8'
            )
        except OSError as e:
            print(f'  Erreur écriture {DATA_FILE.name}: {e}', flush=True)
            self._send_json(500, {'error': str(e)})
            return
        self._send_json(200, {'ok': True, 'count': len(parsed)})

    # ─────────────────────────────────────
    # Helpers de réponse
    # ─────────────────────────────────────
    def _send_json(self, code, obj):
        body = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def _send_text(self, code, text):
        body = text.encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'text/plain; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        for k, v in cors_headers().items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)


# ─────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────
def main():
    # Créer crm_data.json si absent
    if not DATA_FILE.exists():
        DATA_FILE.write_text('[]', encoding='utf-8')
        print(f'  Fichier créé : {DATA_FILE}', flush=True)

    server = http.server.HTTPServer((HOST, PORT), CRMHandler)

    url = f'http://{HOST}:{PORT}'
    print('', flush=True)
    print('  ┌─────────────────────────────────────────────┐', flush=True)
    print('  │   CRM Suivi éditeurs — serveur local         │', flush=True)
    print('  ├─────────────────────────────────────────────┤', flush=True)
    print(f'  │   Ouvrir dans le navigateur :               │', flush=True)
    print(f'  │   {url:<43} │', flush=True)
    print('  │                                             │', flush=True)
    print(f'  │   Données stockées dans :                   │', flush=True)
    print(f'  │   {DATA_FILE.name:<43} │', flush=True)
    print('  │                                             │', flush=True)
    print('  │   Ctrl+C pour arrêter                       │', flush=True)
    print('  └─────────────────────────────────────────────┘', flush=True)
    print('', flush=True)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n  Serveur arrêté.', flush=True)
        server.server_close()
        sys.exit(0)


if __name__ == '__main__':
    main()
