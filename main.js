const { createApp, ref, onMounted, onUnmounted } = Vue;

createApp({
  setup() {
    // Reactive state variables
    const title = ref("BELVEDERE");
    const scrollY = ref(0);
    const showModelViewer = ref(false);
    const currentModel = ref("");
    const isLoading = ref(true);
    const images = ref([]);
    const opacityValue = ref(0);
    const mainImageHeight = ref(0);
    const screenWidth = ref(window.innerWidth);
    const pageUrl = `pages/${title.value.toLowerCase()}/`;

    // Methods
    const generateMediaUrls = () => {
      return Array.from({ length: 17 }, (_, i) => `${pageUrl}${i + 1}.jpg`);
    };
    console.log(generateMediaUrls());

    const preloadImages = async () => {
      const mediaUrls = generateMediaUrls();
      try {
        const loadedImages = await Promise.all(
          mediaUrls.map(async (url) => {
            try {
              const response = await fetch(url);
              if (response.ok) {
                return {
                  src: url,
                  alt: `Picture of Belvedere Chairs, design by Hugo Charlet`,
                };
              }
              return null;
            } catch {
              return null;
            }
          })
        );

        images.value = loadedImages.filter((img) => img !== null);
        isLoading.value = false;
      } catch (error) {
        console.error("Image preloading error:", error);
        isLoading.value = false;
      }
    };

    const handleScroll = () => {
      scrollY.value = window.scrollY;
      const viewportHeight = window.innerHeight;
      const opacityStartThreshold = mainImageHeight.value * 0.35;
      const opacityFullThreshold = mainImageHeight.value * 0.65;

      // Calcul dynamique de l'opacité
      if (scrollY.value > opacityStartThreshold) {
        opacityValue.value = Math.min(
          1,
          (scrollY.value - opacityStartThreshold) /
            (opacityFullThreshold - opacityStartThreshold)
        );
      } else {
        opacityValue.value = 0;
      }
    };

    const openModelViewer = (modelSrc) => {
      currentModel.value = modelSrc;
      showModelViewer.value = true;
    };

    const closeModelViewer = () => {
      showModelViewer.value = false;
      currentModel.value = "";
    };

    const addMetaTags = () => {
      const metaTags = [
        {
          property: "og:url",
          content: pageUrl,
        },
        {
          property: "og:type",
          content: "website",
        },
      ];

      metaTags.forEach((tag) => {
        const metaTag = document.createElement("meta");
        metaTag.setAttribute("property", tag.property);
        metaTag.setAttribute("content", tag.content);
        document.head.appendChild(metaTag);
      });
    };

    // Function to update screen width on window resize

    const updateScreenWidth = () => {
      screenWidth.value = window.innerWidth;
    };
    // Lifecycle hooks
    onMounted(() => {
      // Initialize AOS
      AOS.init();

      // Preload images
      preloadImages();

      // Add meta tags
      addMetaTags();
      // Lifecycle hooks
      const mainImage = document.querySelector(".imagemain");
      if (mainImage) {
        mainImage.addEventListener("load", () => {
          mainImageHeight.value = mainImage.offsetHeight;
        });
      }
      // Ajouter un écouteur d'événements pour surveiller le défilement
      window.addEventListener("scroll", () => {
        scrollY.value = window.scrollY;
        handleScroll();
      });
      window.addEventListener("resize", updateScreenWidth);

      console.log(JSON.stringify(images.value));
    });

    onUnmounted(() => {
      // Remove scroll listener
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenWidth);
    });

    return {
      // Static data
      title,
      subtitle: "Outdoor chairs 2024",
      dimension: "Dimension: 525 x 475 x 860 cm",
      description:
        "The belvedere chair is a simple chair with a highly original structure that is unusual for a chair: the back legs rise up to the level of the high back. This creates an original detail that gives the chair a recognizable identity.",
      mainImage: "pages/belvedere/main.jpg",
      navItems: [
        {
          href: "details",
          src: "arrowback.svg",
          alt: "backarrow",
        },
      ],
      models: [
        {
          id: 1,
          src: "glb/belvederechair.glb",
          label: "3D Model chair",
          alt: "Open Model Viewer",
        },
        {
          id: 2,
          src: "glb/belvederearmchair.glb",
          label: "3D Model armchair",
          alt: "Open Model Viewer",
        },
      ],

      // Reactive state
      opacityValue,
      showModelViewer,
      currentModel,
      isLoading,
      images,
      screenWidth,

      // Methods
      openModelViewer,
      closeModelViewer,
    };
  },
}).mount("#app");
