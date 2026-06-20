document.addEventListener('DOMContentLoaded', () => {

// ==================================================================
// IMPORTANT: PASTE YOUR GEMINI API KEY HERE
// Get your free key from Google AI Studio: https://aistudio.google.com/app/apikey
// ==================================================================
const GEMINI_API_KEY = 'YOUR_ACTIVE_AQ_KEY_HERE';
// ==================================================================

// Global model instance variable
let aiModel = null; 

// --- EMBEDDED DATABASE ---
const statesData = { "Andhra Pradesh": { image: "images/Andhra pradesh.jpg" }, "Arunachal Pradesh": { image: "images/Arunachal Pradeshs.jpg" }, "Assam": { image: "images/Assam.jpg" }, "Bihar": { image: "images/Bihar.webp" }, "Chhattisgarh": { image: "images/Chhattisgarh.jpg" }, "Goa": { image: "images/Goa.webp" }, "Gujarat": { image: "images/Gujarat.jpg" }, "Haryana": { image: "images/Haryana.jfif" }, "Himachal Pradesh": { image: "images/Himachal pradesh.webp" }, "Jharkhand": { image: "images/Jharkhand.webp" }, "Karnataka": { image: "images/Karnataka.jfif" }, "Kerala": { image: "images/Kerala.jpg" }, "Madhya Pradesh": { image: "images/Madhya_Pradesh.jpg" }, "Maharashtra": { image: "images/Maharashtra.jfif" }, "Manipur": { image: "images/Manipur.png" }, "Meghalaya": { image: "images/Meghalaya.webp" }, "Mizoram": { image: "images/Mizoram.webp" }, "Nagaland": { image: "images/Nagaland.webp" }, "Odisha": { image: "images/Odisha.jpg" }, "Punjab": { image: "images/Punjab.webp" }, "Rajasthan": { image: "images/Rajasthan.jpg" }, "Sikkim": { image: "images/Sikkim.webp" }, "Tamil Nadu": { image: "images/Tamil_Nadu.jpg" }, "Telangana": { image: "images/Telangana.jpg" }, "Tripura": { image: "images/Tripura.jpg" }, "Uttar Pradesh": { image: "images/Uttar_Pradesh.jpg" }, "Uttarakhand": { image: "images/uttara khand.jpg" }, "West Bengal": { image: "images/West_Bengal.jpg" }, "Andaman and Nicobar Islands": { image: "images/Andaman and Nicobar Islands.jpg" }, "Chandigarh": { image: "images/Chandigarh.jpg" }, "Dadra and Nagar Haveli and Daman and Diu": { image: "images/Dadra and Nagar Haveli and Daman and Diu.jpg" }, "Delhi": { image: "images/Delhi.jpg" }, "Jammu and Kashmir": { image: "images/JammuandKashmir.jpg" }, "Ladakh": { image: "images/Ladakh.jpg" }, "Lakshadweep": { image: "images/Lakshadweep.jpg" }, "Puducherry": { image: "images/Puducherry.jpg" } };

// --- PERFECTED MONUMENT DATA ---
const monumentData = {
    "Andhra Pradesh": [
        {
            name: "Veerabhadra Temple, Lepakshi",
            image: "images/lepakshi.jpg",
            points: ["Famed for its Vijayanagara architecture, exquisite sculptures, and a large Nandi bull statue. It features a mysterious 'hanging pillar.'"]
        },
        {
            name: "Tirumala Venkateswara Temple, Tirupati",
            image: "images/ttd.jpg",
            points: ["One of the world's most revered and wealthiest Hindu pilgrimage sites, dedicated to Lord Venkateswara."]
        }
    ]
};

const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');

const chakra = document.getElementById('ashoka-chakra-container');
if (chakra) {
    for (let i = 0; i < 12; i++) {
        const spoke = document.createElement('div');
        spoke.className = 'spoke';
        spoke.style.transform = `rotate(${i * 15}deg)`;
        chakra.appendChild(spoke);
    }
}

const isApiKeyAvailable = () => GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE' && GEMINI_API_KEY !== 'YOUR_ACTIVE_AQ_KEY_HERE' && GEMINI_API_KEY.length > 10;

const showLoader = (show, text = 'Unveiling India’s Treasures...') => {
    if(loaderText) loaderText.textContent = text;
    if(loader) loader.classList.toggle('hidden', !show);
};

const switchView = (viewId, restoreScroll = false) => {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');

        if (viewId === 'home-view') {
            const scrollPosition = sessionStorage.getItem('homeScrollPosition');
            if (scrollPosition) {
                setTimeout(() => {
                    window.scrollTo(0, parseInt(scrollPosition, 10));
                    sessionStorage.removeItem('homeScrollPosition');
                }, 100);
                return;
            }
        }

        if (restoreScroll) {
            const scrollPosition = sessionStorage.getItem('scrollPosition');
            if (scrollPosition) {
                setTimeout(() => {
                    window.scrollTo(0, parseInt(scrollPosition, 10));
                    sessionStorage.removeItem('scrollPosition');
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }
};

// HANDLES MONUMENT DETAILED INFRASTRUCTURE VIA OFFICIAL SDK
async function callGeminiForJsonAPI(prompt) {
    if (!isApiKeyAvailable() || !aiModel) throw new Error("API_KEY_MISSING");
    
    try {
        const result = await aiModel.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: "application/json" }
        });
        
        const text = result.response.text();
        return JSON.parse(text);
    } catch (error) {
        console.error("AI Generation Error:", error);
        if (error.message.includes("SAFETY")) {
            throw new Error("Response blocked due to safety settings.");
        }
        throw new Error("AI returned an invalid format or encountered an error. Cannot display details.");
    }
}

const createStateCard = (stateName, stateData) => {
    const card = document.createElement('div');
    card.className = 'state-card';
    card.dataset.stateName = stateName;
    card.innerHTML = `
        <img src="${stateData.image}" alt="${stateName}" class="card-img" loading="lazy">
        <div class="card-content">
            <h3>${stateName}</h3>
            <p>View Monuments</p>
        </div>`;
    return card;
};

const populateStateGrid = (filter = '') => {
    const container = document.getElementById('state-grid-container');
    if(!container) return;
    container.innerHTML = '';
    const lowerCaseFilter = filter.toLowerCase();
    const filteredStates = Object.keys(statesData).filter(stateName => stateName.toLowerCase().includes(lowerCaseFilter));
    if (filteredStates.length === 0) {
        container.innerHTML = `<p>No states found for "${filter}". Please check your spelling.</p>`;
        return;
    }
    filteredStates.forEach(stateName => container.appendChild(createStateCard(stateName, statesData[stateName])));
};

const populateStateDropdown = () => {
    const dropdown = document.getElementById('state-dropdown');
    if(!dropdown) return;
    Object.keys(statesData).sort().forEach(stateName => {
        const option = document.createElement('option');
        option.value = stateName;
        option.textContent = stateName;
        dropdown.appendChild(option);
    });
};

const displayMonumentsAsList = (stateName) => {
    const titleElement = document.getElementById('monument-list-title');
    if(titleElement) titleElement.textContent = `Monuments in ${stateName}`;
    const container = document.getElementById('monument-list-content');
    if(!container) return;
    container.innerHTML = '';
    switchView('monument-list-view', true);
    const monuments = monumentData[stateName];
    if (!monuments || monuments.length === 0) {
        container.innerHTML = `<div class="detail-section"><h3><i class="fas fa-info-circle"></i> No Curated List Available</h3><p>We don't have a curated list of top monuments for ${stateName} yet. But don't worry! You can use the YASU AI chat assistant (bottom-right) to ask about any monument in this state and get instant details.</p></div>`;
        return;
    }
    const listElement = document.createElement('ul');
    listElement.className = 'monument-list-container';
    monuments.forEach(monument => {
        const listItem = document.createElement('li');
        listItem.className = 'monument-list-item';
        listItem.dataset.monumentName = monument.name;
        listItem.dataset.stateName = stateName;
        listItem.dataset.imageUrl = monument.image;
        const pointsHtml = monument.points.map(point => `<li>${point}</li>`).join('');
        listItem.innerHTML = `
            <img src="${monument.image}" alt="${monument.name}" loading="lazy">
            <div class="monument-text-content">
                <h3>${monument.name}</h3>
                <ul class="facts-list">${pointsHtml}</ul>
            </div>`;
        listElement.appendChild(listItem);
    });
    container.appendChild(listElement);
};

const showMonumentDetail = async (monumentName, stateName, imageUrl) => {
    const titleElement = document.getElementById('monument-detail-title');
    const backBtn = document.getElementById('detail-back-button');
    if(titleElement) titleElement.textContent = monumentName;
    if(backBtn) backBtn.dataset.stateName = stateName;
    const container = document.getElementById('ai-response-container');
    if(!container) return;
    container.innerHTML = '';
    switchView('monument-detail-view');
    showLoader(true, `Generating a guide for ${monumentName}...`);

    const prompt = `
        You are MonumentalIndia's specialist AI. Generate a comprehensive travel guide for the monument "${monumentName}" in "${stateName}, India".
        Provide the output as a single, valid JSON object ONLY. Use the following exact keys: "history", "architectural_style", "year_built", "interesting_facts", "visitor_info", "map_query", "ticketing_guide", "nearby_facilities".

        INSTRUCTIONS FOR EACH KEY:
        1. "history": A detailed, historically accurate paragraph (at least 150 words) about the monument's origin and significance.
        2. "architectural_style": A concise string describing the main architectural style (e.g., "Mughal architecture", "Dravidian architecture").
        3. "year_built": A string representing the approximate year or period of construction (e.g., "1648 AD", "c. 10th century CE").
        4. "interesting_facts": An array of 3 to 5 fascinating, lesser-known string facts about the monument.
        5. "visitor_info": A JSON object with three string keys: "timings" (e.g., "Sunrise to Sunset, Closed Fridays"), "entry_fees" (e.g., "₹40 for Indians & SAARC/BIMSTEC, ₹600 for Foreigners. Free for children under 15."), and "best_time" (e.g., "October to March").
        6. "map_query": A simple, accurate string for a Google Maps search. Example: "Taj Mahal, Agra, Uttar Pradesh, India".
        7. "ticketing_guide": A single, concise string providing essential advice for booking tickets for this specific monument. Mention if online booking is mandatory or recommended, and any specific tips.
        8. "nearby_facilities": An array of 3 strings describing nearby accommodation options.
    `;

    try {
        const details = await callGeminiForJsonAPI(prompt);
        const factsHtml = '<ul>' + details.interesting_facts.map(fact => `<li>${fact}</li>`).join('') + '</ul>';
        const facilitiesHtml = '<ul>' + details.nearby_facilities.map(facility => `<li>${facility}</li>`).join('') + '</ul>';
        const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(details.map_query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

        container.innerHTML = `
            <div class="detail-header"><img src="${imageUrl || 'images/placeholder.png'}" alt="${monumentName}" onerror="this.onerror=null;this.src='images/placeholder.png';"></div>
            <div class="detail-section"><h3><i class="fas fa-landmark"></i> History & Significance</h3><p>${details.history}</p><p><strong>Architectural Style:</strong> ${details.architectural_style}</p><p><strong>Year Built:</strong> ${details.year_built}</p></div>
            <div class="detail-section"><h3><i class="fas fa-star"></i> Interesting Facts</h3>${factsHtml}</div>
            <div class="detail-section"><h3><i class="fas fa-info-circle"></i> Visitor Information</h3><ul><li><strong>Timings:</strong> ${details.visitor_info.timings}</li><li><strong>Entry Fees:</strong> ${details.visitor_info.entry_fees}</li><li><strong>Best Time to Visit:</strong> ${details.visitor_info.best_time}</li></ul></div>
            <div class="detail-section"><h3><i class="fas fa-hotel"></i> Nearby Facilities</h3>${facilitiesHtml}</div>
            <div class="detail-section"><h3><i class="fas fa-map-location-dot"></i> Live Map Location</h3><div class="map-container"><iframe src="${mapEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div>
            <div class="detail-section">
                <h3><i class="fas fa-ticket-alt"></i> Ticket Booking Guide</h3>
                <p>${details.ticketing_guide}</p>
                <div class="booking-options-container">
                    <div class="booking-guide-box">
                        <h4><i class="fas fa-crown"></i> Official ASI Portal (Recommended)</h4>
                        <ol class="booking-steps">
                            <li><span class="step-icon"><i class="fas fa-globe"></i></span><div class="step-text"><strong>Visit Website:</strong> Go to the official ASI ticketing website.</div></li>
                            <li><span class="step-icon"><i class="fas fa-map-marker-alt"></i></span><div class="step-text"><strong>Select Monument:</strong> Choose the city and the monument you wish to visit.</div></li>
                            <li><span class="step-icon"><i class="fas fa-calendar-alt"></i></span><div class="step-text"><strong>Choose Date & Time:</strong> Select your preferred date and time slot for the visit.</div></li>
                            <li><span class="step-icon"><i class="fas fa-users"></i></span><div class="step-text"><strong>Enter Details:</strong> Fill in visitor details and provide your required ID information.</div></li>
                            <li><span class="step-icon"><i class="fas fa-credit-card"></i></span><div class="step-text"><strong>Pay Securely:</strong> Complete the payment to receive your e-ticket.</div></li>
                        </ol>
                        <a href="https://asi.payumoney.com/" class="ticket-button" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Book on ASI Portal</a>
                    </div>
                </div>
            </div>`;

    } catch (error) {
        console.error("Error fetching monument details:", error);
        let errorMessage = `Sorry, our AI Specialist could not generate the details for ${monumentName}. Please try another monument.`;
        if (error.message.includes("API_KEY_MISSING")) {
            errorMessage = "The AI system is currently offline. We are working to restore it. Please check back later.";
        }
        container.innerHTML = `<div class="detail-section"><h3><i class="fas fa-exclamation-triangle"></i> Error</h3><p>${errorMessage}</p></div>`;
    } finally {
        showLoader(false);
    }
};

const chatContainer = document.getElementById('ai-chat-container');
const chatMessages = document.getElementById('chat-messages');

const appendChatMessage = (text, sender) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `<div class="message-bubble">${text.replace(/\n/g, '<br>')}</div>`;
    if(chatMessages) {
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    return messageDiv;
};

// HANDLES INTERACTIVE CHAT LAYOUT VIA STRATEGIC WRAPPED SDK CONTEXT
const getAIChatResponse = async (userQuery) => {
    if (!isApiKeyAvailable() || !aiModel) {
        appendChatMessage("The AI assistant is currently unavailable. Please try again later.", 'ai');
        return;
    }
    const thinkingBubble = appendChatMessage('YASU AI is thinking...', 'ai');
    thinkingBubble.querySelector('.message-bubble').classList.add('thinking');
    const prompt = `You are YASU AI, a helpful and friendly expert on Indian monuments. The user asked: "${userQuery}". Answer concisely and helpfully.`;
    
    try {
        // FIXED payload packaging to secure explicit content array parameters
        const result = await aiModel.generateContent({
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });
        const aiText = result.response.text();
        thinkingBubble.remove();
        appendChatMessage(aiText, 'ai');
    } catch (error) {
        console.error("Error fetching chat response:", error);
        thinkingBubble.remove();
        appendChatMessage(`⚠️ Error: ${error.message}`, 'ai');
    }
};

const setupEventListeners = () => {
    const searchInput = document.getElementById('main-search');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    if(searchInput && suggestionsContainer) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            suggestionsContainer.innerHTML = '';
            if (query.length < 2) {
                suggestionsContainer.style.display = 'none';
                return;
            }
            let suggestions = [];
            for (const state in statesData) {
                if (state.toLowerCase().includes(query)) {
                    suggestions.push({ name: state, type: 'State' });
                }
            }
            for (const state in monumentData) {
                for (const monument of monumentData[state]) {
                    if (monument.name.toLowerCase().includes(query)) {
                        suggestions.push({ ...monument, state: state, type: 'Monument' });
                    }
                }
            }
            const limitedSuggestions = suggestions.slice(0, 10);
            if (limitedSuggestions.length > 0) {
                limitedSuggestions.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.innerHTML = `${item.name} <span class="suggestion-type">${item.type}</span>`;
                    div.addEventListener('click', () => {
                        searchInput.value = '';
                        suggestionsContainer.style.display = 'none';
                        if (item.type === 'State') {
                            displayMonumentsAsList(item.name);
                        } else {
                            sessionStorage.setItem('scrollPosition', window.scrollY);
                            showMonumentDetail(item.name, item.state, item.image);
                        }
                    });
                    suggestionsContainer.appendChild(div);
                });
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                suggestionsContainer.style.display = 'none';
            }
        });
    }

    const performSearch = () => {
        if(!searchInput) return;
        const query = searchInput.value.trim();
        if (!query) {
            populateStateGrid();
            return;
        }
        switchView('home-view');
        populateStateGrid(query);
    };

    const searchBtn = document.getElementById('search-btn');
    if(searchBtn) searchBtn.addEventListener('click', performSearch);
    if(searchInput) searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    
    if(searchInput && clearSearchBtn) {
        searchInput.addEventListener('input', () => { clearSearchBtn.style.display = searchInput.value ? 'block' : 'none'; });
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
            populateStateGrid();
        });
    }

    const homeLink = document.getElementById('home-link');
    if(homeLink) homeLink.addEventListener('click', (e) => { e.preventDefault(); switchView('home-view'); });
    
    const stateDropdown = document.getElementById('state-dropdown');
    if(stateDropdown) stateDropdown.addEventListener('change', (e) => {
        if (e.target.value) displayMonumentsAsList(e.target.value);
    });

    const gridContainer = document.getElementById('state-grid-container');
    if(gridContainer) {
        gridContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.state-card');
            if (card) {
                sessionStorage.setItem('homeScrollPosition', window.scrollY); 
                displayMonumentsAsList(card.dataset.stateName);
            }
        });
    }

    const listContent = document.getElementById('monument-list-content');
    if(listContent) {
        listContent.addEventListener('click', (e) => {
            const item = e.target.closest('.monument-list-item');
            if (item) {
                sessionStorage.setItem('scrollPosition', window.scrollY);
                showMonumentDetail(item.dataset.monumentName, item.dataset.stateName, item.dataset.imageUrl);
            }
        });
    }

    document.querySelectorAll('.nav-btn, .footer-btn, .back-button, .drawer-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = button.dataset.target;
            if (targetView) {
                switchView(targetView);
                if (button.classList.contains('drawer-btn')) {
                    closeDrawer();
                }
            }
        });
    });

    const detailBackBtn = document.getElementById('detail-back-button');
    if(detailBackBtn) detailBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        displayMonumentsAsList(e.target.dataset.stateName);
    });

    const aiChatBtn = document.getElementById('ai-chat-button');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatInputForm = document.getElementById('chat-input-form');
    
    if(aiChatBtn && chatContainer) aiChatBtn.addEventListener('click', () => chatContainer.classList.toggle('visible'));
    if(closeChatBtn && chatContainer) closeChatBtn.addEventListener('click', () => chatContainer.classList.remove('visible'));
    if(chatInputForm) {
        chatInputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            if(input) {
                const userQuery = input.value.trim();
                if (userQuery) {
                    appendChatMessage(userQuery, 'user');
                    input.value = '';
                    getAIChatResponse(userQuery);
                }
            }
        });
    }
    
    const menuToggle = document.getElementById('menu-toggle');
    const drawerMenu = document.getElementById('drawer-menu');
    const drawerOverlay = document.getElementById('drawer-overlay');
    
    const openDrawer = () => {
        if(drawerMenu) drawerMenu.classList.add('open');
        if(drawerOverlay) drawerOverlay.style.display = 'block';
    };
    const closeDrawer = () => {
        if(drawerMenu) drawerMenu.classList.remove('open');
        if(drawerOverlay) drawerOverlay.style.display = 'none';
    };
    
    if(menuToggle) menuToggle.addEventListener('click', openDrawer);
    if(drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
};

