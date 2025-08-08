        document.addEventListener('DOMContentLoaded', () => {

            // --- Hero Slider Logic ---
            const slides = document.querySelectorAll('.hero-slider .slide');
            let currentSlide = 0;
            const slideInterval = 4000;

            function nextSlide() {
                if(slides.length > 0) {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }
            }
            setInterval(nextSlide, slideInterval);


            // --- State Dropdown Logic ---
            const stateSelect = document.getElementById('state-select');
            const monumentSections = document.querySelectorAll('.monument-section');

            stateSelect.addEventListener('change', () => {
                const selectedValue = stateSelect.value;
                const allCards = document.querySelectorAll('.monument-card');

                // Close any flipped cards before switching sections
                allCards.forEach(card => card.classList.remove('flipped'));

                // Hide all sections first
                monumentSections.forEach(section => {
                    section.classList.remove('active');
                });

                // If a state is selected, show the corresponding section
                if (selectedValue) {
                    const activeSection = document.getElementById(selectedValue);
                    if (activeSection) {
                        activeSection.classList.add('active');
                    }
                }
            });

            // --- Card Flip Logic ---
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const card = button.closest('.monument-card');
                    if (card) {
                        card.classList.add('flipped');
                    }
                });
            });

            document.querySelectorAll('.go-back-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const card = button.closest('.monument-card');
                    if (card) {
                        card.classList.remove('flipped');
                    }
                });
            });
        });
    