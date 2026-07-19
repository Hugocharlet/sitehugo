// Central data file for all Hugo Charlet projects.
// Used by project.html (and any future pages) to drive content and navigation.

const PROJECT_ORDER = [
    'bureauk', 'teo', 'kaktus', 'tomeo', 'enzo', 'pixa',
    'loop', 'mistral', 'tropical', 'louise', 'melodie', 'taurus',
    'anton', 'remo', 'belvedere', 'dieter',
    'malorie', 'helena', 'spyder', 'nocta', 'uni', 'orion'
];

const PROJECTS = {
    anton: {
        title: "ANTON",
        subtitle: "Executive armchair 2023",
        dimensions: "531 × 508 × 704 mm",
        description: "For this new Anton chair and armchair project, I spent much effort in finding the most gentle and refined line possible. This work follows a broader research that I have been conducting for several months on shells made out molded injected foam. This technique allows us to create really modern forms and designs thanks to the total freedom of shape. Using this particular technique makes it possible to design very beautiful and subtle armchairs, usually dedicated for the high-end market. The Anton series with its delicate, modern and timeless look aims to become a collection of references to furnish the most distinguished and luxurious places. High-quality covers in leather or fabric encase the shell of the back as well as the seat itself.",
        pageTitle: "ANTON executive chair",
        ogDescription: "The Anton series with its delicate, modern and timeless look aims to become a collection of references to furnish the most distinguished and luxurious places.",
        ogImage: "https://www.hugocharlet.com/pages/anton/5.jpg",
        gallery: [
            { w: 1280, h: 1280 },
            { w: 2526, h: 1764 },
            { w: 2526, h: 1764 },
            { w: 2320, h: 1460 },
            { w: 1978, h: 1978 },
            { w: 1200, h: 1222 },
            { w: 3648, h: 5472 },
            { w: 3918, h: 3648 },
            { w: 911, h: 911 }
        ],
        mainImage: { w: 4648, h: 2614 },
        models: [
            { src: "glb/antonchair.glb", label: "3D Model chair" },
            { src: "glb/antonlounge.glb", label: "3D Model armchair" },
            { src: "glb/antonswivel.glb", label: "3D Model loungechair" }
        ],
        configurator: null,
        download: null
    },
    belvedere: {
        title: "BELVEDERE",
        subtitle: "Outdoor chairs 2024",
        dimensions: "525 × 475 × 860 mm",
        description: "The belvedere chair is a simple chair with a highly original structure that is unusual for a chair: the back legs rise up to the level of the high back. This creates an original detail that gives the chair a recognizable identity.",
        pageTitle: "BELVEDERE outdoor chairs",
        ogDescription: "The belvedere chair is a simple chair with a highly original structure: the back legs rise up to the level of the high back, creating an original detail that gives the chair a recognizable identity.",
        ogImage: "https://www.hugocharlet.com/pages/belvedere/4.jpg",
        gallery: [
            { w: 1621, h: 1621 },
            { w: 1621, h: 1621 },
            { w: 1621, h: 1621 },
            { w: 2099, h: 1483 },
            { w: 2099, h: 1483 }
        ],
        mainImage: { w: 2099, h: 1320 },
        models: [
            { src: "glb/belvederechair.glb", label: "3D Model chair" },
            { src: "glb/belvederearmchair.glb", label: "3D Model armchair" }
        ],
        configurator: null,
        download: null
    },
    dieter: {
        title: "DIETER",
        subtitle: "Waiting loungechair 2023",
        dimensions: "685 × 696 × 623 mm",
        description: "This waiting chair with its Bauhaus look is inspired by some of the great designs of the master Dieter Rams. It's an elegant minimalist product with a modern touch. It's a perfect contract product, easy to manufacture and recognizable at first glance. An eye-catching product suited for industrial production.",
        pageTitle: "DIETER waiting armchair",
        ogDescription: "This waiting chair with its Bauhaus look is inspired by some of the great designs of the master Dieter Rams. An elegant minimalist product with a modern touch — a perfect contract chair, easy to manufacture and recognizable at first glance.",
        ogImage: "https://www.hugocharlet.com/pages/dieter/1.jpg",
        gallery: [
            { w: 2433, h: 1812 },
            { w: 1894, h: 1323 },
            { w: 979, h: 979 },
            { w: 1894, h: 1323 },
            { w: 1011, h: 675 },
            { w: 1894, h: 1323 },
            { w: 1280, h: 1023 },
            { w: 1894, h: 1323 }
        ],
        mainImage: { w: 1894, h: 1020 },
        models: [],
        configurator: null,
        download: null
    },
    enzo: {
        title: "ENZO",
        subtitle: "Secretary desk 2021",
        dimensions: "700 × 1200 × 760 mm",
        description: "The office desk is a piece of furniture that is making a comeback in our interiors due to the democratization of teleworking. More and more workers express the desire to be able to work from home several days a week. It is to respond to this societal trend that I designed the Enzo desk. I wanted to create a desk that was very functional but yet very elegant and which was not just a useful piece of furniture. It is a desk that we highlight in our living room and not that we hide in our bedroom.",
        pageTitle: "ENZO secretary desk",
        ogDescription: "The office desk is a piece of furniture that is making a comeback in our interiors due to the democratization of teleworking. More and more workers express the desire to be able to work from home several days a week.",
        ogImage: "https://www.hugocharlet.com/pages/enzo/2.jpg",
        gallery: [
            { w: 2048, h: 2048 },
            { w: 1351, h: 1351 },
            { w: 1300, h: 1300 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 }
        ],
        mainImage: { w: 1670, h: 939 },
        models: [],
        configurator: null,
        download: null
    },
    helena: {
        title: "HELENA",
        subtitle: "Wooden chairs 2024",
        dimensions: "531 × 508 × 704 mm",
        description: "The Helena collection, comprising a chair with armrest, a simple chair and an armchair, is a seating collection with an innovative design. It took me a long time to sculpt the material to give birth to this new product, which I hope will become a contemporary classic. A product with a strong, sleek design, but also with a singular language of its own. The backrest turns on itself like a ribbon to gradually form the armrests. The oval-section legs fit into the backrest, protruding slightly. This complex junction is made industrially possible using state-of-the-art tools. This assembly is the second original detail that makes this chair unique.",
        pageTitle: "HELENA modern and timeless dining chair collection in solid wood",
        ogDescription: "The Helena collection — chair, armchair, and lounge chair — is a seating collection with an innovative design. The backrest turns on itself like a ribbon to form the armrests, a contemporary classic with a strong, sleek identity.",
        ogImage: "https://www.hugocharlet.com/pages/helena/2.jpg",
        gallery: [
            { w: 1080, h: 1080 },
            { w: 1080, h: 1080 },
            { w: 972, h: 972 },
            { w: 1751, h: 1751 },
            { w: 1559, h: 1559 },
            { w: 2433, h: 2433 },
            { w: 683, h: 1025 },
            { w: 1003, h: 1003 },
            { w: 2537, h: 2537 },
            { w: 3648, h: 3648 }
        ],
        mainImage: { w: 1642, h: 923 },
        models: [
            { src: "glb/helenachair.glb", label: "3D Model chair" },
            { src: "glb/helenaarmchair.glb", label: "3D Model armchair" },
            { src: "glb/helenalounge.glb", label: "3D Model loungechair" }
        ],
        configurator: "https://www.hugocharlet.com/configurator/helena/",
        download: "pages/helena/HDimages.zip"
    },
    kaktus: {
        title: "KAKTUS",
        subtitle: "Ironic teapot 2019",
        dimensions: null,
        description: "The Kaktus teapot is a funny and ironic object inspired from Richard Hutten's mug. This is supposed to be a porcelain teapot but could also be made from plastic.",
        pageTitle: "KAKTUS funny teapot",
        ogDescription: "The Kaktus teapot is a funny and ironic object inspired from Richard Hutten's mug. This porcelain teapot with a bold cactus silhouette could also be produced in plastic.",
        ogImage: "https://www.hugocharlet.com/pages/kaktus/3.jpg",
        gallery: [
            { w: 712, h: 713 },
            { w: 1000, h: 1000 },
            { w: 1000, h: 1000 }
        ],
        mainImage: null,
        models: [
            { src: "glb/kaktus.glb", label: "3D Model teapot" }
        ],
        configurator: null,
        download: null
    },
    loop: {
        title: "LOOP",
        subtitle: "Outdoor metallic furniture 2021",
        dimensions: "615 × 690 × 563 mm",
        description: "Loop represents a series of outdoor furniture easily manufactured with an original usage of stretched fabric for the seating parts. The body is a simple assembly of welded metallic sections, and the seat and back are made from a stretched fabric wrapped around the metallic body of the chair. The idea of a stretched fabric that crosses itself at the bottom of the backrest is an original design that gives a unique identity to this furniture collection.",
        pageTitle: "LOOP: Metallic Frame with Wrapped Stretch Fabric",
        ogDescription: "Loop represents a series of outdoor furniture with an original usage of stretched fabric for the seating parts.",
        ogImage: "https://www.hugocharlet.com/pages/loop/1.jpg",
        gallery: [
            { w: 1275, h: 1275 },
            { w: 1920, h: 1356 },
            { w: 1920, h: 1356 },
            { w: 1920, h: 1356 },
            { w: 1920, h: 1356 }
        ],
        mainImage: { w: 5472, h: 3078 },
        models: [
            { src: "glb/loopchair.glb", label: "3D Model chair" },
            { src: "glb/looparmchair.glb", label: "3D Model armchair" },
            { src: "glb/looploungechair.glb", label: "3D Model loungechair" }
        ],
        configurator: null,
        download: null
    },
    louise: {
        title: "LOUISE",
        subtitle: "Outdoor chairs 2023",
        dimensions: "525 × 475 × 860 mm",
        description: "Louise is inspired by the medallion chairs of the Louis XVI era. Its unique style and simple, robust structure make Louise the perfect chair for both B2B and individual customers. It is a chair designed to be produced industrially and aimed at the mass market. With Louise, everyone will have the opportunity to bring a piece of French history into their homes.",
        pageTitle: "LOUISE standard chair for contract",
        ogDescription: "Louise is inspired by the medallion chairs of the Louis XVI era. Its unique style and simple, robust structure make Louise the perfect chair for both B2B and individual customers.",
        ogImage: "https://www.hugocharlet.com/pages/louise/1.jpg",
        gallery: [
            { w: 2320, h: 1460 },
            { w: 2320, h: 1460 },
            { w: 2320, h: 1460 }
        ],
        mainImage: { w: 2596, h: 1460 },
        models: [
            { src: "glb/louisechair.glb", label: "3D Model chair" },
            { src: "glb/louisearmchair.glb", label: "3D Model armchair" }
        ],
        configurator: null,
        download: null
    },
    malorie: {
        title: "MALORIE",
        subtitle: "Outdoor chair 2022",
        dimensions: "500 × 515 × 805 mm",
        description: "This dining chair pays homage to Jean Prouvé’s all-wood designs from the 1940s and 1950s. Its design is understated, almost rustic, but the armrest makes a bold statement and gives it a unique, timeless identity. Its construction is based on traditional cabinetmaking principles: the joints, deliberately left exposed, showcase the craftsman’s expertise and play a key role in the chair’s aesthetic expression. Every detail highlights the precision of the woodworking rather than seeking to conceal it. Designed with material efficiency in mind, this chair prioritizes a streamlined structure, where each element serves a structural purpose. Straddling the line between artisanal heritage and contemporary design, it asserts a strong identity without ever resorting to showiness, making simplicity its primary language.",
        pageTitle: "MALORIE | Contemporary Solid Wood Dining Chair",
        ogDescription: "A timeless dining chair inspired by Jean Prouvé's all-wood designs, blending traditional cabinetmaking, exposed joinery, and a refined contemporary language shaped by material efficiency.",
        ogImage: "https://www.hugocharlet.com/pages/malorie/1.jpg",
        gallery: [
            { w: 1444, h: 1445 },
            { w: 2648, h: 2648 },
            { w: 2304, h: 1424 },
            { w: 768, h: 768 }
        ],
        mainImage: { w: 3436, h: 1255 },
        models: [],
        configurator: null,
        download: null
    },
    melodie: {
        title: "MELODIE",
        subtitle: "Outdoor chair 2022",
        dimensions: "500 × 515 × 805 mm",
        description: "Mélodie is a new outdoor chair that is both fun and sophisticated. It's made from square tubing that's been bent into a cool and unique design, which gives it a playful look. But even with its funky appearance, it still manages to look elegant and classy.",
        pageTitle: "MELODIE original outdoor chair made with square tubes",
        ogDescription: "Mélodie is a new outdoor chair that is both fun and sophisticated. It's made from square tubing that's been bent into a cool and unique design, which gives it a playful look.",
        ogImage: "https://www.hugocharlet.com/pages/melodie/1.jpg",
        gallery: [
            { w: 1506, h: 1506 },
            { w: 2922, h: 2043 },
            { w: 2922, h: 2043 },
            { w: 1460, h: 1460 },
            { w: 2320, h: 1460 }
        ],
        mainImage: { w: 2320, h: 1460 },
        models: [],
        configurator: null,
        download: null
    },
    nocta: {
        title: "NOCTA",
        subtitle: "Wooden chairs 2024",
        dimensions: "531 × 508 × 704 mm",
        description: "The Nocta chair is a modern reinterpretation of a Scandinavian-inspired mid-back bridge chair. Crafting a design with such organic lines demands true mastery of 3D modeling tools. The chair's signature feature lies in its legs: their square profile, visible from the outside, is defined by sharp, prominent edges that create a precise, sculpted silhouette. On the inside, these edges soften into a rounded form, producing a smooth and natural transition to the seat and backrest. In this way, the chair juxtaposes taut, assertive exterior lines with gentle, enveloping interior contours. This contrast gives it a distinctive identity and offers a fresh perspective on a design that is often copied and adapted.",
        pageTitle: "NOCTA modern dining chair collection in solid wood",
        ogDescription: "The Nocta chair is a modern reinterpretation of a Scandinavian-inspired mid-back bridge chair, where taut exterior lines contrast with gentle, enveloping interior contours for a distinctive and refined identity.",
        ogImage: "https://www.hugocharlet.com/pages/nocta/2.jpg",
        gallery: [
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 }
        ],
        mainImage: { w: 1782, h: 1002 },
        models: [
            { src: "glb/noctachair.glb", label: "3D Model chair" }
        ],
        configurator: null,
        download: null
    },
    orion: {
        title: "ORION",
        subtitle: "Wooden chairs 2026",
        dimensions: "531 × 508 × 704 mm",
        description: "The triangular armrest is the starting point of this project; the rest of the structure naturally unfolds around this distinctive feature. My aim was to adhere to principles of creating durable objects that transcend fleeting trends: a smart, functional, and robust chair, with clean lines and elegant details, a sense of visual clarity. This project combines the rigor of industrial design with the warmth of handcrafted production. The design is conceived to minimize the number of components, reducing costs while achieving a visually light feel. The design is refined, almost ethereal. This chair is suitable for both the most modern spaces and the most traditional mountain chalets.",
        pageTitle: "ORION modern dining chair collection in solid wood",
        ogDescription: "The triangular armrest is the starting point of this project — a smart, functional, and robust chair with clean lines and elegant details, suitable for both modern spaces and traditional mountain chalets.",
        ogImage: "https://www.hugocharlet.com/pages/orion/6.jpg",
        gallery: [
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1537, h: 1537 },
            { w: 1024, h: 1024 },
            { w: 1748, h: 984 },
            { w: 1578, h: 888 },
            { w: 1401, h: 1336 }
        ],
        mainImage: { w: 3528, h: 1353 },
        models: [
            { src: "glb/orionchair.glb", label: "3D Model chair" },
            { src: "glb/orionarmchair.glb", label: "3D Model armchair" }
        ],
        configurator: null,
        download: null
    },
    pixa: {
        title: "PIXA",
        subtitle: "Outdoor Furniture Collection 2020",
        dimensions: "520 × 480 × 800 mm",
        description: "The PIXA Collection is a family of robust and rustic furniture for the outdoors with a very original and recognizable look. With bulky legs and oversized proportions, this furniture family triggers surprise and astonishment. People like to sit in these endearing and fun comfortable chairs. No doubt PIXA furniture collection clearly differentiates from any other outdoor furniture on the market. The collection is made exclusively from a unique format of plank — a pressure-treated pine which guarantees optimum resistance to external conditions and maximum durability.",
        pageTitle: "PIXA, rustic and original furniture collection",
        ogDescription: "The PIXA Collection is a family of robust and rustic furniture for the outdoors with a very original and recognizable look. With bulky legs and oversized proportions, this furniture family triggers surprise and astonishment.",
        ogImage: "https://www.hugocharlet.com/pages/pixa/3.jpg",
        gallery: [
            { w: 1033, h: 1033 },
            { w: 867, h: 1056 },
            { w: 1252, h: 1568 },
            { w: 964, h: 1094 },
            { w: 983, h: 983 },
            { w: 1616, h: 1212 },
            { w: 1210, h: 806 }
        ],
        mainImage: { w: 2399, h: 1006 },
        models: [
            { src: "glb/pixachair.glb", label: "3D Model chair" },
            { src: "glb/pixalounge.glb", label: "3D Model armchair" }
        ],
        configurator: "https://www.hugocharlet.com/configurator/pixa/",
        download: null
    },
    remo: {
        title: "REMO",
        subtitle: "Metal chair 2023",
        dimensions: "490 × 240 × 240 mm",
        description: "In the early 1900s, architects like Le Corbusier and Mies Van Der Rohe were prominent figures of the functionalist movement, focusing on efficiency and practicality while rejecting unnecessary decoration. This chair collection embodies a functionalist approach — tall and austere, unadorned and rational. It represents the simplest and most minimalistic chair: devoid of design, where form follows function. I am captivated by the manipulation of metal in industry, whether through bending, welding, or punching. The challenge in this new design is to explore the aesthetic possibilities provided by industrial techniques, merging them with a concern for finesse and creativity.",
        pageTitle: "REMO minimalist metallic furniture",
        ogDescription: "In the early 1900s, architects like Le Corbusier and Mies Van Der Rohe were prominent figures of the functionalist movement. This chair collection embodies a functionalist approach — tall and austere, unadorned and rational.",
        ogImage: "https://www.hugocharlet.com/pages/remo/4.jpg",
        gallery: [
            { w: 1356, h: 1356 },
            { w: 1713, h: 1713 },
            { w: 1483, h: 1483 },
            { w: 1447, h: 1447 },
            { w: 2099, h: 1483 },
            { w: 1279, h: 1279 }
        ],
        mainImage: { w: 2651, h: 1492 },
        models: [
            { src: "glb/remo.glb", label: "3D Model chair" },
            { src: "glb/remoarmrests.glb", label: "3D Model armchair" }
        ],
        configurator: null,
        download: null
    },
    spyder: {
        title: "SPYDER",
        subtitle: "Metal outdoor chairs 2020",
        dimensions: "510 × 560 × 820 mm",
        description: "Spyder is an outdoor metal chair made from bent metal pipes. It is a light and stackable chair initially designed for restaurant terraces as an alternative to plastic chairs. The aim was to design a chair that would be appealing both in the eyes of the consumer but also in the eyes of the industrialist. Considerable effort was dedicated to keep the chair relatively easy to manufacture. Spyder's uniqueness comes from its original structure. Considerable attention was dedicated to the look, which had to be simple but contemporary.",
        pageTitle: "SPYDER modern outdoor chairs for restaurant terraces",
        ogDescription: "Spyder is an outdoor metal chair made from bent metal pipes. It is a light and stackable chair initially designed for restaurant terraces as an alternative to plastic chairs.",
        ogImage: "https://www.hugocharlet.com/pages/spyder/1.jpg",
        gallery: [
            { w: 2048, h: 2048 },
            { w: 2048, h: 2048 },
            { w: 2048, h: 2048 },
            { w: 973, h: 688 },
            { w: 1024, h: 724 },
            { w: 973, h: 688 },
            { w: 2048, h: 2048 },
            { w: 2048, h: 1285 }
        ],
        mainImage: { w: 2322, h: 1183 },
        models: [
            { src: "glb/tomeo-v3.glb", label: "3D Model chair" }
        ],
        configurator: null,
        download: null
    },
    taurus: {
        title: "TAURUS",
        subtitle: "Outdoor chair 2022",
        dimensions: "550 × 600 × 860 mm",
        description: "Taurus is a chair made out of bent welded metal pipes. This light, stackable and playful chair is dedicated to restaurateurs and individuals alike. Its very readable design can speak to each of us. It looks both fun and playful but also modern and minimalist, which makes it a real go-anywhere chair, which has the potential to become a new iconic chair and a vector of emotions.",
        pageTitle: "TAURUS playful contract chair for outdoor",
        ogDescription: "Taurus is a chair made out of bent welded metal pipes. This light, stackable and playful chair is dedicated to restaurateurs and individuals alike.",
        ogImage: "https://www.hugocharlet.com/pages/taurus/1.jpg",
        gallery: [
            { w: 2560, h: 1809 },
            { w: 2560, h: 1809 },
            { w: 1460, h: 1460 },
            { w: 2099, h: 1483 },
            { w: 2099, h: 1483 }
        ],
        mainImage: { w: 2099, h: 1230 },
        models: [],
        configurator: null,
        download: null
    },
    teo: {
        title: "TEO",
        subtitle: "Outdoor wooden armchair 2016",
        dimensions: "620 × 693 × 823 mm",
        description: "Teo is an outdoor wooden armchair with a simple and sophisticated look. This armchair was designed in collaboration with the skilled cabinet maker, Mr. Delavelle, for technical support. In fact, designing outdoor furniture in solid wood is a challenge: the dimensions change according to variations of humidity with different ratios depending on the directions. The geometry must be thought so the joins don't open when the wood tightens or extends. Considerable efforts were made to achieve an original and contemporary furniture that also meets criteria of production cost and robustness.",
        pageTitle: "TEO rustic and minimalist armchair",
        ogDescription: "Teo is an outdoor wooden armchair with a simple and sophisticated look, designed in collaboration with skilled cabinet maker Mr. Delavelle.",
        ogImage: "https://www.hugocharlet.com/pages/teo/1.jpg",
        gallery: [
            { w: 1654, h: 1654 },
            { w: 1654, h: 1654 },
            { w: 1267, h: 1267 },
            { w: 1267, h: 1267 }
        ],
        mainImage: { w: 1440, h: 960 },
        models: [
            { src: "glb/teo.glb", label: "3D Model chair" }
        ],
        configurator: null,
        download: null
    },
    tomeo: {
        title: "TOMEO",
        subtitle: "Metal outdoor chairs 2020",
        dimensions: "510 × 560 × 820 mm",
        description: "Tomeo is an outdoor metal chair made from bent metal pipes. It is a light and stackable chair initially designed for restaurant terraces as an alternative to plastic chairs. The aim was to design a chair that would be appealing both in the eyes of the consumer but also in the eyes of the industrialist. Considerable effort was dedicated to keep the chair relatively easy to manufacture. Tomeo's uniqueness comes from its original structure. Considerable attention was dedicated to the look, which had to be simple but contemporary. Indeed, many pieces of metallic furniture on the market are strongly inspired from older designs from the 20th century. Tomeo is truly different from what already exists because the design itself questions the traditional chair structure.",
        pageTitle: "TOMEO modern outdoor chairs for restaurant terraces",
        ogDescription: "Tomeo is an outdoor metal chair made from bent metal pipes. It is a light and stackable chair initially designed for restaurant terraces as an alternative to plastic chairs.",
        ogImage: "https://www.hugocharlet.com/pages/tomeo/1.jpg",
        gallery: [
            { w: 987, h: 987 },
            { w: 900, h: 900 },
            { w: 1188, h: 1029 },
            { w: 1300, h: 1300 },
            { w: 1040, h: 1040 },
            { w: 1300, h: 1300 },
            { w: 900, h: 900 },
            { w: 1080, h: 1080 },
            { w: 844, h: 1252 },
            { w: 860, h: 860 },
            { w: 1081, h: 1081 },
            { w: 1081, h: 1352 }
        ],
        mainImage: { w: 3289, h: 3289 },
        models: [
            { src: "glb/tomeochair.glb", label: "3D Model chair" },
            { src: "glb/tomeoarmchair.glb", label: "3D Model armchair" },
            { src: "glb/tomeolounge.glb", label: "3D Model loungechair" }
        ],
        configurator: null,
        download: null
    },
    tropical: {
        title: "TROPICAL",
        subtitle: "Upholstered chairs 2022",
        dimensions: "760 × 640 × 850 mm",
        description: "The TROPICAL chair is an original and fun creation inspired by furniture from the 60s/70s. With its somewhat pop and youthful look, this armchair can be a success with a young public as well as with a public more aware of the codes of decorative furniture. I spent considerable attention on the lines and proportions to achieve an honest design, right and that does not become ugly with time. Moreover, the tubular foam which wraps the whole chair ensures an unrivaled comfort and warmness. Thanks to its very strong identity, this armchair is recognizable at first glance and could become a new design icon.",
        pageTitle: "TROPICAL bulky chairs inspired by the 60's",
        ogDescription: "The TROPICAL chair is an original and fun creation inspired by furniture from the 60s/70s. With its pop and youthful look, it wraps you in tubular foam for unrivaled comfort and a strong identity.",
        ogImage: "https://www.hugocharlet.com/pages/tropical/1.jpg",
        gallery: [
            { w: 2416, h: 2416 },
            { w: 2320, h: 1460 },
            { w: 745, h: 745 },
            { w: 1200, h: 800 },
            { w: 2465, h: 1627 },
            { w: 1541, h: 972 }
        ],
        mainImage: { w: 2320, h: 1561 },
        models: [],
        configurator: null,
        download: null
    },
    bureauk: {
        title: "BUREAUK",
        subtitle: "Height Adjustable Desk 2016",
        dimensions: "1400 × 765 × 720-900 mm",
        description: "This furniture is a height adjustable desk for individuals. It is power free and therefore an affordable alternative to expensive electric solutions on the market. The frame is divided into two metallic triangles that slide one on the other. This mechanism does not need any motor or electric power. Springs are used to compensate the weight of the upper part. Thanks to its unique mechanism this desk is super light compared to an electric alternative and looks more natural. The desk's height is adjustable between 72 and 92 cm. The geometry has been studied to ensure the stability of the desk in any position. The springs size was also calculated to furnish the exact thrust needed to lift the upper part without any effort. This ergonomic and elegant desk is a decorative object as much as a working tool.",
        pageTitle: "BUREAUK height adjustable desk",
        ogDescription: "This furniture is a height adjustable desk for individuals. It is power free and therefore an affordable alternative to expensive electric solutions on the market.",
        ogImage: "https://www.hugocharlet.com/pages/bureauk/4.jpg",
        gallery: [
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1800, h: 1800 },
            { w: 1064, h: 708 },
            { w: 1064, h: 708 }
        ],
        mainImage: { w: 1948, h: 1096 },
        models: [
            { src: "glb/bureauk.glb", label: "3D Model desk" }
        ],
        configurator: null,
        download: null
    },
    mistral: {
        title: "MISTRAL",
        subtitle: "Modern storm lamp 2022",
        dimensions: "490 × 240 × 240 mm",
        description: "Mistral is a modern lamp that takes up the image of the storm lantern in a contemporary style. This lamp used suspended above a table, for example, instantly creates an atmosphere of discreet and enveloping warmth. She lays a blanket of warm Scandinavian minimalism over the atmosphere of the room. This lamp is ingeniously designed because the outer arch makes it possible to maintain the lower part of the lamp by very easily inserting the two arches inside the two holes provided for this purpose. It is important to me to design products that are both well drawn but intelligently designed, realistic and therefore, easy to put into production.",
        pageTitle: "MISTRAL modern storm lamp",
        ogDescription: "Mistral is a modern lamp inspired by the storm lantern. Suspended above a table, it instantly creates an atmosphere of discreet and enveloping warmth — Scandinavian minimalism meets intelligent design.",
        ogImage: "https://www.hugocharlet.com/pages/mistral/3.jpg",
        gallery: [],
        mainImage: { w: 2756, h: 1550 },
        models: [
            { src: "glb/mistral.glb", label: "3D Model lamp" }
        ],
        configurator: null,
        download: null
    },
    uni: {
        title: "UNI",
        subtitle: "Wooden armchair 2026",
        dimensions: "531 × 508 × 704 mm",
        description: "The Uni armchair draws its inspiration from a model called the University Chair. Its lines are clean, radical, and deliberately rigorous, while maintaining a cool elegance. Curves and organic shapes give way to facets oriented at 0, 45, or 90 degrees. I wanted to use beech for the frame, an extremely hard and smooth wood. This choice of material naturally led me to these striking and radical lines.",
        pageTitle: "UNI modern armchair in solid beech",
        ogDescription: "The Uni armchair draws its inspiration from the University Chair — clean, radical lines at 0, 45, or 90-degree facets in solid beech, combining cool elegance with striking geometry.",
        ogImage: "https://www.hugocharlet.com/pages/uni/6.jpg",
        gallery: [
            { w: 1080, h: 1080 },
            { w: 1080, h: 1080 },
            { w: 1080, h: 1080 },
            { w: 1080, h: 1080 },
            { w: 5133, h: 3410 },
            { w: 1080, h: 1080 }
        ],
        mainImage: { w: 2420, h: 1361 },
        models: [
            { src: "glb/uniarmchair.glb", label: "3D Model chair" }
        ],
        configurator: null,
        download: null
    }
};