const initApp = () => {
    populateStateGrid();
    populateStateDropdown();
    setupEventListeners();
    const loaderElem = document.getElementById('api-loader');
    if(loaderElem) loaderElem.classList.add('hidden');
};

// ASYNCHRONOUS TARGET HANDSHAKE VIA DYNAMIC CDN MODULE IMPORTATION
const validateApiKeyAndStart = async () => {
    const apiLoaderText = document.getElementById('api-loader-text');
    if (!isApiKeyAvailable()) {
        if(apiLoaderText) apiLoaderText.textContent = 'AI Configuration Error. Site is offline.';
        console.error("API Key is missing. App halted.");
        return;
    }

    try {
        // Loads the verified module context structure dynamically
        const { GoogleGenerativeAI } = await import('https://esm.run/@google/generative-ai');
        
        // Connect and maps standard routing parameters to Gemini 3.5 Flash
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        aiModel = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

        initApp();
    } catch (error) {
        if(apiLoaderText) {
            apiLoaderText.innerHTML = `Could not connect to AI Specialist.<br><br><span style="color: #d32f2f; font-weight: bold; font-size: 16px; background: #ffebee; padding: 8px 12px; border-radius: 4px; display: inline-block;">Reason: ${error.message}</span>`;
        }
        console.error("API SDK Initialization failed:", error);
    }
};

validateApiKeyAndStart();

});
