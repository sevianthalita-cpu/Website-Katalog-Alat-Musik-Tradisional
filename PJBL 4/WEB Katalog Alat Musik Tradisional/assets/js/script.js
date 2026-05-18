document.addEventListener("DOMContentLoaded", function () {
    
    // --- DATA MODEL FOR HERO INTERACTIVE SLIDER ---
    const instrumentData = [
        {
            id: 1,
            name: "Kendang",
            stars: 4,
            centerImg: "assets/images/kendang-center.png", // Alternative fallback asset path
            thumbImg: "assets/images/kendang-thumb.png"
        },
        {
            id: 2,
            name: "Sape'",
            stars: 5,
            centerImg: "assets/images/sape-center.png",
            thumbImg: "assets/images/sape-thumb.png"
        },
        {
            id: 3,
            name: "Angklung",
            stars: 5,
            centerImg: "assets/images/angklung-center.png",
            thumbImg: "assets/images/angklung-thumb.png"
        },
        {
            id: 4,
            name: "Gamelan",
            stars: 5,
            centerImg: "assets/images/gamelan-center.png",
            thumbImg: "assets/images/gamelan-thumb.png"
        },
        {
            id: 5,
            name: "Sasando",
            stars: 4,
            centerImg: "assets/images/sasando-center.png",
            thumbImg: "assets/images/sasando-thumb.png"
        }
    ];

    // Control States (Tracks indexes currently shown on the right container)
    let currentStackIndexes = [0, 1, 2]; 

    const heroPrevBtn = document.getElementById("hero-prev");
    const heroNextBtn = document.getElementById("hero-next");
    const stackContainer = document.getElementById("dynamic-stack-container");
    const mainShowcaseImg = document.getElementById("main-showcase-img");

    /**
     * Renders the glassmorphic card container smoothly using CSS transform hooks
     */
    function renderInstrumentStack(direction) {
        // Apply sliding animation hooks to old items
        const currentCards = stackContainer.querySelectorAll('.mini-instrument-card');
        currentCards.forEach(card => {
            card.classList.add(direction === 'next' ? 'stack-out' : 'stack-in');
        });

        // Rebuild elements inside the wrapper container after execution fade finishes
        setTimeout(() => {
            stackContainer.innerHTML = "";
            
            currentStackIndexes.forEach((dataIndex, idx) => {
                const item = instrumentData[dataIndex];
                
                // Build Stars Element UI String
                let starsHTML = "";
                for (let s = 0; s < 5; s++) {
                    starsHTML += s < item.stars ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>';
                }

                const cardHTML = `
                    <div class="mini-instrument-card ${direction === 'next' ? 'stack-in' : 'stack-out'}" style="transition-delay: ${idx * 60}ms">
                        <div>
                            <h3 class="mini-card-title">${item.name}</h3>
                            <div class="star-rating-row">${starsHTML}</div>
                        </div>
                        <img src="${item.thumbImg}" alt="${item.name}" class="mini-card-thumb">
                    </div>
                `;
                stackContainer.insertAdjacentHTML('beforeend', cardHTML);
            });

            // Trigger reflow step for transition execution context
            setTimeout(() => {
                const newCards = stackContainer.querySelectorAll('.mini-instrument-card');
                newCards.forEach(card => {
                    card.classList.remove('stack-in', 'stack-out');
                });
            }, 20);

            // Synchronize and render Center Showcase Graphic based on first active item
            const leadItem = instrumentData[currentStackIndexes[0]];
            mainShowcaseImg.classList.remove('animate-fade');
            void mainShowcaseImg.offsetWidth; // Force CSS Dom Reflow Trick
            mainShowcaseImg.src = leadItem.centerImg;
            mainShowcaseImg.classList.add('animate-fade');

        }, 250);
    }

    /**
     * Shifts indexes forward
     */
    function shiftStackNext() {
        currentStackIndexes = currentStackIndexes.map(idx => (idx + 1) % instrumentData.length);
        renderInstrumentStack('next');
    }

    /**
     * Shifts indexes backward
     */
    function shiftStackPrev() {
        currentStackIndexes = currentStackIndexes.map(idx => (idx - 1 + instrumentData.length) % instrumentData.length);
        renderInstrumentStack('prev');
    }

    // Attach Action Listeners
    heroNextBtn.addEventListener("click", shiftStackNext);
    heroPrevBtn.addEventListener("click", shiftStackPrev);

    // Initial Render Boot execution
    renderInstrumentStack('next');


    // --- SECONDARY CONTENT CAROUSEL CONTROLLER ---
    const secondaryCarouselEl = document.getElementById('secondaryInstrumentCarousel');
    const customDots = document.querySelectorAll('.carousel-indicators-custom .dot');

    if (secondaryCarouselEl) {
        // Bootstrap instances API context initialization
        const bsCarousel = new bootstrap.Carousel(secondaryCarouselEl, {
            interval: 5000,
            wrap: true
        });

        // Multi-sync dots pagination tracking loop
        secondaryCarouselEl.addEventListener('slide.bs.carousel', function (event) {
            customDots.forEach((dot, index) => {
                if (index === event.to) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });

        // Enable click functionality on custom dots
        customDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                bsCarousel.to(index);
            });
        });
    }
});