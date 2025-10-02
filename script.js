document.addEventListener('DOMContentLoaded', () => {

// ==================================================================
// IMPORTANT: PASTE YOUR GEMINI API KEY HERE
// Get your free key from Google AI Studio: https://aistudio.google.com/app/apikey
// ==================================================================
const GEMINI_API_KEY = 'AIzaSyAeqHG9Dt25OXIzc8eoIsGSRGK0XvQ4cvU';
// ==================================================================

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// --- EMBEDDED DATABASE ---
const statesData = { "Andhra Pradesh": { image: "images/Andhra pradesh.jpg" }, "Arunachal Pradesh": { image: "images/Arunachal Pradeshs.jpg" }, "Assam": { image: "images/Assam.jpg" }, "Bihar": { image: "images/Bihar.webp" }, "Chhattisgarh": { image: "images/Chhattisgarh.webp" }, "Goa": { image: "images/Goa.webp" }, "Gujarat": { image: "images/Gujarat.jpg" }, "Haryana": { image: "images/Haryana.jfif" }, "Himachal Pradesh": { image: "images/Himachal pradesh.webp" }, "Jharkhand": { image: "images/Jharkhand.webp" }, "Karnataka": { image: "images/Karnataka.jfif" }, "Kerala": { image: "images/Kerala.jpg" }, "Madhya Pradesh": { image: "images/Madhya Pradesh.jpg" }, "Maharashtra": { image: "images/Maharashtra.jfif" }, "Manipur": { image: "images/Manipur.png" }, "Meghalaya": { image: "images/Meghalaya.webp" }, "Mizoram": { image: "images/Mizoram.webp" }, "Nagaland": { image: "images/Nagaland.webp" }, "Odisha": { image: "images/Odisha.jpg" }, "Punjab": { image: "images/Punjab.webp" }, "Rajasthan": { image: "images/Rajasthan.jpg" }, "Sikkim": { image: "images/Sikkim.webp" }, "Tamil Nadu": { image: "images/Tamil Nadu.webp" }, "Telangana": { image: "images/Telangana.jpg" }, "Tripura": { image: "images/Tripura.jpg" }, "Uttar Pradesh": { image: "images/Uttar Pradesh.jpg" }, "Uttarakhand": { image: "images/uttara khand.jpg" }, "West Bengal": { image: "images/West Bengal.jpg" }, "Andaman and Nicobar Islands": { image: "images/Andaman and Nicobar Islands.jpg" }, "Chandigarh": { image: "images/Chandigarh.jpg" }, "Dadra and Nagar Haveli and Daman and Diu": { image: "images/Dadra and Nagar Haveli and Daman and Diu.jpg" }, "Delhi": { image: "images/Delhi.jpg" }, "Jammu and Kashmir": { image: "images/Jammu and Kashmir.jpg" }, "Ladakh": { image: "images/Ladakh.jpg" }, "Lakshadweep": { image: "images/Lakshadweep.jpg" }, "Puducherry": { image: "images/Puducherry.jpg" } };

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
        },
        {
            name: "Undavalli Caves, Tadepalle",
            image: "images/undavalli_caves.jpeg",
            points: ["Monolithic rock-cut caves from the 4th-5th centuries, featuring a massive reclining statue of Lord Vishnu."]
        },
        {
            name: "Gandikota Fort, Gandikota",
            image: "images/gandikota.jpg",
            points: ["Known as the 'Grand Canyon of India,' this majestic fort is perched on the banks of the Penna River gorge."]
        },
        {
            name: "Belum Caves, Kolimigundla",
            image: "images/belum_caves.jpeg",
            points: ["The second-longest cave system on the Indian subcontinent, known for its stalactite and stalagmite formations."]
        },
        {
            name: "Srisailam Mallikarjuna Temple, Srisailam",
            image: "images/srisailam.jpg",
            points: ["A revered Hindu temple dedicated to Lord Shiva, one of the twelve Jyotirlingas in India."]
        },
        {
            name: "Kanaka Durga Temple, Vijayawada",
            image: "images/kanakadurgatemple.jpg",
            points: ["A famous shrine dedicated to the goddess Durga, located on the Indrakeeladri hill overlooking the Krishna River."]
        },
        {
            name: "Amaravati Stupa, Amaravati",
            image: "images/Amaravati Stupa.jpg",
            points: ["The site of a ruined great Buddhist stupa, known for its intricately carved marble panels depicting the life of Buddha."]
        },
        {
            name: "Nagarjunakonda, Macherla",
            image: "images/Nagarjunakonda.jpg",
            points: ["An island in Nagarjuna Sagar Lake, hosting relocated Buddhist ruins, stupas, and a museum."]
        },
        {
            name: "Chandragiri Fort & Palace, Chandragiri",
            image: "images/chandragirifort.jpg",
            points: ["The 11th-century fort that served as the last capital of the Vijayanagara Empire, featuring the Raja Mahal and Rani Mahal palaces."]
        },
        {
            name: "Kondapalli Fort, Kondapalli",
            image: "images/kondapalli fort.jpg",
            points: ["A 14th-century fort near Vijayawada, offering panoramic views and famous for its traditional wooden toys."]
        },
        {
            name: "Simhachalam Temple, Visakhapatnam",
            image: "images/simhachalam_temple.jpeg",
            points: ["A Hindu temple dedicated to Varaha Narasimha, an avatar of Vishnu. The deity is perpetually covered in sandalwood paste."]
        },
        {
            name: "Prakasam Barrage, Vijayawada",
            image: "images/prakasam_barrage.jpeg",
            points: ["An iconic barrage stretching across the Krishna River, a vital irrigation project and a city landmark."]
        },
        {
            name: "Bojjannakonda & Lingalakonda, Sankaram",
            image: "images/bojjannakonda_lingalakonda.jpg",
            points: ["Twin Buddhist heritage sites with numerous monolithic stupas, rock-cut caves, and chaityas from the 4th century."]
        },
        {
            name: "Adoni Fort, Adoni",
            image: "images/adoni_fort.jpg",
            points: ["A massive hill fort with extensive ruins, once a stronghold of the Vijayanagara and Bijapur Sultanates."]
        },
        {
            name: "Gooty Fort, Gooty",
            image: "images/gooty_fort.jpg",
            points: ["A shell-shaped hill fort with 15 smaller forts inside, showcasing a blend of Hindu and Islamic architecture."]
        },
        {
            name: "Salihundam, Gara",
            image: "images/salihundam.jpg",
            points: ["An ancient Buddhist settlement with stupas, viharas, and relics dating back to the 2nd century BCE."]
        },
        {
            name: "Penukonda Fort, Penukonda",
            image: "images/penukonda_fort.jpg",
            points: ["An ancient hill fort that served as a secondary capital for the Vijayanagara Empire."]
        },
        {
            name: "Kalyani Dam, Tirupati",
            image: "images/kalyani_dam.jpg",
            points: ["A significant dam and reservoir built in 1977, serving as a key water source for Tirupati."]
        },
        {
            name: "Ahobilam Temple, Allagadda",
            image: "images/ahobilam_temple.jpg",
            points: ["A major pilgrimage center dedicated to Lord Narasimha, with nine temples spread across the Nallamala Hills."]
        },
        {
            name: "Thotlakonda Buddhist Complex, Visakhapatnam",
            image: "images/thotlakonda_buddhist_complex.jpg",
            points: ["A ruined Buddhist monastery complex on a hilltop, offering stunning sea views."]
        },
        {
            name: "Udayagiri Fort, Udayagiri",
            image: "images/udayagiri_fort.jpg",
            points: ["A historic hill fort known for its extensive fortifications, mosques, and tombs from various dynasties."]
        },
        {
            name: "Guntupalli Caves, Kamavarapukota",
            image: "images/guntupalli_caves.jpg",
            points: ["A group of rock-cut Buddhist temples and viharas dating back to the 2nd century BCE, known as the 'Andhra Ajanta.'"]
        },
        {
            name: "Draksharama Bhimeswara Swamy Temple, Draksharama",
            image: "images/draksharama_temple.jpg",
            points: ["One of the five Pancharama Kshetras, a sacred Shiva temple with unique architecture from the 9th century."]
        },
        {
            name: "Mangalagiri Panakala Narasimha Swamy Temple, Mangalagiri",
            image: "images/mangalagiri_temple.jpg",
            points: ["A unique temple where the deity is offered jaggery water (panakam) as a ritual."]
        },
        {
            name: "Srikalahasti Temple, Srikalahasti",
            image: "images/srikalahasti_temple.jpg",
            points: ["A famous Shiva temple representing 'Vayu' (air) among the Pancha Bhoota Sthalams."]
        },
        {
            name: "Kotilingeswara Swamy Temple, Rajahmundry",
            image: "images/kotilingeswara_swamy_temple.jpg",
            points: ["An ancient temple on the banks of the Godavari River, a prominent pilgrimage site."]
        },
        {
            name: "Pushpagiri Temple Complex, Pushpagiri",
            image: "images/pushpagiri_temple_complex.jpg",
            points: ["Known as 'Dakshina Kashi', this is a cluster of ancient temples dedicated to various Hindu deities."]
        },
        {
            name: "Rajahmundry Godavari Bridge, Rajahmundry",
            image: "images/rajahmundry_godavari_bridge.jpg",
            points: ["An iconic truss bridge, one of the longest of its kind, spanning the Godavari River."]
        },
        {
            name: "Victoria Jubilee Museum, Vijayawada",
            image: "images/victoria_jubilee_museum.jpg",
            points: ["An archaeological museum housed in a heritage building, displaying sculptures, paintings, and prehistoric artifacts."]
        },
        {
            name: "Bhavanarayana Swamy Temple, Bapatla",
            image: "images/bhavanarayana_swamy_temple.jpg",
            points: ["An ancient temple dedicated to Lord Vishnu, built by Chola kings."]
        },
        {
            name: "Moghalrajpuram Caves, Vijayawada",
            image: "images/moghalrajpuram_caves.jpg",
            points: ["A group of five rock-cut cave temples from the 5th century, dedicated to Hindu deities."]
        },
        {
            name: "Dutch Cemetery, Bheemunipatnam",
            image: "images/dutch_cemetery_bheemunipatnam.jpg",
            points: ["A colonial-era cemetery with tombs of Dutch and British settlers, shaped like pyramids."]
        },
        {
            name: "Golkonda Vyapari Jain Temple, Srisailam",
            image: "images/golkonda_vyapari_jain_temple.jpg",
            points: ["An ancient Jain temple located within the Srisailam forest area, showcasing historical religious diversity."]
        },
        {
            name: "Bavikonda Buddhist Complex, Visakhapatnam",
            image: "images/bavikonda_buddhist_complex.jpg",
            points: ["An extensive Buddhist ruin site with stupas and viharas, meaning 'hill of wells.'"]
        },
        {
            name: "Sri Kurmam Temple, Srikurmam",
            image: "images/sri_kurmam_temple.jpg",
            points: ["The only temple in India dedicated to the Kurma (tortoise) avatar of Lord Vishnu."]
        },
        {
            name: "Rayadurgam Fort, Rayadurgam",
            image: "images/rayadurgam_fort.jpg",
            points: ["A historic fort built on a granite hill, containing several temples and offering panoramic views."]
        },
        {
            name: "Koundinya Wildlife Sanctuary Watchtowers, Palamaner",
            image: "images/koundinya_watchtowers.jpg",
            points: ["Watchtowers within the sanctuary that have historical significance and offer views of the landscape."]
        },
        {
            name: "Siddavatam Fort, Siddavatam",
            image: "images/siddavatam_fort.jpg",
            points: ["A 14th-century fort on the banks of the Penna River, known for its impressive gateways."]
        },
        {
            name: "Ramatheertham, Nellimarla",
            image: "images/ramatheertham.jpg",
            points: ["An ancient pilgrimage site with a Rama temple and Jain/Buddhist ruins on a hill."]
        },
        {
            name: "Kondaveedu Fort, Kondaveedu",
            image: "images/kondaveedu_fort.jpg",
            points: ["A formidable hill fortress that was the capital of the Reddy dynasty in the 14th century."]
        },
        {
            name: "Vinayaka Temple, Kanipakam",
            image: "images/vinayaka_temple_kanipakam.jpg",
            points: ["A famous Ganesha temple where the idol is believed to grow in size over time."]
        },
        {
            name: "Sri Mukhalingeswara Temple, Mukhalingam",
            image: "images/sri_mukhalingeswara_temple.jpg",
            points: ["An 8th-century temple complex dedicated to Lord Shiva, showcasing Kalinga architecture."]
        },
        {
            name: "Yaganti Temple, Banaganapalle",
            image: "images/yaganti_temple.jpg",
            points: ["Famous for its growing Nandi statue and natural cave systems with perennial water flow."]
        },
        {
            name: "Chebrolu Temple Complex, Chebrolu",
            image: "images/chebrolu_temple_complex.jpg",
            points: ["A historic village with over 100 temples, including a rare Chaturmukha (four-faced) Brahma temple."]
        },
        {
            name: "Kotappakonda Trikoteswara Swamy Temple, Narasaraopet",
            image: "images/kotappakonda_temple.jpg",
            points: ["A major Shiva temple located on a three-peaked hill, famous for its grand Mahashivaratri festival."]
        },
        {
            name: "Bhairavakona Caves, Ambavaram Kothapalli",
            image: "images/bhairavakona_caves.jpg",
            points: ["An 8th-century rock-cut cave complex dedicated to Lord Shiva, with eight temples carved into a single hill."]
        },
        {
            name: "Annavaram Satyanarayana Swamy Temple, Annavaram",
            image: "images/annavaram_temple.jpg",
            points: ["A prominent pilgrimage site dedicated to Lord Satyanarayana, located on the Ratnagiri hill."]
        },
        {
            name: "Dowleswaram Barrage, Rajahmundry",
            image: "images/dowleswaram_barrage.jpg",
            points: ["An iconic barrage built on the Godavari River by Sir Arthur Cotton in the 19th century, transforming the region's agriculture."]
        },
        {
            name: "Hope Island Lighthouse, Kakinada Bay",
            image: "images/hope_island_lighthouse.jpg",
            points: ["A historic lighthouse on a tadpole-shaped island, guiding ships into Kakinada port."]
        }
    ],
    "Arunachal Pradesh": [
        {
            name: "Tawang Monastery (Galden Namgyal Lhatse), Tawang",
            image: "images/tawang_monastery.jpg",
            points: ["The largest monastery in India and second-largest in the world, a stunning example of Tibetan Buddhist architecture."]
        },
        {
            name: "Ita Fort, Itanagar",
            image: "images/ita_fort.jpg",
            points: ["A 14th-15th century fort made of bricks, from which the state capital Itanagar derives its name."]
        },
        {
            name: "Golden Pagoda (Kongmu Kham), Namsai",
            image: "images/golden_pagoda_namsai.jpg",
            points: ["A magnificent Burmese-style Buddhist temple with a gleaming golden roof, inaugurated in 2010."]
        },
        {
            name: "Malinithan Temple Ruins, Likabali",
            image: "images/malinithan_temple_ruins.jpg",
            points: ["The ruins of a 14th-15th century Hindu temple dedicated to the goddess Durga, with intricate granite carvings."]
        },
        {
            name: "Bhismaknagar Fort, Roing",
            image: "images/bhismaknagar_fort.jpg",
            points: ["An important archaeological site with fortifications from the 8th century, believed to be a capital of the Chutia Kingdom."]
        },
        {
            name: "Jaswant Garh War Memorial, Tawang",
            image: "images/jaswant_garh_war_memorial.jpg",
            points: ["A memorial dedicated to Rifleman Jaswant Singh Rawat, a hero of the 1962 Sino-Indian War."]
        },
        {
            name: "Bomdila Monastery (Gentse Gaden Rabgyel Lling), Bomdila",
            image: "images/bomdila_monastery.jpg",
            points: ["A major Buddhist monastery and spiritual center, offering panoramic views of the Himalayas."]
        },
        {
            name: "Urgelling Monastery, Tawang",
            image: "images/urgelling_monastery.jpg",
            points: ["The birthplace of the 6th Dalai Lama, Tsangyang Gyatso; a significant and serene religious site."]
        },
        {
            name: "Tawang War Memorial, Tawang",
            image: "images/tawang_war_memorial.jpg",
            points: ["A 40-foot high stupa-like structure dedicated to the martyrs of the 1962 Sino-Indian War."]
        },
        {
            name: "Thembang Fortified Village, Thembang",
            image: "images/thembang_fortified_village.jpg",
            points: ["A fortified village inhabited by the Monpa tribe, proposed as a UNESCO World Heritage Site for its unique culture and architecture."]
        },
        {
            name: "Gorsam Chorten, Zemithang",
            image: "images/gorsam_chorten.jpg",
            points: ["One of the largest stupas in the region, modeled after the Boudhanath Stupa in Nepal."]
        },
        {
            name: "Sela Pass Gateway, Sela Pass",
            image: "images/sela_pass_gateway.jpg",
            points: ["An iconic gateway at the high-altitude Sela Pass, marking the entrance to Tawang district."]
        },
        {
            name: "Rukmini Nagar Ruins, Roing",
            image: "images/rukmini_nagar_ruins.jpg",
            points: ["Believed to be the palace of Rukmini, Lord Krishna's consort, these are ancient brick structure ruins."]
        },
        {
            name: "Dirang Dzong, Dirang",
            image: "images/dirang_dzong.jpg",
            points: ["A historic fort and settlement area with stone houses and impressive fortifications, representing Monpa architecture."]
        },
        {
            name: "Manegang Kamgoi Tou-ne, Pasighat",
            image: "images/manegang_kamgoi_tou-ne.jpg",
            points: ["A cenotaph in memory of the Adi warriors who fought against the British in 1911."]
        },
        {
            name: "Namsai Monastery, Namsai",
            image: "images/namsai_monastery.jpg",
            points: ["A significant Theravada Buddhist monastery in the Namsai region, showcasing traditional architecture."]
        },
        {
            name: "Chagzam Bridge, Chung",
            image: "images/chagzam_bridge.jpg",
            points: ["An ancient iron chain suspension bridge built in the 15th century by the Tibetan saint Thangtong Gyalpo."]
        },
        {
            name: "Jawaharlal Nehru Museum, Itanagar",
            image: "images/jawaharlal_nehru_museum_itanagar.jpg",
            points: ["Housed in a heritage-style building, it preserves the rich cultural heritage and tribal artifacts of the state."]
        },
        {
            name: "Ganga Lake (Gyakar Sinyi) Structures, Itanagar",
            image: "images/ganga_lake_structures.jpg",
            points: ["The area around the sacred lake has traditional wooden structures and monoliths of cultural importance."]
        },
        {
            name: "Pangin Old Bridge, Pangin",
            image: "images/pangin_old_bridge.jpg",
            points: ["An old suspension bridge offering spectacular views of the confluence of the Siyom and Siang rivers."]
        },
        {
            name: "Akashiganga Temple, West Siang",
            image: "images/akashiganga_temple.jpg",
            points: ["A sacred Hindu pilgrimage site associated with the legend of Sati, with ruins of an ancient temple."]
        },
        {
            name: "Tezu Buddhist Temple, Tezu",
            image: "images/tezu_buddhist_temple.jpg",
            points: ["A prominent Buddhist temple in Tezu, serving as a spiritual center for the local Buddhist community."]
        },
        {
            name: "Medo Kachari Ruins, Medo",
            image: "images/medo_kachari_ruins.jpg",
            points: ["Remnants of a settlement of the Kachari kingdom, showing the historical extent of their rule."]
        },
        {
            name: "Memorial to Havildar Shere Thapa, Hayuliang",
            image: "images/havildar_shere_thapa_memorial.jpg",
            points: ["A memorial dedicated to a soldier of the Assam Rifles who showed gallantry during the 1962 war."]
        },
        {
            name: "Donyi-Polo Temple, Itanagar",
            image: "images/donyi-polo_temple_itanagar.jpg",
            points: ["A key place of worship for followers of the indigenous Donyi-Polo faith."]
        },
        {
            name: "Kibithu War Memorial, Kibithu",
            image: "images/kibithu_war_memorial.jpg",
            points: ["A memorial in one of India's easternmost towns, honoring soldiers who died in the 1962 war."]
        },
        {
            name: "Dong Village Prayer Wheels, Dong",
            image: "images/dong_village_prayer_wheels.jpg",
            points: ["Traditional prayer wheels in the village of Dong, which is one of the first places in India to witness sunrise."]
        },
        {
            name: "Anini Gompa, Anini",
            image: "images/anini_gompa.jpg",
            points: ["A small but significant Buddhist gompa serving the spiritual needs of the sparse population in the remote Dibang Valley."]
        },
        {
            name: "Parsuram Kund Old Temple Structure, Wakro",
            image: "images/parsuram_kund_old_temple.jpg",
            points: ["Remnants of older structures near the sacred Parsuram Kund, a major pilgrimage site."]
        },
        {
            name: "Vijaynagar Stupa, Vijaynagar",
            image: "images/vijaynagar_stupa.jpg",
            points: ["A small Buddhist stupa in a remote area, reflecting the faith of the local Lisu and Chakma communities."]
        },
        {
            name: "Taksang Gompa, Tawang",
            image: "images/taksang_gompa.jpg",
            points: ["A monastery perched on a cliff, associated with the visit of Guru Padmasambhava."]
        },
        {
            name: "Changlang World War II Cemetery, Changlang",
            image: "images/changlang_wwii_cemetery.jpg",
            points: ["A small, lesser-known cemetery with graves of soldiers who died during the construction of the Stilwell Road."]
        },
        {
            name: "Roing War Memorial, Roing",
            image: "images/roing_war_memorial.jpg",
            points: ["A local memorial dedicated to soldiers from the region who served in the Indian Armed Forces."]
        },
        {
            name: "Bordumsa Buddhist Temple, Bordumsa",
            image: "images/bordumsa_buddhist_temple.jpg",
            points: ["A significant Buddhist temple for the Singpho and Tai Khamti communities in the area."]
        },
        {
            name: "Paya Village Traditional Houses, Paya",
            image: "images/paya_village_traditional_houses.jpg",
            points: ["The village features well-preserved traditional houses of the Khamti tribe."]
        },
        {
            name: "Namdapha Entry Gate, Miao",
            image: "images/namdapha_entry_gate.jpg",
            points: ["The iconic entry gate to Namdapha National Park, reflecting local tribal art and architecture."]
        },
        {
            name: "Walong War Memorial, Walong",
            image: "images/walong_war_memorial.jpg",
            points: ["A major memorial dedicated to the Battle of Walong, one of the few instances where India mounted a counter-attack in the 1962 war."]
        },
        {
            name: "Rima-Putok Monoliths, Rima",
            image: "images/rima-putok_monoliths.jpg",
            points: ["A collection of megalithic stone structures of cultural and historical importance to the local tribes."]
        },
        {
            name: "Geku Memorial Stone, Geku",
            image: "images/geku_memorial_stone.jpg",
            points: ["A memorial stone commemorating an important local historical event or figure of the Adi tribe."]
        },
        {
            name: "Craft Centre & Museum, Bomdila",
            image: "images/craft_centre_museum_bomdila.jpg",
            points: ["Housed in a traditional building, it showcases local crafts, masks, and handlooms."]
        },
        {
            name: "Ziro Valley Old Apatani Structures, Ziro",
            image: "images/ziro_valley_apatani_structures.jpg",
            points: ["Traditional houses and granaries of the Apatani tribe, reflecting their unique indigenous architecture."]
        },
        {
            name: "Khonsa District Museum Building, Khonsa",
            image: "images/khonsa_district_museum.jpg",
            points: ["The museum building itself is designed in a traditional style, preserving the heritage of the Nocte and Wancho tribes."]
        },
        {
            name: "Singchung Bugun Community Reserve Gate, Singchung",
            image: "images/singchung_bugun_reserve_gate.jpg",
            points: ["The gate to the community reserve, adorned with motifs representing the Bugun tribe."]
        },
        {
            name: "Pakke-Kessang Old Inspection Bungalow, Pakke-Kessang",
            image: "images/pakke-kessang_old_bungalow.jpg",
            points: ["A British-era inspection bungalow, representing colonial administrative architecture in the remote hills."]
        },
        {
            name: "Tuting Monastery, Tuting",
            image: "images/tuting_monastery.jpg",
            points: ["A serene monastery serving the Buddhist communities near the Siang River."]
        },
        {
            name: "Miao World Peace Pagoda, Miao",
            image: "images/miao_world_peace_pagoda.jpg",
            points: ["A small peace pagoda built to promote harmony and spiritualism in the region."]
        },
        {
            name: "Chowkham Vihara, Chowkham",
            image: "images/chowkham_vihara.jpg",
            points: ["A revered Buddhist vihara known for its serene atmosphere and traditional Tai Khamti architecture."]
        },
        {
            name: "Daporijo Suspension Bridge, Daporijo",
            image: "images/daporijo_suspension_bridge.jpg",
            points: ["An old suspension bridge over the Subansiri River, a lifeline for the region for many years."]
        },
        {
            name: "Tuting War Memorial, Tuting",
            image: "images/tuting_war_memorial.jpg",
            points: ["A memorial dedicated to the soldiers who fought in the remote border regions."]
        },
        {
            name: "Mechuka Gompa (Samten Yongcha Monastery), Mechuka",
            image: "images/mechuka_gompa.jpg",
            points: ["A 400-year-old monastery of the Mahayana school, located in the picturesque Mechuka Valley."]
        }
    ],
    "Assam": [
        {
            name: "Kamakhya Temple, Guwahati",
            image: "images/kamakhya_temple.jpg",
            points: ["A major Hindu pilgrimage site, one of the oldest of the 51 Shakti Pithas, located on the Nilachal Hills."]
        },
        {
            name: "Rang Ghar, Sivasagar",
            image: "images/rang_ghar.jpg",
            points: ["An 18th-century royal sports pavilion of the Ahom kings, often called the 'Colosseum of the East.'"]
        },
        {
            name: "Talatal Ghar, Sivasagar",
            image: "images/talatal_ghar.jpg",
            points: ["An Ahom-era palace with underground tunnels and secret chambers, serving as a military base."]
        },
        {
            name: "Umananda Temple, Guwahati",
            image: "images/umananda_temple.jpg",
            points: ["A Shiva temple located on Peacock Island in the middle of the Brahmaputra river."]
        },
        {
            name: "Sivasagar Sivadol, Sivasagar",
            image: "images/sivasagar_sivadol.jpg",
            points: ["A group of structures comprising three temples: Sivadol, Vishnudol, and Devidol, built in the 18th century."]
        },
        {
            name: "Kareng Ghar, Sivasagar",
            image: "images/kareng_ghar.jpg",
            points: ["The royal palace of the Ahom kingdom, showcasing their unique architectural style."]
        },
        {
            name: "Agnigarh Hill, Tezpur",
            image: "images/agnigarh_hill.jpg",
            points: ["A fortress hill with sculptures depicting the mythological romance of Usha and Aniruddha."]
        },
        {
            name: "Hajo Powa Mecca, Hajo",
            image: "images/hajo_powa_mecca.jpg",
            points: ["A revered Muslim pilgrimage site believed to contain soil from Mecca."]
        },
        {
            name: "Hayagriva Madhava Temple, Hajo",
            image: "images/hayagriva_madhava_temple.jpg",
            points: ["An ancient temple on Manikuta Hill, a pilgrimage site for both Hindus and Buddhists."]
        },
        {
            name: "Charaideo Maidams, Charaideo",
            image: "images/charaideo_maidams.jpg",
            points: ["The burial mounds of Ahom kings and queens, often referred to as the 'Pyramids of Assam.'"]
        },
        {
            name: "Da Parbatia Temple Ruins, Tezpur",
            image: "images/da_parbatia_temple_ruins.jpg",
            points: ["Ruins of a 6th-century temple with one of the finest and oldest examples of sculptural art in Assam."]
        },
        {
            name: "Madan Kamdev Temple, Baihata Chariali",
            image: "images/madan_kamdev_temple.jpg",
            points: ["An archaeological site with ruins of temples from the 10th-12th centuries, known as the 'Khajuraho of Assam.'"]
        },
        {
            name: "Gaurisagar Tank and Temples, Sivasagar",
            image: "images/gaurisagar_tank_temples.jpg",
            points: ["A large man-made tank surrounded by three Ahom-era temples dedicated to Durga, Shiva, and Vishnu."]
        },
        {
            name: "Sukreswar Temple, Guwahati",
            image: "images/sukreswar_temple.jpg",
            points: ["An 18th-century Shiva temple on the banks of the Brahmaputra, known for its large Shiva lingam."]
        },
        {
            name: "Basistha Ashram Temple, Guwahati",
            image: "images/basistha_ashram_temple.jpg",
            points: ["A serene Shiva temple at the confluence of three mythical streams, believed to be the hermitage of sage Basistha."]
        },
        {
            name: "Navagraha Temple, Guwahati",
            image: "images/navagraha_temple.jpg",
            points: ["An ancient temple on Chitrachal Hill dedicated to the nine celestial bodies (Navagrahas)."]
        },
        {
            name: "Joysagar Tank and Temples (Joydol), Sivasagar",
            image: "images/joysagar_tank_temples.jpg",
            points: ["The largest man-made tank in India, with the Joydol temple complex on its banks."]
        },
        {
            name: "Northbrook Gate, Guwahati",
            image: "images/northbrook_gate.jpg",
            points: ["A historic gateway built in 1874 to welcome the British Viceroy Lord Northbrook."]
        },
        {
            name: "Dhola-Sadiya Bridge (Bhupen Hazarika Setu), Tinsukia",
            image: "images/dhola-sadiya_bridge.jpg",
            points: ["India's longest bridge over water, connecting Assam and Arunachal Pradesh over the Lohit River."]
        },
        {
            name: "Surya Pahar Archaeological Site, Goalpara",
            image: "images/surya_pahar_site.jpg",
            points: ["A site with dozens of rock-cut Shiva lingams, stupas, and sculptures of Hindu, Buddhist, and Jain origins."]
        },
        {
            name: "Khaspur Ruins, Cachar",
            image: "images/khaspur_ruins.jpg",
            points: ["The ruins of the capital of the Dimasa Kachari Kingdom, featuring gateways, temples, and palaces."]
        },
        {
            name: "Christ Church, Guwahati",
            image: "images/christ_church_guwahati.jpg",
            points: ["The oldest church in Northeast India, an elegant colonial structure built in 1844."]
        },
        {
            name: "Ghanashyam's House, Joysagar",
            image: "images/ghanashyams_house.jpg",
            points: ["A unique terracotta brick temple built in the style of a Bengali hut, dedicated to a Bengali architect."]
        },
        {
            name: "Sri Kirtan Ghar, Batadrava",
            image: "images/sri_kirtan_ghar_batadrava.jpg",
            points: ["The birthplace and first prayer hall established by the Vaishnavite saint Srimanta Sankardeva."]
        },
        {
            name: "Barpeta Satra, Barpeta",
            image: "images/barpeta_satra.jpg",
            points: ["A prominent Vaishnavite monastery established by Madhavdeva, known for its cultural significance."]
        },
        {
            name: "Old DC Bungalow, Goalpara",
            image: "images/old_dc_bungalow_goalpara.jpg",
            points: ["A classic example of a British-era administrative bungalow with heritage value."]
        },
        {
            name: "Guwahati War Cemetery, Guwahati",
            image: "images/guwahati_war_cemetery.jpg",
            points: ["A serene cemetery maintained by the Commonwealth War Graves Commission for soldiers who died in World War II."]
        },
        {
            name: "Rangamati Mosque, Dhubri",
            image: "images/rangamati_mosque.jpg",
            points: ["An ancient mosque believed to have been built in the 15th-16th century, one of the oldest in Assam."]
        },
        {
            name: "Mahabhairab Temple, Tezpur",
            image: "images/mahabhairab_temple.jpg",
            points: ["An ancient Shiva temple with a massive lingam, believed to have been established by King Bana."]
        },
        {
            name: "Negheriting Shiva Doul, Dergaon",
            image: "images/negheriting_shiva_doul.jpg",
            points: ["A Shiva temple on a hillock, built by Ahom king Rajeswar Singha."]
        },
        {
            name: "Digboi World War II Cemetery, Digboi",
            image: "images/digboi_wwii_cemetery.jpg",
            points: ["A beautifully maintained cemetery for Allied soldiers who died in the region during WWII."]
        },
        {
            name: "Beng-mara (Tinsukia) Heritage Buildings, Tinsukia",
            image: "images/beng-mara_heritage_buildings.jpg",
            points: ["Old colonial bungalows and administrative buildings from the time of the Assam Railway & Trading Company."]
        },
        {
            name: "Cotton University (Old Buildings), Guwahati",
            image: "images/cotton_university_old_buildings.jpg",
            points: ["The historic buildings of Cotton College (now University), established in 1901."]
        },
        {
            name: "Dhubri Gurdwara (Gurdwara Sri Guru Tegh Bahadur Sahib), Dhubri",
            image: "images/dhubri_gurdwara.jpg",
            points: ["A Sikh shrine built to commemorate the visit of Guru Nanak and Guru Tegh Bahadur."]
        },
        {
            name: "Deopahar Ruins, Numaligarh",
            image: "images/deopahar_ruins.jpg",
            points: ["Ruins of an ancient stone temple on a hill, with intricate carvings."]
        },
        {
            name: "Namdang Stone Bridge, Sivasagar",
            image: "images/namdang_stone_bridge.jpg",
            points: ["A 17th-century bridge built by Ahom artisans from a single solid piece of rock."]
        },
        {
            name: "Sivadol, Nitaipukhuri",
            image: "images/sivadol_nitaipukhuri.jpeg",
            points: ["A lesser-known but historically significant Ahom-era Shiva temple."]
        },
        {
            name: "Dhekiajuli Old Police Station, Dhekiajuli",
            image: "images/dhekiajuli_old_police_station.jpg",
            points: ["A historic police station site associated with the Quit India Movement and the sacrifice of martyrs."]
        },
        {
            name: "Azan Pir Dargah, Sivasagar",
            image: "images/azan_pir_dargah.jpg",
            points: ["The tomb of the 17th-century Sufi saint Azan Pir, who integrated Islamic and Assamese cultures."]
        },
        {
            name: "Bordowa Satra, Nagaon",
            image: "images/bordowa_satra.jpg",
            points: ["A major pilgrimage center for Vaishnavites, associated with Srimanta Sankardeva."]
        },
        {
            name: "Assam State Museum Building, Guwahati",
            image: "images/assam_state_museum.jpg",
            points: ["The building itself is a landmark, housing priceless artifacts from the state's history."]
        },
        {
            name: "Ledo Airfield Watchtowers, Ledo",
            image: "images/ledo_airfield_watchtowers.jpg",
            points: ["Remaining structures from the historic airfield that was the starting point of the Stilwell Road."]
        },
        {
            name: "Bhairabi Temple, Tezpur",
            image: "images/bhairabi_temple.jpg",
            points: ["A Shakti temple believed to be the place where Usha, daughter of King Bana, worshipped the goddess."]
        },
        {
            name: "Saraighat Bridge, Guwahati",
            image: "images/saraighat_bridge.jpg",
            points: ["The first rail-cum-road bridge on the Brahmaputra, an engineering marvel of its time (1962)."]
        },
        {
            name: "Latasil Ganesh Temple, Guwahati",
            image: "images/latasil_ganesh_temple.jpg",
            points: ["A small but historically significant Ganesha temple in the heart of Guwahati."]
        },
        {
            name: "Ugratara Temple, Guwahati",
            image: "images/ugratara_temple.jpg",
            points: ["A Shakti temple dedicated to Sati, known for its ritual sacrifices."]
        },
        {
            name: "Jogighopa Cave Temples, Jogighopa",
            image: "images/jogighopa_cave_temples.jpg",
            points: ["A group of five rock-cut caves from the Salasthamba period, a rare example in Assam."]
        },
        {
            name: "Panbari Mosque, Dhubri",
            image: "images/panbari_mosque.jpeg",
            points: ["Considered the oldest mosque in Assam, dating back to the 15th-16th century."]
        },
        {
            name: "Bishnudol, Gaurisagar",
            image: "images/bishnudol_gaurisagar.jpg",
            points: ["An elegant Ahom-era temple dedicated to Lord Vishnu, part of the Gaurisagar temple complex."]
        },
        {
            name: "Hoollongapar Gibbon Sanctuary Forest Bungalow, Jorhat",
            image: "images/hoollongapar_forest_bungalow.jpg",
            points: ["A historic forest rest house within the sanctuary, reflecting colonial forest architecture."]
        }
    ],
    "Bihar": [
        {
            name: "Mahabodhi Temple Complex, Bodh Gaya",
            image: "images/mahabodhi_temple_complex.jpg",
            points: ["The sacred site where Gautama Buddha is said to have attained Enlightenment, featuring the Bodhi Tree."]
        },
        {
            name: "Nalanda Mahavihara (Old Nalanda University), Nalanda",
            image: "images/nalanda_mahavihara.jpg",
            points: ["The ruins of one of the world's most ancient and famous monastic universities."]
        },
        {
            name: "Vikramshila University Ruins, Antichak",
            image: "images/vikramshila_university_ruins.jpg",
            points: ["The excavated remains of another great Buddhist university, founded by King Dharmapala."]
        },
        {
            name: "Golghar, Patna",
            image: "images/golghar.jpg",
            points: ["An iconic, beehive-shaped granary built in 1786 by the British to store grains for the army."]
        },
        {
            name: "Sher Shah Suri's Tomb, Sasaram",
            image: "images/sher_shah_suri_tomb.jpg",
            points: ["A magnificent Indo-Islamic mausoleum of Emperor Sher Shah Suri, located in the middle of an artificial lake."]
        },
        {
            name: "Great Buddha Statue, Bodh Gaya",
            image: "images/great_buddha_statue_bodh_gaya.jpg",
            points: ["An 80-foot tall statue of the Buddha in a meditative posture, a symbol of peace."]
        },
        {
            name: "Patna Museum, Patna",
            image: "images/patna_museum.jpg",
            points: ["An Indo-Saracenic style building (1917) housing a vast collection of artifacts, including the famous Didarganj Yakshi."]
        },
        {
            name: "Vishwa Shanti Stupa, Rajgir",
            image: "images/vishwa_shanti_stupa_rajgir.jpg",
            points: ["A brilliant white peace pagoda built by Japanese Buddhists on Ratnagiri Hill, accessible by a ropeway."]
        },
        {
            name: "Kesaria Stupa, Kesaria",
            image: "images/kesaria_stupa.jpg",
            points: ["One of the tallest and largest Buddhist stupas in the world, discovered in 1998."]
        },
        {
            name: "Ashokan Pillar, Vaishali",
            image: "images/ashokan_pillar_vaishali.jpg",
            points: ["A monolithic lion pillar erected by Emperor Ashoka to commemorate Buddha's last sermon."]
        },
        {
            name: "Barabar Caves, Sultanpur",
            image: "images/barabar_caves.jpg",
            points: ["The oldest surviving rock-cut caves in India, dating from the Mauryan period (3rd century BCE)."]
        },
        {
            name: "Rohtasgarh Fort, Rohtas",
            image: "images/rohtasgarh_fort.jpg",
            points: ["A massive and ancient hill fort, one of the largest in India, that has passed through many hands, from Sher Shah Suri to Mughal emperors."]
        },
        {
            name: "Agam Kuan, Patna",
            image: "images/agam_kuan.jpg",
            points: ["An ancient well believed to date back to the period of Emperor Ashoka, associated with many legends."]
        },
        {
            name: "Jal Mandir, Pawapuri",
            image: "images/jal_mandir_pawapuri.jpg",
            points: ["A beautiful marble Jain temple located in the middle of a lotus-filled lake, marking the spot where Lord Mahavira was cremated."]
        },
        {
            name: "Padri Ki Haveli, Patna",
            image: "images/padri_ki_haveli.jpg",
            points: ["One of the oldest churches in Bihar, a Roman Catholic church built in 1772."]
        },
        {
            name: "Munger Fort, Munger",
            image: "images/munger_fort.jpg",
            points: ["A historic fort on the banks of the Ganges, with structures from the Slave dynasty to the British era."]
        },
        {
            name: "Buxar Fort, Buxar",
            image: "images/buxar_fort.jpg",
            points: ["A fort associated with the famous Battle of Buxar in 1764, located on the banks of the Ganges."]
        },
        {
            name: "Griddhakuta Peak (Vulture Peak), Rajgir",
            image: "images/griddhakuta_peak.jpg",
            points: ["The place where the Buddha delivered some of his most important sermons, including the Lotus Sutra."]
        },
        {
            name: "Maner Sharif, Maner",
            image: "images/maner_sharif.jpg",
            points: ["A shrine containing two famous medieval tombs: Shah Daulat (Chhoti Dargah) and Sheikh Yahia Maneri (Badi Dargah)."]
        },
        {
            name: "Patna High Court Building, Patna",
            image: "images/patna_high_court.jpg",
            points: ["An imposing Neoclassical heritage building, designed by J. F. Munnings and established in 1916."]
        },
        {
            name: "Sonepur Cattle Fair Structures, Sonepur",
            image: "images/sonepur_cattle_fair.jpg",
            points: ["The site of the ancient and world-famous cattle fair, with historic ghats and temples like the Hariharnath Temple."]
        },
        {
            name: "Chanakya National Law University Building, Patna",
            image: "images/cnlu_building.jpg",
            points: ["The campus is noted for its modern architecture that incorporates traditional Bihari design elements."]
        },
        {
            name: "Indo-Japan Buddhist Temple, Bodh Gaya",
            image: "images/indo-japan_buddhist_temple.jpeg",
            points: ["A beautiful temple showcasing Japanese architecture, reflecting international Buddhist connections."]
        },
        {
            name: "Hasrat ud-din Shah's Tomb, Deo",
            image: "images/hasrat_ud-din_shah_tomb.jpg",
            points: ["The tomb of a revered Sufi saint, a site of local pilgrimage."]
        },
        {
            name: "Sitamarhi Temple (Janki Sthan), Sitamarhi",
            image: "images/sitamarhi_temple.jpg",
            points: ["A temple believed to be the birthplace of Sita, the consort of Lord Rama."]
        },
        {
            name: "Pathar ki Masjid, Patna",
            image: "images/pathar_ki_masjid.jpg",
            points: ["A stone mosque built on the banks of the Ganges by Parvez Shah, the son of Mughal Emperor Jahangir."]
        },
        {
            name: "Valmiki National Park Watchtowers, West Champaran",
            image: "images/valmiki_watchtowers.jpg",
            points: ["Old forest watchtowers within the park that have historical and architectural value."]
        },
        {
            name: "Darbhanga Fort & Palaces, Darbhanga",
            image: "images/darbhanga_fort_palaces.jpg",
            points: ["The residential complex of the Darbhanga Raj family, featuring palaces like Anand Bagh and Nargona."]
        },
        {
            name: "Thai Monastery, Bodh Gaya",
            image: "images/thai_monastery_bodh_gaya.jpg",
            points: ["A magnificent monastery with a gleaming golden roof, reflecting Thai Buddhist architecture."]
        },
        {
            name: "Saptaparni Cave, Rajgir",
            image: "images/saptaparni_cave.jpg",
            points: ["The cave where the First Buddhist Council was held after the Buddha's death."]
        },
        {
            name: "Bihar Regimental Centre War Memorial, Danapur",
            image: "images/bihar_regimental_centre_war_memorial.jpg",
            points: ["A memorial dedicated to the soldiers of the Bihar Regiment who sacrificed their lives."]
        },
        {
            name: "Mundeshwari Devi Temple, Kaura",
            image: "images/mundeshwari_devi_temple.jpg",
            points: ["Believed to be the oldest functional Hindu temple in the world, dating back to 108 AD."]
        },
        {
            name: "Gandhi Setu Bridge, Patna",
            image: "images/gandhi_setu_bridge.jpg",
            points: ["One of the longest river bridges in the world, an engineering landmark connecting Patna to Hajipur."]
        },
        {
            name: "Chinese Temple, Bodh Gaya",
            image: "images/chinese_temple_bodh_gaya.jpg",
            points: ["A serene temple built by the Chinese government and Buddhist monks, featuring traditional Chinese architecture."]
        },
        {
            name: "Gurdwara Pahila Bara (Gurdwara Ghai Ghat), Patna",
            image: "images/gurdwara_ghai_ghat.jpg",
            points: ["A Sikh shrine associated with the visits of Guru Nanak and Guru Tegh Bahadur."]
        },
        {
            name: "Takht Sri Harmandir Sahib, Patna Sahib",
            image: "images/takht_sri_harmandir_sahib.jpg",
            points: ["One of the five holiest seats (Takhts) in Sikhism, the birthplace of Guru Gobind Singh."]
        },
        {
            name: "Navlakha Palace, Rajnagar",
            image: "images/navlakha_palace_rajnagar.jpg",
            points: ["The stunning but earthquake-damaged ruins of a grand palace complex built by the Maharaja of Darbhanga."]
        },
        {
            name: "Lauriya Nandangarh, Lauriya",
            image: "images/lauriya_nandangarh.jpg",
            points: ["The site of a Mauryan pillar with a lion capital and a massive brick stupa."]
        },
        {
            name: "Sachiwalaya (Secretariat) Building, Patna",
            image: "images/sachiwalaya_building_patna.jpg",
            points: ["An iconic Indo-Saracenic administrative building that is a symbol of the state government."]
        },
        {
            name: "Kamaldah Jain Temple, Patna",
            image: "images/kamaldah_jain_temple.jpg",
            points: ["An ancient temple complex associated with the famous Jain saint Sthulibhadra."]
        },
        {
            name: "Bhagalpur Museum, Bhagalpur",
            image: "images/bhagalpur_museum.jpg",
            points: ["Housed in a heritage building, it contains artifacts from the ancient Anga kingdom and Vikramshila."]
        },
        {
            name: "Jalalgarh Fort, Purnia",
            image: "images/jalalgarh_fort.jpg",
            points: ["A unique, four-sided fort built in the 18th century by the Nawab of Purnia."]
        },
        {
            name: "Chhatneshwar Mahadev Temple, Banka",
            image: "images/chhatneshwar_mahadev_temple.jpg",
            points: ["An ancient Shiva temple located at the top of a hill, offering panoramic views."]
        },  
        {
            name: "Hasan Shah Suri's Tomb, Sasaram",
            image: "images/hasan_shah_suri_tomb.jpg",
            points: ["The tomb of Sher Shah Suri's father, an earlier example of the Pathan architectural style."]
        },
        {
            name: "Ramchaura Mandir, Hajipur",
            image: "images/ramchaura_mandir.jpg",
            points: ["A temple where footprints believed to be of Lord Rama are worshipped."]
        },
        {
            name: "Kakra Kund Waterfalls Structures, Kaimur Hills",
            image: "images/kakra_kund_waterfalls.jpg",
            points: ["The area around the scenic waterfall has ancient rock shelters and minor temple ruins."]
        },
        {
            name: "Bihar Sharif Buddhist Vihara Ruins, Bihar Sharif",
            image: "images/bihar_sharif_vihara_ruins.jpg",
            points: ["The ruins of the Odantapuri Vihara, another important ancient Buddhist university."]
        },
        {
            name: "Telhara University Ruins, Telhara",
            image: "images/telhara_university_ruins.jpg",
            points: ["The excavated remains of a Buddhist monastery, even older than Nalanda University."]
        },
        {
            name: "Jarasandha ka Akhara, Rajgir",
            image: "images/jarasandha_ka_akhara.jpg",
            points: ["The wrestling arena of the mythological king Jarasandha from the Mahabharata."]
        },
        {
            name: "Ajatshatru Fort, Rajgir",
            image: "images/ajatshatru_fort.jpg",
            points: ["The ruins of the fort of King Ajatshatru, a contemporary of the Buddha."]
        }
    ],
    "Chhattisgarh": [
        {
            name: "Bhoramdeo Temple, Kawardha",
            image: "images/bhoramdeo_temple.jpg",
            points: ["Often called the 'Khajuraho of Chhattisgarh', this 11th-century temple complex is dedicated to Lord Shiva."]
        },
        {
            name: "Sirpur Group of Monuments, Sirpur",
            image: "images/sirpur_group_of_monuments.jpg",
            points: ["An extensive archaeological site with ancient temples, monasteries, and the famous brick Laxman Temple."]
        },
        {
            name: "Danteshwari Temple, Dantewada",
            image: "images/danteshwari_temple.jpg",
            points: ["A revered 600-year-old temple and one of the 52 Shakti Pithas, dedicated to the goddess Danteshwari."]
        },
        {
            name: "Bastar Palace, Jagdalpur",
            image: "images/bastar_palace.jpg",
            points: ["The historic seat of the Bastar Kingdom, this palace showcases the history and heritage of the region."]
        },
        {
            name: "Kanger Kuti (Caves), Kanger Valley",
            image: "images/kanger_kuti.jpg",
            points: ["Ancient limestone caves with impressive stalactite and stalagmite formations, located in Kanger Valley National Park."]
        },
        {
            name: "Mahamaya Temple, Ratanpur",
            image: "images/mahamaya_temple_ratanpur.jpg",
            points: ["An 11th-century temple dedicated to the goddesses Lakshmi and Saraswati, an important pilgrimage site."]
        },
        {
            name: "Ratanpur Fort, Ratanpur",
            image: "images/ratanpur_fort.jpg",
            points: ["The ruins of a once-mighty fort that served as the capital of the Kalachuri dynasty."]
        },
        {
            name: "Madku Dweep, Bilaspur",
            image: "images/madku_dweep.jpg",
            points: ["An island in the Shivnath River with numerous ancient temple ruins and archaeological findings."]
        },
        {
            name: "Gadiya Mountain Fort, Kanker",
            image: "images/gadiya_mountain_fort.jpg",
            points: ["A historic fort atop Gadiya Mountain, known for its natural caves and a legendary water tank that never dries."]
        },
        {
            name: "Sita Bengra and Jogimara Caves, Surguja",
            image: "images/sita_bengra_jogimara_caves.jpg",
            points: ["Ancient caves on Ramgarh hills, considered one of the oldest theatres in the world, with inscriptions and paintings."]
        },
        {
            name: "Devrani-Jethani Temples, Talagaon",
            image: "images/devrani-jethani_temples.jpg",
            points: ["Two 5th-century Gupta period temples with a unique and mysterious idol of Rudra Shiva."]
        },
        {
            name: "Kanker Palace, Kanker",
            image: "images/kanker_palace.jpg",
            points: ["A colonial-era palace, now a heritage hotel, that was the residence of the royal family of Kanker."]
        },
        {
            name: "Pali Mahadev Temple, Pali",
            image: "images/pali_mahadev_temple.jpg",
            points: ["An ancient Shiva temple from the 9th century with intricate carvings and an octagonal sanctum."]
        },
        {
            name: "Malhar Archaeological Site, Malhar",
            image: "images/malhar_archaeological_site.jpg",
            points: ["An ancient town site with ruins of temples and sculptures from Hindu, Buddhist, and Jain traditions."]
        },
        {
            name: "Kawardha Palace, Kawardha",
            image: "images/kawardha_palace.jpg",
            points: ["A beautiful Italian marble palace built in the 1930s, reflecting a blend of colonial and traditional architecture."]
        },
        {
            name: "Chandrahasini Devi Temple, Chandrapur",
            image: "images/chandrahasini_devi_temple.jpg",
            points: ["A popular pilgrimage center on the banks of the Mahanadi river, known for its grand festivals."]
        },
        {
            name: "Narayanpal Temple, Narayanpal",
            image: "images/narayanpal_temple.jpg",
            points: ["A 10th-century Vishnu temple built in the Chalukyan style, located near the confluence of two rivers."]
        },
        {
            name: "Pachrahi Archaeological Site, Kabirdham",
            image: "images/pachrahi_archaeological_site.jpg",
            points: ["An excavation site revealing temples and artifacts from various dynasties, including the Kalachuris and Nagas."]
        },
        {
            name: "Surguja Palace, Ambikapur",
            image: "images/surguja_palace.jpg",
            points: ["The main residence of the Surguja royal family, a prominent white palace in the heart of the city."]
        },
        {
            name: "Deor Temple, Manegaon",
            image: "images/deor_temple_manegaon.jpg",
            points: ["An ancient stone temple with intricate carvings, showcasing the architectural skills of the Kalachuri period."]
        },
        {
            name: "Kharod Laxmaneshwar Temple, Kharod",
            image: "images/kharod_laxmaneshwar_temple.jpg",
            points: ["An ancient temple dedicated to Lord Shiva, believed to have been established by Lakshmana from the Ramayana."]
        },
        {
            name: "Ghatiyari Shiva Temple, Arang",
            image: "images/ghatiyari_shiva_temple.jpg",
            points: ["A historic Shiva temple known for its unique architecture and religious significance in the Arang region."]
        },
        {
            name: "Mahant Ghasidas Memorial Museum, Raipur",
            image: "images/mahant_ghasidas_museum.jpg",
            points: ["Housed in a heritage building, this museum preserves a rich collection of archaeological finds and tribal artifacts."]
        },
        {
            name: "Bhand-Dewal Jain Temple, Arang",
            image: "images/bhand-dewal_jain_temple.jpg",
            points: ["An 11th-century Jain temple with intricately carved black stone idols of Tirthankaras."]
        },
        {
            name: "Jagannath Temple, Khairagarh",
            image: "images/jagannath_temple_khairagarh.jpg",
            points: ["A historic temple built by the Naga dynasty kings, reflecting the cultural heritage of the region."]
        },
        {
            name: "Khaireshwari Temple, Khairagarh",
            image: "images/khaireshwari_temple.jpeg",
            points: ["An important local shrine dedicated to the goddess Khaireshwari, attracting many devotees."]
        },
        {
            name: "Dudhadhari Math, Raipur",
            image: "images/dudhadhari_math.jpeg",
            points: ["A 17th-century monastery and temple complex known for its murals depicting scenes from the Ramayana."]
        },
        {
            name: "Rajim Lochan Mandir, Rajim",
            image: "images/rajim_lochan_mandir.jpg",
            points: ["An ancient Vishnu temple and a major pilgrimage site, particularly during the annual Rajim Kumbh Mela."]
        },
        {
            name: "Kuleshwar Mahadev Temple, Rajim",
            image: "images/kuleshwar_mahadev_temple.jpg",
            points: ["A historic Shiva temple located at the confluence of three rivers, a central point of the Rajim pilgrimage."]
        },
        {
            name: "Champaranya Temples, Champaran",
            image: "images/champaranya_temples.jpg",
            points: ["The birthplace of Saint Vallabhacharya, featuring a complex of temples dedicated to him and Lord Krishna."]
        },
        {
            name: "Singh Dwar, Dongargarh",
            image: "images/singh_dwar_dongargarh.jpg",
            points: ["The grand entrance gate to the pilgrimage site of Dongargarh, marking the start of the ascent to the main temple."]
        },
        {
            name: "Bambleshwari Temple, Dongargarh",
            image: "images/bambleshwari_temple.jpg",
            points: ["A major pilgrimage site with a temple situated on a 1600-foot high hilltop, accessible by ropeway."]
        },
        {
            name: "Amriteshwar Temple, Deobijapur",
            image: "images/amriteshwar_temple_deobijapur.jpg",
            points: ["A lesser-known but architecturally significant Shiva temple from the Kalachuri period."]
        },
        {
            name: "Sati Pillars of Ratanpur",
            image: "images/sati_pillars_ratanpur.jpg",
            points: ["A collection of historical Sati pillars and memorial stones commemorating royal women."]
        },
        {
            name: "Baleshwar Mahadev Temple, Malhar",
            image: "images/baleshwar_mahadev_temple_malhar.jpg",
            points: ["An ancient Shiva temple that is part of the rich archaeological heritage of the historic town of Malhar."]
        },
        {
            name: "Siddheshwar Temple, Palari",
            image: "images/siddheshwar_temple_palari.jpg",
            points: ["A 7th-8th century brick temple dedicated to Lord Shiva, showcasing unique architectural features."]
        },
        {
            name: "Deepadih Archaeological Site, Balrampur",
            image: "images/deepadih_archaeological_site.jpg",
            points: ["An extensive site with numerous temple mounds, sculptures, and a large monolithic Nandi statue."]
        },
        {
            name: "Maheshpur Archaeological Site, Ambikapur",
            image: "images/maheshpur_archaeological_site.jpg",
            points: ["A historical site with ancient temple ruins and idols, believed to be from the 8th to 12th centuries."]
        },
        {
            name: "Old High Court Building, Bilaspur",
            image: "images/old_high_court_bilaspur.jpg",
            points: ["A colonial-era heritage building with distinctive architecture that now serves as a major landmark."]
        },
        {
            name: "Bastar University Administrative Building, Jagdalpur",
            image: "images/bastar_university_building.jpg",
            points: ["A modern structure that incorporates traditional Bastar tribal art and architectural motifs."]
        },
        {
            name: "Shivrinarayan Temple, Shivrinarayan",
            image: "images/shivrinarayan_temple.jpg",
            points: ["A temple dedicated to Lord Rama, associated with the Ramayana legend of Shabari offering berries to him."]
        },
        {
            name: "Raipur Town Hall, Raipur",
            image: "images/raipur_town_hall.jpg",
            points: ["A Victorian-style heritage building constructed in the late 19th century, a symbol of the city's history."]
        },
        {
            name: "Ramtekri Temple, Ratanpur",
            image: "images/ramtekri_temple_ratanpur.jpg",
            points: ["A temple dedicated to Lord Rama situated on a hill, offering panoramic views of Ratanpur."]
        },
        {
            name: "Phalgun Madai Mandap, Dantewada",
            image: "images/phalgun_madai_mandap.jpeg",
            points: ["The ceremonial pavilion used during the historic Phalgun Madai festival, a significant cultural site."]
        },
        {
            name: "Ganesh Temple, Barsur",
            image: "images/ganesh_temple_barsur.jpg",
            points: ["Famous for its two large monolithic Ganesha statues, a remnant of the ancient capital city of Barsur."]
        },
        {
            name: "Mama-Bhanja Temple, Barsur",
            image: "images/mama-bhanja_temple_barsur.jpg",
            points: ["An architecturally unique temple believed to have been built by a nephew and uncle, with intricate stone carvings."]
        },
        {
            name: "Battisa Temple, Barsur",
            image: "images/battisa_temple_barsur.jpg",
            points: ["A Shiva temple with two sanctums, named for its 32 intricately carved pillars."]
        },
        {
            name: "Chandraditya Temple, Barsur",
            image: "images/chandraditya_temple_barsur.jpg",
            points: ["A 12th-century temple dedicated to Lord Shiva, constructed on the banks of a large tank."]
        },
        {
            name: "Koti Lingeswar Temple, Dhamtari",
            image: "images/koti_lingeswar_temple_dhamtari.jpg",
            points: ["A local pilgrimage site known for its collection of numerous Shiva lingams."]
        },
        {
            name: "Gaurav Stambh, Raipur",
            image: "images/gaurav_stambh_raipur.jpg",
            points: ["A 'Pillar of Pride' monument in Raipur, commemorating the state's cultural heroes and history."]
        }
    ],
    "Goa": [
        {
            name: "Basilica of Bom Jesus, Old Goa",
            image: "images/basilica_of_bom_jesus.jpg",
            points: ["A UNESCO World Heritage Site, this baroque church holds the mortal remains of St. Francis Xavier."]
        },
        {
            name: "Se Cathedral, Old Goa",
            image: "images/se_cathedral.jpg",
            points: ["The largest church in Asia, dedicated to Catherine of Alexandria, featuring a massive 'Golden Bell'."]
        },
        {
            name: "Fort Aguada, Candolim",
            image: "images/fort_aguada.jpg",
            points: ["A 17th-century Portuguese fort with a lighthouse, offering panoramic views of the Arabian Sea."]
        },
        {
            name: "Chapora Fort, Bardez",
            image: "images/chapora_fort.jpg",
            points: ["Famous for its stunning views of Vagator Beach, this fort gained popularity from the movie 'Dil Chahta Hai'."]
        },
        {
            name: "Church of St. Francis of Assisi, Old Goa",
            image: "images/church_of_st_francis_of_assisi.jpg",
            points: ["Known for its beautiful blend of Tuscan and Corinthian architecture and exquisite interior paintings."]
        },
        {
            name: "Shri Mangeshi Temple, Ponda",
            image: "images/shri_mangeshi_temple.jpg",
            points: ["One of Goa's most prominent Hindu temples, dedicated to Lord Mangesh, an incarnation of Shiva."]
        },
        {
            name: "Reis Magos Fort, Verem",
            image: "images/reis_magos_fort.jpg",
            points: ["A restored 16th-century fort that has served as a defense fortress, a jail, and now a cultural center."]
        },
        {
            name: "Mahalaxmi Temple, Panaji",
            image: "images/mahalaxmi_temple_panaji.jpg",
            points: ["The first Hindu temple permitted to be built by the Portuguese in Panaji in the 19th century."]
        },
        {
            name: "Fontainhas (Latin Quarter), Panaji",
            image: "images/fontainhas_latin_quarter.jpg",
            points: ["A UNESCO-recognized heritage zone known for its narrow winding streets and colorful Portuguese-style houses."]
        },
        {
            name: "Church of Our Lady of the Immaculate Conception, Panaji",
            image: "images/church_of_our_lady_panaji.jpg",
            points: ["A beautiful whitewashed church with a distinctive zigzagging staircase, a landmark of Panaji."]
        },
        {
            name: "Cabo de Rama Fort, Canacona",
            image: "images/cabo_de_rama_fort.jpg",
            points: ["A historic fort associated with the Ramayana, offering breathtaking views of the coastline."]
        },
        {
            name: "Shantadurga Temple, Kavalem",
            image: "images/shantadurga_temple_kavalem.jpg",
            points: ["A large temple complex dedicated to Shantadurga, the goddess who mediates between Vishnu and Shiva."]
        },
        {
            name: "Tiracol Fort, Tiracol",
            image: "images/tiracol_fort.jpg",
            points: ["A 17th-century fort at the mouth of the Tiracol River, now converted into a heritage hotel."]
        },
        {
            name: "Goa State Museum, Panaji",
            image: "images/goa_state_museum.jpg",
            points: ["Housed in a heritage complex, it showcases Goa's history, art, and culture through various artifacts."]
        },
        {
            name: "Viceroy's Arch, Old Goa",
            image: "images/viceroys_arch.jpg",
            points: ["Built in 1599 to commemorate Vasco da Gama's arrival, it served as the ceremonial entrance to Old Goa."]
        },
        {
            name: "St. Augustine Tower, Old Goa",
            image: "images/st_augustine_tower.jpg",
            points: ["The ruined bell tower of the Church of St. Augustine, a magnificent remnant of a once grand structure."]
        },
        {
            name: "Tambdi Surla Mahadev Temple, Sanguem",
            image: "images/tambdi_surla_mahadev_temple.jpg",
            points: ["A 12th-century Shiva temple, the only surviving specimen of Kadamba-Yadava architecture in Goa."]
        },
        {
            name: "Naval Aviation Museum, Vasco da Gama",
            image: "images/naval_aviation_museum.jpg",
            points: ["A military museum showcasing the evolution of the Indian Naval Air Arm, with aircraft exhibits."]
        },
        {
            name: "Mormugao Fort, Mormugao",
            image: "images/mormugao_fort.jpg",
            points: ["A coastal fort built to protect the Mormugao port, offering views of the harbor and coastline."]
        },
        {
            name: "Arvalem Caves (Pandava Caves), Sanquelim",
            image: "images/arvalem_caves.jpg",
            points: ["Ancient 6th-century rock-cut caves believed to have been used by the Pandavas during their exile."]
        },
        {
            name: "Safa Masjid, Ponda",
            image: "images/safa_masjid.jpg",
            points: ["The oldest surviving mosque in Goa, built in 1560 by Ibrahim Adil Shah of Bijapur."]
        },
        {
            name: "Corjuem Fort, Aldona",
            image: "images/corjuem_fort.jpg",
            points: ["A small island fort known for being one of only two inland forts surviving in Goa."]
        },
        {
            name: "Mae De Deus Church, Saligao",
            image: "images/mae_de_deus_church.jpg",
            points: ["A stunning example of neo-Gothic architecture, known for its pristine white facade and impressive spires."]
        },
        {
            name: "Houses of Goa Museum, Porvorim",
            image: "images/houses_of_goa_museum.jpg",
            points: ["A unique ship-like building designed by architect Gerard da Cunha, showcasing Goan architectural history."]
        },
        {
            name: "Chapel of St. Catherine, Old Goa",
            image: "images/chapel_of_st_catherine.jpg",
            points: ["Built in 1510 to commemorate the Portuguese victory, it is the first Christian chapel built in Goa."]
        },
        {
            name: "St. Cajetan Church, Old Goa",
            image: "images/st_cajetan_church.jpg",
            points: ["Modeled on the original design of St. Peter's Basilica in Rome, this church has a beautiful Corinthian facade."]
        },
        {
            name: "Aguada Lighthouse, Candolim",
            image: "images/aguada_lighthouse.jpg",
            points: ["A 19th-century lighthouse located within Fort Aguada, one of the oldest of its kind in Asia."]
        },
        {
            name: "Cabo Raj Bhavan, Dona Paula",
            image: "images/cabo_raj_bhavan.jpg",
            points: ["The official residence of the Governor of Goa, a historic two-storeyed structure with scenic ocean views."]
        },
        {
            name: "Azad Maidan and Memorial, Panaji",
            image: "images/azad_maidan_memorial.jpg",
            points: ["A public square with a memorial dedicated to Goan freedom fighters who fought against Portuguese rule."]
        },
        {
            name: "Shri Kamakshi Temple, Shiroda",
            image: "images/shri_kamakshi_temple_shiroda.jpg",
            points: ["A serene temple dedicated to the goddess Kamakshi, an incarnation of Parvati."]
        },
        {
            name: "St. Jerome's Church, Mapusa",
            image: "images/st_jeromes_church_mapusa.jpg",
            points: ["A historic church in Mapusa known for its annual 'Milagres Saibinn' feast, celebrated by both Christians and Hindus."]
        },
        {
            name: "Goa University Clock Tower, Taleigao",
            image: "images/goa_university_clock_tower.jpg",
            points: ["An iconic landmark on the Goa University campus, reflecting a blend of modern and traditional design."]
        },
        {
            name: "Sinquerim Fort, Sinquerim",
            image: "images/sinquerim_fort.jpg",
            points: ["An extension of the larger Fort Aguada, this fort provides a beautiful viewpoint over Sinquerim Beach."]
        },
        {
            name: "Indian Customs and Central Excise Museum, Panaji",
            image: "images/indian_customs_museum.jpg",
            points: ["Housed in a blue heritage building, this museum showcases the history of Indian customs and seized artifacts."]
        },
        {
            name: "Braganza House, Chandor",
            image: "images/braganza_house.jpg",
            points: ["A magnificent 17th-century Portuguese mansion, one of the best-preserved heritage homes in Goa."]
        },
        {
            name: "Palácio do Deão, Quepem",
            image: "images/palacio_do_deao.jpg",
            points: ["A restored 18th-century palace showcasing a unique blend of Hindu and Portuguese architecture."]
        },
        {
            name: "Old Goa Medical College Building, Panaji",
            image: "images/old_goa_medical_college.jpg",
            points: ["A grand colonial building that housed the first medical school in Asia, now a prominent city landmark."]
        },
        {
            name: "Statue of Abbe Faria, Panaji",
            image: "images/statue_of_abbe_faria.jpg",
            points: ["A bronze statue commemorating the Goan hypnotist and scientific pioneer, depicted in a hypnotic trance."]
        },
        {
            name: "Holy Spirit Church, Margao",
            image: "images/holy_spirit_church_margao.jpg",
            points: ["A fine example of Indian Baroque style, this church is the main religious edifice in Margao."]
        },
        {
            name: "Menezes Braganza Pereira House, Chandor",
            image: "images/menezes_braganza_pereira_house.jpg",
            points: ["Another wing of the Braganza House, this mansion contains antique furniture, art, and a vast library."]
        },
        {
            name: "Our Lady of the Mount Chapel, Old Goa",
            image: "images/our_lady_of_the_mount_chapel.jpg",
            points: ["Situated on a hill, this chapel offers spectacular panoramic views of Old Goa and the Mandovi River."]
        },
        {
            name: "Figueiredo Mansion, Loutolim",
            image: "images/figueiredo_mansion.jpg",
            points: ["One of the oldest and grandest heritage homes in Goa, showcasing Indo-Portuguese architecture."]
        },
        {
            name: "Gate of the Fortress of St. Paul, Old Goa",
            image: "images/gate_of_fortress_of_st_paul.jpg",
            points: ["A solitary arch that is the only remnant of the historic St. Paul's College in Old Goa."]
        },
        {
            name: "Kala Academy, Panaji",
            image: "images/kala_academy.jpg",
            points: ["Designed by Charles Correa, this building is a cultural center and an example of modernist architecture in Goa."]
        },
        {
            name: "Naroa Fort, Naroa",
            image: "images/naroa_fort.jpg",
            points: ["The ruins of a historic fort on Divar Island, significant during the pre-Portuguese and Portuguese eras."]
        },
        {
            name: "Divar Island Churches, Divar",
            image: "images/divar_island_churches.jpg",
            points: ["Historic churches like the Church of Our Lady of Compassion on this scenic island showcase old-world charm."]
        },
        {
            name: "Lamgau Caves, Bicholim",
            image: "images/lamgau_caves.jpg",
            points: ["A set of rock-cut caves known for their artistic carvings and a shrine dedicated to Lord Shiva."]
        },
        {
            name: "Cuncolim Chieftains Memorial, Cuncolim",
            image: "images/cuncolim_chieftains_memorial.jpg",
            points: ["A memorial dedicated to the chieftains who led the first revolt against Portuguese rule in 1583."]
        },
        {
            name: "Betul Lighthouse, Betul",
            image: "images/betul_lighthouse.jpg",
            points: ["A lighthouse located near the Betul fort, providing guidance for ships and offering scenic views."]
        },
        {
            name: "Mandovi River Bridges, Panaji",
            image: "images/mandovi_river_bridges.jpg",
            points: ["The series of bridges connecting Panaji to Porvorim are modern engineering landmarks of Goa."]
        }
    ],
    "Gujarat": [
        {
            name: "Rani ki Vav, Patan",
            image: "images/rani_ki_vav.jpg",
            points: ["A UNESCO World Heritage Site, this intricately constructed stepwell is a stunning example of Maru-Gurjara architecture."]
        },
        {
            name: "Sun Temple, Modhera",
            image: "images/sun_temple_modhera.jpg",
            points: ["A magnificent 11th-century temple dedicated to the Sun God, known for its grand architecture and detailed carvings."]
        },
        {
            name: "Sabarmati Ashram, Ahmedabad",
            image: "images/sabarmati_ashram.jpg",
            points: ["The former residence of Mahatma Gandhi, it served as a major center for the Indian freedom struggle."]
        },
        {
            name: "Great Rann of Kutch Gateway, Dhordo",
            image: "images/great_rann_of_kutch_gateway.jpg",
            points: ["The iconic gateway structure to the white salt desert, especially prominent during the Rann Utsav."]
        },
        {
            name: "Adalaj Stepwell, Adalaj",
            image: "images/adalaj_stepwell.jpg",
            points: ["A five-story deep stepwell renowned for its fusion of Hindu and Islamic architectural elements."]
        },
        {
            name: "Champaner-Pavagadh Archaeological Park, Champaner",
            image: "images/champaner-pavagadh_park.jpg",
            points: ["A UNESCO World Heritage Site featuring palaces, mosques, temples, and forts from the 8th to 14th centuries."]
        },
        {
            name: "Somnath Temple, Somnath",
            image: "images/somnath_temple.jpg",
            points: ["One of the twelve revered Jyotirlinga shrines of Lord Shiva, rebuilt several times after repeated destruction."]
        },
        {
            name: "Dwarkadhish Temple, Dwarka",
            image: "images/dwarkadhish_temple.jpg",
            points: ["A major Hindu pilgrimage site dedicated to Lord Krishna, part of the Char Dham yatra."]
        },
        {
            name: "Sidi Saiyyed Mosque, Ahmedabad",
            image: "images/sidi_saiyyed_mosque.jpg",
            points: ["Famous for its ten intricately carved stone latticework windows (jalis), especially the 'Tree of Life' jali."]
        },
        {
            name: "Laxmi Vilas Palace, Vadodara",
            image: "images/laxmi_vilas_palace.jpg",
            points: ["The magnificent residence of the Gaekwad royal family, built in Indo-Saracenic style and larger than Buckingham Palace."]
        },
        {
            name: "Dholavira Archaeological Site, Kutch",
            image: "images/dholavira_archaeological_site.jpg",
            points: ["A UNESCO World Heritage Site, it's one of the most prominent archaeological sites of the Indus Valley Civilization."]
        },
        {
            name: "Girnar Jain Temples, Junagadh",
            image: "images/girnar_jain_temples.jpg",
            points: ["A major Jain pilgrimage site with a complex of intricately carved marble temples atop Girnar Hill."]
        },
        {
            name: "Jama Masjid, Ahmedabad",
            image: "images/jama_masjid_ahmedabad.jpg",
            points: ["Built in 1424 by Ahmed Shah I, this mosque is a splendid example of Indo-Islamic architecture."]
        },
        {
            name: "Akshardham Temple, Gandhinagar",
            image: "images/akshardham_temple_gandhinagar.jpg",
            points: ["A massive modern Hindu temple complex built from pink sandstone, showcasing Indian art, culture, and values."]
        },
        {
            name: "Uparkot Fort, Junagadh",
            image: "images/uparkot_fort.jpg",
            points: ["An ancient fort with structures like Buddhist caves, stepwells, and a mosque, dating back over 2300 years."]
        },
        {
            name: "Mahabat Maqbara, Junagadh",
            image: "images/mahabat_maqbara.jpg",
            points: ["A stunning mausoleum known for its unique blend of Gothic and Indo-Islamic architecture and spiral staircases."]
        },
        {
            name: "Hutheesing Jain Temple, Ahmedabad",
            image: "images/hutheesing_jain_temple.jpg",
            points: ["A grand Jain temple built in 1848, constructed from white marble with elaborate carvings."]
        },
        {
            name: "Sarkhej Roza, Ahmedabad",
            image: "images/sarkhej_roza.jpg",
            points: ["A mosque and tomb complex with elegant, austere architecture, often called 'Ahmedabad's Acropolis'."]
        },
        {
            name: "Pols of Old Ahmedabad",
            image: "images/pols_of_old_ahmedabad.jpg",
            points: ["Traditional gated housing clusters in the old walled city, a UNESCO World Heritage City, with ornate wooden facades."]
        },
        {
            name: "Teen Darwaza, Ahmedabad",
            image: "images/teen_darwaza.jpg",
            points: ["A historic triple-arched gateway that was the entrance to the Royal Square of the Bhadra Fort."]
        },
        {
            name: "Prag Mahal, Bhuj",
            image: "images/prag_mahal.jpg",
            points: ["A 19th-century palace built in Italian Gothic style, featuring a tall clock tower with city views."]
        },
        {
            name: "Aina Mahal, Bhuj",
            image: "images/aina_mahal.jpg",
            points: ["The 'Palace of Mirrors', an 18th-century palace with a hall of mirrors and a collection of royal artifacts."]
        },
        {
            name: "Kirti Mandir, Porbandar",
            image: "images/kirti_mandir_porbandar.jpg",
            points: ["The ancestral home and birthplace of Mahatma Gandhi, now a memorial and museum dedicated to his life."]
        },
        {
            name: "Bhadra Fort, Ahmedabad",
            image: "images/bhadra_fort.jpg",
            points: ["Built by Ahmed Shah I in 1411, this fort complex housed royal palaces and mosques."]
        },
        {
            name: "Navlakha Temple, Ghumli",
            image: "images/navlakha_temple_ghumli.jpg",
            points: ["A 12th-century temple dedicated to the Sun God, one of the oldest and largest in Gujarat."]
        },
        {
            name: "Lothal Archaeological Site, Saragwala",
            image: "images/lothal_archaeological_site.jpg",
            points: ["A key site of the Indus Valley Civilization, known for having the world's earliest known dock."]
        },
        {
            name: "Rukmini Devi Temple, Dwarka",
            image: "images/rukmini_devi_temple.jpg",
            points: ["A beautifully carved 12th-century temple dedicated to Rukmini, the consort of Lord Krishna."]
        },
        {
            name: "Vijay Vilas Palace, Mandvi",
            image: "images/vijay_vilas_palace.jpg",
            points: ["A royal summer palace set in gardens along a private beach, showcasing Rajput architecture."]
        },
        {
            name: "Sayaji Baug (Kamati Baug), Vadodara",
            image: "images/sayaji_baug.jpg",
            points: ["A vast public park built by Maharaja Sayajirao Gaekwad III, housing a zoo, museums, and a planetarium."]
        },
        {
            name: "Dandi Bridge, Navsari",
            image: "images/dandi_bridge.jpg",
            points: ["A historic landmark on the route of the Dandi March, symbolizing the fight for independence."]
        },
        {
            name: "Shatrunjaya Hills Jain Temples, Palitana",
            image: "images/shatrunjaya_hills_temples.jpg",
            points: ["An incredibly vast complex of over 800 Jain temples built over 900 years, a major pilgrimage site."]
        },
        {
            name: "Vadnagar Kirti Torans, Vadnagar",
            image: "images/vadnagar_kirti_torans.jpg",
            points: ["A pair of magnificent 12th-century victory arches, showcasing exquisite carvings from the Solanki period."]
        },
        {
            name: "Dada Harir Stepwell, Ahmedabad",
            image: "images/dada_harir_stepwell.jpg",
            points: ["A 15th-century stepwell that is an excellent example of Solanki architectural style, with detailed carvings."]
        },
        {
            name: "Hazira Maqbara, Vadodara",
            image: "images/hazira_maqbara.jpg",
            points: ["The tomb of Qutb-ud-din Muhammad Khan, resembling Humayun's Tomb, an example of Mughal architecture."]
        },
        {
            name: "Jami Masjid, Champaner",
            image: "images/jami_masjid_champaner.jpg",
            points: ["A grand mosque within the Champaner-Pavagadh park, known for its towering minarets and ornate architecture."]
        },
        {
            name: "Dutch and Armenian Tombs, Surat",
            image: "images/dutch_armenian_tombs_surat.jpg",
            points: ["Impressive colonial-era mausoleums of Dutch and Armenian traders, reflecting Surat's history as a port city."]
        },
        {
            name: "Surat Castle (Old Fort), Surat",
            image: "images/surat_castle.jpg",
            points: ["A 16th-century fort built to defend the city from Portuguese attacks, now a restored heritage site."]
        },
        {
            name: "Kirti Toran, Vadodara",
            image: "images/kirti_toran_vadodara.jpg",
            points: ["A modern 'Arch of Triumph' built to celebrate the diamond jubilee of Maharaja Sayajirao Gaekwad III's rule."]
        },
        {
            name: "Nagina Wadi, Ahmedabad",
            image: "images/nagina_wadi.jpg",
            points: ["A garden island in the center of Kankaria Lake, accessible by a straight walkway lined with trees."]
        },
        {
            name: "Buddhist Caves, Junagadh",
            image: "images/buddhist_caves_junagadh.jpg",
            points: ["A complex of ancient rock-cut caves that served as monastic quarters for Buddhist monks."]
        },
        {
            name: "Kalika Mata Temple, Pavagadh Hill",
            image: "images/kalika_mata_temple_pavagadh.jpg",
            points: ["A revered Hindu temple and Shakti Pitha located on the summit of Pavagadh Hill."]
        },
        {
            name: "Takhteshwar Temple, Bhavnagar",
            image: "images/takhteshwar_temple.jpg",
            points: ["A white marble temple on a hill, offering panoramic views of Bhavnagar city."]
        },
        {
            name: "Gopnath Mahadev Temple, Gopnath",
            image: "images/gopnath_mahadev_temple.jpg",
            points: ["An ancient Shiva temple by the sea, associated with the medieval poet-saint Narsinh Mehta."]
        },
        {
            name: "Wankaner Palace, Wankaner",
            image: "images/wankaner_palace.jpg",
            points: ["The royal palace of Wankaner, showcasing a blend of Rajput, Venetian, and Gothic architectural styles."]
        },
        {
            name: "Galteshwar Temple, Sarnal",
            image: "images/galteshwar_temple.jpg",
            points: ["A 12th-century Shiva temple of the Malwa style with a unique eight-sided, profusely carved hall."]
        },
        {
            name: "Sardar Sarovar Dam Statue of Unity, Kevadia",
            image: "images/statue_of_unity.jpg",
            points: ["The world's tallest statue, a colossal monument dedicated to Indian statesman Sardar Vallabhbhai Patel."]
        },
        {
            name: "Pirotan Island Lighthouse, Jamnagar",
            image: "images/pirotan_island_lighthouse.jpg",
            points: ["A historic lighthouse in the Marine National Park, guiding ships in the Gulf of Kutch."]
        },
        {
            name: "Bet Dwarka Temples, Bet Dwarka Island",
            image: "images/bet_dwarka_temples.jpg",
            points: ["A complex of temples on an island believed to be the original residence of Lord Krishna."]
        },
        {
            name: "Hathigumpha of Udayagiri, Junagadh",
            image: "images/hathigumpha_udayagiri_junagadh.jpg",
            points: ["Ancient rock-cut caves with inscriptions, part of the larger Buddhist cave complex near Uparkot."]
        },
        {
            name: "Nishkalank Mahadev Temple, Koliyak",
            image: "images/nishkalank_mahadev_temple.jpg",
            points: ["A unique Shiva temple located 1.5 km into the sea, accessible only during low tide."]
        }
    ],
    "Haryana": [
        {
            name: "Sheikh Chilli's Tomb, Thanesar",
            image: "images/sheikh_chillis_tomb.jpg",
            points: ["A beautiful mausoleum of a Sufi saint, often compared to the Taj Mahal for its architectural elegance."]
        },
        {
            name: "Qutb Khan's Tomb, Nuh",
            image: "images/qutb_khans_tomb.jpg",
            points: ["An impressive red sandstone tomb from the Pathan period, showcasing intricate carvings and design."]
        },
        {
            name: "Brahma Sarovar, Kurukshetra",
            image: "images/brahma_sarovar.jpg",
            points: ["A vast sacred water tank believed to have been created by Lord Brahma, a central site in Kurukshetra."]
        },
        {
            name: "Jyotisar (Birthplace of Gita), Kurukshetra",
            image: "images/jyotisar.jpg",
            points: ["The sacred site where Lord Krishna is believed to have delivered the sermon of the Bhagavad Gita to Arjuna."]
        },
        {
            name: "Firoz Shah Palace Complex, Hisar",
            image: "images/firoz_shah_palace_complex.jpg",
            points: ["A 14th-century palace complex built by Firoz Shah Tughlaq, featuring mosques, tombs, and underground chambers."]
        },
        {
            name: "Ibrahim Lodhi's Tomb, Panipat",
            image: "images/ibrahim_lodhis_tomb.jpg",
            points: ["The tomb of the last Sultan of Delhi, who was defeated and killed in the First Battle of Panipat."]
        },
        {
            name: "Rakhigarhi Archaeological Site, Hisar",
            image: "images/rakhigarhi_archaeological_site.jpg",
            points: ["One of the largest and most significant sites of the Indus Valley Civilization, with ongoing excavations."]
        },
        {
            name: "Pinjore Gardens (Yadavindra Gardens), Pinjore",
            image: "images/pinjore_gardens.jpg",
            points: ["A beautiful 17th-century Mughal garden with fountains, water channels, and palaces."]
        },
        {
            name: "Star Monument (Samadhi of Tara Chand Ji), Bhiwani",
            image: "images/star_monument_bhiwani.jpg",
            points: ["A unique star-shaped memorial and temple complex dedicated to a revered spiritual leader."]
        },
        {
            name: "Chor Gumbad (Thieves' Dome), Narnaul",
            image: "images/chor_gumbad.jpg",
            points: ["A large, square tomb from the Tughlaq period, mistakenly known as a hideout for thieves."]
        },

        {
            name: "Kala Amb Memorial, Panipat",
            image: "images/kala_amb_memorial.jpg",
            points: ["A memorial dedicated to the soldiers who died in the Third Battle of Panipat."]
        },
        {
            name: "Morni Hills Fort, Morni",
            image: "images/morni_hills_fort.jpg",
            points: ["A historic fort nestled in the Morni Hills, offering panoramic views of the surrounding landscape."]
        },
        {
            name: "Sheetla Mata Mandir, Gurugram",
            image: "images/sheetla_mata_mandir_gurugram.jpg",
            points: ["A famous temple dedicated to the goddess of smallpox, attracting devotees from across North India."]
        },
        {
            name: "Kurukshetra Panorama and Science Centre, Kurukshetra",
            image: "images/kurukshetra_panorama_science_centre.jpg",
            points: ["A cylindrical building featuring a life-like panorama of the battle of Mahabharata and science exhibits."]
        },
        {
            name: "Badshahi Bag Gurudwara, Ambala",
            image: "images/badshahi_bag_gurudwara.jpg",
            points: ["A historic Sikh shrine commemorating the visit of Guru Gobind Singh."]
        },
        {
            name: "Farrukhnagar Fort, Farrukhnagar",
            image: "images/farrukhnagar_fort.jpg",
            points: ["A Mughal-era fort with an impressive octagonal design, known for its Dilli Darwaza."]
        },
        {
            name: "Sheesh Mahal, Farrukhnagar",
            image: "images/sheesh_mahal_farrukhnagar.jpg",
            points: ["A beautiful 'Palace of Mirrors' built by the Nawab of Farrukhnagar, reflecting Mughal architectural style."]
        },
        {
            name: "Bawdi (Stepwell) Ghaus Ali Shah, Farrukhnagar",
            image: "images/bawdi_ghaus_ali_shah.jpg",
            points: ["An impressive multi-storeyed octagonal stepwell, a fine example of Mughal water architecture."]
        },
        {
            name: "European Cemetery, Ambala",
            image: "images/european_cemetery_ambala.jpg",
            points: ["A historic colonial-era cemetery with ornate tombs and graves of British soldiers and officials."]
        },
        {
            name: "Lat ki Masjid, Hisar",
            image: "images/lat_ki_masjid.jpg",
            points: ["A unique mosque within the Firoz Shah Palace complex, named after its L-shaped prayer hall and Ashokan pillar."]
        },
        {
            name: "Sthaneshwar Mahadev Temple, Thanesar",
            image: "images/sthaneshwar_mahadev_temple.jpg",
            points: ["An ancient Shiva temple believed to be the place where the Pandavas prayed before the Mahabharata war."]
        },
        {
            name: "Kabuli Bagh Mosque, Panipat",
            image: "images/kabuli_bagh_mosque.jpg",
            points: ["Built by Emperor Babur to commemorate his victory in the First Battle of Panipat."]
        },
        {
            name: "Tomb of Bu-Ali Shah Qalandar, Panipat",
            image: "images/tomb_of_bu-ali_shah_qalandar.jpg",
            points: ["The dargah of a revered 13th-century Sufi saint, an important pilgrimage site for all faiths."]
        },
        {
            name: "Bhima Devi Temple Site Museum, Pinjore",
            image: "images/bhima_devi_temple_site.jpg",
            points: ["Ruins of an ancient temple, known as the 'Khajuraho of North India' for its erotic sculptures."]
        },
        {
            name: "Tomb of Ibrahim Khan Sur, Narnaul",
            image: "images/tomb_of_ibrahim_khan_sur.jpg",
            points: ["The magnificent tomb of Sher Shah Suri's grandfather, an example of early Sur architecture."]
        },
        {
            name: "Jal Mahal, Narnaul",
            image: "images/jal_mahal_narnaul.jpg",
            points: ["A beautiful 'Water Palace' built in the middle of a large tank by a local governor during Akbar's reign."]
        },
        {
            name: "Devi Talab Mandir, Panipat",
            image: "images/devi_talab_mandir_panipat.jpg",
            points: ["A historic temple complex with a large sacred pond, associated with the battles of Panipat."]
        },
        {
            name: "Agroha Dham, Agroha",
            image: "images/agroha_dham.jpg",
            points: ["A modern temple complex dedicated to the goddess Mahalakshmi and Maharaja Agrasen."]
        },
        {
            name: "Gurdawara Manji Sahib, Ambala",
            image: "images/gurdawara_manji_sahib_ambala.jpg",
            points: ["A historic Gurdwara associated with the sixth Sikh Guru, Guru Hargobind Sahib."]
        },
        {
            name: "Dargah Char Qutab, Hansi",
            image: "images/dargah_char_qutab.jpg",
            points: ["A complex containing the tombs of four revered Sufi saints, a significant spiritual center."]
        },
        {
            name: "Barsi Gate, Hansi",
            image: "images/barsi_gate_hansi.jpg",
            points: ["The main entrance to the ancient fort of Hansi, built during the reign of Alauddin Khilji."]
        },
        {
            name: "Asigarh Fort, Hansi",
            image: "images/asigarh_fort_hansi.jpg",
            points: ["A historic fort associated with Prithviraj Chauhan, with extensive ruins and structures."]
        },
        {
            name: "Tomb of Miran Sahib, Karnal",
            image: "images/tomb_of_miran_sahib.jpg",
            points: ["The tomb of a revered local saint, an important religious site in Karnal."]
        },
        {
            name: "Karnal Fort, Karnal",
            image: "images/karnal_fort.jpg",
            points: ["A historic fort built by Raja Gajpat Singh of Jind in the 18th century."]
        },
        {
            name: "Old Baoli, Rohtak",
            image: "images/old_baoli_rohtak.jpg",
            points: ["A historic stepwell in Rohtak, showcasing the traditional water architecture of the region."]
        },
        {
            name: "Kos Minars along GT Road",
            image: "images/kos_minars.jpg",
            points: ["Medieval milestones constructed by Sher Shah Suri and Mughal emperors along the Grand Trunk Road."]
        },
        {
            name: "Nabha House, Kurukshetra",
            image: "images/nabha_house.jpg",
            points: ["A heritage building that once served as a residence for the royal family of Nabha during their visits."]
        },
        {
            name: "St. Thomas' Church, Hisar",
            image: "images/st_thomas_church_hisar.jpg",
            points: ["A historic colonial-era church with Victorian architecture, built in the 19th century."]
        },
        {
            name: "Church of St. James, Karnal",
            image: "images/church_of_st_james_karnal.jpg",
            points: ["A beautiful colonial church known for its tall bell tower, commissioned by James Skinner."]
        },
        {
            name: "Bhuteshwar Temple, Jind",
            image: "images/bhuteshwar_temple_jind.jpg",
            points: ["An ancient temple dedicated to Lord Shiva, surrounded by a large water tank, giving it the name 'Rani Talab'."]
        },
        {
            name: "Jind Fort, Jind",
            image: "images/jind_fort.jpg",
            points: ["A historic fort that was the seat of the rulers of the princely state of Jind."]
        },
        {
            name: "Chhachhrauli Fort, Chhachhrauli",
            image: "images/chhachhrauli_fort.jpg",
            points: ["The main fort and residential complex of the rulers of the former Kalsia state."]
        },
        {
            name: "Saraswati Tirtha, Pehowa",
            image: "images/saraswati_tirtha_pehowa.jpg",
            points: ["An ancient and sacred bathing ghat on the banks of the Saraswati river, important for ancestral rites."]
        },
        {
            name: "Mata Mansa Devi Temple, Panchkula",
            image: "images/mata_mansa_devi_temple.jpg",
            points: ["A prominent Hindu temple dedicated to the goddess Mansa Devi, a form of Shakti."]
        },
        {
            name: "Guhari Mahal, Hisar",
            image: "images/guhari_mahal.jpeg",
            points: ["A palace within the Firoz Shah complex, believed to have been built for his beloved queen."]
        },
        {
            name: "Dhosi Hill Fort, Narnaul",
            image: "images/dhosi_hill_fort.jpg",
            points: ["Ruins of a fort on an extinct volcano, considered a sacred site associated with the sage Chyavana."]
        },
        {
            name: "Karan ka Tila, Kurukshetra",
            image: "images/karan_ka_tila.jpg",
            points: ["An archaeological mound believed to be the site of Karna's fort from the Mahabharata era."]
        },
        {
            name: "Shri Krishna Museum, Kurukshetra",
            image: "images/shri_krishna_museum.jpg",
            points: ["A museum dedicated to Lord Krishna, housing artifacts, sculptures, and paintings depicting his life."]
        },
        {
            name: "Farid's Tomb, Faridabad",
            image: "images/farids_tomb_faridabad.jpg",
            points: ["The tomb of the Sufi saint Baba Farid, from whom the city of Faridabad gets its name."]
        }
    ],
    "Himachal Pradesh": [
        {
            name: "Viceregal Lodge (Rashtrapati Niwas), Shimla",
            image: "images/viceregal_lodge_shimla.jpg",
            points: ["A magnificent Jacobethan-style building that was the summer residence of the British Viceroy of India."]
        },
        {
            name: "Hidimba Devi Temple, Manali",
            image: "images/hidimba_devi_temple.jpg",
            points: ["A unique ancient cave temple dedicated to Hidimba Devi, surrounded by a cedar forest."]
        },
        {
            name: "Kangra Fort, Kangra",
            image: "images/kangra_fort.jpg",
            points: ["One of the oldest and largest forts in the Himalayas, with a rich history spanning centuries."]
        },
        {
            name: "Christ Church, Shimla",
            image: "images/christ_church_shimla.jpeg",
            points: ["The second oldest church in North India, a prominent landmark on the Ridge with beautiful stained-glass windows."]
        },
        {
            name: "Tabo Monastery, Spiti Valley",
            image: "images/tabo_monastery.jpg",
            points: ["A UNESCO World Heritage Site contender, known as the 'Ajanta of the Himalayas' for its ancient murals."]
        },
        {
            name: "Key Monastery, Spiti Valley",
            image: "images/key_monastery.jpg",
            points: ["A famous Tibetan Buddhist monastery perched on a hilltop, resembling a fort with its box-like structures."]
        },
        {
            name: "Masrur Rock Cut Temple, Kangra",
            image: "images/masrur_rock_cut_temple.jpg",
            points: ["A stunning complex of 8th-century monolithic rock-cut temples in the Nagara style of architecture."]
        },
        {
            name: "Chamba Palace (Rang Mahal), Chamba",
            image: "images/chamba_palace.jpg",
            points: ["The former royal residence of the rulers of Chamba, showcasing a blend of Mughal and British architecture."]
        },
        {
            name: "Naggar Castle, Naggar",
            image: "images/naggar_castle.jpg",
            points: ["A medieval castle built with stone and wood, offering breathtaking views of the Kullu Valley."]
        },
        {
            name: "Jwalamukhi Temple, Kangra",
            image: "images/jwalamukhi_temple.jpg",
            points: ["A revered Shakti Pitha where eternal flames burn from a rock fissure, worshipped as the goddess Jwala."]
        },
        {
            name: "Baijnath Temple, Baijnath",
            image: "images/baijnath_temple.jpg",
            points: ["A 13th-century temple dedicated to Lord Shiva as Vaidyanath, 'the lord of physicians'."]
        },
        {
            name: "Lakshmi Narayan Temple Complex, Chamba",
            image: "images/lakshmi_narayan_temple_chamba.jpg",
            points: ["A group of six ancient stone temples built in the Shikhara style, the main shrine of Chamba town."]
        },
        {
            name: "Kalka-Shimla Railway, Kalka to Shimla",
            image: "images/kalka-shimla_railway.jpg",
            points: ["A UNESCO World Heritage Site, this narrow-gauge railway is an engineering marvel with over 100 tunnels and 800 bridges."]
        },
        {
            name: "Gaiety Theatre, Shimla",
            image: "images/gaiety_theatre_shimla.jpg",
            points: ["A historic Victorian theatre on the Mall Road, a hub for cultural events since the British era."]
        },
        {
            name: "Chintpurni Temple, Una",
            image: "images/chintpurni_temple.jpg",
            points: ["A major pilgrimage site and one of the Shakti Pithas, dedicated to the goddess Chhinnamastika."]
        },
        {
            name: "Dalai Lama Temple Complex (Tsuglagkhang), McLeod Ganj",
            image: "images/dalai_lama_temple_complex.jpg",
            points: ["The personal monastery of the 14th Dalai Lama, a major center for Tibetan Buddhism."]
        },
        {
            name: "Dhankar Monastery, Spiti Valley",
            image: "images/dhankar_monastery.jpg",
            points: ["A spectacular monastery perched precariously on a high spur overlooking the confluence of the Spiti and Pin rivers."]
        },
        {
            name: "Manikaran Sahib Gurudwara, Manikaran",
            image: "images/manikaran_sahib_gurudwara.jpg",
            points: ["A famous Sikh pilgrimage site known for its hot springs, believed to have healing properties."]
        },
        {
            name: "Arki Fort, Arki",
            image: "images/arki_fort.jpg",
            points: ["Known for its unique blend of Rajput and Mughal architecture and beautiful murals."]
        },
        {
            name: "Triloknath Temple, Lahaul",
            image: "images/triloknath_temple_lahaul.jpg",
            points: ["A sacred temple revered by both Hindus (as Lord Shiva) and Tibetan Buddhists (as Avalokiteshvara)."]
        },
        {
            name: "Jakhu Temple, Shimla",
            image: "images/jakhu_temple.jpg",
            points: ["A temple dedicated to the monkey god Hanuman, situated on Shimla's highest peak with a giant statue."]
        },
        {
            name: "Norbulingka Institute, Dharamshala",
            image: "images/norbulingka_institute.jpg",
            points: ["A center for preserving Tibetan culture, with beautiful traditional architecture, gardens, and workshops."]
        },
        {
            name: "Bhuri Singh Museum, Chamba",
            image: "images/bhuri_singh_museum.jpg",
            points: ["Housed in a heritage building, it has a rich collection of Chamba's cultural and artistic heritage."]
        },
        {
            name: "Naina Devi Temple, Bilaspur",
            image: "images/naina_devi_temple.jpg",
            points: ["A prominent Shakti Pitha on a hilltop, where the eyes of the goddess Sati are believed to have fallen."]
        },
        {
            name: "Sujanpur Fort (Tira), Sujanpur",
            image: "images/sujanpur_fort.jpg",
            points: ["A historic fort built by Raja Abhay Chand of Kangra, known for its wall paintings and grand Baradari."]
        },
        {
            name: "Rewalsar Lake Monasteries, Rewalsar",
            image: "images/rewalsar_lake_monasteries.jpg",
            points: ["The area around this sacred lake has several monasteries, a gurudwara, and Hindu temples, symbolizing religious harmony."]
        },
        {
            name: "Lord Elgin's Tomb, Dharamshala",
            image: "images/lord_elgins_tomb.jpg",
            points: ["The final resting place of James Bruce, 8th Earl of Elgin, a Viceroy of India, located at St. John in the Wilderness Church."]
        },
        {
            name: "St. John in the Wilderness Church, Dharamshala",
            image: "images/st_john_in_the_wilderness_church.jpg",
            points: ["An Anglican church with neo-Gothic architecture, known for its Belgian stained-glass windows."]
        },
        {
            name: "Mahakali Temple, Sarahan",
            image: "images/mahakali_temple_sarahan.jpg",
            points: ["A part of the Bhimakali temple complex, dedicated to the fierce form of the goddess."]
        },
        {
            name: "Shikari Devi Temple, Mandi",
            image: "images/shikari_devi_temple.jpg",
            points: ["An ancient, roofless temple on a high peak, dedicated to the goddess of hunters."]
        },
        {
            name: "Kamru Fort, Sangla Valley",
            image: "images/kamru_fort.jpg",
            points: ["A tower-like fort, the original seat of the Bushahr dynasty, with a temple dedicated to Kamakhya Devi."]
        },
        {
            name: "Baba Balak Nath Temple, Deotsidh",
            image: "images/baba_balak_nath_temple.jpg",
            points: ["A cave temple dedicated to Baba Balak Nath, a revered local deity, attracting thousands of pilgrims."]
        },
        {
            name: "Tara Devi Temple, Shimla",
            image: "images/tara_devi_temple.jpg",
            points: ["A serene temple dedicated to the goddess Tara, located on a hilltop with panoramic views."]
        },
        {
            name: "Manu Temple, Manali",
            image: "images/manu_temple_manali.jpg",
            points: ["The only temple in India dedicated to the sage Manu, the mythological creator of the human race."]
        },
        {
            name: "Roerich Art Gallery, Naggar",
            image: "images/roerich_art_gallery.jpg",
            points: ["The former residence of Russian artist Nicholas Roerich, now a gallery showcasing his Himalayan paintings."]
        },
        {
            name: "Kardang Monastery, Lahaul",
            image: "images/kardang_monastery.jpg",
            points: ["An important Drukpa Lineage monastery in Lahaul, known for its large library of Buddhist scriptures."]
        },
        {
            name: "Jubbal Palace, Jubbal",
            image: "images/jubbal_palace.jpg",
            points: ["A magnificent palace with a blend of European and indigenous architectural styles."]
        },
        {
            name: "St. Michael's Cathedral, Shimla",
            image: "images/st_michaels_cathedral_shimla.jpg",
            points: ["The first Roman Catholic church in Shimla, known for its French-Gothic style architecture."]
        },
        {
            name: "Gorton Castle, Shimla",
            image: "images/gorton_castle.jpg",
            points: ["A striking neo-Gothic heritage building that once housed the offices of the British Imperial Government."]
        },
        {
            name: "Prashar Lake Temple, Mandi",
            image: "images/prashar_lake_temple.jpg",
            points: ["A three-storied pagoda-like temple dedicated to the sage Prashar, located beside a sacred lake with a floating island."]
        },
        {
            name: "Bhimakali Temple, Sarahan",
            image: "images/bhimakali_temple_sarahan.jpg",
            points: ["A spectacular temple with a unique blend of Hindu and Buddhist architecture, a revered Shakti Pitha."]
        },
        {
            name: "Kalpa Monastery, Kalpa",
            image: "images/kalpa_monastery.jpg",
            points: ["A serene old Buddhist monastery in the beautiful village of Kalpa, offering stunning views of the Kinnaur Kailash range."]
        },
        {
            name: "Tripura Sundari Temple, Naggar",
            image: "images/tripura_sundari_temple_naggar.jpg",
            points: ["An ancient pagoda-style temple constructed from deodar wood, dedicated to the goddess Tripura Sundari."]
        },
        {
            name: "Chaurasi Temple Complex, Bharmour",
            image: "images/chaurasi_temple_complex_bharmour.jpg",
            points: ["A complex of 84 ancient temples and shrines dating back to the 7th century, the spiritual heart of Bharmour."]
        },
        {
            name: "Mirkula Devi Temple, Udaipur (Lahaul)",
            image: "images/mirkula_devi_temple.jpg",
            points: ["A unique wooden temple dedicated to the goddess Kali, famous for its intricate carvings depicting Buddhist and Hindu themes."]
        },
        {
            name: "Kotkhai Palace, Kotkhai",
            image: "images/kotkhai_palace.jpg",
            points: ["A towering palace built in the traditional Himachali architectural style with influences from Tibetan design."]
        },
        {
            name: "Mahunag Temple, Karsog",
            image: "images/mahunag_temple_karsog.jpg",
            points: ["An ancient temple dedicated to Mahunag (a form of Karna from Mahabharata), known for its wooden architecture."]
        },
        {
            name: "Padam Palace, Rampur",
            image: "images/padam_palace_rampur.jpg",
            points: ["The former winter capital of the Bushahr kingdom, this palace showcases fine wood carving and traditional design."]
        },
        {
            name: "Tattapani Hot Springs Structures, Tattapani",
            image: "images/tattapani_hot_springs_structures.jpg",
            points: ["The area around the natural sulphur hot springs has several small, historic temples and ghats."]
        },
        {
            name: "Woodville Palace Hotel, Shimla",
            image: "images/woodville_palace_hotel_shimla.jpg",
            points: ["The former residence of the Raja of Jubbal, this heritage hotel is a classic example of Raj-era architecture."]
        }
    ],
    "Jharkhand": [
        {
            name: "Baidyanath Jyotirlinga Temple, Deoghar",
            image: "images/baidyanath_jyotirlinga_temple.jpg",
            points: ["One of the twelve Jyotirlingas, this ancient temple complex is a major Hindu pilgrimage destination."]
        },
        {
            name: "Shikharji Jain Temples, Parasnath Hill",
            image: "images/shikharji_jain_temples.jpg",
            points: ["The most important Jain pilgrimage site, where twenty of the twenty-four Tirthankaras are believed to have attained moksha."]
        },
        {
            name: "Jagannath Temple, Ranchi",
            image: "images/jagannath_temple_ranchi.jpg",
            points: ["A 17th-century temple built in the same style as the Puri Jagannath Temple, located on a small hillock."]
        },
        {
            name: "Maluti Temples, Maluti Village",
            image: "images/maluti_temples.jpg",
            points: ["A unique village with a large group of 72 ancient terracotta temples, showcasing regional architecture."]
        },
        {
            name: "Palamu Forts, Latehar",
            image: "images/palamu_forts.jpg",
            points: ["A pair of ruined forts deep in the forests of Palamu, built by the Chero dynasty rulers."]
        },
        {
            name: "Rajrappa Chhinnamasta Temple, Ramgarh",
            image: "images/rajrappa_chhinnamasta_temple.jpg",
            points: ["A revered Shakti Pitha dedicated to the headless goddess Chhinnamasta, located at a river confluence."]
        },
        {
            name: "Sun Temple, Ranchi",
            image: "images/sun_temple_ranchi.jpg",
            points: ["A modern temple designed in the form of a giant chariot with 18 wheels and seven horses, dedicated to the Sun God."]
        },
        {
            name: "Tagore Hill, Ranchi",
            image: "images/tagore_hill.jpg",
            points: ["A scenic hill with a house (ashram) associated with Jyotirindranath Tagore, the elder brother of Rabindranath Tagore."]
        },
        {
            name: "Dewri Mandir, Tamar",
            image: "images/dewri_mandir.jpg",
            points: ["An ancient temple dedicated to a 16-armed form of Goddess Durga, famously visited by cricketer M.S. Dhoni."]
        },
        {
            name: "Itkhori Buddhist Site, Itkhori",
            image: "images/itkhori_buddhist_site.jpg",
            points: ["A religious site with temples and stupas reflecting a confluence of Hinduism, Buddhism, and Jainism."]
        },
        {
            name: "Navratangarh (Doisagarh), Gumla",
            image: "images/navratangarh.jpg",
            points: ["The ruined capital of the Nagvanshi dynasty, featuring a five-storied palace and other structures."]
        },
        {
            name: "Angrabadi Temple Complex, Khunti",
            image: "images/angrabadi_temple_complex.jpg",
            points: ["A serene temple complex dedicated to various Hindu deities, also known as Amreshwar Dham."]
        },
        {
            name: "Ranchi Lake Structures, Ranchi",
            image: "images/ranchi_lake_structures.jpg",
            points: ["The area around the lake, excavated by a British colonel, has historic ghats and pavilions."]
        },
        {
            name: "Rock Garden, Ranchi",
            image: "images/rock_garden_ranchi.jpeg",
            points: ["A garden with structures and sculptures carved out of the rocks of Gonda Hill."]
        },
        {
            name: "Jubilee Park, Jamshedpur",
            image: "images/jubilee_park.jpg",
            points: ["A Mughal-style garden gifted by Tata Steel, featuring fountains, a zoo, and a laser show."]
        },
        {
            name: "Madan Mohan Temple, Ranchi",
            image: "images/madan_mohan_temple_ranchi.jpeg",
            points: ["An old temple built in the 17th century, located on Bodai Pahar (hill)."]
        },
        {
            name: "War Cemetery, Ranchi",
            image: "images/war_cemetery_ranchi.jpg",
            points: ["A well-maintained cemetery for soldiers who died during World War II."]
        },
        {
            name: "Audrey House, Ranchi",
            image: "images/audrey_house.jpg",
            points: ["A colonial-era heritage building, once the summer residence of British officials, now a cultural center."]
        },
        {
            name: "Netarhat Old Bungalows, Netarhat",
            image: "images/netarhat_old_bungalows.jpg",
            points: ["Historic British-era bungalows and chalets in the hill station of Netarhat, reflecting colonial architecture."]
        },
        {
            name: "St. Mary's Cathedral, Ranchi",
            image: "images/st_marys_cathedral_ranchi.jpg",
            points: ["A prominent Catholic cathedral in Ranchi, known for its distinct architectural style."]
        },
        {
            name: "Birsa Munda's Memorial and Village, Ulihatu",
            image: "images/birsa_mundas_memorial.jpg",
            points: ["The birthplace and memorial of the tribal freedom fighter Birsa Munda, a site of great historical importance."]
        },
        {
            name: "GEL Church, Ranchi",
            image: "images/gel_church_ranchi.jpg",
            points: ["One of the oldest and largest Protestant churches in the region, with impressive architecture."]
        },
        {
            name: "Tribal Research Institute Museum, Ranchi",
            image: "images/tribal_research_institute_museum.jpg",
            points: ["A museum housed in a significant building, dedicated to preserving the culture and heritage of Jharkhand's tribes."]
        },
        {
            name: "Shahpur Fort, Medininagar",
            image: "images/shahpur_fort.jpg",
            points: ["A historic fort on the banks of the Koel river, offering scenic views."]
        },
        {
            name: "Tanginath Dham, Gumla",
            image: "images/tanginath_dham.jpg",
            points: ["An archaeological site with ruins of ancient temples, numerous Shiva lingas, and a legendary giant trident (Trishul)."]
        },
        {
            name: "Naulakha Mandir, Deoghar",
            image: "images/naulakha_mandir.jpg",
            points: ["A beautiful temple dedicated to Radha and Krishna, so named because nine lakh rupees were spent on its construction."]
        },
        {
            name: "Hazaribagh Jheel Watchtowers, Hazaribagh",
            image: "images/hazaribagh_jheel_watchtowers.jpg",
            points: ["Old watchtowers and structures around the scenic lakes of Hazaribagh, built during the colonial period."]
        },
        {
            name: "Kalyaneshwari Temple, Maithon",
            image: "images/kalyaneshwari_temple_maithon.jpg",
            points: ["An ancient temple dedicated to a form of Goddess Shakti, a popular pilgrimage site near the Maithon Dam."]
        },
        {
            name: "Maithon Dam, Maithon",
            image: "images/maithon_dam.jpeg",
            points: ["A major post-independence engineering marvel, one of the earliest multipurpose dams in India."]
        },
        {
            name: "Ramgarh Cantonment Colonial Buildings, Ramgarh",
            image: "images/ramgarh_cantonment_buildings.jpg",
            points: ["Historic colonial buildings within one of the oldest cantonments in India."]
        },
        {
            name: "Haradih Temple Ruins, Bundu",
            image: "images/haradih_temple_ruins.jpg",
            points: ["Archaeological remains of an ancient temple complex near the Kanchi river."]
        },
        {
            name: "Pahadi Mandir, Ranchi",
            image: "images/pahadi_mandir_ranchi.jpg",
            points: ["A Shiva temple on a hilltop offering panoramic views of Ranchi city; the Indian flag is hoisted here on national days."]
        },
        {
            name: "Rikhiapeeth Ashram, Deoghar",
            image: "images/rikhiapeeth_ashram.jpg",
            points: ["A renowned yoga ashram and spiritual center founded by Swami Satyananda Saraswati."]
        },
        {
            name: "Tilaiya Dam, Koderma",
            image: "images/tilaiya_dam.jpg",
            points: ["The first dam and hydro-electric power station constructed by the Damodar Valley Corporation."]
        },
        {
            name: "Surya Kund Structures, Hazaribagh",
            image: "images/surya_kund_structures.jpg",
            points: ["The complex around the hot water springs includes several small temples and bathing ghats."]
        },
        {
            name: "Isko Village Rock Art, Hazaribagh",
            image: "images/isko_village_rock_art.jpg",
            points: ["Ancient rock shelters with prehistoric paintings, providing insights into early human life in the region."]
        },
        {
            name: "Bokaro Steel Plant, Bokaro",
            image: "images/bokaro_steel_plant.jpg",
            points: ["A monumental industrial complex, one of India's 'temples of modern India' built with Soviet help."]
        },
        {
            name: "Kulbonga Mahadev Sthan, Simdega",
            image: "images/kulbonga_mahadev_sthan.jpg",
            points: ["An ancient sacred grove and temple dedicated to Lord Shiva, an important local pilgrimage site."]
        },
        {
            name: "Basukinath Temple, Dumka",
            image: "images/basukinath_temple.jpg",
            points: ["A major Shiva temple complex, often visited by pilgrims on their way to or from Baidyanath Dham."]
        },
        {
            name: "McCluskieganj Colonial Bungalows, McCluskieganj",
            image: "images/mccluskieganj_colonial_bungalows.jpg",
            points: ["Remnants of an Anglo-Indian settlement, these colonial bungalows evoke a unique, nostalgic charm."]
        },
        {
            name: "Jamshedpur Clock Tower, Jamshedpur",
            image: "images/jamshedpur_clock_tower.jpg",
            points: ["A prominent landmark in the planned city of Jamshedpur, located in a major commercial area."]
        },
        {
            name: "Panchghagh Falls Pavilions, Khunti",
            image: "images/panchghagh_falls_pavilions.jpg",
            points: ["Viewing pavilions and structures built to observe the scenic beauty of the five-stream waterfall."]
        },
        {
            name: "Sita Falls Ancient Structures, Ranchi",
            image: "images/sita_falls_ancient_structures.jpg",
            points: ["Ruins of small temples and structures near the Sita waterfall, linked to local folklore."]
        },
        {
            name: "Moti Jharna (Pearl Waterfall) Temple, Sahibganj",
            image: "images/moti_jharna_temple.jpg",
            points: ["A small, ancient temple located at the base of a scenic waterfall in the Rajmahal hills."]
        },
        {
            name: "Mary's Grotto, Tongo",
            image: "images/marys_grotto_tongo.jpg",
            points: ["A significant Catholic pilgrimage site with a shrine to the Virgin Mary set in a natural grotto."]
        },
        {
            name: "Ranchi University Administrative Building, Ranchi",
            image: "images/ranchi_university_building.jpg",
            points: ["The main administrative block of the university, a heritage building with colonial architectural influences."]
        },
        {
            name: "Kanke Dam, Ranchi",
            image: "images/kanke_dam.jpg",
            points: ["A large reservoir and dam built in the 1950s, a major landmark and water source for Ranchi."]
        },
        {
            name: "Ghatshila Bungalow of Bibhutibhushan, Ghatshila",
            image: "images/ghatshila_bungalow.jpeg",
            points: ["The house of the renowned Bengali writer Bibhutibhushan Bandyopadhyay, preserved as a memorial."]
        },
        {
            name: "Usha Martin University Campus Structures, Ranchi",
            image: "images/usha_martin_university_structures.jpg",
            points: ["Modern campus buildings that blend contemporary design with elements inspired by local culture."]
        },
        {
            name: "Sidhu Kanhu Park Memorial, Ranchi",
            image: "images/sidhu_kanhu_park_memorial.jpg",
            points: ["A memorial within a city park dedicated to the heroes of the Santhal rebellion of 1855."]
        }
    ],
    "Karnataka": [
        {
            name: "Hampi Group of Monuments, Hampi",
            image: "images/hampi_group_of_monuments.jpg",
            points: ["A UNESCO World Heritage Site, this vast complex of ruins was the capital of the Vijayanagara Empire."]
        },
        {
            name: "Mysore Palace (Amba Vilas), Mysuru",
            image: "images/mysore_palace.jpg",
            points: ["The magnificent royal residence of the Wadiyar dynasty, a stunning example of Indo-Saracenic architecture."]
        },
        {
            name: "Gol Gumbaz, Vijayapura (Bijapur)",
            image: "images/gol_gumbaz.jpg",
            points: ["The mausoleum of Mohammed Adil Shah, featuring the second-largest dome in the world and a whispering gallery."]
        },
        {
            name: "Virupaksha Temple, Hampi",
            image: "images/virupaksha_temple_hampi.jpg",
            points: ["The main functioning temple in Hampi, dedicated to Lord Shiva, with a towering gopuram."]
        },
        {
            name: "Pattadakal Group of Monuments, Pattadakal",
            image: "images/pattadakal_group_of_monuments.jpg",
            points: ["A UNESCO World Heritage Site showcasing a harmonious blend of Dravidian and Nagara architectural styles."]
        },
        {
            name: "Aihole Temple Complex, Aihole",
            image: "images/aihole_temple_complex.jpg",
            points: ["Known as the 'Cradle of Indian Temple Architecture', this site has over 125 ancient temples and monuments."]
        },
        {
            name: "Badami Cave Temples, Badami",
            image: "images/badami_cave_temples.jpg",
            points: ["A complex of four stunning rock-cut cave temples dedicated to Hindu and Jain deities."]
        },
        {
            name: "Shravanabelagola Gommateshwara Statue, Hassan",
            image: "images/gommateshwara_statue.jpg",
            points: ["A colossal 57-foot high monolithic statue of Bahubali, one of the most important Jain pilgrimage sites."]
        },
        {
            name: "Chennakesava Temple, Belur",
            image: "images/chennakesava_temple_belur.jpg",
            points: ["A masterpiece of Hoysala architecture, renowned for its intricate sculptures and detailed carvings."]
        },
        {
            name: "Hoysaleswara Temple, Halebidu",
            image: "images/hoysaleswara_temple_halebidu.jpg",
            points: ["A magnificent 12th-century temple dedicated to Lord Shiva, famous for its detailed friezes and sculptures."]
        },
        {
            name: "Vidhana Soudha, Bengaluru",
            image: "images/vidhana_soudha.jpg",
            points: ["The seat of the state legislature of Karnataka, an imposing granite building in the Neo-Dravidian style."]
        },
        {
            name: "Bidar Fort, Bidar",
            image: "images/bidar_fort.jpg",
            points: ["A formidable fort with palaces, mosques, and gardens, showcasing Persian and Indian architectural styles."]
        },
        {
            name: "Durga Temple, Aihole",
            image: "images/durga_temple_aihole.jpg",
            points: ["A unique temple known for its apsidal, parliament-like shape and intricately carved pillars."]
        },
        {
            name: "Bangalore Palace, Bengaluru",
            image: "images/bangalore_palace.jpg",
            points: ["A royal palace built in Tudor Revival style, known for its elegant wood carvings and beautiful gardens."]
        },
        {
            name: "Ibrahim Rauza, Vijayapura (Bijapur)",
            image: "images/ibrahim_rauza.jpg",
            points: ["A beautiful complex containing the tomb of Ibrahim Adil Shah II and a mosque, known for its symmetry and detail."]
        },
        {
            name: "Chitradurga Fort, Chitradurga",
            image: "images/chitradurga_fort.jpg",
            points: ["A massive seven-walled hill fort, known for its military architecture and legendary stories of valor."]
        },
        {
            name: "Tipu Sultan's Summer Palace, Bengaluru",
            image: "images/tipu_sultans_summer_palace.jpg",
            points: ["An elegant palace built entirely of teakwood, known for its ornate frescoes and Indo-Islamic architecture."]
        },
        {
            name: "Sri Krishna Temple, Udupi",
            image: "images/sri_krishna_temple_udupi.jpg",
            points: ["A famous Hindu temple where the deity is worshipped through a silver-plated window with nine holes (Navagraha Kitiki)."]
        },
        {
            name: "Murudeshwara Temple & Statue, Murudeshwar",
            image: "images/murudeshwara_temple_statue.jpg",
            points: ["Famous for its towering 20-storied gopura and the world's second-tallest Shiva statue."]
        },
        {
            name: "Daria Daulat Bagh (Tipu's Summer Palace), Srirangapatna",
            image: "images/daria_daulat_bagh.jpg",
            points: ["Tipu Sultan's summer palace set amidst beautiful gardens, famous for its vibrant murals depicting battles."]
        },
        {
            name: "St. Philomena's Church, Mysuru",
            image: "images/st_philomenas_church.jpg",
            points: ["One of the tallest churches in Asia, built in the Neo-Gothic style, inspired by the Cologne Cathedral in Germany."]
        },
        {
            name: "Chamundeshwari Temple, Mysuru",
            image: "images/chamundeshwari_temple.jpg",
            points: ["A hilltop temple dedicated to the patron goddess of the Mysore royal family."]
        },
        {
            name: "Bahmani Tombs, Ashtur",
            image: "images/bahmani_tombs_ashtur.jpg",
            points: ["A complex of twelve grand tombs of the Bahmani sultans, known for their impressive domes and tile work."]
        },
        {
            name: "Lalbagh Botanical Garden Glass House, Bengaluru",
            image: "images/lalbagh_glass_house.jpg",
            points: ["A historic glasshouse modeled on London's Crystal Palace, hosting famous bi-annual flower shows."]
        },
        {
            name: "Srirangapatna Fort, Srirangapatna",
            image: "images/srirangapatna_fort.jpg",
            points: ["The island fortress that was the capital of Hyder Ali and Tipu Sultan, witnessing historic battles."]
        },
        {
            name: "Mirjan Fort, Kumta",
            image: "images/mirjan_fort.jpg",
            points: ["A historic fort known for its high walls, bastions, and association with Queen Chennabhairadevi of Gersoppa."]
        },
        {
            name: "Hazararama Temple, Hampi",
            image: "images/hazararama_temple.jpg",
            points: ["The royal temple in Hampi, famous for its extensive friezes depicting the story of the Ramayana."]
        },
        {
            name: "Jaganmohan Palace, Mysuru",
            image: "images/jaganmohan_palace.jpg",
            points: ["A former royal palace, now an art gallery housing a vast collection of paintings, including those by Raja Ravi Varma."]
        },
        {
            name: "Gulbarga Fort, Kalaburagi",
            image: "images/gulbarga_fort.jpg",
            points: ["A massive fort that was the capital of the Bahmani Sultanate, containing the impressive Jama Masjid."]
        },
        {
            name: "Ranganathaswamy Temple, Srirangapatna",
            image: "images/ranganathaswamy_temple_srirangapatna.jpg",
            points: ["An ancient temple dedicated to Lord Vishnu, one of the five important pilgrimage sites (Pancharanga Kshetras)."]
        },
        {
            name: "Vittala Temple, Hampi",
            image: "images/vittala_temple_hampi.jpg",
            points: ["The architectural highlight of Hampi, famous for its stone chariot and musical pillars."]
        },
        {
            name: "Keshava Temple, Somanathapura",
            image: "images/keshava_temple_somanathapura.jpg",
            points: ["A stunning, perfectly preserved example of Hoysala architecture, known for its intricate details."]
        },
        {
            name: "Nandi Hills Fort, Chikkaballapur",
            image: "images/nandi_hills_fort.jpg",
            points: ["A historic hill fortress that was a summer retreat for Tipu Sultan, with ancient temples and monuments."]
        },
        {
            name: "Manjarabad Fort, Sakleshpur",
            image: "images/manjarabad_fort.jpg",
            points: ["A unique star-shaped fort built by Tipu Sultan, designed for defense with impressive views."]
        },
        {
            name: "Basavakalyan Fort, Basavakalyan",
            image: "images/basavakalyan_fort.jpg",
            points: ["A historic fort associated with the social reformer Basavanna and the Western Chalukya dynasty."]
        },
        {
            name: "Rosary Cathedral, Mangaluru",
            image: "images/rosary_cathedral_mangaluru.jpg",
            points: ["A beautiful Roman Catholic cathedral with a dome said to be modeled on St. Peter's Basilica in Rome."]
        },
        {
            name: "Doddabasappa Temple, Dambal",
            image: "images/doddabasappa_temple.jpg",
            points: ["A unique 12th-century temple with a 24-pointed star-shaped plan, an example of Western Chalukya architecture."]
        },
        {
            name: "Sringeri Sharada Peetham, Sringeri",
            image: "images/sringeri_sharada_peetham.jpg",
            points: ["The first and most important of the four monasteries established by Adi Shankaracharya."]
        },
        {
            name: "Melukote Cheluvanarayana Swamy Temple, Melukote",
            image: "images/melukote_temple.jpg",
            points: ["A sacred pilgrimage site for Vaishnavites, known for its grand Vairamudi festival."]
        },
        {
            name: "Kaup Lighthouse, Kaup",
            image: "images/kaup_lighthouse.jpg",
            points: ["A historic lighthouse on the coast, offering stunning views of the Arabian Sea and surrounding beaches."]
        },
        {
            name: "Raichur Fort, Raichur",
            image: "images/raichur_fort.jpg",
            points: ["A hill fort with a rich history, having been ruled by various dynasties including the Mauryas, Chalukyas, and Bahmanis."]
        },
        {
            name: "Gumbaz, Srirangapatna",
            image: "images/gumbaz_srirangapatnas.jpg",
            points: ["The mausoleum of Tipu Sultan, his father Hyder Ali, and his mother Fatima Begum, set in a beautiful garden."]
        },
        {
            name: "Mahmud Gawan Madrasa, Bidar",
            image: "images/mahmud_gawan_madrasas.jpg",
            points: ["The ruins of a medieval Islamic university, an important architectural landmark of the Bahmani period."]
        },
        {
            name: "Attara Kacheri (High Court), Bengaluru",
            image: "images/attara_kacheri.jpg",
            points: ["A striking red brick building in the neoclassical style, housing the High Court of Karnataka."]
        },
        {
            name: "Belgaum Fort, Belagavi",
            image: "images/belgaum_fort.jpg",
            points: ["An ancient fort with a unique oval shape, housing temples, mosques, and Jain basadis within its walls."]
        },
        {
            name: "Devanahalli Fort, Devanahalli",
            image: "images/devanahalli_fort.jpg",
            points: ["The birthplace of Tipu Sultan, this fort has a long history associated with various dynasties."]
        },
        {
            name: "Nandi Statue, Mysuru",
            image: "images/nandi_statue_mysuru.jpg",
            points: ["A giant monolithic statue of Nandi the bull, located on Chamundi Hills."]
        },
        {
            name: "Lakshmi Devi Temple, Doddagaddavalli",
            image: "images/lakshmi_devi_temple_doddagaddavalli.jpg",
            points: ["An early and unique example of Hoysala architecture, with four shrines arranged around a common center."]
        },
        {
            name: "St. Aloysius Chapel, Mangaluru",
            image: "images/st_aloysius_chapel.jpg",
            points: ["Famous for its stunning interior frescoes painted by the Italian Jesuit Antonio Moscheni, often called the 'Sistine Chapel of India'."]
        },
        {
            name: "Talakadu Temples, Talakadu",
            image: "images/talakadu_temples.jpg",
            points: ["A collection of ancient temples buried under sand dunes, excavated periodically for a special pilgrimage."]
        }
    ],
    "Kerala": [
        {
            name: "Mattancherry Palace (Dutch Palace), Kochi",
            image: "images/mattancherry_palace.jpg",
            points: ["A Portuguese palace gifted to the Raja of Cochin, known for its stunning murals depicting Hindu mythology."]
        },
        {
            name: "St. Francis Church, Kochi",
            image: "images/st_francis_church_kochi.jpg",
            points: ["The oldest European church in India, it was the original burial site of explorer Vasco da Gama."]
        },
        {
            name: "Paradesi Synagogue, Kochi",
            image: "images/paradesi_synagogue.jpg",
            points: ["The oldest active synagogue in the Commonwealth, known for its beautiful Belgian chandeliers and hand-painted Chinese tiles."]
        },
        {
            name: "Bekal Fort, Kasaragod",
            image: "images/bekal_fort.jpg",
            points: ["The largest and best-preserved fort in Kerala, offering breathtaking views of the Arabian Sea."]
        },
        {
            name: "Padmanabhaswamy Temple, Thiruvananthapuram",
            image: "images/padmanabhaswamy_temple.jpg",
            points: ["A magnificent temple dedicated to Lord Vishnu, renowned for its intricate architecture and immense hidden treasures."]
        },
        {
            name: "Edakkal Caves, Wayanad",
            image: "images/edakkal_caves.jpg",
            points: ["Two natural caves with prehistoric petroglyphs (rock carvings) dating back to the Neolithic era."]
        },
        {
            name: "Napier Museum, Thiruvananthapuram",
            image: "images/napier_museum.jpeg",
            points: ["A 19th-century museum with a unique Indo-Saracenic architectural style, housing a rich collection of artifacts."]
        },
        {
            name: "Hill Palace Museum, Thripunithura",
            image: "images/hill_palace_museum.jpg",
            points: ["The largest archaeological museum in Kerala, formerly the official residence of the Cochin Maharaja."]
        },
        {
            name: "Thalassery Fort, Thalassery",
            image: "images/thalassery_fort.jpg",
            points: ["A historic fort built by the British East India Company, known for its massive walls and secret tunnels."]
        },
        {
            name: "Kanakakkunnu Palace, Thiruvananthapuram",
            image: "images/kanakakkunnu_palace.jpg",
            points: ["A beautiful heritage palace that once hosted royal banquets, now a venue for cultural events."]
        },
        {
            name: "Vadakkunnathan Temple, Thrissur",
            image: "images/vadakkunnathan_temple.jpg",
            points: ["A classic example of Kerala temple architecture, it is the site of the world-famous Thrissur Pooram festival."]
        },
        {
            name: "Anjengo Fort (Anchuthengu Fort), Varkala",
            image: "images/anjengo_fort.jpg",
            points: ["One of the earliest British settlements in India, this fort played a significant role in colonial history."]
        },
        {
            name: "Kuthiramalika (Horse Palace), Thiruvananthapuram",
            image: "images/kuthiramalika.jpg",
            points: ["A palace known for the 122 carved wooden horses on its roof gables, showcasing traditional Kerala architecture."]
        },
        {
            name: "Chinese Fishing Nets, Kochi",
            image: "images/chinese_fishing_nets.jpg",
            points: ["Iconic shore-operated lift nets, believed to have been introduced by Chinese explorers in the 14th century."]
        },
        {
            name: "Krishnapuram Palace, Kayamkulam",
            image: "images/krishnapuram_palace.jpg",
            points: ["A historic palace and museum known for its traditional Kerala architecture and a massive mural painting, 'Gajendra Moksham'."]
        },
        {
            name: "Jewish Cemetery, Kochi",
            image: "images/jewish_cemetery_kochi.jpg",
            points: ["An ancient cemetery with unique tombstones inscribed in Hebrew and Malayalam."]
        },
        {
            name: "Palakkad Fort (Tipu's Fort), Palakkad",
            image: "images/palakkad_fort.jpg",
            points: ["A well-preserved fort in the heart of Palakkad town, rebuilt by Hyder Ali in the 18th century."]
        },
        {
            name: "St. Angelo Fort, Kannur",
            image: "images/st_angelo_fort_kannur.jpg",
            points: ["A massive triangular laterite fort built by the first Portuguese Viceroy, offering stunning sea views."]
        },
        {
            name: "Kerala Kalamandalam, Cheruthuruthy",
            image: "images/kerala_kalamandalam.jpg",
            points: ["A major center for learning Indian performing arts, housed in a campus with traditional architecture."]
        },
        {
            name: "Thirunelli Temple, Wayanad",
            image: "images/thirunelli_temple.jpg",
            points: ["An ancient Vishnu temple nestled in the Brahmagiri hills, known as the 'Kashi of the South'."]
        },
        {
            name: "Santa Cruz Basilica, Kochi",
            image: "images/santa_cruz_basilica_kochi.jpg",
            points: ["One of the eight Basilicas in India, renowned for its impressive Indo-European and Gothic architecture."]
        },
        {
            name: "Pazhassi Raja's Tomb, Mananthavady",
            image: "images/pazhassi_rajas_tomb.jpg",
            points: ["A memorial park built at the site where the great freedom fighter Pazhassi Raja was cremated."]
        },
        {
            name: "Thiruvanchikulam Siva Temple, Kodungallur",
            image: "images/thiruvanchikulam_siva_temple.jpg",
            points: ["One of the oldest Shiva temples in South India, with beautiful murals and stone carvings."]
        },
        {
            name: "Gundert Bungalow, Thalassery",
            image: "images/gundert_bungalow.jpg",
            points: ["The former residence of Dr. Hermann Gundert, the German scholar who compiled the first Malayalam dictionary."]
        },
        {
            name: "Bolgatty Palace, Kochi",
            image: "images/bolgatty_palace.jpg",
            points: ["A former Dutch palace on an island, one of the oldest of its kind outside Holland, now a heritage hotel."]
        },
        {
            name: "Kottukal Cave Temple, Kollam",
            image: "images/kottukal_cave_temple.jpg",
            points: ["A unique rock-cut temple from the 7th century, carved out of a single massive rock."]
        },
        {
            name: "Arakkal Museum, Kannur",
            image: "images/arakkal_museum.jpg",
            points: ["Housed in a part of the Arakkal Palace, it showcases the heritage of the only Muslim royal family in Kerala."]
        },
        {
            name: "Vizhinjam Rock Cut Cave, Vizhinjam",
            image: "images/vizhinjam_rock_cut_cave.jpg",
            points: ["An 8th-century rock-cut shrine with unfinished carvings of Shiva and Parvati."]
        },
        {
            name: "Poonjar Palace, Kottayam",
            image: "images/poonjar_palace.jpg",
            points: ["A historic palace showcasing traditional architecture and housing a collection of royal antiques."]
        },
        {
            name: "Old Harbour Bridge, Kochi",
            image: "images/old_harbour_bridge_kochi.jpg",
            points: ["A historic lift bridge connecting Willingdon Island to the mainland, an engineering landmark."]
        },
        {
            name: "Kaviyoor Mahadeva Temple, Kaviyoor",
            image: "images/kaviyoor_mahadeva_temple.jpeg",
            points: ["An ancient Shiva temple mentioned in the Ramayana, noted for its fine wood carvings."]
        },
        {
            name: "Thrikkakara Vamanamoorthy Temple, Kochi",
            image: "images/thrikkakara_vamanamoorthy_temple.jpg",
            points: ["A temple dedicated to Vamana, an avatar of Vishnu, and the focal point of the Onam festival legend."]
        },
        {
            name: "Varkala Sivagiri Mutt, Varkala",
            image: "images/varkala_sivagiri_mutt.jpg",
            points: ["The ashram and tomb of the social reformer Sree Narayana Guru, a major pilgrimage center."]
        },
        {
            name: "Jain Temple, Sultan Bathery",
            image: "images/jain_temple_sultan_bathery.jpg",
            points: ["An ancient Jain temple believed to have been used as an ammunition depot (battery) by Tipu Sultan."]
        },
        {
            name: "Pierce Leslie Bungalow, Kochi",
            image: "images/pierce_leslie_bungalow.jpg",
            points: ["A charming heritage building showcasing a blend of Portuguese, Dutch, and local architectural styles."]
        },
        {
            "name": "Koyikkal Palace, Nedumangad",
            "image": "images/koyikkal_palace.jpg",
            "points": ["A 16th-century palace that houses a Folklore Museum and a Numismatics Museum."]
        },
        {
            "name": "Ettumanoor Mahadeva Temple, Kottayam",
            "image": "images/ettumanoor_mahadeva_temple.jpg",
            "points": ["Famous for its exquisite mural paintings, including the 'Pradosha Nritham' (dance of Shiva)."]
        },
        {
            "name": "Aluva Palace, Aluva",
            "image": "images/aluva_palace.jpg",
            "points": ["A historic royal palace on the banks of the Periyar River, a fine example of traditional architecture."]
        },
        {
            "name": "Mannarasala Sree Nagaraja Temple, Haripad",
            "image": "images/mannarasala_temple.jpg",
            "points": ["An ancient temple dedicated to the serpent gods (Nagaraja), set in a forest grove."]
        },
        {
            "name": "Thiruvanvandoor Mahavishnu Temple, Alappuzha",
            "image": "images/thiruvanvandoor_temple.jpg",
            "points": ["One of the 108 Divya Desams, a sacred temple dedicated to Lord Vishnu, part of the Pandava temples."]
        },
        {
            "name": "David Hall Art Gallery, Kochi",
            "image": "images/david_hall_art_gallery.jpg",
            "points": ["A restored 17th-century Dutch bungalow that now serves as a contemporary art gallery and cafe."]
        },
        {
            "name": "Kundala Dam, Munnar",
            "image": "images/kundala_dam.jpeg",
            "points": ["Asia's first arch dam, an engineering marvel set amidst the scenic tea gardens of Munnar."]
        },
        {
            "name": "Punnathur Kotta (Elephant Sanctuary), Guruvayur",
            "image": "images/punnathur_kotta.jpg",
            "points": ["A former palace ground that now houses the elephants belonging to the Guruvayur Temple."]
        },
        {
            "name": "Madayi Mosque, Kannur",
            "image": "images/madayi_mosque.jpg",
            "points": ["One of the oldest mosques in Kerala, believed to have been originally established by Malik ibn Dinar."]
        },
        {
            "name": "Chittur Kavu Devi Temple, Palakkad",
            "image": "images/chittur_kavu_devi_temple.jpg",
            "points": ["A famous Bhagavathy temple known for its grand 'Konganpada' festival, a mock-fight commemoration."]
        },
        {
            "name": "Chendamangalam Synagogue, Chendamangalam",
            "image": "images/chendamangalam_synagogue.jpg",
            "points": ["A restored 17th-century synagogue reflecting traditional Kerala architecture, part of a multi-faith historic site."]
        },
        {
            "name": "Aspinwall House, Kochi",
            "image": "images/aspinwall_house.jpg",
            "points": ["A large sea-facing heritage property that is the primary venue for the Kochi-Muziris Biennale art exhibition."]
        },
        {
            "name": "Thiruvallam Sree Parasurama Swami Temple, Thiruvananthapuram",
            "image": "images/thiruvallam_parasurama_temple.jpg",
            "points": ["One of the few temples in India dedicated to the sage Parasurama, a major center for ancestral rites."]
        },
        {
            "name": "Peralassery Sri Subramanya Temple, Kannur",
            "image": "images/peralassery_sri_subramanya_temple.jpg",
            "points": ["An ancient temple famous for its massive and intricate stepwell (baori)."]
        },
        {
            "name": "Kowdiar Palace, Thiruvananthapuram",
            "image": "images/kowdiar_palace.jpg",
            "points": ["The official residence of the Travancore royal family, a grand architectural monument (private property)."]
        }
    ],
    "Madhya Pradesh": [
        {
            name: "Khajuraho Group of Monuments, Khajuraho",
            image: "images/khajuraho_group_of_monuments.jpg",
            points: ["A UNESCO World Heritage Site famous for its stunning Nagara-style temples with intricate and erotic sculptures."]
        },
        {
            name: "Sanchi Stupa, Sanchi",
            image: "images/sanchi_stupa.jpg",
            points: ["A UNESCO World Heritage Site, this great Buddhist stupa is one of the oldest stone structures in India."]
        },
        {
            name: "Gwalior Fort, Gwalior",
            image: "images/gwalior_fort.jpg",
            points: ["An imposing hill fort, described as the 'pearl among the fortresses in India', with palaces, temples, and water tanks."]
        },
        {
            name: "Rock Shelters of Bhimbetka, Raisen",
            image: "images/rock_shelters_of_bhimbetka.jpg",
            points: ["A UNESCO World Heritage Site with ancient rock shelters and caves featuring prehistoric paintings."]
        },
        {
            name: "Mandu (City of Joy), Mandu",
            image: "images/mandu.jpg",
            points: ["An ancient fortified city with spectacular Afghan architecture, including palaces, mosques, and tombs."]
        },
        {
            name: "Jahaz Mahal, Mandu",
            image: "images/jahaz_mahal.jpg",
            points: ["The 'Ship Palace', beautifully situated between two artificial lakes, appearing like a ship afloat."]
        },
        {
            name: "Orchha Fort Complex, Orchha",
            image: "images/orchha_fort_complex.jpg",
            points: ["A medieval complex on the Betwa River, containing grand palaces like Jahangir Mahal and Raja Mahal."]
        },
        {
            name: "Mahakaleshwar Jyotirlinga, Ujjain",
            image: "images/mahakaleshwar_jyotirlinga.jpg",
            points: ["One of the twelve sacred Jyotirlingas, a revered Shiva temple with a south-facing main deity."]
        },
        {
            name: "Omkareshwar Temple, Omkareshwar",
            image: "images/omkareshwar_temple.jpg",
            points: ["A sacred island shaped like the 'Om' symbol, housing another of the twelve Jyotirlingas."]
        },
        {
            name: "Jai Vilas Palace, Gwalior",
            image: "images/jai_vilas_palace.jpg",
            points: ["A 19th-century palace of the Scindia dynasty, known for its opulent Durbar Hall with two massive chandeliers."]
        },
        {
            name: "Udayagiri Caves, Vidisha",
            image: "images/udayagiri_caves.jpg",
            points: ["A complex of 20 rock-cut caves from the early 5th century, containing some of the oldest Hindu and Jain iconography."]
        },
        {
            name: "Chaturbhuj Temple, Orchha",
            image: "images/chaturbhuj_temple_orchha.jpg",
            points: ["A grand temple with soaring spires, originally built to enshrine an idol of Lord Rama."]
        },
        {
            name: "Kandariya Mahadeva Temple, Khajuraho",
            image: "images/kandariya_mahadeva_temple.jpg",
            points: ["The largest and most ornate temple in Khajuraho, representing the pinnacle of Chandela architecture."]
        },
        {
            name: "Bandhavgarh Fort, Bandhavgarh National Park",
            image: "images/bandhavgarh_fort.jpg",
            points: ["An ancient fort on a high cliff, with temples and a colossal reclining statue of Vishnu."]
        },
        {
            name: "Rani Roopmati's Pavilion, Mandu",
            image: "images/rani_roopmatis_pavilion.jpg",
            points: ["A scenic pavilion offering stunning views, built for Queen Roopmati to gaze upon the Narmada River."]
        },
        {
            name: "Dhuandhar Falls Viewing Platforms, Bhedaghat",
            image: "images/dhuandhar_falls_platforms.jpg",
            points: ["Structures and a ropeway built to view the powerful 'smoke cascade' falls on the Narmada River."]
        },
        {
            name: "Chausath Yogini Temple, Bhedaghat",
            image: "images/chausath_yogini_temple_bhedaghat.jpg",
            points: ["A 10th-century temple with a circular cloister of 81 shrines (originally 64) dedicated to yoginis."]
        },
        {
            name: "Bharat Bhavan, Bhopal",
            image: "images/bharat_bhavan.jpg",
            points: ["Designed by architect Charles Correa, this is a multi-arts complex and a prime example of modern Indian architecture."]
        },
        {
            name: "Islamnagar Fort, Bhopal",
            image: "images/islamnagar_fort.jpg",
            points: ["The former capital of the Bhopal princely state, this fort has beautiful palaces like the Rani Mahal and Chaman Mahal."]
        },
        {
            name: "Taj-ul-Masajid, Bhopal",
            image: "images/taj-ul-masajid.jpg",
            points: ["One of the largest mosques in Asia, with towering minarets and grand domes."]
        },
        {
            name: "Sas-Bahu Temple, Gwalior",
            image: "images/sas-bahu_temple_gwalior.jpg",
            points: ["A pair of 11th-century temples dedicated to Vishnu, known for their intricate carvings."]
        },
        {
            name: "Teli Ka Mandir, Gwalior Fort",
            image: "images/teli_ka_mandir.jpg",
            points: ["The tallest and oldest surviving structure in Gwalior Fort, with a unique blend of architectural styles."]
        },
        {
            name: "Raja Ram Temple, Orchha",
            image: "images/raja_ram_temple_orchha.jpg",
            points: ["The only temple in India where Lord Rama is worshipped as a king, housed in a former palace."]
        },
        {
            name: "Chanderi Fort, Chanderi",
            image: "images/chanderi_fort.jpg",
            points: ["A massive Mughal fort on a hill, offering panoramic views of the historic town of Chanderi."]
        },
        {
            name: "Gohar Mahal, Bhopal",
            image: "images/gohar_mahal.jpg",
            points: ["A historic palace on the banks of the Upper Lake, a fine example of Hindu-Mughal architecture."]
        },
        {
            name: "Cenotaphs of Orchha, Orchha",
            image: "images/cenotaphs_of_orchha.jpg",
            points: ["A group of 14 impressive chhatris (cenotaphs) of the Bundela rulers on the banks of the Betwa River."]
        },
        {
            name: "Ajaigarh Fort, Panna",
            image: "images/ajaigarh_fort.jpg",
            points: ["A historic hill fort that was a stronghold of the Chandela dynasty, with ruined temples and rock carvings."]
        },
        {
            name: "Kuno National Park Fort, Kuno",
            image: "images/kuno_national_park_fort.jpg",
            points: ["An ancient fort located within the national park, offering views of the Kuno River."]
        },
        {
            name: "Jain Temples of Sonagiri, Sonagiri",
            image: "images/jain_temples_of_sonagiri.jpg",
            points: ["A major Jain pilgrimage site with over 100 white Digambar Jain temples scattered on a hill."]
        },
        {
            name: "Bhojeshwar Temple, Bhojpur",
            image: "images/bhojeshwar_temple.jpg",
            points: ["An unfinished 11th-century Shiva temple famous for its massive single-stone lingam, one of the tallest in the world."]
        },
        {
            name: "Asirgarh Fort, Burhanpur",
            image: "images/asirgarh_fort.jpg",
            points: ["An impregnable fort known as the 'Gateway to the Deccan', with a rich history under various dynasties."]
        },
        {
            name: "Hoshang Shah's Tomb, Mandu",
            image: "images/hoshang_shahs_tomb.jpg",
            points: ["India's first marble monument, a fine example of Afghan architecture that is said to have inspired the Taj Mahal."]
        },
        {
            name: "Rani Mahal, Orchha",
            image: "images/rani_mahal_orchha.jpg",
            points: ["The 'Queen's Palace', known for its vibrant and well-preserved murals depicting mythological and secular themes."]
        },
        {
            name: "Maheshwar Fort and Ghats, Maheshwar",
            image: "images/maheshwar_fort_ghats.jpg",
            points: ["A historic fort and palace complex on the Narmada River, built by Queen Ahilyabai Holkar."]
        },
        {
            name: "Man Singh Palace, Gwalior Fort",
            image: "images/man_singh_palace.jpg",
            points: ["A stunning example of Hindu architecture, adorned with blue ceramic tiles and intricate carvings."]
        },
        {
            name: "Shaukat Mahal, Bhopal",
            image: "images/shaukat_mahal.jpg",
            points: ["A unique palace with a blend of Post-Renaissance and Gothic architectural styles."]
        },
        {
            name: "Dhar Fort, Dhar",
            image: "images/dhar_fort.jpg",
            points: ["A historic fort built of red sandstone, associated with the legendary King Bhoja of the Paramara dynasty."]
        },
        {
            name: "Narwar Fort, Shivpuri",
            image: "images/narwar_fort.jpg",
            points: ["A large medieval fort on a hill, with a history dating back to the Kachwaha Rajputs."]
        },
        {
            name: "Chhatris of Shivpuri, Shivpuri",
            image: "images/chhatris_of_shivpuri.jpg",
            points: ["Ornate marble cenotaphs of the Scindia rulers, set in a Mughal-style garden."]
        },
        {
            name: "Dharmrajeshwar Temple, Mandsaur",
            image: "images/dharmrajeshwar_temple.jpg",
            points: ["A 9th-century monolithic rock-cut temple complex carved out of a single large rock."]
        },
        {
            name: "Bateshwar Group of Temples, Morena",
            image: "images/bateshwar_group_of_temples.jpg",
            points: ["A complex of nearly 200 sandstone temples and shrines from the Gurjara-Pratihara dynasty."]
        },
        {
            name: "Koshak Mahal, Chanderi",
            image: "images/koshak_mahal.jpg",
            points: ["A grand seven-storied palace built by the Sultan of Malwa, now in picturesque ruins."]
        },
        {
            name: "Badal Mahal Gate, Chanderi",
            image: "images/badal_mahal_gate.jpg",
            points: ["A single, towering victory gate without a palace, an iconic symbol of Chanderi."]
        },
        {
            name: "Madhav National Park heritage structures, Shivpuri",
            image: "images/madhav_national_park_structures.jpg",
            points: ["Includes George Castle, a hunting lodge built for a British king, and the Sakhya Sagar boat club building."]
        },
        {
            name: "Heliodorus Pillar, Vidisha",
            image: "images/heliodorus_pillar.jpg",
            points: ["A stone column erected around 113 BCE by a Greek ambassador, an important archaeological evidence of early Vaishnavism."]
        },
        {
            name: "Kal Bhairav Temple, Ujjain",
            image: "images/kal_bhairav_temple.jpg",
            points: ["A famous temple where liquor is offered to the deity as a part of the worship ritual."]
        },
        {
            "name": "Ramnagar Fort, Mandla",
            "image": "images/ramnagar_fort_mandla.jpg",
            "points": ["The former capital of the Gond dynasty, this fort is picturesquely located in a loop of the Narmada River."]
        },
        {
            "name": "Burhanpur Shahi Qila, Burhanpur",
            "image": "images/burhanpur_shahi_qila.jpg",
            "points": ["A royal palace on the Tapti river, famous for its well-preserved audience hall and bathhouse (hammam)."]
        },
        {
            "name": "Pisan Hari Ki Madiya Jain Temple, Jabalpur",
            "image": "images/pisan_hari_ki_madiya.jpg",
            "points": ["A revered 15th-century Jain temple complex located on a hilltop."]
        },
        {
            "name": "Ken Gharial Sanctuary Watchtowers, Panna",
            "image": "images/ken_gharial_sanctuary_watchtowers.jpg",
            "points": ["Heritage watchtowers within the sanctuary offering views of the Ken river and its wildlife."]
        }
    ],
    "Maharashtra": [
        {
            name: "Ajanta Caves, Aurangabad",
            image: "images/ajanta_caves.jpeg",
            points: ["A UNESCO World Heritage Site, these rock-cut Buddhist caves are famous for their magnificent mural paintings."]
        },
        {
            name: "Ellora Caves, Aurangabad",
            image: "images/ellora_caves.jpg",
            points: ["A UNESCO World Heritage Site with rock-cut monasteries and temples of Hindu, Buddhist, and Jain faiths, including the monolithic Kailasa Temple."]
        },
        {
            name: "Gateway of India, Mumbai",
            image: "images/gateway_of_india.jpg",
            points: ["An iconic arch-monument built to commemorate the landing of King George V and Queen Mary."]
        },
        {
            name: "Chhatrapati Shivaji Maharaj Terminus, Mumbai",
            image: "images/chhatrapati_shivaji_terminus.jpg",
            points: ["A UNESCO World Heritage Site and a historic railway station known for its stunning Victorian Gothic architecture."]
        },
        {
            name: "Elephanta Caves, Elephanta Island",
            image: "images/elephanta_caves.jpg",
            points: ["A UNESCO World Heritage Site on an island, famous for its rock-cut temples dedicated to Lord Shiva."]
        },
        {
            name: "Shaniwar Wada, Pune",
            image: "images/shaniwar_wada.jpg",
            points: ["The historic fortified seat of the Peshwas of the Maratha Empire, known for its grand palaces and fountains."]
        },
        {
            name: "Daulatabad Fort, Aurangabad",
            image: "images/daulatabad_fort.jpg",
            points: ["A formidable hill fortress with ingenious defensive systems, including dark, winding passages."]
        },
        {
            name: "Bibi Ka Maqbara, Aurangabad",
            image: "images/bibi_ka_maqbara.jpg",
            points: ["A beautiful mausoleum of Aurangzeb's wife, closely resembling the Taj Mahal, often called the 'Taj of the Deccan'."]
        },
        {
            name: "Raigad Fort, Raigad",
            image: "images/raigad_fort.jpg",
            points: ["The hill fort that served as the capital of Chhatrapati Shivaji Maharaj's Maratha Empire."]
        },
        {
            name: "Aga Khan Palace, Pune",
            image: "images/aga_khan_palace.jpg",
            points: ["A historic palace where Mahatma Gandhi and other freedom fighters were imprisoned during the Quit India Movement."]
        },
        {
            name: "Shirdi Sai Baba Temple, Shirdi",
            image: "images/shirdi_sai_baba_temple.jpg",
            points: ["A major pilgrimage site dedicated to the revered saint Sai Baba of Shirdi."]
        },
        {
            name: "Trimbakeshwar Shiva Temple, Trimbak",
            image: "images/trimbakeshwar_shiva_temple.jpg",
            points: ["An ancient Hindu temple and one of the twelve Jyotirlingas, located at the source of the Godavari River."]
        },
        {
            name: "Sindhudurg Fort, Malvan",
            image: "images/sindhudurg_fort.jpg",
            points: ["A formidable sea fort built by Chhatrapati Shivaji Maharaj, located on an islet in the Arabian Sea."]
        },
        {
            name: "Pratapgad Fort, Satara",
            image: "images/pratapgad_fort.jpg",
            points: ["A large hill fort famous as the site of the historic battle between Shivaji and Afzal Khan."]
        },
        {
            name: "Global Vipassana Pagoda, Mumbai",
            image: "images/global_vipassana_pagoda.jpg",
            points: ["A massive stone dome built without any supporting pillars, serving as a meditation hall and peace monument."]
        },
        {
            name: "Mumbai High Court, Mumbai",
            image: "images/mumbai_high_court.jpg",
            points: ["A beautiful Gothic Revival building, part of the Victorian and Art Deco Ensemble of Mumbai UNESCO site."]
        },
        {
            name: "Sinhagad Fort, Pune",
            image: "images/sinhagad_fort.jpg",
            points: ["A hill fortress with a long history, famous for the legendary Battle of Sinhagad in 1670."]
        },
        {
            name: "Bandra-Worli Sea Link, Mumbai",
            image: "images/bandra-worli_sea_link.jpg",
            points: ["A modern cable-stayed bridge that is an iconic architectural and engineering landmark of Mumbai."]
        },
        {
            name: "Shree Siddhivinayak Temple, Mumbai",
            image: "images/shree_siddhivinayak_temple.jpg",
            points: ["A famous Hindu temple dedicated to Lord Ganesha, one of the richest temples in Mumbai."]
        },
        {
            name: "Karla and Bhaja Caves, Lonavala",
            image: "images/karla_bhaja_caves.jpg",
            points: ["Ancient rock-cut Buddhist caves known for their large chaityas (prayer halls) and intricate viharas (monasteries)."]
        },
        {
            name: "Shivneri Fort, Junnar",
            image: "images/shivneri_fort.jpg",
            points: ["The birthplace of Chhatrapati Shivaji Maharaj, a historic hill fort with seven massive gates."]
        },
        {
            name: "Chand Minar, Daulatabad",
            image: "images/chand_minar.jpg",
            points: ["A towering victory minaret at the Daulatabad Fort, an outstanding example of Indo-Islamic architecture."]
        },
        {
            name: "Grishneshwar Temple, Ellora",
            image: "images/grishneshwar_temple.jpg",
            points: ["The last of the twelve Jyotirlingas, this temple is located near the Ellora Caves."]
        },
        {
            name: "Rajabai Clock Tower, Mumbai",
            image: "images/rajabai_clock_tower.jpg",
            points: ["A Victorian clock tower in the University of Mumbai campus, modeled on London's Big Ben."]
        },
        {
            name: "Panhala Fort, Kolhapur",
            image: "images/panhala_fort.jpg",
            points: ["A strategic fort with a long history, known for Shivaji's legendary escape."]
        },
        {
            name: "New Palace, Kolhapur",
            image: "images/new_palace_kolhapur.jpg",
            points: ["A royal palace built in black polished stone, housing a museum with memorabilia of the Kolhapur rulers."]
        },
        {
            name: "Murud-Janjira Fort, Murud",
            image: "images/murud-janjira_fort.jpg",
            points: ["An impregnable sea fort that remained undefeated throughout its history, built by the Siddis."]
        },
        {
            name: "Kailasa Temple, Ellora",
            image: "images/kailasa_temple_ellora.jpg",
            points: ["The world's largest monolithic structure, a temple dedicated to Lord Shiva carved out of a single rock."]
        },
        {
            name: "Haji Ali Dargah, Mumbai",
            image: "images/haji_ali_dargah.jpg",
            points: ["A mosque and tomb located on an islet off the coast of Mumbai, a prominent landmark."]
        },
        {
            name: "Deekshabhoomi, Nagpur",
            image: "images/deekshabhoomi.jpeg",
            points: ["A sacred monument of Navayana Buddhism where Dr. B. R. Ambedkar converted to Buddhism with his followers."]
        },
        {
            name: "Lohagad Fort, Lonavala",
            image: "images/lohagad_fort.jpg",
            points: ["An 'Iron Fort' near Lonavala, known for its strong structure and scenic trekking route."]
        },
        {
            name: "Mahalakshmi Temple, Kolhapur",
            image: "images/mahalakshmi_temple_kolhapur.jpg",
            points: ["One of the six Shakti Pithas where one can attain salvation from desires, a major pilgrimage site."]
        },
        {
            name: "Afghan Church, Mumbai",
            image: "images/afghan_church_mumbai.jpg",
            points: ["An Anglican church built by the British to commemorate the dead of the First Afghan War."]
        },
        {
            name: "Sewri Fort, Mumbai",
            image: "images/sewri_fort.jpg",
            points: ["A small fort built by the British, now a popular spot for flamingo watching."]
        },
        {
            name: "Visapur Fort, Lonavala",
            image: "images/visapur_fort.jpg",
            points: ["A hill fort that is part of the Lohagad-Visapur fortification, offering stunning plateau views."]
        },
        {
            "name": "Bassein Fort (Vasai Fort), Vasai",
            "image": "images/bassein_fort.jpg",
            "points": ["The ruins of a large Portuguese fort, featuring churches, chapels, and fortifications."]
        },
        {
            "name": "Kanheri Caves, Mumbai",
            "image": "images/kanheri_caves.jpg",
            "points": ["A large complex of rock-cut Buddhist caves within the Sanjay Gandhi National Park."]
        },
        {
            "name": "Wai Ghats and Temples, Wai",
            "image": "images/wai_ghats_temples.jpg",
            "points": ["A historic temple town on the Krishna River with seven scenic ghats and numerous ancient temples."]
        },
        {
            "name": "Pandavleni Caves, Nashik",
            "image": "images/pandavleni_caves.jpg",
            "points": ["A group of 24 ancient rock-cut Buddhist caves on a hilltop."]
        },
        {
            "name": "Mount Mary Basilica, Mumbai",
            "image": "images/mount_mary_basilica.jpg",
            "points": ["A historic Roman Catholic Basilica in Bandra, a major pilgrimage site during the Bandra Fair."]
        },
        {
            "name": "Harishchandragad Fort, Ahmednagar",
            "image": "images/harishchandragad_fort.jpg",
            "points": ["A challenging hill fort known for its ancient temples, caves, and the spectacular Konkan Kada (cliff)."]
        },
        {
            "name": "Shani Shingnapur Temple, Ahmednagar",
            "image": "images/shani_shingnapur_temple.jpg",
            "points": ["A famous temple dedicated to Lord Shani, located in a village where houses have no doors."]
        },
        {
            "name": "Ghodbunder Fort, Thane",
            "image": "images/ghodbunder_fort.jpg",
            "points": ["A historic fort with Portuguese and Maratha influences, located on a hill overlooking Ulhas River."]
        },
        {
            "name": "Chhatrapati Shahu Palace, Kolhapur",
            "image": "images/chhatrapati_shahu_palace.jpg",
            "points": ["The Old Palace or Rajwada, the historic seat of the Kolhapur rulers before the New Palace was built."]
        },
        {
            "name": "Kalsubai Temple, Kalsubai Peak",
            "image": "images/kalsubai_temple.avif",
            "points": ["A small temple dedicated to a local deity at the summit of Maharashtra's highest peak."]
        },
        {
            "name": "Ajinkyatara Fort, Satara",
            "image": "images/ajinkyatara_fort.jpg",
            "points": ["A major hill fort that was the capital of the Marathas for some time, offering panoramic views of Satara."]
        },
        {
            "name": "Ambareshwar Shiva Temple, Ambarnath",
            "image": "images/ambareshwar_shiva_temple.jpg",
            "points": ["An 11th-century temple built in the Hemadpanti style, intricately carved from stone."]
        },
        {
            "name": "Sonegaon Lake Temple, Nagpur",
            "image": "images/sonegaon_lake_temple.jpg",
            "points": ["A historic temple located on an island in the Sonegaon lake, dating back to the Bhonsle period."]
        },
        {
            "name": "Markanda Mahadev Temple, Gadchiroli",
            "image": "images/markanda_mahadev_temple.jpg",
            "points": ["A complex of beautifully carved temples on the Wainganga River, known as the 'Khajuraho of Vidarbha'."]
        },
        {
            "name": "Zero Mile Stone, Nagpur",
            "image": "images/zero_mile_stone.jpg",
            "points": ["A monument marking the geographical center of India, established during the British era."]
        }
    ],
    "Manipur": [
        {
            name: "Kangla Fort, Imphal",
            image: "images/kangla_fort.jpg",
            points: ["The ancient fortified palace and seat of power of the Manipuri kings, located in the heart of Imphal."]
        },
        {
            name: "Shri Govindajee Temple, Imphal",
            image: "images/shri_govindajee_temple.jpg",
            points: ["A historic Vaishnavite temple with golden domes, located next to the Kangla Fort."]
        },
        {
            name: "INA Memorial Complex, Moirang",
            image: "images/ina_memorial_complex.jpg",
            points: ["A memorial complex dedicated to the Indian National Army, where the Indian flag was first hoisted on mainland India in 1944."]
        },
        {
            name: "Imphal War Cemetery, Imphal",
            image: "images/imphal_war_cemetery.jpg",
            points: ["A serene cemetery maintained by the Commonwealth War Graves Commission for soldiers who died in World War II."]
        },
        {
            name: "Leimapokpam Keirungba Temple, Bishnupur",
            image: "images/leimapokpam_keirungba_temple.jpg",
            points: ["A unique temple built with small, locally made bricks, showcasing traditional Manipuri architecture."]
        },
        {
            name: "Manipur State Museum, Imphal",
            image: "images/manipur_state_museum.jpg",
            points: ["Housed in a heritage building, it displays a collection of Manipuri art, archaeology, and natural history."]
        },
        {
            name: "Shaheed Minar, Imphal",
            image: "images/shaheed_minar.jpg",
            points: ["A tall memorial tower in Bir Tikendrajit Park, commemorating the heroes who fought against the British in 1891."]
        },
        {
            name: "Thangal General's Temple, Imphal",
            image: "images/thangal_generals_temple.jpg",
            points: ["A temple dedicated to a historic Manipuri general, reflecting the local religious traditions."]
        },
        {
            name: "Langthabal Konung (Langthabal Palace), Imphal",
            image: "images/langthabal_konung.jpg",
            points: ["The ruins of a historic palace on a hill, offering panoramic views of the Imphal valley."]
        },
        {
            name: "Bihu Loukon, Potsangbam",
            image: "images/bihu_loukon.jpg",
            points: ["An ancient archaeological site with evidence of early agricultural practices and prehistoric artifacts."]
        },
        {
            name: "Nupi Lan Memorial Complex, Imphal",
            image: "images/nupi_lan_memorial_complex.jpg",
            points: ["A monument dedicated to the brave women of Manipur who fought against the British in the 'Women's Wars'."]
        },
        {
            name: "Andro Cultural Heritage Complex, Andro",
            image: "images/andro_cultural_heritage_complex.jpg",
            points: ["A complex with traditional houses of various Manipuri tribes and a museum displaying cultural artifacts."]
        },
        {
            name: "Ebudhou Pakhangba Temple, Imphal",
            image: "images/ebudhou_pakhangba_temple.jpg",
            points: ["A major temple dedicated to Pakhangba, a primordial deity in Sanamahism, the traditional Meitei religion."]
        },
        {
            name: "Kaina Temple, Thoubal",
            image: "images/kaina_temple.jpg",
            points: ["A sacred Hindu pilgrimage site on a hill, associated with a divine vision of Shri Govindajee."]
        },
        {
            name: "Willong Khullen Megaliths, Willong",
            image: "images/willong_khullen_megaliths.jpg",
            points: ["A fascinating site with a large collection of massive megalithic stone structures erected by ancient tribes."]
        },
        {
            name: "Manipur University Centenary Hall, Imphal",
            image: "images/manipur_university_centenary_hall.jpg",
            points: ["A significant modern architectural landmark on the university campus."]
        },
        {
            name: "Khongjom War Memorial, Khongjom",
            image: "images/khongjom_war_memorial.jpg",
            points: ["A memorial on a hill commemorating the site of the last battle of the Anglo-Manipur War of 1891."]
        },
        {
            name: "Moirang Kangla, Moirang",
            image: "images/moirang_kangla.jpg",
            points: ["The ancient capital of the Moirang kingdom, a site of great historical and cultural importance."]
        },
        {
            name: "Shri Radha Raman Temple of Kanchipur, Imphal",
            image: "images/shri_radha_raman_temple_kanchipur.jpg",
            points: ["A historic Gaudiya Vaishnavism temple known for its serene atmosphere."]
        },
        {
            name: "Sanamahi Kiyong Temple, Imphal",
            image: "images/sanamahi_kiyong_temple.jpg",
            points: ["A modern temple dedicated to the deity Lainingthou Sanamahi, a center for the revival of traditional Meitei faith."]
        },
        {
            name: "Koirengei Airfield Memorial, Imphal",
            image: "images/koirengei_airfield_memorial.jpg",
            points: ["A memorial marking a historic airfield used extensively by Allied forces during World War II."]
        },
        {
            name: "Sekta Archaeological Living Museum, Sekta",
            image: "images/sekta_archaeological_living_museum.jpg",
            points: ["An archaeological site from the 14th-15th century, with burial mounds and artifacts on display."]
        },
        {
            name: "Tharon Cave, Tamenglong",
            image: "images/tharon_cave.jpg",
            points: ["A historic cave system with evidence of prehistoric inhabitation, important for archaeology."]
        },
        {
            name: "Moreh Border Gate, Moreh",
            image: "images/moreh_border_gate.jpg",
            points: ["The official land border crossing between India and Myanmar, a monument to international relations."]
        },
        {
            name: "Ukhrul Town Gate, Ukhrul",
            image: "images/ukhrul_town_gate.jpg",
            points: ["A traditional gateway to the hill town of Ukhrul, reflecting the culture of the Tangkhul Naga tribe."]
        },
        {
            name: "Megalithic structures of U-Morok, Imphal East",
            image: "images/megalithic_structures_u-morok.jpg",
            points: ["A lesser-known site with ancient megaliths, indicating early human settlement."]
        },
        {
            name: "Imphal Polo Ground (Mapal Kangjeibung)",
            image: "images/imphal_polo_ground.jpg",
            points: ["The world's oldest living polo ground, considered the birthplace of modern polo."]
        },
        {
            name: "Red Hill (Maibam Lokpa Ching), Imphal",
            image: "images/red_hill_imphal.jpg",
            points: ["A historic hillock that was the site of a fierce battle between Japanese and Allied forces in WWII."]
        },
        {
            name: "India Peace Memorial, Red Hill",
            image: "images/india_peace_memorial.jpg",
            points: ["A memorial built by the Japanese government at Red Hill to commemorate the WWII battle."]
        },
        {
            name: "Old Secretariat Building, Imphal",
            image: "images/old_secretariat_building_imphal.jpg",
            points: ["A colonial-era administrative building that is a significant landmark in Imphal."]
        },
        {
            name: "Churachandpur Town Clock Tower, Churachandpur",
            image: "images/churachandpur_clock_tower.jpg",
            points: ["A central landmark in the town of Churachandpur."]
        },
        {
            name: "Leimaram Waterfall Structures, Bishnupur",
            image: "images/leimaram_waterfall_structures.jpg",
            points: ["Viewing pavilions and small shrines built around the scenic Leimaram waterfalls."]
        },
        {
            name: "Liyai Khullen Monoliths, Senapati",
            image: "images/liyai_khullen_monoliths.jpg",
            points: ["Ancient megalithic structures in a remote village, part of the rich tribal heritage of the state."]
        },
        {
            name: "Phayeng Village Sacred Groves Structures",
            image: "images/phayeng_village_sacred_groves.jpg",
            points: ["Small shrines and structures within the ancient sacred groves preserved by the Chakpa community."]
        },
        {
            name: "Three Mothers Art Gallery Building, Imphal",
            image: "images/three_mothers_art_gallery.jpg",
            points: ["A gallery building known for its unique architecture and collection of Manipuri art."]
        },
        {
            name: "Manipur Film Development Corporation Building, Imphal",
            image: "images/manipur_film_dev_corp_building.jpg",
            points: ["A center for Manipuri cinema, with architecture reflecting modern Manipuri design."]
        },
        {
            name: "Lokpaching (World Peace Pagoda), Imphal",
            image: "images/lokpaching_world_peace_pagoda.jpg",
            points: ["A Japanese-built peace pagoda on a hill, promoting world peace."]
        },
        {
            name: "Ima Keithel (Mothers' Market), Imphal",
            image: "images/ima_keithel.jpg",
            points: ["A historic market run exclusively by women for centuries, a living monument to female empowerment."]
        },
        {
            name: "Netaji Subhas Chandra Bose Statue, Moirang",
            image: "images/netaji_statue_moirang.jpg",
            points: ["A prominent statue within the INA complex, honoring the leader of the Indian National Army."]
        },
        {
            name: "Mahabali Temple, Imphal",
            image: "images/mahabali_temple_imphal.jpg",
            points: ["A historic temple dedicated to Lord Hanuman on the banks of the Imphal River."]
        },
        {
            name: "Saheed Minar, Ukhrul",
            image: "images/saheed_minar_ukhrul.jpg",
            points: ["A local war memorial in Ukhrul town dedicated to fallen heroes."]
        },
        {
            name: "Khuman Lampak Main Stadium, Imphal",
            image: "images/khuman_lampak_stadium.jpg",
            points: ["A major sports complex and a modern landmark of Imphal."]
        },
        {
            name: "Loukoipat Ecological Park Structures, Bishnupur",
            image: "images/loukoipat_park_structures.jpg",
            points: ["Boathouses, bridges, and pavilions within a scenic ecological park."]
        },
        {
            name: "Megalithic Jar Sites, Ukhrul",
            image: "images/megalithic_jar_sites_ukhrul.jpg",
            points: ["Archaeological sites with mysterious large stone jars, similar to those found in Laos and Indonesia."]
        },
        {
            name: "Assembly Building, Imphal",
            image: "images/manipur_assembly_building.jpg",
            points: ["The modern seat of the Manipur Legislative Assembly, with a distinctive domed structure."]
        },
        {
            name: "Iskcon Temple, Imphal",
            image: "images/iskcon_temple_imphal.jpeg",
            points: ["A prominent modern temple complex dedicated to Lord Krishna, a center for the Hare Krishna movement."]
        },
        {
            name: "Singda Dam, Kangchup",
            image: "images/singda_dam.jpg",
            points: ["The highest earthen dam in Manipur, a significant engineering structure."]
        },
        {
            name: "Ningthoukhong Gopinath Temple, Bishnupur",
            image: "images/ningthoukhong_gopinath_temple.jpg",
            points: ["An ancient temple dedicated to Lord Krishna, showcasing traditional architecture."]
        },
        {
            name: "Manipur High Court Building, Imphal",
            image: "images/manipur_high_court_building.jpg",
            points: ["The modern architectural complex housing the state's highest judicial body."]
        },
        {
            name: "Kangvai Khullen Ancient Village Gate, Churachandpur",
            image: "images/kangvai_khullen_gate.jpg",
            points: ["A traditional village gate made of wood and local materials, reflecting tribal heritage."]
        }
    ],
    "Meghalaya": [
        {
            name: "David Scott Trail Bridge, Mawphlang",
            image: "images/david_scott_trail_bridge.jpg",
            points: ["A historic arched stone bridge built by the British officer David Scott, part of a famous trekking trail."]
        },
        {
            name: "Nartiang Monoliths, Jaintia Hills",
            image: "images/nartiang_monoliths.jpg",
            points: ["The largest collection of megalithic stones in Meghalaya, including massive upright stones (menhirs) and flat table stones (dolmens)."]
        },
        {
            name: "Laitlum Canyon Structures, Smit",
            image: "images/laitlum_canyon_structures.jpg",
            points: ["Viewing platforms and small monuments built at the edge of the spectacular Laitlum Canyons."]
        },
        {
            name: "Don Bosco Museum, Shillong",
            image: "images/don_bosco_museum.jpg",
            points: ["A major museum preserving the culture and heritage of the indigenous peoples of Northeast India."]
        },
        {
            name: "Shillong Cathedral (Cathedral of Mary Help of Christians), Shillong",
            image: "images/shillong_cathedral.jpg",
            points: ["A beautiful blue cathedral built in the Gothic architectural style, located on a prominent hill."]
        },
        {
            name: "Stone Memorials of Mawphlang Sacred Grove",
            image: "images/stone_memorials_mawphlang.jpg",
            points: ["Ancient monoliths and stone structures located at the entrance of the sacred grove, used for rituals."]
        },
        {
            name: "All Saints' Church, Shillong",
            image: "images/all_saints_church_shillong.jpg",
            points: ["A historic colonial-era Anglican church known for its beautiful wooden architecture and stained glass."]
        },
        {
            name: "Shillong Golf Course Clubhouse, Shillong",
            image: "images/shillong_golf_course_clubhouse.jpg",
            points: ["The heritage clubhouse of one of the oldest and most scenic golf courses in Asia."]
        },
        {
            name: "Pinewood Hotel, Shillong",
            image: "images/pinewood_hotel_shillong.jpg",
            points: ["A historic colonial-era hotel built with red pine and Burma teak, reflecting classic British architecture."]
        },
        {
            name: "Old Assembly Building, Shillong",
            image: "images/old_assembly_building_shillong.jpg",
            points: ["A historic building with a unique dome that once housed the legislative assembly of Assam and later Meghalaya."]
        },
        {
            name: "Mawsmai Cave Structures",
            image: "images/mawsmai_cave_structures.jpg",
            points: ["Man-made structures like pathways and lights that allow access to the natural limestone cave system."]
        },
        {
            name: "Nartiang Durga Temple, Jaintia Hills",
            image: "images/nartiang_durga_temple.jpg",
            points: ["A historic temple and a Shakti Pitha, where the goddess is worshipped in a unique syncretic tradition."]
        },
        {
            name: "Sohra Presbyterian Church, Sohra (Cherrapunji)",
            image: "images/sohra_presbyterian_church.jpg",
            points: ["One of the oldest churches in the region, established by Welsh missionaries in the 19th century."]
        },
        {
            name: "Beadon-Bishop Falls Viewpoint, Shillong",
            image: "images/beadon-bishop_falls_viewpoint.jpg",
            points: ["A constructed viewpoint offering a stunning perspective of the twin waterfalls."]
        },
        {
            name: "Elephant Falls Pavilions, Shillong",
            image: "images/elephant_falls_pavilions.jpg",
            points: ["Gazebos and bridges built for tourists to view the three-tiered scenic waterfall."]
        },
        {
            name: "Meghalaya High Court Building, Shillong",
            image: "images/meghalaya_high_court_building.jpg",
            points: ["The modern architectural complex housing the state's highest court."]
        },
        {
            name: "Rhino Heritage Museum, Shillong",
            image: "images/rhino_heritage_museum.jpeg",
            points: ["A military museum showcasing the history and achievements of the Indian Army in the region."]
        },
        {
            name: "Ever Living Museum, Shillong",
            image: "images/ever_living_museum.jpg",
            points: ["A private ethnographic museum showcasing the culture of the Khasi, Jaintia, and Garo tribes."]
        },
        {
            name: "Shillong Peak Viewpoint, Shillong",
            image: "images/shillong_peak_viewpoint.jpg",
            points: ["A viewpoint with a telescope tower on the highest point in Shillong, offering panoramic city views."]
        },
        {
            name: "Kyllang Rock Structures, West Khasi Hills",
            image: "images/kyllang_rock_structures.jpg",
            points: ["Small shrines and memorial stones placed on and around the massive granite dome of Kyllang Rock."]
        },
        {
            name: "Tura Peak Watch Tower, Tura",
            image: "images/tura_peak_watch_tower.jpg",
            points: ["A watchtower and a colonial-era bungalow located on Tura Peak, offering views of the Garo Hills."]
        },
        {
            name: "Garo Hills District Council Building, Tura",
            image: "images/garo_hills_council_building.jpg",
            points: ["The administrative headquarters of the Garo Hills Autonomous District Council, a significant landmark."]
        },
        {
            name: "Ramakrishna Mission Ashrama, Sohra",
            image: "images/ramakrishna_mission_ashrama_sohra.jpg",
            points: ["A historic branch of the Ramakrishna Mission, known for its educational and social work."]
        },
        {
            name: "Wards Lake Bridge and Flower Beds, Shillong",
            image: "images/wards_lake_bridge.jpg",
            points: ["The iconic wooden bridge and manicured flower beds of this colonial-era artificial lake."]
        },
        {
            name: "Spread Eagle Falls Viewpoint, Shillong",
            image: "images/spread_eagle_falls_viewpoint.jpg",
            points: ["A viewing area for one of the widest waterfalls in Shillong."]
        },
        {
            name: "Lady Hydari Park Japanese Garden, Shillong",
            image: "images/lady_hydari_park_japanese_garden.jpg",
            points: ["A small, stylised Japanese garden within the larger colonial-era park."]
        },
        {
            name: "Air Force Museum, Shillong",
            image: "images/air_force_museum_shillong.jpg",
            points: ["A museum at the Eastern Air Command showcasing aircraft, rockets, and military history."]
        },
        {
            name: "Jowai Town Clock Tower, Jowai",
            image: "images/jowai_town_clock_tower.jpg",
            points: ["A central landmark in the administrative headquarters of the Jaintia Hills."]
        },
        {
            name: "Meghalaya Legislative Assembly, Rilbong",
            image: "images/meghalaya_legislative_assembly.jpg",
            points: ["The modern building that houses the state's legislative assembly."]
        },
        {
            name: "Mawmluh Cave Entrance, Sohra",
            image: "images/mawmluh_cave_entrance.jpg",
            points: ["The entrance to one of India's longest caves, significant for geological studies defining the 'Meghalayan Age'."]
        },
        {
            name: "Siju Cave Structures, Garo Hills",
            image: "images/siju_cave_structures.jpg",
            points: ["Pathways and platforms built to explore the famous bat cave with its impressive stalactites and stalagmites."]
        },
        {
            name: "Sacred Heart College Building, Shillong",
            image: "images/sacred_heart_college_building.jpg",
            points: ["A prominent educational institution with distinctive heritage architecture."]
        },
        {
            name: "Khasi Hills Autonomous District Council Building, Shillong",
            image: "images/khasi_hills_council_building.jpg",
            points: ["The administrative headquarters for the Khasi tribal council, a key political monument."]
        },
        {
            name: "Syiem of Mylliem's Palace, Mairang",
            image: "images/syiem_of_mylliem_palace.jpg",
            points: ["The traditional residence of the Syiem (chief) of the Mylliem state, a center of Khasi culture."]
        },
        {
            name: "U Tirot Sing Memorial, Mairang",
            image: "images/u_tirot_sing_memorial.jpg",
            points: ["A memorial dedicated to the Khasi freedom fighter who led a war against the British."]
        },
        {
            name: "Thomas Jones Monument, Sohra",
            image: "images/thomas_jones_monument.jpg",
            points: ["A monument dedicated to the Welsh missionary who introduced the Khasi alphabet."]
        },
        {
            name: "State Central Library Building, Shillong",
            image: "images/state_central_library_shillong.jpg",
            points: ["A historic building that is a hub of knowledge and culture in the state capital."]
        },
        {
            name: "Pa Togan Sangma Memorial, Garo Hills",
            image: "images/pa_togan_sangma_memorial.jpg",
            points: ["A memorial park dedicated to a Garo tribal hero who fought against the British."]
        },
        {
            name: "IIM Shillong Campus, Shillong",
            image: "images/iim_shillong_campus.jpg",
            points: ["Modern campus buildings that blend with the natural landscape, representing contemporary architecture."]
        },
        {
            name: "Nehru Park, Umiam Lake",
            image: "images/nehru_park_umiam.jpg",
            points: ["A park with manicured lawns and an orchid house on the shores of the Umiam Lake reservoir."]
        },
        {
            name: "Nongkhlaw Monuments, Nongkhlaw",
            image: "images/nongkhlaw_monuments.jpg",
            points: ["Megalithic structures and memorials in the historic capital of Tirot Sing's kingdom."]
        },
        {
            name: "Jaintia Hills Presbyterian Church, Jowai",
            image: "images/jaintia_hills_presbyterian_church.jpg",
            points: ["The main church in Jowai, a significant landmark of the Presbyterian faith in the region."]
        },
        {
            name: "Williamson Sangma State Museum Building, Shillong",
            image: "images/williamson_sangma_museum.jpg",
            points: ["The main state museum building, which houses artifacts related to the history and culture of Meghalaya."]
        },
        {
            name: "Captain Williamson Sangma's Tomb, Tura",
            image: "images/williamson_sangmas_tomb.jpg",
            points: ["The memorial tomb of the first Chief Minister of Meghalaya."]
        },
        {
            name: "Gorkha Pathshala High School Building, Shillong",
            image: "images/gorkha_pathshala_school.jpg",
            points: ["A historic school with colonial-era architecture, serving the Gorkha community."]
        },
        {
            "name": "NEHU Campus Architecture, Shillong",
            "image": "images/nehu_campus_architecture.jpg",
            "points": ["The buildings of the North-Eastern Hill University, known for their modernist design that adapts to the hilly terrain."]
        },
        {
            "name": "Sweet Falls Viewpoint, Shillong",
            "image": "images/sweet_falls_viewpoint.jpg",
            "points": ["A constructed viewpoint to observe the steep, single-stream Sweet Falls."]
        },
        {
            "name": "Dainthlen Falls Viewpoint, Sohra",
            "image": "images/dainthlen_falls_viewpoint.jpg",
            "points": ["A viewing area for the waterfall associated with the Khasi legend of a slain serpent."]
        },
        {
            "name": "Thangkharang Park Structures, Sohra",
            "image": "images/thangkharang_park_structures.jpg",
            "points": ["Gazebos and viewpoints in a park offering a panoramic view of the plains of Bangladesh."]
        },
        {
            "name": "Mawjymbuin Cave Temple, Mawsynram",
            "image": "images/mawjymbuin_cave_temple.jpg",
            "points": ["A natural cave containing a massive stalagmite in the shape of a Shiva Lingam, a sacred site."]
        }
    ],

    "Mizoram": [
        {
            "name": "Kawtchhuah Ropui",
            "image": "images/kawtchhuah_ropui.jpg",
            "points": [
                "A protected archaeological site near Vangchhia village, featuring a cluster of megaliths with mysterious carvings.",
                "The carvings depict human figures, animals, and sym bols, offering a glimpse into a forgotten culture."
            ]
        },
        {
            "name": "Solomon's Temple, Aizawl",
            "image": "images/solomons_temple_aizawl.jpg",
            "points": [
                "A magnificent white marble church in Aizawl, built by the religious group Kohhran Thianghlim.",
                "It is one of the most prominent modern landmarks in Mizoram."
            ]
        },
        {
            "name": "Mizo Hlakungpui Mual (Poets' Square)",
            "image": "images/mizo_hlakungpui_mual.jpg",
            "points": [
                "A unique memorial dedicated to deceased Mizo poets, located in Khawbung.",
                "It features memorial stones and monuments celebrating Mizo literature."
            ]
        },
        {
            "name": "Sibuta Lung",
            "image": "images/sibuta_lung.jpg",
            "points": [
                "A large megalithic stone memorial near Tachhip village, erected by a Palian chief named Sibuta around the 16th century.",
                "It is associated with a tragic story of unrequited love and sacrifice."
            ]
        },
        {
            "name": "Phulpui Grave",
            "image": "images/Phulpui Grave.jpeg",
            "points": [
                "A historic grave site in Phulpui village, marking the tragic love story of Zawlpala and Talvungi.",
                "It consists of two stone slabs representing the couple's eternal bond."
            ]
        },
        {
            "name": "Chhingpuii Memorial",
            "image": "images/chhingpuii_memorial.jpg",
            "points": [
                "A memorial stone raised in memory of Chhingpuii, a beautiful Mizo woman whose death led to a major tribal war.",
                "It is located between Baktawng and Chhingchhip villages."
            ]
        },
        {
            "name": "Tualchang",
            "image": "images/tualchang.jpg",
            "points": [
                "The largest monolith in Mizoram, a massive stone structure near Tualchang village.",
                "It is believed to have been erected in the 18th century."
            ]
        },
        {
            "name": "Lungvandawt",
            "image": "images/lungvandawt.jpg",
            "points": [
                "An impressive 7-meter high memorial stone located near the Myanmar border.",
                "It is believed to have magical properties."
            ]
        },
        {
            "name": "Lamsial Puk (Cave)",
            "image": "images/lamsial_puk.jpg",
            "points": [
                "A cave in the Aizawl district that holds historical significance as a mass grave for Lamsial village warriors.",
                "It is a reminder of a fierce battle between two neighboring villages."
            ]
        },
        {
            "name": "Pukzing Cave",
            "image": "images/pukzing_cave.jpg",
            "points": [
                "The largest cave in Mizoram, located near Pukzing village.",
                "Legend says it was carved out by a strongman named Mualzavata."
            ]
        },
        {
            "name": "Lianchhiari Lunglen Tlang",
            "image": "images/lianchhiari_lunglen_tlang.jpg",
            "points": [
                "A rocky ledge near the village of Dungtlang, associated with the love story of a chief's daughter, Lianchhiari."
            ]
        },
        {
            "name": "Mizoram State Museum Building",
            "image": "images/mizoram_state_museum.jpg",
            "points": [
                "Located in Aizawl, the building itself is a modern monument housing the cultural heritage of the Mizo people."
            ]
        },
        {
            "name": "Aizawl War Memorial",
            "image": "images/aizawl_war_memorial.jpg",
            "points": [
                "A memorial dedicated to the soldiers from Mizoram who have sacrificed their lives for the nation."
            ]
        },
        {
            "name": "World War II Memorial, Lunglei",
            "image": "images/wwii_memorial_lunglei.jpg",
            "points": [
                "A memorial commemorating the soldiers who fought and died in the region during World War II."
            ]
        },
        {
            "name": "Rih Dil Lake Memorial Stones",
            "image": "images/rih_dil_memorial_stones.jpg",
            "points": [
                "While the lake is in Myanmar, there are memorial stones on the Indian side marking its cultural importance in Mizo beliefs about the afterlife."
            ]
        },
        {
            "name": "Old SDO Bungalow, Lunglei",
            "image": "images/sdo_bungalow_lunglei.jpg",
            "points": [
                "A British colonial-era building that represents the administrative history of the region."
            ]
        },
        {
            "name": "Thangliana Lung",
            "image": "images/thangliana_lung.jpeg",
            "points": [
                "A memorial stone dedicated to Captain T.H. Lewin, a British officer beloved by the Mizos, known as Thangliana."
            ]
        },
        {
            "name": "Saikuti Hall",
            "image": "images/saikuti_hall.jpg",
            "points": [
                "A cultural center and auditorium in Lunglei, a monument to the promotion of Mizo art and culture."
            ]
        },
        {
            "name": "Presbyterian Church, Aizawl",
            "image": "images/presbyterian_church_aizawl.jpg",
            "points": [
                "One of the oldest and most significant churches in Mizoram, a landmark of Aizawl."
            ]
        },
        {
            "name": "Baptist Church of Mizoram, Serkawn",
            "image": "images/baptist_church_serkawn.jpg",
            "points": [
                "A historic church in Lunglei, one of the first established by missionaries in southern Mizoram."
            ]
        },
        {
            "name": "Mangkahia Lung",
            "image": "images/mangkahia_lung.jpg",
            "points": [
                "A memorial stone of Mangkhaia, a great Mizo chief, located in Champhai."
            ]
        },
        {
            "name": "Tomb of Vanhimailian",
            "image": "images/tomb_of_vanhimailian.jpg",
            "points": [
                "The memorial tomb of a powerful Sailo chief, Vanhimailian, located in Champhai."
            ]
        },
        {
            "name": "Champhai Winery Building",
            "image": "images/champhai_winery.jpg",
            "points": [
                "A modern structure representing the agricultural and economic heritage of the region, known for its vineyards."
            ]
        },
        {
            "name": "KV Paradise, Durtlang",
            "image": "images/kv_paradise.jpg",
            "points": [
                "A modern three-storey mausoleum built by a local man in memory of his wife, often called a 'modern Taj Mahal of Mizoram'."
            ]
        },
        {
            "name": "Laltheri's Memorial",
            "image": "images/laltheris_memorial.jpg",
            "points": [
                "A memorial for a Mizo woman from Muthi village known for her beauty and tragic story."
            ]
        },
        {
            "name": "Serchhip DC Office Building",
            "image": "images/serchhip_dc_office.jpg",
            "points": [
                "A historic administrative building representing the governance of the district."
            ]
        },
        {
            "name": "Zodiac Temple (Lalruanga Lung)",
            "image": "images/zodiac_temple_lalruanga.jpg",
            "points": [
                "A unique modern structure built by a local resident, Khuangchera, with intricate carvings related to astrology and Mizo beliefs."
            ]
        },
        {
            "name": "Memorial of Zampuimanga",
            "image": "images/zampuimanga_memorial.jpg",
            "points": [
                "A monument dedicated to a respected Mizo leader and social reformer."
            ]
        },
        {
            "name": "Vantawng Falls Viewing Tower",
            "image": "images/vantawng_falls_tower.jpg",
            "points": [
                "A structure built to provide views of Mizoram's highest waterfall, a monument to the state's natural heritage."
            ]
        },
        {
            "name": "Old Secretariat Building, Aizawl",
            "image": "images/old_secretariat_aizawl.jpg",
            "points": [
                "A building of historical administrative importance in the state capital."
            ]
        },
        {
            "name": "Tlawng River Bridge",
            "image": "images/tlawng_river_bridge.jpeg",
            "points": [
                "An important bridge connecting Aizawl, representing an engineering monument in the state."
            ]
        },
        {
            "name": "Dampa Tiger Reserve Forest Bungalow",
            "image": "images/dampa_forest_bungalow.jpg",
            "points": [
                "A colonial-era style bungalow that serves as a heritage structure within the sanctuary."
            ]
        },
        {
            "name": "Hmuifang Tourist Resort Buildings",
            "image": "images/hmuifang_tourist_resort.jpg",
            "points": [
                "Traditional Mizo-style cottages built to preserve and showcase local architecture."
            ]
        },
        {
            "name": "Lal Thanhawla Auditorium",
            "image": "images/lal_thanhawla_auditorium.jpg",
            "points": [
                "A major cultural venue in Aizawl, named after a former Chief Minister, serving as a monument to modern Mizo culture."
            ]
        },
        {
            "name": "AR Lammual (Assam Rifles Ground)",
            "image": "images/ar_lammual.jpg",
            "points": [
                "A historic ground in Aizawl, witness to many significant events in Mizo history."
            ]
        },
        {
            "name": "Zarkawt Traffic Point Clock Tower",
            "image": "images/zarkawt_clock_tower.jpg",
            "points": [
                "A prominent landmark in the heart of Aizawl city."
            ]
        },
        {
            "name": "Bualpui-ng (Banyan Grove) Memorial",
            "image": "images/bualpui-ng_memorial.jpg",
            "points": [
                "A site that commemorates the legendary banyan tree grove, a place of historical gatherings and legends."
            ]
        },
        {
            "name": "Tuirihiau Falls Picnic Huts",
            "image": "images/tuirihiau_falls_huts.jpg",
            "points": [
                "Structures built at this unique waterfall, representing a monument to eco-tourism."
            ]
        },
        {
            "name": "Lengpui Airport Terminal Building",
            "image": "images/lengpui_airport.jpg",
            "points": [
                "The main gateway to the state, a modern monument representing Mizoram's connectivity."
            ]
        },
        {
            "name": "Champhai viewpoint Gazebo",
            "image": "images/champhai_viewpoint_gazebo.jpg",
            "points": [
                "A structure offering panoramic views of the surrounding hills and rice fields, celebrating the landscape."
            ]
        },
        {
            "name": "Thenzawl Golf Course Clubhouse",
            "image": "images/thenzawl_golf_clubhouse.jpg",
            "points": [
                "A modern monument representing the development of new recreational facilities in the state."
            ]
        },
        {
            "name": "Lalthuama Memorial, Hnahlan",
            "image": "images/lalthuama_memorial.jpg",
            "points": [
                "A monument dedicated to a local hero or chief in the grape-growing region of Hnahlan."
            ]
        },
        {
            "name": "College Veng Presbyterian Church",
            "image": "images/college_veng_presbyterian_church.jpg",
            "points": [
                "Another major historic church in Aizawl with architectural significance."
            ]
        },
        {
            "name": "Khuangchera Puk (Cave)",
            "image": "images/khuangchera_puk.jpg",
            "points": [
                "A historic cave named after a famous Mizo warrior, Khuangchera, who hid here from the British."
            ]
        },
        {
            "name": "Tuisumpui",
            "image": "images/tuisumpui.jpg",
            "points": [
                "A site with a unique rock formation in a river, holding legendary and geological importance."
            ]
        },
        {
            "name": "Zokhawthar Border Gate",
            "image": "images/zokhawthar_border_gate.jpg",
            "points": [
                "The Indo-Myanmar border crossing gate, a monument to the relationship between the two nations."
            ]
        },
        {
            "name": "District Library, Lunglei",
            "image": "images/district_library_lunglei.jpg",
            "points": [
                "A heritage building that has served as a center for knowledge and education in the region."
            ]
        },
        {
            "name": "Sairep Prayer Mountain Cross",
            "image": "images/sairep_prayer_mountain_cross.jpg",
            "points": [
                "A large cross erected on a prayer mountain, a significant monument for the Christian community."
            ]
        },
        {
            "name": "Chite Lui Project Memorial Stone",
            "image": "images/chite_lui_memorial.jpg",
            "points": [
                "A monument commemorating the efforts to clean and conserve the sacred Chite Lui river."
            ]
        },
        {
            "name": "TAD Gate, Lawngtlai",
            "image": "images/tad_gate_lawngtlai.jpg",
            "points": [
                "A gateway monument marking the entrance to a tribal autonomous district council area, representing local governance."
            ]
        }
    ],
    "Nagaland": [
        {
            "name": "Dimapur Kachari Ruins",
            "image": "images/dimapur_kachari_ruins.jpg",
            "points": [
                "A mysterious site with a series of massive, mushroom-shaped pillars from the 10th century.",
                "These are the enigmatic remnants of the ancient Kachari kingdom's capital."
            ]
        },
        {
            "name": "Kohima War Cemetery",
            "image": "images/kohima_war_cemetery.jpg",
            "points": [
                "A poignant memorial dedicated to the soldiers who died in the fierce Battle of Kohima during WWII.",
                "It is famous for the moving inscription: 'When you go home, tell them of us and say, for your tomorrow, we gave our today'."
            ]
        },
        {
            "name": "Khonoma Forts",
            "image": "images/khonoma_forts.jpg",
            "points": [
                "A series of historical forts in Khonoma village, the last bastion of Naga resistance against the British.",
                "These forts, made of stone and earth, are a testament to the bravery of the Angami warriors."
            ]
        },
        {
            "name": "Kohima Cathedral",
            "image": "images/kohima_cathedral.jpg",
            "points": [
                "The Cathedral of Mary Help of Christians is a prominent landmark in Kohima, known for its unique Naga architectural elements.",
                "It was built to commemorate the Battle of Kohima."
            ]
        },
        {
            "name": "Kisama Heritage Village Entrance Gate",
            "image": "images/kisama_heritage_village_gate.jpg",
            "points": [
                "The grand traditional gateway to the Naga Heritage Village, the venue for the annual Hornbill Festival.",
                "It is a monument representing the unity and rich culture of the Naga tribes."
            ]
        },
        {
            "name": "Nagaland State Museum Building",
            "image": "images/nagaland_state_museum.jpg",
            "points": [
                "Located in Kohima, the museum building is designed to reflect Naga architectural styles and houses priceless cultural artifacts."
            ]
        },
        {
            "name": "Kohima Battle Tank Memorial",
            "image": "images/kohima_battle_tank_memorial.jpg",
            "points": [
                "A memorial featuring a captured Japanese tank from the Battle of Kohima, located at the Raj Bhavan."
            ]
        },
        {
            "name": "Longwa Village Chief's House",
            "image": "images/longwa_chiefs_house.jpg",
            "points": [
                "A monumental traditional house of the Angh (chief) of Longwa, which uniquely straddles the India-Myanmar border.",
                "It is adorned with numerous animal skulls, symbolizing the tribe's warrior past."
            ]
        },
        {
            "name": "Tuphenu-a Traditional Naga House",
            "image": "images/tuphenu-a_house.jpg",
            "points": [
                "Well-preserved traditional houses in Touphema Tourist Village, serving as living monuments to Naga architecture and lifestyle."
            ]
        },
        {
            "name": "Japfu Peak Cross",
            "image": "images/japfu_peak_cross.jpg",
            "points": [
                "A large memorial cross erected at a high altitude on Japfu Peak, a significant Christian monument in the state."
            ]
        },
        {
            "name": "Garrison Hill Memorial",
            "image": "images/garrison_hill_memorial.jpg",
            "points": [
                "A key memorial within the Kohima battle area, marking the site of intense fighting during WWII."
            ]
        },
        {
            "name": "Shilloi Lake Memorial Stone",
            "image": "images/shilloi_lake_memorial_stone.jpg",
            "points": [
                "A monument near the sacred Shilloi Lake, detailing its myths and cultural importance to the Pochury tribe."
            ]
        },
        {
            "name": "Monoliths of Mima Village",
            "image": "images/mima_village_monoliths.jpg",
            "points": [
                "A collection of ancient stone monoliths erected by ancestors to commemorate significant events or individuals."
            ]
        },
        {
            "name": "Old DC's Bungalow, Kohima",
            "image": "images/old_dc_bungalow_kohima.jpg",
            "points": [
                "A colonial-era bungalow that played a crucial role as a British command post during the Battle of Kohima."
            ]
        },
        {
            "name": "Diezephe Craft Village Gate",
            "image": "images/diezephe_craft_village_gate.jpg",
            "points": [
                "A traditional gateway to the village known for its skilled craftsmen, representing the living heritage of Naga art."
            ]
        },
        {
            "name": "Phek Town Clock Tower",
            "image": "images/phek_clock_tower.jpg",
            "points": [
                "A prominent landmark and monument in the town of Phek."
            ]
        },
        {
            "name": "Chetheba Town Stone Circle",
            "image": "images/chetheba_stone_circle.jpg",
            "points": [
                "An ancient site with a circle of monoliths, believed to have been a place for rituals and community gatherings."
            ]
        },
        {
            "name": "Shangnyu Village Wooden Monument",
            "image": "images/shangnyu_wooden_monument.jpg",
            "points": [
                "A massive, 8-foot high wooden structure with intricate carvings of humans and animals, believed to be over 500 years old."
            ]
        },
        {
            "name": "Wokha Town Baptist Church",
            "image": "images/wokha_baptist_church.jpg",
            "points": [
                "One of the largest and most beautiful churches in Nagaland, a significant landmark for the Lotha Naga community."
            ]
        },
        {
            "name": "Triple Falls Viewpoint Structure",
            "image": "images/triple_falls_viewpoint.jpg",
            "points": [
                "A viewing platform in Seithekima village, built to appreciate the natural monument of the three cascading waterfalls."
            ]
        },
        {
            "name": "Chizami Village Monoliths",
            "image": "images/chizami_village_monoliths.jpg",
            "points": [
                "Ancient monoliths that stand as silent witnesses to the history and traditions of the Chakhesang Naga tribe."
            ]
        },
        {
            "name": "Mokokchung Town Park War Memorial",
            "image": "images/mokokchung_war_memorial.jpg",
            "points": [
                "A memorial dedicated to soldiers, located in the main town park of Mokokchung."
            ]
        },
        {
            "name": "Ungma Village Morung",
            "image": "images/ungma_village_morung.jpg",
            "points": [
                "A traditional bachelor dormitory in the oldest and largest Ao tribe village, serving as a cultural monument."
            ]
        },
        {
            "name": "Zunheboto Town Clock Tower",
            "image": "images/zunheboto_clock_tower.jpg",
            "points": [
                "A central landmark in the heart of Zunheboto, the cultural home of the Sumi Nagas."
            ]
        },
        {
            "name": "Sumi Baptist Church, Zunheboto",
            "image": "images/sumi_baptist_church_zunheboto.jpg",
            "points": [
                "An architectural marvel and one of the largest church buildings in Asia."
            ]
        },
        {
            "name": "Tuensang Town Gate",
            "image": "images/tuensang_town_gate.jpg",
            "points": [
                "A traditional gate marking the entrance to the town of Tuensang, representing the diverse tribes of the region."
            ]
        },
        {
            "name": "The Governor's Camp, Wokha",
            "image": "images/governors_camp_wokha.jpg",
            "points": [
                "A historic site with a viewpoint structure, offering panoramic views of Doyang river and dam."
            ]
        },
        {
            "name": "Doyang Hydro Project Dam",
            "image": "images/doyang_dam.jpg",
            "points": [
                "A modern engineering monument that has significantly impacted the landscape and economy of Nagaland."
            ]
        },
        {
            "name": "World War II Tennis Court",
            "image": "images/wwii_tennis_court.jpg",
            "points": [
                "The site of the decisive battle in Kohima, preserved with its original markings, a poignant and unique war monument."
            ]
        },
        {
            "name": "Naga Heritage Village Morungs",
            "image": "images/kisama_morungs.jpeg",
            "points": [
                "Each of the 16 major tribes has a representative Morung (dormitory) at Kisama, which are monuments of their specific architectural styles."
            ]
        },
        {
            "name": "Ruzaphema Market Place Structures",
            "image": "images/ruzaphema_market.jpg",
            "points": [
                "The unique tribal huts and structures of this bazaar serve as a living monument to Naga commerce and craftsmanship."
            ]
        },
        {
            "name": "Dzulekie Village Monoliths",
            "image": "images/dzulekie_monoliths.jpg",
            "points": [
                "Ancient standing stones set amidst terraced paddy fields, commemorating historical events."
            ]
        },
        {
            "name": "Benreu Village traditional houses",
            "image": "images/benreu_village_houses.jpg",
            "points": [
                "Well-preserved traditional houses of the Zeliang tribe, representing indigenous architectural monuments."
            ]
        },
        {
            "name": "Tenyimi Statue, Kohima",
            "image": "images/tenyimi_statue.jpg",
            "points": [
                "A statue representing the Tenyimi group of Naga tribes, a monument to their shared ancestry."
            ]
        },
        {
            "name": "Peren Town Gate",
            "image": "images/peren_town_gate.jpg",
            "points": [
                "A traditional gateway to the town of Peren, home of the Zeliang and Kuki tribes."
            ]
        },
        {
            "name": "Pfutsero Glory Peak Cross",
            "image": "images/pfutsero_glory_peak_cross.jpg",
            "points": [
                "A large cross on Glory Peak in Pfutsero, the highest town in Nagaland, symbolizing the deep Christian faith of the people."
            ]
        },
        {
            "name": "Old Longleng Town Monolith",
            "image": "images/longleng_monolith.jpg",
            "points": [
                "A historical stone monolith in the district of the Phom Nagas."
            ]
        },
        {
            "name": "Kiphire Town Pillar",
            "image": "images/kiphire_town_pillar.jpg",
            "points": [
                "A modern monument pillar in the heart of Kiphire town, representing the unity of the Sangtam, Yimkhiung, and Sumi tribes."
            ]
        },
        {
            "name": "Aboi Town Gate",
            "image": "images/aboi_town_gate.jpg",
            "points": [
                "A traditional gate representing the Konyak Naga culture in the Mon district."
            ]
        },
        {
            "name": "Chuchuyimlang village Morung",
            "image": "images/chuchuyimlang_morung.jpg",
            "points": [
                "A historically significant Morung of the Ao tribe, known for its role in the Moatsü festival."
            ]
        },
        {
            "name": "Tseminyu Old Town Monoliths",
            "image": "images/tseminyu_monoliths.jpg",
            "points": [
                "Historical stone monuments of the Rengma Naga tribe."
            ]
        },
        {
            "name": "Noklak Town Memorial",
            "image": "images/noklak_town_memorial.jpg",
            "points": [
                "A monument in the newly formed district, representing the aspirations of the Khiamniungan people."
            ]
        },
        {
            "name": "Changtongya Town Clock Tower",
            "image": "images/changtongya_clock_tower.jpg",
            "points": [
                "A landmark monument in a major Ao tribe town."
            ]
        },
        {
            "name": "Tuli Town Paper Mill Structures",
            "image": "images/tuli_paper_mill.jpg",
            "points": [
                "The remains of the Nagaland Pulp & Paper Company, a monument to the state's industrial past."
            ]
        },
        {
            "name": "Intanki National Park Watchtowers",
            "image": "images/intanki_watchtowers.jpg",
            "points": [
                "Old forest watchtowers that serve as heritage structures within the park."
            ]
        },
        {
            "name": "Medziphema Town Gate",
            "image": "images/medziphema_town_gate.jpg",
            "points": [
                "A gateway representing the diverse communities living in this sub-division of Dimapur."
            ]
        },
        {
            "name": "Satakha Town Memorial Pillar",
            "image": "images/satakha_memorial_pillar.jpg",
            "points": [
                "A monument commemorating a significant event in the history of the Sumi tribe."
            ]
        },
        {
            "name": "Nagaland University Entrance Gate, Lumami",
            "image": "images/nagaland_university_gate.jpg",
            "points": [
                "The gate to the state's central university, a monument to education in Nagaland."
            ]
        },
        {
            "name": "Kohima City Tower",
            "image": "images/kohima_city_tower.jpg",
            "points": [
                "A modern tower offering panoramic views of the city, a contemporary monument in the state capital."
            ]
        },
        {
            "name": "Bhandari Town Memorial Stone",
            "image": "images/bhandari_memorial_stone.jpg",
            "points": [
                "A monument marking a historical event in this Lotha Naga region."
            ]
        }
    ],
  "Odisha": [
        {
            "name": "Konark Sun Temple",
            "image": "images/konark_sun_temple.jpeg",
            "points": [
                "A colossal 13th-century temple designed as the chariot of the Sun God, Surya.",
                "A UNESCO World Heritage Site, it is a masterpiece of temple architecture and stone carving."
            ]
        },
        {
            "name": "Jagannath Temple, Puri",
            "image": "images/jagannath_temple_puri.jpeg",
            "points": [
                "One of the four great 'Char Dham' pilgrimage sites, a sacred temple dedicated to Lord Jagannath.",
                "It is world-famous for its annual Rath Yatra, or chariot festival, which draws millions of devotees."
            ]
        },
        {
            "name": "Lingaraja Temple, Bhubaneswar",
            "image": "images/lingaraja_temple.jpeg",
            "points": [
                "The largest temple in Bhubaneswar, dedicated to Lord Shiva, an exemplar of Kalinga architecture.",
                "Its central tower stands at 180 ft and dominates the city's skyline."
            ]
        },
        {
            "name": "Udayagiri and Khandagiri Caves",
            "image": "images/udayagiri_khandagiri_caves.jpeg",
            "points": [
                "A complex of rock-cut caves near Bhubaneswar, which served as residences for Jain monks.",
                "They feature intricate carvings and inscriptions dating back to the 1st century BCE."
            ]
        },
        {
            "name": "Dhauli Giri Shanti Stupa",
            "image": "images/dhauli_giri_shanti_stupa.jpeg",
            "points": [
                "A white peace pagoda on the banks of the Daya River, where the Kalinga War was fought.",
                "It commemorates Emperor Ashoka's transformation and adoption of Buddhism."
            ]
        },
        {
            "name": "Mukteswara Temple, Bhubaneswar",
            "image": "images/mukteswara_temple.jpeg",
            "points": [
                "Known as the 'Gem of Odisha Architecture', this 10th-century temple is famous for its exquisite stone arch (Torana)."
            ]
        },
        {
            "name": "Rajarani Temple, Bhubaneswar",
            "image": "images/rajarani_temple.jpeg",
            "points": [
                "A unique 11th-century temple with no presiding deity, celebrated for its ornate carvings and sensual sculptures."
            ]
        },
        {
            "name": "Ratnagiri Buddhist Excavations",
            "image": "images/ratnagiri_buddhist_excavations.jpeg",
            "points": [
                "The site of a major Buddhist monastery (Mahavihara) from the 5th century AD, known for its stupas, monasteries, and sculptures."
            ]
        },
        {
            "name": "Lalitgiri Buddhist Complex",
            "image": "images/lalitgiri_buddhist_complex.jpeg",
            "points": [
                "The oldest Buddhist settlement in Odisha, where relics of Buddha have been discovered inside ancient stupas."
            ]
        },
        {
            "name": "Udayagiri Buddhist Complex",
            "image": "images/udayagiri_buddhist_complex_odisha.jpeg",
            "points": [
                "Part of the 'Diamond Triangle' with Ratnagiri and Lalitgiri, it features a large monastic complex with stupas and sculptures."
            ]
        },
        {
            "name": "Barabati Fort, Cuttack",
            "image": "images/barabati_fort.jpeg",
            "points": [
                "The ruins of a 14th-century fort on the banks of the Mahanadi River, known for its grand gateway and moat."
            ]
        },
        {
            "name": "Chausath Yogini Temple, Hirapur",
            "image": "images/chausath_yogini_temple_hirapur.jpeg",
            "points": [
                "A rare circular, open-air tantric temple from the 9th century, dedicated to 64 yoginis."
            ]
        },
        {
            "name": "Vaital Deula Temple, Bhubaneswar",
            "image": "images/vaital_deula_temple.jpeg",
            "points": [
                "An 8th-century temple dedicated to Goddess Chamunda, notable for its unique semi-cylindrical roof, a sign of tantric influence."
            ]
        },
        {
            "name": "Brahmeswara Temple, Bhubaneswar",
            "image": "images/brahmeswara_temple.jpeg",
            "points": [
                "A 9th-century temple complex with intricate carvings of musicians, dancers, and religious scenes."
            ]
        },
        {
            "name": "Samaleswari Temple, Sambalpur",
            "image": "images/samaleswari_temple.jpeg",
            "points": [
                "A major Hindu shrine in western Odisha, dedicated to the goddess Samaleswari, located on the banks of the Mahanadi river."
            ]
        },
        {
            "name": "Harishankar Temple, Balangir",
            "image": "images/harishankar_temple.jpeg",
            "points": [
                "A unique temple on the slopes of the Gandhamardan Hills, where both Vishnu (Hari) and Shiva (Shankar) are worshipped together."
            ]
        },
        {
            "name": "Nrusinghanath Temple, Bargarh",
            "image": "images/nrusinghanath_temple.jpeg",
            "points": [
                "Located at the foothills of the Gandhamardan Hills, this ancient temple is dedicated to Lord Narasimha."
            ]
        },
        {
            "name": "Gundicha Temple, Puri",
            "image": "images/gundicha_temple.jpeg",
            "points": [
                "Known as the 'Garden House of Lord Jagannath', it is the destination of the chariots during the Rath Yatra festival."
            ]
        },
        {
            "name": "Pipili Applique Work Gates",
            "image": "images/pipili_gates.jpeg",
            "points": [
                "The ornate gateways and canopies in the town of Pipili are monuments to its famous and colorful appliqué craft."
            ]
        },
        {
            "name": "Sisupalgarh Ruins",
            "image": "images/sisupalgarh_ruins.jpeg",
            "points": [
                "The archaeological remains of a massive fortified city near Bhubaneswar, dating back to the 7th century BCE."
            ]
        },
        {
            "name": "Kichakeswari Temple, Khiching",
            "image": "images/kichakeswari_temple.jpeg",
            "points": [
                "An ancient temple built entirely of chlorite slabs, dedicated to the goddess Chamunda, reconstructed in the 20th century."
            ]
        },
        {
            "name": "Ananta Vasudeva Temple, Bhubaneswar",
            "image": "images/ananta_vasudeva_temple.jpeg",
            "points": [
                "The only major temple in Bhubaneswar dedicated to Lord Vishnu, located on the banks of the sacred Bindusagar Lake."
            ]
        },
        {
            "name": "Parsurameswara Temple, Bhubaneswar",
            "image": "images/parsurameswara_temple.jpeg",
            "points": [
                "One of the oldest surviving temples in Bhubaneswar, built around 650 AD, known for its detailed stone carvings."
            ]
        },
        {
            "name": "Biraja Temple, Jajpur",
            "image": "images/biraja_temple.jpeg",
            "points": [
                "A historic Hindu temple and one of the 51 Shakti Pithas, dedicated to the goddess Biraja."
            ]
        },
        {
            "name": "Leaning Temple of Huma, Sambalpur",
            "image": "images/leaning_temple_of_huma.jpeg",
            "points": [
                "A famous Shiva temple that is structurally tilted, located on the bank of the Mahanadi river."
            ]
        },
        {
            "name": "Asokan Rock Edicts, Jaugada",
            "image": "images/asokan_rock_edicts_jaugada.jpeg",
            "points": [
                "A major archaeological site where the edicts of Emperor Ashoka are inscribed on a rock face."
            ]
        },
        {
            "name": "Qadam-I-Rasool Mosque, Cuttack",
            "image": "images/qadam-i-rasool_cuttack.jpg",
            "points": [
                "A historic shrine containing what is believed to be the footprint of Prophet Mohammed, showcasing Indo-Islamic architecture."
            ]
        },
        {
            "name": "Odisha State Museum Building",
            "image": "images/odisha_state_museum.jpg",
            "points": [
                "A prominent building in Bhubaneswar that serves as a monument to the state's history and culture."
            ]
        },
        {
            "name": "Netaji Birth Place Museum, Cuttack",
            "image": "images/netaji_birth_place_museum.jpg",
            "points": [
                "The ancestral house of Subhas Chandra Bose, converted into a museum, a monument to the freedom fighter."
            ]
        },
        {
            "name": "Panchalingeswar Temple, Balasore",
            "image": "images/panchalingeswar_temple.jpg",
            "points": [
                "A scenic temple on a hilltop where five Shiva lingas are worshipped under a perennial stream."
            ]
        },
        {
            "name": "Chandipur Beach Structures",
            "image": "images/chandipur_beach.jpeg",
            "points": [
                "The viewing platforms and structures at this unique beach, where the sea recedes for miles, are monuments to its natural wonder."
            ]
        },
        {
            "name": "Chhatia Bata Jagannath Temple",
            "image": "images/chhatia_bata_temple.jpeg",
            "points": [
                "A famous temple and pilgrimage center in Jajpur, dedicated to Lord Jagannath."
            ]
        },
        {
            "name": "Gupteswar Cave Temple, Koraput",
            "image": "images/gupteswar_cave_temple.jpeg",
            "points": [
                "A cave shrine dedicated to Lord Shiva, featuring a massive natural stalagmite worshipped as a Shiva Linga."
            ]
        },
        {
            "name": "Joranda Gadi (Mahima Gadi)",
            "image": "images/joranda_gadi.jpeg",
            "points": [
                "The religious headquarters of the Mahima Dharma, with unique temples and ashrams in Dhenkanal district."
            ]
        },
        {
            "name": "Kapilash Temple, Dhenkanal",
            "image": "images/kapilash_temple.jpeg",
            "points": [
                "A temple dedicated to Lord Shiva, situated on a hilltop, often referred to as the 'Kailash of Odisha'."
            ]
        },
        {
            "name": "Sakhigopal Temple, Puri",
            "image": "images/sakhigopal_temple.jpeg",
            "points": [
                "A medieval temple dedicated to Lord Gopinatha, a form of Krishna, which pilgrims traditionally visit on their way to Puri."
            ]
        },
        {
            "name": "Raghurajpur Heritage Village Craftsmen Houses",
            "image": "images/raghurajpur_houses.jpeg",
            "points": [
                "The homes of artists in this heritage village, adorned with Pattachitra murals, are living monuments to Odia art."
            ]
        },
        {
            "name": "Cuttack Chandi Temple",
            "image": "images/cuttack_chandi_temple.jpeg",
            "points": [
                "An ancient temple and one of the most famous shrines in Cuttack, dedicated to the Goddess Chandi."
            ]
        },
        {
            "name": "Tara Tarini Temple, Ganjam",
            "image": "images/tara_tarini_temple.jpeg",
            "points": [
                "One of the four major Shakti Pithas, a revered temple on a hilltop overlooking the Rushikulya River."
            ]
        },
        {
            "name": "Athmallik Buddhist Images",
            "image": "images/athmallik_buddhist_images.jpeg",
            "points": [
                "Large rock-cut images of Buddhist deities found in the Angul district."
            ]
        },
        {
            "name": "Ranipur-Jharial Yogini Temple",
            "image": "images/ranipur-jharial_temple.jpeg",
            "points": [
                "A major archaeological site with a circular Yogini temple and numerous other brick and stone temples."
            ]
        },
        {
            "name": "Gopinath Temple, Remuna",
            "image": "images/gopinath_temple_remuna.jpeg",
            "points": [
                "A famous Vaishnava shrine near Balasore, known for its unique milk-pudding (khira) prasad."
            ]
        },
        {
            "name": "Budhakhol Temple Complex",
            "image": "images/budhakhol_temple.jpeg",
            "points": [
                "A scenic heritage site in Ganjam with a cluster of five Shiva temples and ancient Buddhist caves on a hill."
            ]
        },
        {
            "name": "Old British Custom House, Puri",
            "image": "images/british_custom_house_puri.jpeg",
            "points": [
                "A colonial-era building on the Puri beach, a relic of the British maritime trade administration."
            ]
        },
        {
            "name": "Hirakud Dam",
            "image": "images/hirakud_dam.jpeg",
            "points": [
                "One of the first major multipurpose river valley projects started after India's independence, a monument of modern engineering."
            ]
        },
        {
            "name": "Gangeswari Temple, Gop",
            "image": "images/gangeswari_temple.jpeg",
            "points": [
                "An ancient temple near Konark, believed to be a prototype for the Sun Temple, with unique architecture."
            ]
        },
        {
            "name": "Bhitarkanika National Park Ancient Temple Ruins",
            "image": "images/bhitarkanika_temple_ruins.jpeg",
            "points": [
                "Ancient medieval Hindu temples dedicated to Lord Shiva, discovered within the mangrove forests."
            ]
        },
        {
            "name": "Manikeswari Temple, Kalahandi",
            "image": "images/manikeswari_temple.jpeg",
            "points": [
                "The temple of the tutelary deity of the Naga dynasty of Kalahandi, famous for its Chhatar Jatra."
            ]
        },
        {
            "name": "Vedavyas Temple, Rourkela",
            "image": "images/vedavyas_temple.jpeg",
            "points": [
                "A sacred site at the confluence of three rivers, believed to be the place where Vyasa wrote the Mahabharata."
            ]
        },
        {
            "name": "Indravati Dam",
            "image": "images/indravati_dam.jpeg",
            "points": [
                "One of the largest dams in India, a modern monument of engineering in the Kalahandi district."
            ]
        }
    ],
"Punjab": [
        {
            "name": "Golden Temple (Sri Harmandir Sahib)",
            "image": "images/golden_temple.jpeg",
            "points": [
                "The holiest and most revered shrine in Sikhism, a symbol of equality and peace.",
                "Its stunning dome is gilded with 750 kg of pure gold, and it is surrounded by a sacred pool."
            ]
        },
        {
            "name": "Jallianwala Bagh",
            "image": "images/jallianwala_bagh.jpeg",
            "points": [
                "A memorial of national importance that commemorates the tragic massacre of peaceful protestors in 1919.",
                "The bullet marks on the walls and the Martyrs' Well serve as poignant reminders of the event."
            ]
        },
        {
            "name": "Wagah-Attari Border Gate and Ceremony Area",
            "image": "images/wagah_border.jpeg",
            "points": [
                "The border crossing between India and Pakistan, famous for its daily military flag-lowering ceremony.",
                "The structures and viewing galleries are a monument to the complex relationship between the two nations."
            ]
        },
        {
            "name": "Qila Mubarak, Patiala",
            "image": "images/qila_mubarak_patiala.jpeg",
            "points": [
                "A grand fort and residential palace complex of the Patiala dynasty, showcasing a blend of Mughal and Rajput architecture."
            ]
        },
        {
            "name": "Virasat-e-Khalsa, Anandpur Sahib",
            "image": "images/virasat-e-khalsa.jpeg",
            "points": [
                "A modern architectural marvel and museum celebrating the history and culture of Sikhism.",
                "It commemorates 500 years of Sikh history and the 300th anniversary of the Khalsa."
            ]
        },
        {
            "name": "Gobindgarh Fort, Amritsar",
            "image": "images/gobindgarh_fort.jpeg",
            "points": [
                "A historic military fort built by the Sikh warrior Maharaja Ranjit Singh, now a cultural theme park."
            ]
        },
        {
            "name": "Sheesh Mahal, Patiala",
            "image": "images/sheesh_mahal_patiala.jpeg",
            "points": [
                "The 'Palace of Mirrors', a part of the Old Moti Bagh Palace, renowned for its exquisite mirror work and mural paintings."
            ]
        },
        {
            "name": "Takht Sri Keshgarh Sahib, Anandpur Sahib",
            "image": "images/takht_sri_keshgarh_sahib.jpg",
            "points": [
                "One of the five temporal authorities (Takhts) of Sikhism, it is the birthplace of the Khalsa."
            ]
        },
        {
            "name": "Takht Sri Damdama Sahib, Talwandi Sabo",
            "image": "images/takht_sri_damdama_sahib.jpeg",
            "points": [
                "Another of the five Takhts, where Guru Gobind Singh prepared the final version of the Guru Granth Sahib."
            ]
        },
        {
            "name": "Gurudwara Fatehgarh Sahib",
            "image": "images/gurudwara_fatehgarh_sahib.jpg",
            "points": [
                "A significant Sikh shrine marking the tragic site where the two younger sons of Guru Gobind Singh were martyred."
            ]
        },
        {
            "name": "Khatkar Kalan (Shaheed Bhagat Singh Museum)",
            "image": "images/khatkar_kalan.jpeg",
            "points": [
                "The ancestral home and village of the revolutionary freedom fighter Bhagat Singh, now a memorial and museum."
            ]
        },
        {
            "name": "Moorish Mosque, Kapurthala",
            "image": "images/moorish_mosque_kapurthala.jpeg",
            "points": [
                "An architectural marvel and a national monument, built in the style of the Grand Mosque of Marrakesh, Morocco."
            ]
        },
        {
            "name": "Jagatjit Palace, Kapurthala",
            "image": "images/jagatjit_palace.jpeg",
            "points": [
                "A stunning Indo-Saracenic palace modeled on the Palace of Versailles, former residence of the Maharaja of Kapurthala."
            ]
        },
        {
            "name": "Rauza Sharif (Sheikh Sirhindi's Tomb)",
            "image": "images/rauza_sharif.jpeg",
            "points": [
                "The magnificent mausoleum of the Sufi saint Sheikh Ahmad Sirhindi, a revered pilgrimage site for Sunni Muslims."
            ]
        },
        {
            "name": "Durgiana Temple, Amritsar",
            "image": "images/durgiana_temple.jpeg",
            "points": [
                "A premier Hindu temple, also known as the Lakshmi Narayan Temple, with architecture similar to the Golden Temple."
            ]
        },
        {
            "name": "Jang-e-Azadi Memorial, Kartarpur",
            "image": "images/jang-e-azadi_memorial.jpeg",
            "points": [
                "A mega-project and museum dedicated to the role of Punjabis in the Indian independence movement."
            ]
        },
        {
            "name": "Aam Khas Bagh, Sirhind",
            "image": "images/aam_khas_bagh.jpeg",
            "points": [
                "The ruins of a highway-inn and palace complex constructed for public and royal use by the Mughal emperors."
            ]
        },
        {
            "name": "Qila Mubarak, Bathinda",
            "image": "images/qila_mubarak_bathinda.jpeg",
            "points": [
                "A monumental fort of great historical importance, believed to be the place where Razia Sultan was imprisoned."
            ]
        },
        {
            "name": "Sarai Nurmahal",
            "image": "images/sarai_nurmahal.jpeg",
            "points": [
                "An excellently preserved example of a Mughal caravanserai (inn), built by Empress Nur Jahan."
            ]
        },
        {
            "name": "Phillaur Fort",
            "image": "images/phillaur_fort.jpeg",
            "points": [
                "Built by Maharaja Ranjit Singh, this fort on the banks of the Sutlej river is now a police training academy."
            ]
        },
        {
            "name": "Pushpa Gujral Science City, Kapurthala",
            "image": "images/pushpa_gujral_science_city.jpeg",
            "points": [
                "A modern institution and architectural monument dedicated to the popularization of science."
            ]
        },
        {
            "name": "Bahadurgarh Fort, Patiala",
            "image": "images/bahadurgarh_fort.jpeg",
            "points": [
                "A 17th-century fort, named after the Sikh Guru Tegh Bahadur, with a historic Gurdwara inside."
            ]
        },
        {
            "name": "Tomb of Ustad-Shagird, Nakodar",
            "image": "images/ustad-shagird_tomb.jpeg",
            "points": [
                "Beautifully preserved tombs of a musician and his apprentice from the Mughal era, noted for their intricate tile work."
            ]
        },
        {
            "name": "Goindwal Baoli Sahib",
            "image": "images/goindwal_baoli_sahib.jpeg",
            "points": [
                "A large Sikh stepwell with 84 steps, constructed in the 16th century by Guru Amar Das."
            ]
        },
        {
            "name": "Gurudwara Ber Sahib, Sultanpur Lodhi",
            "image": "images/gurudwara_ber_sahib.jpeg",
            "points": [
                "A historic shrine on the banks of the Kali Bein river, where Guru Nanak is said to have gained enlightenment."
            ]
        },
        {
            "name": "Harike Wetland and Bird Sanctuary Structures",
            "image": "images/harike_wetland.jpeg",
            "points": [
                "The barrage and watchtowers at the largest wetland in northern India are monuments to conservation efforts."
            ]
        },
        {
            "name": "Bhakra Nangal Dam",
            "image": "images/bhakra_nangal_dam.jpeg",
            "points": [
                "A concrete gravity dam on the Sutlej River, hailed by Nehru as one of the 'temples of modern India'."
            ]
        },
        {
            "name": "Khalsa College, Amritsar",
            "image": "images/khalsa_college_amritsar.jpeg",
            "points": [
                "A historic educational institution with a magnificent Indo-Saracenic building, a monument to Sikh education."
            ]
        },
        {
            "name": "Jallianwala Bagh Flame of Liberty",
            "image": "images/flame_of_liberty.jpeg",
            "points": [
                "The central pylon-shaped monument inside Jallianwala Bagh, representing the eternal flame for the martyrs."
            ]
        },
        {
            "name": "Maharaja Ranjit Singh Museum, Amritsar",
            "image": "images/maharaja_ranjit_singh_museum.jpeg",
            "points": [
                "Located in one of his summer palaces, it is a monument showcasing the life and achievements of the Sikh emperor."
            ]
        },
        {
            "name": "Clock Tower, Amritsar (Original Site)",
            "image": "images/clock_tower_amritsar_site.jpeg",
            "points": [
                "Though demolished, the site of the original British-era clock tower near the Golden Temple is a historical monument marker."
            ]
        },
        {
            "name": "Partition Museum, Amritsar",
            "image": "images/partition_museum_amritsar.jpeg",
            "points": [
                "Housed in the historic Town Hall building, it is the world's first museum dedicated to the 1947 Partition."
            ]
        },
        {
            "name": "Moti Bagh Palace, Patiala",
            "image": "images/moti_bagh_palace.jpeg",
            "points": [
                "One of the largest residences in the world, the main palace is now the Netaji Subhas National Institute of Sports."
            ]
        },
        {
            "name": "Old Anarkali's Tomb, Batala",
            "image": "images/anarkalis_tomb_batala.jpeg",
            "points": [
                "A local monument and tomb believed by some to be connected to the legendary courtesan Anarkali."
            ]
        },
        {
            "name": "Devi Talab Mandir, Jalandhar",
            "image": "images/devi_talab_mandir.jpeg",
            "points": [
                "A famous Hindu temple and a revered Shakti Peeth, with a large sacred tank similar to the Golden Temple."
            ]
        },
        {
            "name": "St. Mary's Cathedral, Jalandhar",
            "image": "images/st_marys_cathedral_jalandhar.jpeg",
            "points": [
                "A prominent Catholic cathedral known for its unique secular and multi-religious design."
            ]
        },
        {
            "name": "Kanjli Wetland Bridge",
            "image": "images/kanjli_wetland_bridge.jpeg",
            "points": [
                "A historic bridge built in the 19th century, a monument located within a Ramsar wetland site."
            ]
        },
        {
            "name": "Chhota Ghallughara Memorial, Gurdaspur",
            "image": "images/chhota_ghallughara_memorial.jpeg",
            "points": [
                "A memorial dedicated to the victims of the 'Minor Sikh Holocaust' of 1746."
            ]
        },
        {
            "name": "Vadda Ghallughara Memorial, Kup Rohira",
            "image": "images/vadda_ghallughara_memorial.jpeg",
            "points": [
                "A monument commemorating the 'Great Sikh Holocaust' of 1762, where tens of thousands of Sikhs were killed."
            ]
        },
        {
            "name": "Punjab State War Heroes' Memorial & Museum, Amritsar",
            "image": "images/punjab_war_heroes_memorial.jpeg",
            "points": [
                "A modern memorial with a 45-meter high sword monument, dedicated to the soldiers of Punjab."
            ]
        },
        {
            "name": "Anandpur Sahib Forts (Keshgarh, Anandgarh, etc.)",
            "image": "images/anandpur_sahib_forts.jpeg",
            "points": [
                "The complex of five forts built by Guru Gobind Singh around the city of Anandpur Sahib."
            ]
        },
        {
            "name": "Faridkot Fort",
            "image": "images/faridkot_fort.jpeg",
            "points": [
                "A 700-year-old fort with impressive architecture, located in the heart of Faridkot city."
            ]
        },
        {
            "name": "Ferozepur War Memorial",
            "image": "images/ferozepur_war_memorial.jpeg",
            "points": [
                "A memorial commemorating the soldiers who fought in the Anglo-Sikh wars."
            ]
        },
        {
            "name": "National Martyrs Memorial, Hussainiwala",
            "image": "images/hussainiwala_memorial.jpeg",
            "points": [
                "The cremation site of freedom fighters Bhagat Singh, Sukhdev, and Rajguru, on the banks of the Sutlej River."
            ]
        },
        {
            "name": "Sanghol (Ucha Pind) Archaeological Museum",
            "image": "images/sanghol_museum.jpeg",
            "points": [
                "A museum built on a Harappan archaeological site, a monument to Punjab's ancient history."
            ]
        },
        {
            "name": "Bathinda Fort",
            "image": "images/bathinda_fort.jpeg",
            "points": [
                "Also known as Govindgarh Fort, Bathinda, it is a historic monument in the city of Bathinda."
            ]
        },
        {
            "name": "Neelam Cinema Building, Chandigarh",
            "image": "images/neelam_cinema.jpeg",
            "points": [
                "While in the UT, its proximity and cultural link make this Corbusier-era building a monument of post-independence modernism for Punjab."
            ]
        },
        {
            "name": "Punjab Agricultural University Museum, Ludhiana",
            "image": "images/pau_museum.jpeg",
            "points": [
                "The museum buildings, resembling traditional Punjabi village houses, are a monument to the Green Revolution."
            ]
        },
        {
            "name": "Tomb of Shagird, Talania",
            "image": "images/tomb_of_shagird.jpeg",
            "points": [
                "A beautiful Mughal-era tomb near Sirhind, often paired with the Ustad's tomb in Nakodar."
            ]
        },
        {
            "name": "Saragarhi Memorial Gurudwara, Ferozepur",
            "image": "images/saragarhi_memorial.jpeg",
            "points": [
                "A gurdwara built in honor of the 21 soldiers of the 36th Sikhs regiment who died in the Battle of Saragarhi."
            ]
        }
    ],
        "Rajasthan": [
        {
            "name": "Hawa Mahal",
            "image": "images/hawa_mahal.jfif",
            "points": [
                "The iconic 'Palace of Winds', with a stunning five-story facade featuring 953 small windows (jharokhas).",
                "It was built to allow royal women to observe street life and festivities unseen."
            ]
        },
        {
            "name": "Amber Fort (Amer Fort)",
            "image": "images/amber_fort.jfif",
            "points": [
                "A magnificent hilltop fort-palace complex, a classic example of Rajput architecture.",
                "Famous for its Sheesh Mahal (Mirror Palace), where a single candle can illuminate the entire room."
            ]
        },
        {
            "name": "Mehrangarh Fort",
            "image": "images/mehrangarh_fort.jfif",
            "points": [
                "One of the largest and most majestic forts in India, looming 410 feet above the city of Jodhpur.",
                "It houses a superb museum with a collection of royal palanquins, weaponry, and art."
            ]
        },
        {
            "name": "Jantar Mantar, Jaipur",
            "image": "images/jantar_mantar_jaipur.jfif",
            "points": [
                "A UNESCO World Heritage site with a collection of nineteen colossal astronomical instruments.",
                "It includes the world's largest stone sundial, which is accurate to two seconds."
            ]
        },
        {
            "name": "Chittorgarh Fort",
            "image": "images/chittorgarh_fort.jfif",
            "points": [
                "The largest fort in India, a UNESCO World Heritage Site that is a symbol of Rajput valor and sacrifice.",
                "It is famous for its Vijay Stambha (Tower of Victory) and the legend of Rani Padmini."
            ]
        },
        {
            "name": "Udaipur City Palace",
            "image": "images/udaipur_city_palace.jfif",
            "points": [
                "A spectacular palace complex on the banks of Lake Pichola, showcasing a blend of Rajput and Mughal architecture."
            ]
        },
        {
            "name": "Jaisalmer Fort (Sonar Quila)",
            "image": "images/jaisalmer_fort.jfif",
            "points": [
                "A massive 'living fort' built from yellow sandstone, giving it a golden hue, and a UNESCO World Heritage Site.",
                "It is one of the few forts in the world where a significant portion of the old city's population still resides."
            ]
        },
        {
            "name": "Kumbhalgarh Fort",
            "image": "images/kumbhalgarh_fort.jfif",
            "points": [
                "A Mewar fortress known for its massive wall, which is the second-longest continuous wall in the world after the Great Wall of China."
            ]
        },
        {
            "name": "Ranthambore Fort",
            "image": "images/ranthambore_fort.jfif",
            "points": [
                "A formidable fort located inside the Ranthambore National Park, a UNESCO World Heritage site."
            ]
        },
        {
            "name": "Jaigarh Fort",
            "image": "images/jaigarh_fort.jfif",
            "points": [
                "Located on the 'Hill of Eagles', it overlooks Amber Fort and is famous for housing the Jaivana, the world's largest cannon on wheels."
            ]
        },
        {
            "name": "Nahargarh Fort",
            "image": "images/nahargarh_fort.jfif",
            "points": [
                "A fort on the edge of the Aravalli Hills, offering stunning panoramic views of the city of Jaipur."
            ]
        },
        {
            "name": "Umaid Bhawan Palace, Jodhpur",
            "image": "images/umaid_bhawan_palace.jfif",
            "points": [
                "One of the world's largest private residences, a part of which is a heritage hotel and a museum."
            ]
        },
        {
            "name": "Jaswant Thada, Jodhpur",
            "image": "images/jaswant_thada.jfif",
            "points": [
                "An intricately crafted marble cenotaph built in memory of Maharaja Jaswant Singh II, often called the 'Taj Mahal of Marwar'."
            ]
        },
        {
            "name": "Dilwara Temples, Mount Abu",
            "image": "images/dilwara_temples.jfif",
            "points": [
                "A group of five spectacular Jain temples renowned for their extraordinary use of marble and intricate carvings."
            ]
        },
        {
            "name": "Chand Baori, Abhaneri",
            "image": "images/chand_baori.jfif",
            "points": [
                "One of the deepest and largest stepwells in India, with 3,500 narrow steps arranged in perfect symmetry."
            ]
        },
        {
            "name": "Gadsisar Lake Gateway (Tilon-ki-Pol)",
            "image": "images/gadsisar_lake_gateway.jfif",
            "points": [
                "The ornate sandstone gateway to the Gadsisar Lake in Jaisalmer, a beautiful example of local architecture."
            ]
        },
        {
            "name": "Patwon Ki Haveli, Jaisalmer",
            "image": "images/patwon_ki_haveli.jfif",
            "points": [
                "A cluster of five large, elaborately decorated havelis (mansions), famous for their intricate architecture and mirror work."
            ]
        },
        {
            "name": "Salim Singh Ki Haveli, Jaisalmer",
            "image": "images/salim_singh_ki_haveli.jfif",
            "points": [
                "A distinctive haveli with a unique, ship-like narrow front and an arched roof with blue cupolas."
            ]
        },
        {
            "name": "Bada Bagh, Jaisalmer",
            "image": "images/bada_bagh.jfif",
            "points": [
                "A garden complex with a set of royal cenotaphs (chhatris) of the Maharajas of Jaisalmer state."
            ]
        },
        {
            "name": "Lake Palace, Udaipur",
            "image": "images/lake_palace_udaipur.jfif",
            "points": [
                "A former royal summer palace built on an island in Lake Pichola, now a world-renowned luxury hotel."
            ]
        },
        {
            "name": "Saheliyon Ki Bari, Udaipur",
            "image": "images/saheliyon_ki_bari.jfif",
            "points": [
                "The 'Garden of the Maidens', a beautiful garden with fountains, kiosks, a lotus pool, and marble elephants."
            ]
        },
        {
            "name": "Jagmandir, Udaipur",
            "image": "images/jagmandir_udaipur.jfif",
            "points": [
                "A palace built on an island in Lake Pichola, known for its beautiful courtyards and gardens."
            ]
        },
        {
            "name": "Albert Hall Museum, Jaipur",
            "image": "images/albert_hall_museum.jfif",
            "points": [
                "The oldest museum of the state, a stunning example of Indo-Saracenic architecture located in Ram Niwas Garden."
            ]
        },
        {
            "name": "Brahma Temple, Pushkar",
            "image": "images/brahma_temple_pushkar.jfif",
            "points": [
                "One of the very few temples in the world dedicated to the Hindu creator-god, Brahma."
            ]
        },
        {
            "name": "Ajmer Sharif Dargah",
            "image": "images/ajmer_sharif_dargah.jfif",
            "points": [
                "The revered Sufi shrine of the saint Moinuddin Chishti, a major pilgrimage site for people of all faiths."
            ]
        },
        {
            "name": "Vijay Stambha (Victory Tower), Chittorgarh",
            "image": "images/vijay_stambha.jfif",
            "points": [
                "An imposing 9-story tower within Chittorgarh Fort, built to commemorate victory over Mahmud Khilji."
            ]
        },
        {
            "name": "Kirti Stambha (Tower of Fame), Chittorgarh",
            "image": "images/kirti_stambha.jfif",
            "points": [
                "A 12th-century tower dedicated to Adinath, the first Jain Tirthankara, adorned with figures from the Jain pantheon."
            ]
        },
        {
            "name": "Gagron Fort",
            "image": "images/gagron_fort.jfif",
            "points": [
                "A unique hill and water fort, surrounded by water on three sides, a UNESCO World Heritage site."
            ]
        },
        {
            "name": "Bhangarh Fort",
            "image": "images/bhangarh_fort.jfif",
            "points": [
                "The ruins of a 17th-century fort, famously known as the most 'haunted' place in India."
            ]
        },
        {
            "name": "Mandore Gardens",
            "image": "images/mandore_gardens.jfif",
            "points": [
                "The site of the ancient capital of Marwar, featuring historic cenotaphs, temples, and a hall of heroes."
            ]
        },
        {
            "name": "Ranakpur Jain Temple",
            "image": "images/ranakpur_jain_temple.jfif",
            "points": [
                "A magnificent Jain temple complex known for its 1,444 intricately carved marble pillars, no two of which are alike."
            ]
        },
        {
            "name": "Junagarh Fort, Bikaner",
            "image": "images/junagarh_fort.jfif",
            "points": [
                "A massive fort that has never been conquered, containing palaces, temples, and pavilions with exquisite artwork."
            ]
        },
        {
            "name": "Karni Mata Temple, Deshnoke",
            "image": "images/karni_mata_temple.jfif",
            "points": [
                "A famous temple known for the thousands of holy rats that live and are worshipped within its premises."
            ]
        },
        {
            "name": "Taragarh Fort, Bundi",
            "image": "images/taragarh_fort_bundi.jfif",
            "points": [
                "An impressive fort on a steep hill, known for its crumbling palaces and magnificent murals of the Bundi school of painting."
            ]
        },
        {
            "name": "Rani Ki Ji Baori, Bundi",
            "image": "images/rani_ki_ji_baori.jfif",
            "points": [
                "The 'Queen's Stepwell', a large and ornate stepwell renowned for its superb carvings and architecture."
            ]
        },
        {
            "name": "Monsoon Palace (Sajjan Garh)",
            "image": "images/monsoon_palace.jfif",
            "points": [
                "A hilltop palatial residence overlooking Fateh Sagar Lake, offering breathtaking sunset views."
            ]
        },
        {
            "name": "Fateh Prakash Palace, Chittorgarh",
            "image": "images/fateh_prakash_palace.jfif",
            "points": [
                "A grand palace inside Chittorgarh Fort, now a museum with a rich collection of sculptures, weapons, and art."
            ]
        },
        {
            "name": "Eklingji Temple, Udaipur",
            "image": "images/eklingji_temple.jfif",
            "points": [
                "A complex of 108 temples dedicated to Lord Shiva, the tutelary deity of the Mewar rulers."
            ]
        },
        {
            "name": "Lohagarh Fort, Bharatpur",
            "image": "images/lohagarh_fort.jfif",
            "points": [
                "The 'Iron Fort', one of the strongest forts ever built in Indian history, which withstood numerous British attacks."
            ]
        },
        {
            "name": "Deeg Palace",
            "image": "images/deeg_palace.jfif",
            "points": [
                "A beautiful garden palace that served as the summer resort for the rulers of Bharatpur, famous for its fountains."
            ]
        },
        {
            "name": "Sariska Palace",
            "image": "images/sariska_palace.jfif",
            "points": [
                "A former royal hunting lodge of the Maharaja of Alwar, now a heritage hotel on the edge of the Sariska Tiger Reserve."
            ]
        },
        {
            "name": "Neemrana Fort-Palace",
            "image": "images/neemrana_fort_palace.jfif",
            "points": [
                "A 15th-century fort-palace that has been restored and converted into one of India's oldest heritage hotels."
            ]
        },
        {
            "name": "Samode Palace",
            "image": "images/samode_palace.jfif",
            "points": [
                "A magnificent heritage hotel known for its stunning Sheesh Mahal (Hall of Mirrors) and Indo-Saracenic architecture."
            ]
        },
        {
            "name": "Khwaja Gharib Nawaz Dargah Entrance (Nizam Gate)",
            "image": "images/ajmer_dargah_gate.jfif",
            "points": [
                "The main gate to the Ajmer Sharif Dargah, a monumental structure built by the Nizam of Hyderabad."
            ]
        },
        {
            "name": "Rambagh Palace, Jaipur",
            "image": "images/rambagh_palace.jfif",
            "points": [
                "The former residence of the Maharaja of Jaipur, now a luxury hotel, known as the 'Jewel of Jaipur'."
            ]
        },
        {
            "name": "Sukh Mahal, Bundi",
            "image": "images/sukh_mahal_bundi.jfif",
            "points": [
                "A small summer palace on the edge of Jait Sagar Lake where Rudyard Kipling is said to have stayed and written."
            ]
        },
        {
            "name": "Galtaji Temple (Monkey Temple)",
            "image": "images/galtaji_temple.jfif",
            "points": [
                "An ancient Hindu pilgrimage site with temples, pavilions, and holy kunds (water tanks) inhabited by a large colony of monkeys."
            ]
        },
        {
            "name": "Adhai Din Ka Jhonpra, Ajmer",
            "image": "images/adhai_din_ka_jhonpra.jfif",
            "points": [
                "One of the oldest mosques in India, a remarkable example of early Indo-Islamic architecture, built from the remains of a Sanskrit college."
            ]
        },
        {
            "name": "Sheesh Mahal, Amer Fort",
            "image": "images/sheesh_mahal_amer.jfif",
            "points": [
                "A specific monument within the Amer Fort, famous for its intricate mirror mosaics that reflect light beautifully."
            ]
        },
        {
            "name": "City Palace, Jaipur",
            "image": "images/city_palace_jaipur.jfif",
            "points": [
                "The central palace of Jaipur, a vast complex of courtyards, gardens, and buildings that is still a royal residence."
            ]
        }
    ],
"Sikkim": [
        {
            "name": "Rumtek Monastery",
            "image": "images/rumtek_monastery.jfif",
            "points": [
                "The largest monastery in Sikkim and the seat of the Karmapa Lama.",
                "It houses some of the world's most unique Buddhist scriptures and art objects."
            ]
        },
        {
            "name": "Dubdi Monastery",
            "image": "images/dubdi_monastery.jfif",
            "points": [
                "Also known as the 'Hermit's Cell', it is the oldest monastery in Sikkim.",
                "Established in 1701, it is a key site for Buddhist pilgrims, located on a scenic hilltop."
            ]
        },
        {
            "name": "Pemayangtse Monastery",
            "image": "images/pemayangtse_monastery.jfif",
            "points": [
                "One of the oldest and most important monasteries of the Nyingma order of Tibetan Buddhism.",
                "It houses a famous seven-tiered wooden model of the heavenly palace of Guru Rinpoche."
            ]
        },
        {
            "name": "Rabdentse Ruins",
            "image": "images/rabdentse_ruins.jfif",
            "points": [
                "The archaeological ruins of the second capital of the former Kingdom of Sikkim from 1670 to 1814.",
                "The site offers spectacular views of the Kanchenjunga range."
            ]
        },
        {
            "name": "Tashiding Monastery",
            "image": "images/tashiding_monastery.jfif",
            "points": [
                "A highly revered monastery perched on a heart-shaped hill, believed to cleanse the sins of those who seek forgiveness.",
                "It is famous for the Bhumchu festival, where a sacred pot of water predicts the state's future."
            ]
        },
        {
            "name": "Coronation Throne of Norbugang",
            "image": "images/coronation_throne_of_norbugang.jfif",
            "points": [
                "The site where the first Chogyal (king) of Sikkim was consecrated in 1642.",
                "It consists of a stone throne and a giant prayer wheel, set in a tranquil cypress grove."
            ]
        },
        {
            "name": "Samdruptse Hill Statue (Guru Padmasambhava)",
            "image": "images/samdruptse_hill_statue.jfif",
            "points": [
                "A towering 135-foot statue of Guru Padmasambhava (Guru Rinpoche) on Samdruptse Hill near Namchi.",
                "It is the highest statue of the saint in the world and a modern monument of faith."
            ]
        },
        {
            "name": "Siddheshwar Dham (Char Dham), Namchi",
            "image": "images/siddheshwar_dham.jfif",
            "points": [
                "A massive pilgrimage and cultural complex featuring a giant statue of Lord Shiva and replicas of the four Dhams.",
                "It is a modern monument celebrating Hindu culture."
            ]
        },
        {
            "name": "Enchey Monastery",
            "image": "images/enchey_monastery.jfif",
            "points": [
                "An important monastery of the Nyingma order located in Gangtok, believed to be blessed by the tantric master Lama Druptob Karpo."
            ]
        },
        {
            "name": "Do-Drul Chorten",
            "image": "images/do-drul_chorten.jfif",
            "points": [
                "A large stupa in Gangtok, built in 1945, encircled by 108 prayer wheels.",
                "It is a prominent landmark and a site of veneration."
            ]
        },
        {
            "name": "Ralong Monastery",
            "image": "images/ralong_monastery.jfif",
            "points": [
                "A significant monastery of the Kagyu sect in South Sikkim, known for its extensive collection of paintings and thangkas."
            ]
        },
        {
            "name": "Lachung Monastery",
            "image": "images/lachung_monastery.jfif",
            "points": [
                "A beautiful Nyingma Buddhist monastery in the picturesque village of Lachung, North Sikkim."
            ]
        },
        {
            "name": "Phodong Monastery",
            "image": "images/phodong_monastery.jfif",
            "points": [
                "One of the six most important monasteries in Sikkim, belonging to the Kagyupa sect, located in North Sikkim."
            ]
        },
        {
            "name": "Labrang Monastery",
            "image": "images/labrang_monastery.jfif",
            "points": [
                "A unique monastery near Phodong, known for its well-preserved murals and architectural design."
            ]
        },
        {
            "name": "Sanga Choeling Monastery",
            "image": "images/sanga_choeling_monastery.jfif",
            "points": [
                "Established in the 17th century, it is one of the oldest monasteries in Sikkim, located on a ridge opposite Pemayangtse."
            ]
        },
        {
            "name": "Kirateshwar Mahadev Temple, Legship",
            "image": "images/kirateshwar_mahadev_temple.jfif",
            "points": [
                "A popular Hindu temple on the banks of the River Rangit, associated with a story from the Mahabharata."
            ]
        },
        {
            "name": "Ganesh Tok, Gangtok",
            "image": "images/ganesh_tok.jfif",
            "points": [
                "A small temple dedicated to Lord Ganesha on a hilltop, offering panoramic views of Gangtok and the Kanchenjunga."
            ]
        },
        {
            "name": "Hanuman Tok, Gangtok",
            "image": "images/hanuman_tok.jfif",
            "points": [
                "A temple dedicated to Lord Hanuman at a high altitude, managed by the Indian Army, offering serene views."
            ]
        },
        {
            "name": "Tathagata Tsal (Buddha Park), Ravangla",
            "image": "images/tathagata_tsal.jfif",
            "points": [
                "A park featuring a 130-foot high statue of the Buddha as its centerpiece, a major modern pilgrimage site."
            ]
        },
        {
            "name": "Yuksom Ancient Chortens",
            "image": "images/yuksom_chortens.jfif",
            "points": [
                "Several ancient chortens (stupas) in Yuksom, the first capital of Sikkim, marking its historical and religious importance."
            ]
        },
        {
            "name": "Kewzing Village Monastery",
            "image": "images/kewzing_monastery.jfif",
            "points": [
                "A community-built monastery in a traditional Bhutia village, representing the local preservation of culture."
            ]
        },
        {
            "name": "Hee Bermiok Sirijunga Temple",
            "image": "images/hee_bermiok_sirijunga_temple.jfif",
            "points": [
                "A temple dedicated to the Limboo folk hero and philosopher, Sirijunga, a monument to the Limboo community's heritage."
            ]
        },
        {
            "name": "Sichey Monastery",
            "image": "images/sichey_monastery.jfif",
            "points": [
                "A serene monastery located just outside Gangtok, offering a peaceful retreat."
            ]
        },
        {
            "name": "Namgyal Institute of Tibetology Building",
            "image": "images/namgyal_institute_of_tibetology.jfif",
            "points": [
                "A traditional Tibetan-style building in Gangtok that is a world-renowned center for the study of Buddhist philosophy and religion."
            ]
        },
        {
            "name": "Old British Residency, Gangtok",
            "image": "images/old_british_residency_gangtok.jfif",
            "points": [
                "A colonial-era building that housed the British Political Officer, now the Raj Bhavan, the Governor's residence."
            ]
        },
        {
            "name": "White Hall, Gangtok",
            "image": "images/white_hall_gangtok.jfif",
            "points": [
                "A colonial-era structure built in 1932 in memory of the first Political Officer of Sikkim, Sir James Claude White."
            ]
        },
        {
            "name": "Tsuk La Khang Royal Chapel & Monastery",
            "image": "images/tsuk_la_khang.jfif",
            "points": [
                "The principal place of worship for the former royal family of Sikkim, located within the palace grounds."
            ]
        },
        {
            "name": "Singshore Bridge",
            "image": "images/singshore_bridge.jfif",
            "points": [
                "One of the highest suspension bridges in Asia, an engineering monument connecting two hills near Uttarey."
            ]
        },
        {
            "name": "Melli Monastery",
            "image": "images/melli_monastery.jfif",
            "points": [
                "A beautiful monastery located at the entry point to South Sikkim."
            ]
        },
        {
            "name": "Kabi Lungchok",
            "image": "images/kabi_lungchok.jfif",
            "points": [
                "A historic site where the 'blood brotherhood' treaty was signed between the Lepcha and Bhutia chiefs, marked by stone pillars."
            ]
        },
        {
            "name": "Lingtam Monastery",
            "image": "images/lingtam_monastery.jfif",
            "points": [
                "A significant monastery in the remote region of East Sikkim."
            ]
        },
        {
            "name": "Chorten Gompa, Pelling",
            "image": "images/chorten_gompa_pelling.jfif",
            "points": [
                "A notable monastery in Pelling with a collection of murals and religious artifacts."
            ]
        },
        {
            "name": "Tholung Monastery",
            "image": "images/tholung_monastery.jfif",
            "points": [
                "A remote and highly sacred monastery in North Sikkim that houses rare and priceless artifacts from other monasteries."
            ]
        },
        {
            "name": "Yangsum Monastery",
            "image": "images/yangsum_monastery.jfif",
            "points": [
                "A small, peaceful monastery near Rinchenpong."
            ]
        },
        {
            "name": "Baba Harbhajan Singh Memorial Temple",
            "image": "images/baba_harbhajan_singh_temple.jfif",
            "points": [
                "A unique shrine dedicated to a soldier of the Indian Army, revered as the 'Hero of Nathula'."
            ]
        },
        {
            "name": "Mangan District Administrative Centre Building",
            "image": "images/mangan_dac.jfif",
            "points": [
                "The main administrative building for North Sikkim, representing governance in the region."
            ]
        },
        {
            "name": "Gyalshing Town Gate",
            "image": "images/gyalshing_town_gate.jfif",
            "points": [
                "A traditional gate marking the entrance to the headquarters of West Sikkim."
            ]
        },
        {
            "name": "Legship Statue of Guru Rinpoche",
            "image": "images/legship_guru_rinpoche_statue.jfif",
            "points": [
                "A large statue of Guru Padmasambhava overlooking the Rangit River."
            ]
        },
        {
            "name": "Chakung Village Monastery",
            "image": "images/chakung_monastery.jfif",
            "points": [
                "A local monastery in West Sikkim offering stunning views of the surrounding landscape."
            ]
        },
        {
            "name": "Reshi Hot Springs Structures",
            "image": "images/reshi_hot_springs.jfif",
            "points": [
                "The temple and bathing enclosures at this pilgrimage site are considered monuments of faith."
            ]
        },
        {
            "name": "Soreng Town Clock Tower",
            "image": "images/soreng_clock_tower.jfif",
            "points": [
                "A landmark monument in the town of Soreng."
            ]
        },
        {
            "name": "Kaluk Monastery",
            "image": "images/kaluk_monastery.jfif",
            "points": [
                "A serene monastery in the picturesque village of Kaluk."
            ]
        },
        {
            "name": "MG Marg Statue of Unity",
            "image": "images/mg_marg_statue_of_unity.jfif",
            "points": [
                "A modern monument on Gangtok's main promenade depicting Bhutia, Lepcha, and Nepali figures, symbolizing unity."
            ]
        },
        {
            "name": "Pakyong Airport Terminal",
            "image": "images/pakyong_airport.jfif",
            "points": [
                "One of the highest airports in India, an engineering monument representing modern connectivity for the state."
            ]
        },
        {
            "name": "Tingchim Monastery",
            "image": "images/tingchim_monastery.jfif",
            "points": [
                "A significant local monastery in North Sikkim."
            ]
        },
        {
            "name": "Jorethang Town Bridge",
            "image": "images/jorethang_bridge.jfif",
            "points": [
                "An important bridge over the Rangeet River, a monument of connectivity for South Sikkim."
            ]
        },
        {
            "name": "Himalayan Zoological Park Gate",
            "image": "images/himalayan_zoological_park_gate.jfif",
            "points": [
                "The entrance gate to the park, designed in a traditional style, is a monument to the state's unique fauna."
            ]
        },
        {
            "name": "Tashi View Point Gazebo",
            "image": "images/tashi_view_point_gazebo.jfif",
            "points": [
                "A viewing structure built to offer spectacular views of Mount Kanchenjunga and surrounding peaks."
            ]
        },
        {
            "name": "Tumlong Ruins",
            "image": "images/tumlong_ruins.jfif",
            "points": [
                "The ruins of the third capital of Sikkim, offering a glimpse into the kingdom's past."
            ]
        },
        {
            "name": "Chungthang Monastery",
            "image": "images/chungthang_monastery.jfif",
            "points": [
                "A monastery located at the confluence of the Lachen and Lachung rivers, a spot consecrated by Guru Padmasambhava."
            ]
        }
    ],
    "Tamil Nadu": [
        {
            "name": "Brihadeeswarar Temple, Thanjavur",
            "image": "images/brihadeeswarar_temple_thanjavur.jfif",
            "points": [
                "A magnificent temple built by the great Chola king Rajaraja I, a UNESCO World Heritage Site.",
                "Its towering vimana (temple tower) is capped by a single 80-ton stone, a marvel of ancient engineering."
            ]
        },
        {
            "name": "Meenakshi Amman Temple, Madurai",
            "image": "images/meenakshi_amman_temple_madurai.jfif",
            "points": [
                "A historic temple complex dedicated to the goddess Meenakshi and her consort, Sundareshwar.",
                "Famous for its 14 towering gopurams (gateway towers) covered with thousands of colorful stone figures."
            ]
        },
        {
            "name": "Shore Temple, Mahabalipuram",
            "image": "images/shore_temple_mahabalipuram.jfif",
            "points": [
                "A stunning structural temple complex overlooking the Bay of Bengal, a UNESCO World Heritage Site.",
                "Built with blocks of granite in the 8th century, it is one of the oldest structural stone temples in South India."
            ]
        },
        {
            "name": "Great Living Chola Temples",
            "image": "images/great_living_chola_temples.jpg",
            "points": [
                "A UNESCO World Heritage Site comprising three great temples: Brihadeeswarar at Thanjavur, Gangaikonda Cholapuram, and Airavatesvara at Darasuram."
            ]
        },
        {
            "name": "Group of Monuments at Mahabalipuram",
            "image": "images/mahabalipuram_monuments.jfif",
            "points": [
                "A UNESCO site that includes the Shore Temple, Pancha Rathas (five monolithic chariots), Arjuna's Penance (a giant rock relief), and numerous cave temples."
            ]
        },
        {
            "name": "Ramanathaswamy Temple, Rameswaram",
            "image": "images/ramanathaswamy_temple.jfif",
            "points": [
                "A major Hindu pilgrimage site (Char Dham), dedicated to Lord Shiva, famous for having the longest temple corridor in the world."
            ]
        },
        {
            "name": "Vivekananda Rock Memorial, Kanyakumari",
            "image": "images/vivekananda_rock_memorial.jfif",
            "points": [
                "A majestic memorial situated on a rock island where Swami Vivekananda is said to have attained enlightenment."
            ]
        },
        {
            "name": "Thiruvalluvar Statue, Kanyakumari",
            "image": "images/thiruvalluvar_statue.jfif",
            "points": [
                "A towering 133-foot stone statue of the ancient Tamil poet and philosopher, Thiruvalluvar."
            ]
        },
        {
            "name": "Thillai Nataraja Temple, Chidambaram",
            "image": "images/thillai_nataraja_temple.jfif",
            "points": [
                "A historic temple dedicated to Lord Shiva as the cosmic dancer, a masterpiece of Dravidian architecture."
            ]
        },
        {
            "name": "Thirumalai Nayakkar Mahal, Madurai",
            "image": "images/thirumalai_nayakkar_mahal.jfif",
            "points": [
                "A grand 17th-century palace built by King Tirumala Nayaka, known for its massive pillars and fusion of Dravidian and Islamic styles."
            ]
        },
        {
            "name": "Fort St. George, Chennai",
            "image": "images/fort_st_george.jfif",
            "points": [
                "The first English fortress in India, built in 1644, which now houses the Tamil Nadu legislative assembly and a museum."
            ]
        },
        {
            "name": "Jambukeswarar Temple, Thiruvanaikaval",
            "image": "images/jambukeswarar_temple.jfif",
            "points": [
                "A famous Shiva temple representing the element of 'water' (Appu Lingam) among the Pancha Bhoota Sthalams."
            ]
        },
        {
            "name": "Arunachaleswarar Temple, Tiruvannamalai",
            "image": "images/arunachaleswarar_temple.jfif",
            "points": [
                "A massive temple dedicated to Lord Shiva, representing the element 'fire' (Agni Lingam), located at the foot of the Arunachala hill."
            ]
        },
        {
            "name": "Kanchi Kailasanathar Temple, Kanchipuram",
            "image": "images/kanchi_kailasanathar_temple.jfif",
            "points": [
                "The oldest temple in Kanchipuram, a magnificent example of Pallava architecture with beautiful sandstone carvings."
            ]
        },
        {
            "name": "Ekambareswarar Temple, Kanchipuram",
            "image": "images/ekambareswarar_temple.jfif",
            "points": [
                "The largest temple in Kanchipuram, representing the element 'earth' (Prithvi Lingam) and famous for its ancient mango tree."
            ]
        },
        {
            "name": "Srirangam Ranganathaswamy Temple",
            "image": "images/srirangam_temple.jfif",
            "points": [
                "The largest functioning Hindu temple in the world, a vast complex dedicated to Lord Vishnu on an island in the Kaveri river."
            ]
        },
        {
            "name": "Rock Fort Temple, Tiruchirappalli",
            "image": "images/rock_fort_temple.jfif",
            "points": [
                "A temple complex built on an ancient rock, featuring the Uchchi Pillayar Temple at the top, offering panoramic city views."
            ]
        },
        {
            "name": "Danish Fort (Fort Dansborg), Tharangambadi",
            "image": "images/danish_fort.jfif",
            "points": [
                "A 17th-century Danish fort overlooking the Bay of Bengal, one of the most important Danish monuments in India."
            ]
        },
        {
            "name": "Gingee Fort",
            "image": "images/gingee_fort.jfif",
            "points": [
                "One of the most formidable forts in South India, built across three hillocks with extensive walls and structures."
            ]
        },
        {
            "name": "Sittanavasal Cave (Arivar Koil)",
            "image": "images/sittanavasal_cave.jfif",
            "points": [
                "A 2nd-century Jain rock-cut cave temple known for its fine fresco paintings, among the oldest in India."
            ]
        },
        {
            "name": "Kapaleeshwarar Temple, Chennai",
            "image": "images/kapaleeshwarar_temple.jfif",
            "points": [
                "A vibrant temple in Mylapore, Chennai, dedicated to Lord Shiva, a classic example of Dravidian architecture."
            ]
        },
        {
            "name": "Valluvar Kottam, Chennai",
            "image": "images/valluvar_kottam.jfif",
            "points": [
                "A monument dedicated to the poet Thiruvalluvar, featuring a massive stone chariot and an auditorium."
            ]
        },
        {
            "name": "Murugan Temple, Palani",
            "image": "images/palani_murugan_temple.jfif",
            "points": [
                "One of the Six Abodes of Murugan, a major pilgrimage site located on a hilltop."
            ]
        },
        {
            "name": "Swamimalai Murugan Temple",
            "image": "images/swamimalai_murugan_temple.jfif",
            "points": [
                "Another of the Six Abodes of Murugan, where the son Murugan is said to have taught his father, Shiva."
            ]
        },
        {
            "name": "Thiruchendur Murugan Temple",
            "image": "images/thiruchendur_murugan_temple.jfif",
            "points": [
                "The only one of the Six Abodes of Murugan located on the seashore."
            ]
        },
        {
            "name": "Ripon Building, Chennai",
            "image": "images/ripon_building.jfif",
            "points": [
                "A magnificent all-white structure and a fine example of Neoclassical architecture, housing the Chennai Corporation."
            ]
        },
        {
            "name": "Madras High Court",
            "image": "images/madras_high_court.jfif",
            "points": [
                "A stunning example of Indo-Saracenic architecture, one of the largest judicial buildings in the world."
            ]
        },
        {
            "name": "Chettinad Mansions",
            "image": "images/chettinad_mansions.jfif",
            "points": [
                "The grand, palatial homes of the Chettiar merchant community, known for their unique architecture and use of materials from around the world."
            ]
        },
        {
            "name": "Vellore Fort",
            "image": "images/vellore_fort.jfif",
            "points": [
                "A large 16th-century fort known for its grand ramparts, wide moat, and the beautiful Jalakandeswarar Temple inside."
            ]
        },
        {
            "name": "Thanjavur Maratha Palace",
            "image": "images/thanjavur_maratha_palace.jfif",
            "points": [
                "The former residence of the Bhonsle family, this palace complex houses museums, galleries, and the Saraswathi Mahal Library."
            ]
        },
        {
            "name": "Kallanai Dam",
            "image": "images/kallanai_dam.jfif",
            "points": [
                "An ancient dam built on the Kaveri River by the Chola king Karikalan around the 2nd century AD, one of the oldest water-regulation structures in the world."
            ]
        },
        {
            "name": "Poompuhar Monuments",
            "image": "images/poompuhar_monuments.jfif",
            "points": [
                "Monuments like the Silapathikara Art Gallery and a memorial pillar, built to commemorate the ancient port city of Puhar."
            ]
        },
        {
            "name": "Suchindram Thanumalayan Temple",
            "image": "images/suchindram_temple.jfif",
            "points": [
                "A unique temple where the trinity of Brahma, Vishnu, and Shiva are worshipped in a single form (lingam)."
            ]
        },
        {
            "name": "Uthirakosamangai Temple",
            "image": "images/uthirakosamangai_temple.jfif",
            "points": [
                "An ancient Shiva temple mentioned in hymns before the 7th century, famous for its life-sized emerald Nataraja statue."
            ]
        },
        {
            "name": "Manora Fort, Thanjavur",
            "image": "images/manora_fort.jfif",
            "points": [
                "A unique eight-storied hexagonal tower built by the Maratha ruler Serfoji II to commemorate the victory of the British over Napoleon Bonaparte."
            ]
        },
        {
        "name": "Sankagiri Fort",
        "image": "images/sankagiri_fort.jfif",
        "points": [
            "A historic fort maintained by the Vijayanagar empire and Tipu Sultan, known for its strategic location and numerous temples."
        ]},
    {
        "name": "Namakkal Anjaneyar Temple",
        "image": "images/namakkal_anjaneyar_temple.jfif",
        "points": [
            "A famous temple with a massive 18-foot monolithic statue of Lord Hanuman, carved from a single stone."
        ]
    },
    {
        "name": "Ooty Stone House",
        "image": "images/ooty_stone_house.jfif",
        "points": [
            "The first bungalow built in Ooty, a monument to the colonial history of the Nilgiris."
        ]
    },
    {
        "name": "St. Stephen's Church, Ooty",
        "image": "images/st_stephens_church_ooty.jfif",
        "points": [
            "One of the oldest churches in the Nilgiris, built in the Gothic style, featuring huge wooden beams from Tipu Sultan's palace."
        ]
    },
    {
        "name": "Government Museum, Chennai (Pantheon Complex)",
        "image": "images/government_museum_chennai.jfif",
        "points": [
            "Housed in a collection of historic colonial buildings, it is the second oldest museum in India."
        ]
    },
    {
        "name": "MGR Memorial, Chennai",
        "image": "images/mgr_memorial.jfif",
        "points": [
            "A memorial complex on Marina Beach dedicated to the former Chief Minister M. G. Ramachandran."
        ]
    },
    {
        "name": "Anna Memorial, Chennai",
        "image": "images/anna_memorial.jfif",
        "points": [
            "A memorial on Marina Beach for C. N. Annadurai, the first non-Congress Chief Minister of the state."
        ]
    },
    {
        "name": "Padmanabhapuram Palace",
        "image": "images/padmanabhapuram_palace.jfif",
        "points": [
            "Though located in Kanyakumari district, it is administered by the Govt. of Kerala. A magnificent wooden palace showcasing traditional Kerala architecture."
        ]
    },
    {
        "name": "Ayyanar Horse Statues",
        "image": "images/ayyanar_horse_statues.jfif",
        "points": [
            "Giant terracotta and plaster statues of horses found throughout rural Tamil Nadu, monuments to the guardian deity Ayyanar."
        ]
    },
    {
        "name": "Nellaiappar Temple, Tirunelveli",
        "image": "images/nellaiappar_temple.jfif",
        "points": [
            "A vast and ancient temple complex dedicated to Lord Shiva, known for its musical pillars and exquisite sculptures."
        ]
    },
    {
        "name": "Pamban Bridge",
        "image": "images/pamban_bridge.jfif",
        "points": [
            "India's first sea bridge, an engineering marvel that connects the town of Rameswaram on Pamban Island to mainland India."
        ]
    },
    {
        "name": "Alamparai Fort",
        "image": "images/alamparai_fort.jfif",
        "points": [
            "The scenic ruins of a 17th-century Mughal fort on the coast, now a popular spot for its picturesque setting."
        ]
    },
    {
        "name": "Vattakottai Fort",
        "image": "images/vattakottai_fort.jpg",     
        "points": [
            "A circular seaside fort near Kanyakumari, built in the 18th century, offering stunning views of the sea."
        ] 
    },
    {
        "name": "Eraniel Palace",
        "image": "images/eraniel_palace.jfif",
        "points": [
            "The ruins of an ancient palace of the Travancore kingdom, a protected monument showcasing traditional architecture."
        ]
    },
],
    "Telangana": [
        {
            "name": "Charminar",
            "image": "images/charminar.jfif",
            "points": [
                "The iconic symbol of Hyderabad, a magnificent monument and mosque with four grand arches.",
                "Built in 1591, it is said to commemorate the end of a deadly plague."
            ]
        },
        {
            "name": "Golconda Fort",
            "image": "images/golconda_fort.jfif",
            "points": [
                "A majestic fortified citadel famous for producing some of the world's most famous gems, including the Koh-i-Noor.",
                "It is an acoustic marvel where a handclap at the entrance can be heard at the highest point, the citadel."
            ]
        },
        {
            "name": "Ramappa Temple (Rudreswara Temple)",
            "image": "images/ramappa_temple.jfif",
            "points": [
                "A UNESCO World Heritage Site from the Kakatiya period, famous for its intricate carvings and lightweight 'floating bricks'."
            ]
        },
        {
            "name": "Warangal Fort",
            "image": "images/warangal_fort.jfif",
            "points": [
                "The historic capital of the Kakatiya dynasty, known for its massive stone gateways (Kakatiya Kala Thoranam), temples, and fortifications."
            ]
        },
        {
            "name": "Thousand Pillar Temple, Hanamkonda",
            "image": "images/thousand_pillar_temple.jfif",
            "points": [
                "A masterpiece of Kakatiya architecture, this star-shaped temple is dedicated to Shiva, Vishnu, and Surya."
            ]
        },
        {
            "name": "Qutb Shahi Tombs",
            "image": "images/qutb_shahi_tombs.jfif",
            "points": [
                "A magnificent complex of mausoleums and mosques where the rulers of the Qutb Shahi dynasty are buried.",
                "It showcases a blend of Persian, Pashtun, and Hindu architectural styles."
            ]
        },
        {
            "name": "Chowmahalla Palace",
            "image": "images/chowmahalla_palace.jfif",
            "points": [
                "The opulent palace of the Nizams of Hyderabad, renowned for its grand Khilwat (Durbar Hall) and elegant courtyards."
            ]
        },
        {
            "name": "Falaknuma Palace",
            "image": "images/falaknuma_palace.jfif",
            "points": [
                "A stunning palace in Hyderabad, meaning 'Mirror of the Sky', known for its Italian marble structure and Venetian chandeliers."
            ]
        },
        {
            "name": "Mecca Masjid, Hyderabad",
            "image": "images/mecca_masjid_hyderabad.jfif",
            "points": [
                "One of the oldest and largest mosques in India, its central arch is built with bricks made from soil brought from Mecca."
            ]
        },
        {
            "name": "Bhongir Fort",
            "image": "images/bhongir_fort.jfif",
            "points": [
                "A massive monolithic hill fort with a unique egg-shaped construction, offering panoramic views from the top."
            ]
        },
        {
            "name": "Nagarjuna Sagar Dam",
            "image": "images/nagarjuna_sagar_dam.jfif",
            "points": [
                "One of the earliest modern temples of India, a massive masonry dam on the Krishna River."
            ]
        },
        {
            "name": "Badshahi Ashurkhana",
            "image": "images/badshahi_ashurkhana.jfif",
            "points": [
                "A Shia Muslim mourning place, noted for its brilliant enamel tile work, built during the Qutb Shahi dynasty."
            ]
        },
        {
            "name": "Salar Jung Museum Building",
            "image": "images/salar_jung_museum.jfif",
            "points": [
                "A landmark building on the Musi River, housing one of the world's largest one-man collections of antiques."
            ]
        },
        {
            "name": "Taramati Baradari",
            "image": "images/taramati_baradari.jfif",
            "points": [
                "A historical sarai (inn) and a music court used by the Qutb Shahi rulers, located near Golconda."
            ]
        },
        {
            "name": "Paigah Tombs",
            "image": "images/paigah_tombs.jfif",
            "points": [
                "Magnificent marble tombs of the Paigah nobility, known for their unique geometric and floral stucco work."
            ]
        },
        {
            "name": "Medak Cathedral",
            "image": "images/medak_cathedral.jfif",
            "points": [
                "The largest diocese in Asia and the second largest in the world, renowned for its magnificent stained glass windows."
            ]
        },
        {
            "name": "Alampur Navabrahma Temples",
            "image": "images/alampur_navabrahma_temples.jfif",
            "points": [
                "A group of nine early Chalukyan temples dedicated to Lord Shiva, dating back to the 7th century."
            ]
        },
        {
            "name": "Khammam Fort",
            "image": "images/khammam_fort.jfif",
            "points": [
                "A historic fort built on a massive granite hill that has seen rule by various dynasties, including Kakatiyas and Qutb Shahis."
            ]
        },
        {
            "name": "Rachakonda Fort",
            "image": "images/rachakonda_fort.jfif",
            "points": [
                "The capital of the Recherla Velama chiefs, this fort is an excellent example of stone and earth masonry."
            ]
        },
        {
            "name": "Pillalamarri Banyan Tree & Tombs",
            "image": "images/pillalamarri.jfif",
            "points": [
                "The site of an 800-year-old banyan tree and ancient temples from the Kakatiya period."
            ]
        },
        {
            "name": "Dichpally Ramalayam",
            "image": "images/dichpally_ramalayam.jfif",
            "points": [
                "A 14th-century temple in Nizamabad, known for its intricate stone carvings and fusion of Kakatiya and Hemadpanti architectural styles."
            ]
        },
        {
            "name": "Elgandal Fort",
            "image": "images/elgandal_fort.jfif",
            "points": [
                "A historic fort located on a hill in Karimnagar, which has been a center of power for multiple dynasties."
            ]
        },
        {
            "name": "Kondagattu Anjaneya Swamy Temple",
            "image": "images/kondagattu_temple.jfif",
            "points": [
                "A famous and revered temple dedicated to Lord Hanuman, situated on a hill."
            ]
        },
        {
            "name": "Vemulawada Rajarajeshwara Swamy Temple",
            "image": "images/vemulawada_temple.jfif",
            "points": [
                "An ancient and famous Shiva temple, also a pilgrimage site for Muslims who pray at a Dargah within the complex."
            ]
        },
        {
            "name": "Purani Haveli, Hyderabad",
            "image": "images/purani_haveli.jfif",
            "points": [
                "The official residence of the Nizam, this 18th-century palace complex now houses a museum."
            ]
        },
        {
            "name": "King Kothi Palace (Nazri Bagh Palace)",
            "image": "images/king_kothi_palace.jfif",
            "points": [
                "The residence of the last Nizam of Hyderabad, Osman Ali Khan."
            ]
        },
        {
            "name": "Osmania University Arts College",
            "image": "images/osmania_university_arts_college.jfif",
            "points": [
                "A magnificent building and a masterpiece of Indo-Saracenic architecture, serving as a monument to modern education."
            ]
        },
        {
            "name": "Hyderabad Public School Building",
            "image": "images/hyderabad_public_school.jfif",
            "points": [
                "Originally the Jagirdars College, its historic buildings are a fine example of colonial-era architecture."
            ]
        },
        {
            "name": "Spanish Mosque (Masjid Iqbal Ud Daula)",
            "image": "images/spanish_mosque.jfif",
            "points": [
                "A unique mosque in Hyderabad featuring Moorish architecture, one of its kind in India."
            ]
        },
        {
            "name": "Telangana State Assembly Building",
            "image": "images/telangana_assembly_building.jfif",
            "points": [
                "A grand heritage building, constructed in 1913, showcasing a blend of Rajasthani and Persian architectural styles."
            ]
        },
        {
            "name": "Koti Residency (British Residency)",
            "image": "images/koti_residency.jfif",
            "points": [
                "A magnificent Palladian-style mansion that was the residence of the British Resident in Hyderabad."
            ]
        },
        {
            "name": "High Court of Telangana",
            "image": "images/telangana_high_court.jfif",
            "points": [
                "A beautiful heritage building in the Indo-Saracenic style, built with pink granite, located on the banks of the Musi River."
            ]
        },
        {
            "name": "Secunderabad Clock Tower",
            "image": "images/secunderabad_clock_tower.jfif",
            "points": [
                "A 120-foot tall clock tower, a prominent landmark of Secunderabad, built in 1897."
            ]
        },
        {
            "name": "Moulamain, Secunderabad",
            "image": "images/moulamain.jfif",
            "points": [
                "The historic Parade Grounds and associated colonial-era buildings in the cantonment area."
            ]
        },
        {
            "name": "Jamali Kunta, Warangal",
            "image": "images/jamali_kunta.jfif",
            "points": [
                "A historic tank with a small island monument from the Kakatiya period."
            ]
        },
        {
            "name": "Nelakondapalli Buddhist Stupa",
            "image": "images/nelakondapalli_stupa.jfif",
            "points": [
                "An ancient Buddhist site with a large stupa, viharas, and other ruins dating back to the 3rd century AD."
            ]
        },
        {
            "name": "Ghanpur Group of Temples",
            "image": "images/ghanpur_temples.jfif",
            "points": [
                "A complex of 22 temples from the Kakatiya era, known as Kota Gullu, showcasing remarkable architecture."
            ]
        },
        {
            "name": "Devarakonda Fort",
            "image": "images/devarakonda_fort.jfif",
            "points": [
                "A formidable hill fort of the Recherla Velama kings, surrounded by seven hills."
            ]
        },
        {
            "name": "Kulpakji Jain Mandir, Kolanupaka",
            "image": "images/kulpakji_jain_mandir.jfif",
            "points": [
                "A 2,000-year-old Jain shrine, an important pilgrimage center for Svetambara Jains."
            ]
        },
        {
            "name": "Jurala Dam",
            "image": "images/jurala_dam.jfif",
            "points": [
                "An important irrigation project and dam on the Krishna River, a modern monument."
            ]
        },
        {
            "name": "Gnana Saraswati Temple, Basar",
            "image": "images/gnana_saraswati_temple_basar.jfif",
            "points": [
                "One of the two famous Saraswati temples in India, located on the banks of the Godavari river."
            ]
        },
        {
            "name": "Kaleshwaram Temple",
            "image": "images/kaleshwaram_temple.jfif",
            "points": [
                "A unique Shiva temple where two lingams are found on a single pedestal, located at a sacred river confluence."
            ]
        },
        {
            "name": "Domakonda Fort",
            "image": "images/domakonda_fort.jfif",
            "points": [
                "A beautiful fort with an elegant palace inside, showcasing a blend of Kakatiya and Asaf Jahi architectural styles."
            ]
        },
        {
            "name": "Nirmal Fort",
            "image": "images/nirmal_fort.jfif",
            "points": [
                "A historic fort that highlights the glorious past of Nirmal, which has been ruled by various dynasties."
            ]
        },
        {
            "name": "Surendrapuri Mythological Awareness Center",
            "image": "images/surendrapuri.jfif",
            "points": [
                "A unique modern theme park and museum with replicas of over 100 famous Indian temples, a monument to Hindu mythology."
            ]
        },
        {
            "name": "Yadadri Lakshmi Narasimha Temple",
            "image": "images/yadadri_temple.jfif",
            "points": [
                "An ancient temple that has been extensively renovated into a magnificent modern pilgrimage complex, a monumental effort in temple construction."
            ]
        },
        {
            "name": "Siddipet Koti Lingala Temple",
            "image": "images/siddipet_koti_lingala_temple.jfif",
            "points": [
                "A historic temple in Siddipet with a large water tank."
            ]
        },
        {
            "name": "Jogulamba Temple, Alampur",
            "image": "images/jogulamba_temple.jfif",
            "points": [
                "One of the eighteen Shakti Pithas, a revered temple located within the Navabrahma temple complex."
            ]
        },
        {
            "name": "Saidanima's Tomb",
            "image": "images/saidanima_tomb.jfif",
            "points": [
                "A historic tomb on the banks of Hussain Sagar lake in Hyderabad, a protected monument."
            ]
        },
        {
            "name": "Buddha Statue of Hyderabad",
            "image": "images/buddha_statue_hyderabad.jfif",
            "points": [
                "A colossal monolithic statue of Gautama Buddha, standing on the 'Rock of Gibraltar' in the middle of Hussain Sagar lake."
            ]
        }
    ],
    "Tripura": [
        {
            "name": "Ujjayanta Palace",
            "image": "images/ujjayanta_palace.jfif",
            "points": [
                "A magnificent former royal palace of the Tripura kingdom, now the state museum.",
                "This gleaming white palace stands in the heart of Agartala and is surrounded by Mughal gardens."
            ]
        },
        {
            "name": "Neermahal",
            "image": "images/neermahal.jfif",
            "points": [
                "The spectacular 'Lake Palace' of Tripura, a former royal palace built in the middle of Rudrasagar Lake.",
                "It showcases a beautiful blend of Hindu and Muslim architectural styles."
            ]
        },
        {
            "name": "Unakoti Rock Carvings",
            "image": "images/unakoti.jfif",
            "points": [
                "An ancient Shaivite pilgrimage site featuring huge, rock-cut carvings of Hindu deities on a hillside.",
                "The central Shiva head, known as 'Unakotiswara Kal Bhairava', is about 30 feet high."
            ]
        },
        {
            "name": "Tripura Sundari Temple (Matabari)",
            "image": "images/tripura_sundari_temple.jfif",
            "points": [
                "One of the 51 Shakti Pithas, this revered Hindu temple in Udaipur is one of the holiest shrines in the region.",
                "It is located on a small hillock and has a large sacred pond, Kalyan Sagar, with turtles."
            ]
        },
        {
            "name": "Pilak Archaeological Site",
            "image": "images/pilak.jfif",
            "points": [
                "An archaeological site with ruins and artifacts from both Hindu and Buddhist traditions, dating back to the 8th century.",
                "It showcases a unique cultural exchange between different faiths."
            ]
        },
        {
            "name": "Bhubaneswari Temple",
            "image": "images/bhubaneswari_temple.jfif",
            "points": [
                "A temple on the banks of the Gomati River in Udaipur, immortalized in Rabindranath Tagore's play 'Bishorjon'."
            ]
        },
        {
            "name": "Gunjabati Group of Temples",
            "image": "images/gunjabati_group_of_temples.jfif",
            "points": [
                "A complex of three temples in Udaipur, built by Queen Gunjabati, wife of Maharaja Govinda Manikya, in the 17th century."
            ]
        },
        {
            "name": "Jagannath Temple, Agartala",
            "image": "images/jagannath_temple_agartala.jfif",
            "points": [
                "An impressive temple in Agartala, located within the Ujjayanta Palace grounds, known for its unique octagonal structure."
            ]
      },
        {
            "name": "Old Agartala Heritage Park Entrance",
            "image": "images/old_agartala_heritage_park.jfif",
            "points": [
                "The park itself contains miniature replicas of state monuments, and its entrance is a monument to Tripura's heritage."
            ]
        },
        {
            "name": "Boxanagar Ruins",
            "image": "images/boxanagar_ruins.jfif",
            "points": [
                "The ruins of a large brick-built Buddhist stupa and monastery, discovered recently, shedding light on Tripura's ancient history."
            ]
        },
        {
            "name": "Chaturdasha Devata Temple",
            "image": "images/chaturdasha_devata_temple.jfif",
            "points": [
                "Located in Old Agartala, this temple is dedicated to the fourteen deities who are the ancestral gods of the Tripuri people."
            ]
        },
        {
            "name": "Kunjaban Palace (Pushbanta Palace)",
            "image": "images/kunjaban_palace.jfif",
            "points": [
                "A former royal recreational palace set on a hillock, which hosted Rabindranath Tagore. It is now the official residence of the Governor."
            ]
        },
        {
            "name": "Gedu Mia's Mosque",
            "image": "images/gedu_mias_mosque.jfif",
            "points": [
                "An elegant white mosque in Agartala, built with imported marble, a prominent Islamic monument in the state."
            ]
        },
        {
            "name": "Agartala Government Museum (Old Building)",
            "image": "images/agartala_government_museum_old.jfif",
            "points": [
                "The former building of the museum, a heritage structure in its own right."
            ]
        },
        {
            "name": "Mahamuni Pagoda",
            "image": "images/mahamuni_pagoda.jfif",
            "points": [
                "A serene Buddhist monastery in Manu Bankul, representing the influence of Buddhism in the region."
            ]
        },
        {
            "name": "Akhaura Integrated Check Post",
            "image": "images/akhaura_check_post.jfif",
            "points": [
                "The modern structures of this border crossing with Bangladesh are a monument to Indo-Bangla relations."
            ]
        },
        {
            "name": "Debtamura Rock Carvings",
            "image": "images/debtamura.jfif",
            "points": [
                "A series of magnificent rock carvings of Hindu deities on the steep banks of the Gomati river."
            ]
        },
        {
            "name": "Benuban Vihar",
            "image": "images/benuban_vihar.jfif",
            "points": [
                "One of the most important Buddhist shrines in Tripura, located in Agartala, known for its serene atmosphere."
            ]
        },
        {
            "name": "Tripura State Assembly Building",
            "image": "images/tripura_assembly_building.jfif",
            "points": [
                "The modern legislative assembly building, a monument to the state's democratic governance."
            ]
        },
        {
            "name": "Maharaja Bir Bikram College Building",
            "image": "images/maharaja_bir_bikram_college.jfif",
            "points": [
                "The main building of this historic college, established by the last king of Tripura, is a grand heritage structure."
            ]
        },
        {
            "name": "Kamalasagar Kali Temple",
            "image": "images/kamalasagar_kali_temple.jfif",
            "points": [
                "A 15th-century temple dedicated to Goddess Kali, situated on a hillock overlooking a large lake right on the Bangladesh border."
            ]
        },
        {
            "name": "Mariyam Nagar Church",
            "image": "images/mariyam_nagar_church.jfif",
            "points": [
                "One of the oldest churches in Tripura, established by Portuguese settlers, a monument to the Christian community."
            ]
        },
        {
            "name": "Laxmi Narayan Temple, Agartala",
            "image": "images/laxmi_narayan_temple_agartala.jfif",
            "points": [
                "A prominent temple in the Ujjayanta Palace complex, dedicated to Lord Krishna."
            ]
        },
        {
            "name": "Udaipur Old Rajbari Ruins",
            "image": "images/udaipur_rajbari_ruins.jfif",
            "points": [
                "The ruins of the old royal palace in the former capital of Udaipur."
            ]
        },
        {
            "name": "Dumboor Lake Hydel Project Dam",
            "image": "images/dumboor_dam.jfif",
            "points": [
                "A modern dam and the structures around the scenic Dumboor Lake, a monument to the state's development."
            ]
        },
        {
            "name": "Trishna Wildlife Sanctuary Watchtowers",
            "image": "images/trishna_watchtowers.jfif",
            "points": [
                "The watchtowers and forest bungalows within the sanctuary, home to the Indian Gaur (Bison)."
            ]
        },
        {
            "name": "Jampui Hills Watch Tower",
            "image": "images/jampui_hills_watch_tower.jfif",
            "points": [
                "A viewpoint tower in the Jampui Hills, offering panoramic views of the surrounding landscape."
            ]
        },
        {
            "name": "Kailashahar Old Palace Ruins",
            "image": "images/kailashahar_palace_ruins.jfif",
            "points": [
                "The remains of a former royal residence in the northern part of Tripura."
            ]
        },
        {
            "name": "Agartala City Centre Building",
            "image": "images/agartala_city_centre.jfif",
            "points": [
                "A modern architectural landmark in the heart of the city."
            ]
        },
        {
            "name": "Pechanthal Buddhist Monastery",
            "image": "images/pechanthal_monastery.jfif",
            "points": [
                "A significant monastery for the Chakma and Mog Buddhist communities in North Tripura."
            ]
        },
        {
            "name": "Albert Ekka War Memorial",
            "image": "images/albert_ekka_war_memorial.jfif",
            "points": [
                "A memorial park in Agartala dedicated to Lance Naik Albert Ekka, a hero of the 1971 Indo-Pak war."
            ]
        },
        {
            "name": "Malancha Niwas",
            "image": "images/malancha_niwas.jfif",
            "points": [
                "A historic bungalow adjacent to Kunjaban Palace where Rabindranath Tagore stayed."
            ]
        },
        {
            "name": "Birchandra State Central Library Building",
            "image": "images/birchandra_library.jfif",
            "points": [
                "The main library building, a modern monument to knowledge and education in Agartala."
            ]
        },
        {
            "name": "Dharmanagar Kalibari",
            "image": "images/dharmanagar_kalibari.jfif",
            "points": [
                "A famous and revered Kali temple in the northern town of Dharmanagar."
            ]
        },
        {
            "name": "Shib Bari Temple, Agartala",
            "image": "images/shib_bari_temple.jfif",
            "points": [
                "A well-known Shiva temple in the city of Agartala."
            ]
        },
        {
            "name": "Sukanta Academy Building",
            "image": "images/sukanta_academy.jfif",
            "points": [
                "A center for science education with a planetarium, its unique building is a local landmark."
            ]
        },
        {
            "name": "Sepahijala Zoological Park Gate",
            "image": "images/sepahijala_zoo_gate.jfif",
            "points": [
                "The entrance gate to the zoo and wildlife sanctuary, a monument to the state's biodiversity."
            ]
        },
        {
            "name": "Nazrul Kalakshetra",
            "image": "images/nazrul_kalakshetra.jfif",
            "points": [
                "A major cultural auditorium in Agartala named after the poet Kazi Nazrul Islam."
            ]
        },
        {
            "name": "Old Secretariat Building, Agartala",
            "image": "images/old_secretariat_agartala.jfif",
            "points": [
                "The former administrative headquarters of the state, a colonial-era heritage building."
            ]
        },
        {
            "name": "Maitri Setu (Friendship Bridge)",
            "image": "images/maitri_setu.jfif",
            "points": [
                "A modern bridge over the Feni River connecting Tripura with Chittagong, Bangladesh, a monument of international cooperation."
            ]
        },
        {
            "name": "Rabindra Kanan Park Structures",
            "image": "images/rabindra_kanan_park.jfif",
            "points": [
                "The pavilions and structures within this park, where Tagore once stayed, are commemorative monuments."
            ]
        },
        {
            "name": "Agartala Railway Station",
            "image": "images/agartala_railway_station.jfif",
            "points": [
                "The main railway station, whose architecture resembles Ujjayanta Palace, is a modern monument of connectivity."
            ]
        },
        {
            "name": "Tepania Eco-Park Log Huts",
            "image": "images/tepania_eco_park_huts.jfif",
            "points": [
                "The traditional style log huts and structures within this park near Udaipur."
            ]
        },
        {
            "name": "Amarpur Old Temple Ruins",
            "image": "images/amarpur_temple_ruins.jfif",
            "points": [
                "Ruins of ancient temples in the town of Amarpur, a former capital of Tripura."
            ]
        },
        {
            "name": "Belonia Old Town Hall",
            "image": "images/belonia_old_town_hall.jfif",
            "points": [
                "A heritage building from the princely state era in the border town of Belonia."
            ]
        },
        {
            "name": "Chabimura Rock Carvings",
            "image": "images/chabimura.jfif",
            "points": [
                "Another name for the Debtamura site, these rock panel carvings are a significant monument."
            ]
        },
        {
            "name": "Santirbazar Buddhist Stupa",
            "image": "images/santirbazar_stupa.jfif",
            "points": [
                "A prominent Buddhist stupa in the southern part of Tripura."
            ]
        },
        {
            "name": "Manikya Court, Agartala",
            "image": "images/manikya_court.jfif",
            "points": [
                "A heritage building associated with the royal family of Tripura."
            ]
        },
        {
            "name": "Tripura Government College Building",
            "image": "images/tripura_government_college.jfif",
            "points": [
                "The main building of the first degree college in the state, a monument to higher education."
            ]
        },
        {
            "name": "Kalapania Eco Park Structures",
            "image": "images/kalapania_eco_park.jfif",
            "points": [
                "The cottages and suspension bridges in this park are minor monuments celebrating eco-tourism."
            ]
        }
    ],
    "Uttar Pradesh": [
        {
            "name": "Taj Mahal",
            "image": "images/taj_mahal.jfif",
            "points": [
                "An ivory-white marble mausoleum, a UNESCO World Heritage Site, and an enduring symbol of love.",
                "Built by Mughal emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal."
            ]
        },
        {
            "name": "Agra Fort",
            "image": "images/agra_fort.jfif",
            "points": [
                "A massive red sandstone fortress that was the main residence of the Mughal emperors.",
                "This UNESCO World Heritage site is a city within a city, with palaces, halls, and mosques."
            ]
        },
        {
            "name": "Fatehpur Sikri",
            "image": "images/fatehpur_sikri.jfif",
            "points": [
                "The magnificent fortified city that served as the short-lived capital of the Mughal Empire.",
                "A UNESCO World Heritage Site, it is known for its stunning blend of Hindu, Jain, and Islamic architecture."
            ]
        },
        {
            "name": "Varanasi Ghats",
            "image": "images/varanasi_ghats.jfif",
            "points": [
                "The vibrant riverfront steps leading to the banks of the sacred River Ganges.",
                "These ghats are the heart of Varanasi, used for everything from daily rituals to religious ceremonies."
            ]
        },
        {
            "name": "Sarnath Archaeological Site",
            "image": "images/sarnath.jfif",
            "points": [
                "The place where Gautama Buddha first taught the Dharma after his enlightenment.",
                "It features the Dhamek Stupa, the Ashoka Pillar, and ruins of ancient monasteries."
            ]
        },
        {
            "name": "Bara Imambara, Lucknow",
            "image": "images/bara_imambara.jfif",
            "points": [
                "A grand congregation hall built by Nawab Asaf-ud-Daula, famous for its incredible unsupported central hall.",
                "It also features the Bhul-bhulaiya, an intricate labyrinth of interconnected passages."
            ]
        },
        {
            "name": "Chota Imambara, Lucknow",
            "image": "images/chota_imambara.jfif",
            "points": [
                "An ornate congregation hall, also known as the 'Palace of Lights' for its opulent decorations during festivals."
            ]
        },
        {
            "name": "Akbar's Tomb, Sikandra",
            "image": "images/akbars_tomb.jfif",
            "points": [
                "The magnificent sandstone and marble mausoleum of the Mughal emperor Akbar, featuring a unique blend of architectural styles."
            ]
        },
        {
            "name": "Tomb of I'timad-ud-Daulah, Agra",
            "image": "images/itimad-ud-daulah_tomb.jfif",
            "points": [
                "Often called the 'Baby Taj', this exquisite marble mausoleum is considered a precursor to the Taj Mahal."
            ]
        },
        {
            "name": "Ram Janmabhoomi Temple, Ayodhya",
            "image": "images/ram_janmabhoomi_temple.jfif",
            "points": [
                "A highly significant Hindu temple being built at the traditional birthplace of Lord Rama, a monumental modern pilgrimage site."
            ]
        },
        {
            "name": "Kashi Vishwanath Temple, Varanasi",
            "image": "images/kashi_vishwanath_temple.jfif",
            "points": [
                "One of the twelve Jyotirlingas, this sacred temple dedicated to Lord Shiva is a primary pilgrimage site for Hindus."
            ]
        },
        {
            "name": "Allahabad Fort",
            "image": "images/allahabad_fort.jfif",
            "points": [
                "A massive fort built by Emperor Akbar at the confluence of the Ganges, Yamuna, and mythical Saraswati rivers."
            ]
        },
        {
            "name": "Jhansi Fort",
            "image": "images/jhansi_fort.jfif",
            "points": [
                "A formidable fortress on a hilltop, a symbol of bravery associated with Rani Lakshmibai and the 1857 Indian Rebellion."
            ]
        },
        {
            "name": "Residency, Lucknow",
            "image": "images/residency_lucknow.jfif",
            "points": [
                "The ruins of a large complex of buildings that was the residence of the British Resident General, famous as the site of the Siege of Lucknow in 1857."
            ]
        },
        {
            "name": "Rumi Darwaza, Lucknow",
            "image": "images/rumi_darwaza.jfif",
            "points": [
                "An imposing gateway in Lucknow, an example of Awadhi architecture, modeled after the Sublime Porte in Istanbul."
            ]
        },
        {
            "name": "Buland Darwaza, Fatehpur Sikri",
            "image": "images/buland_darwaza.jfif",
            "points": [
                "The 'Gate of Magnificence', one of the highest gateways in the world, built by Akbar to commemorate his victory over Gujarat."
            ]
        },
        {
            "name": "Dhamek Stupa, Sarnath",
            "image": "images/dhamek_stupa.jfif",
            "points": [
                "A massive Buddhist stupa marking the spot where the Buddha gave his first sermon to his five disciples."
            ]
        },
        {
            "name": "Kushinagar Mahaparinirvana Temple",
            "image": "images/mahaparinirvana_temple.jfif",
            "points": [
                "A sacred Buddhist site housing a colossal statue of the reclining Buddha, marking the place where he passed away."
            ]
        },
        {
            "name": "Anand Bhavan, Prayagraj",
            "image": "images/anand_bhavan.jfif",
            "points": [
                "The ancestral home of the Nehru family, a historic house museum that was a center of the Indian independence movement."
            ]
        },
        {
            "name": "Triveni Sangam Structures, Prayagraj",
            "image": "images/triveni_sangam.jfif",
            "points": [
                "The platforms and ghats at the sacred confluence of three rivers, a major pilgrimage site, especially during the Kumbh Mela."
            ]
        },
        {
            "name": "Dwarkadheesh Temple, Mathura",
            "image": "images/dwarkadheesh_temple_mathura.jfif",
            "points": [
                "One of the most famous and oldest temples in Mathura, dedicated to Lord Krishna."
            ]
        },
        {
            "name": "Banke Bihari Temple, Vrindavan",
            "image": "images/banke_bihari_temple.jfif",
            "points": [
                "A revered Hindu temple dedicated to Lord Krishna, one of the seven temples of Thakur of Vrindavan."
            ]
        },
        {
            "name": "Prem Mandir, Vrindavan",
            "image": "images/prem_mandir.jfif",
            "points": [
                "A stunning modern temple complex dedicated to Radha Krishna and Sita Ram, made of Italian marble with intricate carvings."
            ]
        },
        {
            "name": "Chaukhandi Stupa, Sarnath",
            "image": "images/chaukhandi_stupa.jfif",
            "points": [
                "An ancient Buddhist stupa which marks the spot where Lord Buddha met his first five disciples."
            ]
        },
        {
            "name": "Sankat Mochan Hanuman Temple, Varanasi",
            "image": "images/sankat_mochan_temple.jfif",
            "points": [
                "A famous temple dedicated to Lord Hanuman, believed to have been established by the poet-saint Tulsidas."
            ]
        },
        {
            "name": "La Martiniere College, Lucknow",
            "image": "images/la_martiniere_college.jfif",
            "points": [
                "A historic educational institution with a unique and magnificent building, a blend of various European architectural styles."
            ]
        },
        {
            "name": "Allahabad High Court",
            "image": "images/allahabad_high_court.jfif",
            "points": [
                "A grand colonial-era building with a massive central dome, one of the first high courts to be established in India."
            ]
        },
        {
            "name": "Deogarh Dashavatara Temple",
            "image": "images/deogarh_dashavatara_temple.jfif",
            "points": [
                "An early 6th-century Vishnu temple, one of the earliest surviving Hindu stone temples, known for its Gupta-era art."
            ]
        },
        {
            "name": "Kalinjar Fort",
            "image": "images/kalinjar_fort.jfif",
            "points": [
                "A massive and ancient fortress in the Bundelkhand region, containing several temples, palaces, and gateways."
            ]
        },
        {
            "name": "Ramnagar Fort, Varanasi",
            "image": "images/ramnagar_fort.jfif",
            "points": [
                "A fortification on the eastern bank of the Ganges, the ancestral home of the Maharaja of Benares."
            ]
        },
        {
            "name": "Jaunpur Atala Masjid",
            "image": "images/atala_masjid.jfif",
            "points": [
                "A 14th-century mosque, a masterpiece of the Jaunpur Sharqi school of architecture, known for its massive pylon."
            ]
        },
        {
            "name": "Shahi Bridge, Jaunpur",
            "image": "images/shahi_bridge_jaunpur.jfif",
            "points": [
                "A Mughal-era bridge over the Gomti River, built during the reign of Akbar, still in use today."
            ]
        },
        {
            "name": "Kans Quila, Mathura",
            "image": "images/kans_quila.jfif",
            "points": [
                "The ruins of a fort on the banks of the Yamuna, associated with Kansa, the maternal uncle of Lord Krishna."
            ]
        },
        {
            "name": "Mariam-uz-Zamani's Tomb, Sikandra",
            "image": "images/mariam-uz-zamani_tomb.jfif",
            "points": [
                "The mausoleum of Mariam-uz-Zamani, the wife of Mughal Emperor Akbar."
            ]
        },
        {
            "name": "Aligarh Fort (Bonay Chor ka Qila)",
            "image": "images/aligarh_fort.jfif",
            "points": [
                "One of the strongest forts in India, located in the city of Aligarh."
            ]
        },
        {
            "name": "Gorakhnath Math, Gorakhpur",
            "image": "images/gorakhnath_math.jfif",
            "points": [
                "A major temple and monastic complex of the Nath tradition of Hinduism."
            ]
        },
        {
            "name": "Mehtab Bagh, Agra",
            "image": "images/mehtab_bagh.jfif",
            "points": [
                "A charbagh (four-garden) complex located north of the Taj Mahal, providing a perfect view of the monument."
            ]
        },
        {
            "name": "Chini Ka Rauza, Agra",
            "image": "images/chini_ka_rauza.jfif",
            "points": [
                "A funerary monument and tomb of a Mughal prime minister, notable for its glazed tile work (chini)."
            ]
        },
        {
            "name": "Naimisharanya Temples",
            "image": "images/naimisharanya_temples.jfif",
            "points": [
                "A sacred forest with numerous temples and a Chakra Tirtha (holy pond), a major pilgrimage site."
            ]
        },
        {
            "name": "Gola Gokarannath Temple",
            "image": "images/gola_gokarannath_temple.jfif",
            "points": [
                "A famous Shiva temple, often referred to as 'Chhoti Kashi' (small Kashi)."
            ]
        },
        {
            "name": "Bateshwar Temples",
            "image": "images/bateshwar_temples.jfif",
            "points": [
                "A complex of more than 100 ancient Shiva temples lining the banks of the Yamuna River."
            ]
        },
        {
            "name": "Kanpur Memorial Church",
            "image": "images/kanpur_memorial_church.jfif",
            "points": [
                "An Anglican church built in 1875 in honor of the British who lost their lives during the Siege of Cawnpore in 1857."
            ]
        },
        {
            "name": "Vyas Temple, Jalaun",
            "image": "images/vyas_temple_jalaun.jfif",
            "points": [
                "A temple complex believed to be the birthplace of the sage Ved Vyasa."
            ]
        },
        {
            "name": "Sardhana Church (Basilica of Our Lady of Graces)",
            "image": "images/sardhana_church.jfif",
            "points": [
                "A minor basilica and Roman Catholic Church in Meerut, built in the 19th century by Begum Samru."
            ]
        },
        {
            "name": "ISKCON Temple, Vrindavan",
            "image": "images/iskcon_temple_vrindavan.jfif",
            "points": [
                "Also known as Sri Krishna-Balaram Mandir, it is one of the major ISKCON temples in the world."
            ]
        },
        {
            "name": "Mahabodhi Temple, Sravasti",
            "image": "images/mahabodhi_temple_sravasti.jfif",
            "points": [
                "A Buddhist temple in the ancient city of Sravasti, where the Buddha spent 24 rainy seasons."
            ]
        },
        {
            "name": "Tomb of Salim Chishti, Fatehpur Sikri",
            "image": "images/salim_chishti_tomb.jfif",
            "points": [
                "A beautiful white marble mausoleum of a Sufi saint within the Fatehpur Sikri complex."
            ]
        },
        {
            "name": "Husainabad Clock Tower, Lucknow",
            "image": "images/husainabad_clock_tower.jfif",
            "points": [
                "Built in 1881, it is the tallest clock tower in India and a fine example of Victorian-Gothic architecture."
            ]
        },
        {
            "name": "Dilkusha Kothi, Lucknow",
            "image": "images/dilkusha_kothi.jfif",
            "points": [
                "The ruins of an 18th-century house built in the English baroque style, heavily damaged during the 1857 rebellion."
            ]
        },
        {
            "name": "Jama Masjid, Agra",
            "image": "images/jama_masjid_agra.jfif",
            "points": [
                "A large mosque built by Shah Jahan's daughter, Jahanara Begum, known for its beautiful domes and inlaid panels."
            ]
        }
    ],
    "Uttarakhand": [
        {
            "name": "Kedarnath Temple",
            "image": "images/kedarnath_temples.jpg",
            "points": [
                "One of the twelve Jyotirlingas, a sacred Hindu shrine dedicated to Lord Shiva.",
                "Located high in the Himalayas, it is a key site of the Char Dham pilgrimage."
            ]
        },
        {
            "name": "Jageshwar Temples",
            "image": "images/jageshwar_temples.jfif",
            "points": [
                "A dense cluster of over 100 ancient stone temples dedicated to Lord Shiva.",
                "Nestled in a beautiful deodar forest, this complex is an important spiritual and archaeological site."
            ]
        },
        {
            "name": "Badrinath Temple",
            "image": "images/badrinath_temple.jfif",
            "points": [
                "One of the four Char Dham pilgrimage sites, a vibrant temple dedicated to Lord Vishnu.",
                "It is located on the banks of the Alaknanda River and is mentioned in ancient scriptures."
            ]
        },
        {
            "name": "Har Ki Pauri, Haridwar",
            "image": "images/har_ki_pauri.jfif",
            "points": [
                "A famous ghat on the banks of the Ganges in Haridwar, considered one of the holiest sites in India.",
                "It is renowned for its evening Ganga Aarti ceremony."
            ]
        },
        {
            "name": "Tungnath Temple",
            "image": "images/tungnath_temple.jfif",
            "points": [
                "The highest Shiva temple in the world and one of the Panch Kedar, located at an altitude of 3,680 meters."
            ]
        },
        {
            "name": "Forest Research Institute, Dehradun",
            "image": "images/forest_research_institute.jfif",
            "points": [
                "A premier research institution whose magnificent Greco-Roman and colonial-style building is a national heritage monument."
            ]
        },
        {
            "name": "Gangotri Temple",
            "image": "images/gangotri_temple.jfif",
            "points": [
                "A sacred temple dedicated to the Goddess Ganga, located at the source of the Ganges River."
            ]
        },
        {
            "name": "Yamunotri Temple",
            "image": "images/yamunotri_temple.jfif",
            "points": [
                "A temple dedicated to the Goddess Yamuna, located near the source of the Yamuna River."
            ]
        },
        {
            "name": "Neelkanth Mahadev Temple, Rishikesh",
            "image": "images/neelkanth_mahadev_temple.jfif",
            "points": [
                "A revered temple dedicated to Lord Shiva, located in a dense forest, believed to be the place where he consumed poison from the ocean."
            ]
        },
        {
            "name": "Lakshman Jhula, Rishikesh",
            "image": "images/lakshman_jhula.jfif",
            "points": [
                "An iconic suspension bridge across the Ganges River, a famous landmark of Rishikesh."
            ]
        },
        {
            "name": "Ram Jhula, Rishikesh",
            "image": "images/ram_jhula.jfif",
            "points": [
                "A larger suspension bridge near Lakshman Jhula, also a key landmark connecting ashrams."
            ]
        },
        {
            "name": "Chandi Devi Temple, Haridwar",
            "image": "images/chandi_devi_temple.jfif",
            "points": [
                "A temple dedicated to Goddess Chandi, located on the Neel Parvat, one of the three Siddha Peethas in Haridwar."
            ]
        },
        {
            "name": "Mansa Devi Temple, Haridwar",
            "image": "images/mansa_devi_temple.jfif",
            "points": [
                "A popular temple dedicated to the wish-fulfilling goddess Mansa, situated on the Bilwa Parvat."
            ]
        },
        {
            "name": "Kempty Falls Viewing Platforms",
            "image": "images/kempty_falls.jfif",
            "points": [
                "The British-era structures and viewpoints at this famous waterfall in Mussoorie are heritage monuments."
            ]
        },
        {
            "name": "Naina Devi Temple, Nainital",
            "image": "images/naina_devi_temple.jfif",
            "points": [
                "A revered Shakti Peeth located on the northern shore of Naini Lake, dedicated to the goddess Sati."
            ]
        },
        {
            "name": "Baijnath Temples",
            "image": "images/baijnath_temples.jfif",
            "points": [
                "A complex of ancient stone temples on the banks of the Gomti River, dedicated to Lord Shiva, Parvati, and other deities."
            ]
        },
        {
            "name": "Katarmal Sun Temple",
            "image": "images/katarmal_sun_temple.jfif",
            "points": [
                "An 800-year-old temple dedicated to the Sun God, the second most important sun temple after Konark."
            ]
        },
        {
            "name": "Patal Bhuvaneshwar Cave Temple",
            "image": "images/patal_bhuvaneshwar_cave.jfif",
            "points": [
                "A limestone cave complex with a series of caves within caves, a unique and sacred Hindu pilgrimage site."
            ]
        },
        {
            "name": "Golu Devta Temple, Chitai",
            "image": "images/golu_devta_temple_chitai.jfif",
            "points": [
                "A famous temple of the Kumaoni deity of justice, Golu Devta, known for the thousands of bells offered by devotees."
            ]
        },
        {
            "name": "Vashistha Gufa, Rishikesh",
            "image": "images/vashistha_gufa.jfif",
            "points": [
                "An ancient cave on the banks of the Ganges, believed to be the meditating place of the great sage Vashistha."
            ]
        },
        {
            "name": "Triyuginarayan Temple",
            "image": "images/triyuginarayan_temple.jfif",
            "points": [
                "An ancient temple where the celestial wedding of Lord Shiva and Goddess Parvati is believed to have taken place.",
                "It is famous for its perpetual sacred fire (Havan Kund)."
            ]
        },
        {
            "name": "Madhyamaheshwar Temple",
            "image": "images/madhyamaheshwar_temple.jfif", 
            "points": [
                "One of the Panch Kedar temples, where the middle part (madhya) of Shiva is worshipped."
            ]
        },
        {
            "name": "Rudranath Temple",
            "image": "images/rudranath_temple.jfif",
            "points": [
                "A Panch Kedar temple where the face (mukh) of Shiva is worshipped, accessible via a challenging trek."
            ]
        },
        {
            "name": "Kalpeshwar Temple",
            "image": "images/kalpeshwar_temple.jfif",
            "points": [
                "The only Panch Kedar temple that remains open throughout the year, where the hair locks (jata) of Shiva are worshipped."
            ]
        },
        {
            "name": "Adi Badri Temple Complex",
            "image": "images/adi_badri_temple.jfif",
            "points": [
                "A group of 16 ancient temples from the Gupta period, part of the Sapta Badri pilgrimage."
            ]
        },
        {
            "name": "Joshimath Narasimha Temple",
            "image": "images/joshimath_narasimha_temple.jfif",
            "points": [
                "An ancient temple in Joshimath which serves as the winter abode for the idol of Lord Badrinath."
            ]
        },
        {
            "name": "Ukhimath Omkareshwar Temple",
            "image": "images/ukhimath_omkareshwar_temple.jfif",
            "points": [
                "The winter seat of the deities of Kedarnath and Madhyamaheshwar."
            ]
        },
        {
            "name": "Hemkund Sahib",
            "image": "images/hemkund_sahib.jfif",
            "points": [
                "A high-altitude Sikh pilgrimage site, a gurdwara located beside a glacial lake."
            ]
        },
        {
            "name": "Indian Military Academy, Dehradun",
            "image": "images/indian_military_academy.jfif",
            "points": [
                "The historic Chetwode Building and campus of the IMA are monuments to India's military heritage."
            ]
        },
        {
            "name": "Kandoliya Temple, Pauri",
            "image": "images/kandoliya_temple.jfif",
            "points": [
                "A temple dedicated to a local deity, located on a hilltop offering panoramic views of the Himalayas."
            ]
        },
        {
            "name": "Dhari Devi Temple",
            "image": "images/dhari_devi_temple.jfif",
            "points": [
                "A revered temple on the banks of the Alaknanda River, dedicated to the guardian deity of the Char Dhams."
            ]
        },
        {
            "name": "Lakha Mandal Temple Complex",
            "image": "images/lakha_mandal_temple.jfif",
            "points": [
                "An ancient Hindu temple complex associated with the Pandavas from the Mahabharata."
            ]
        },
        {
            "name": "Tapkeshwar Temple, Dehradun",
            "image": "images/tapkeshwar_temple.jfif",
            "points": [
                "A unique cave temple dedicated to Lord Shiva, where water naturally drips onto the Shiva lingam."
            ]
        },
        {
            "name": "Mindrolling Monastery, Dehradun",
            "image": "images/mindrolling_monastery.jfif",
            "points": [
                "A large Tibetan Buddhist monastery in Clement Town, a spectacular example of Buddhist architecture with a towering stupa."
            ]
        },
        {
            "name": "Surkanda Devi Temple",
            "image": "images/surkanda_devi_temple.jfif",
            "points": [
                "A Shakti Peeth near Dhanaulti, where the head of the goddess Sati is believed to have fallen."
            ]
        },
        {
            "name": "Anusuya Devi Temple",
            "image": "images/anusuya_devi_temple.jfif",
            "points": [
                "A temple dedicated to the pious wife of Sage Atri, located in a serene setting."
            ]
        },
        {
            "name": "Binsar Mahadev Temple",
            "image": "images/binsar_mahadev_temple.jfif",
            "points": [
                "An ancient temple in the heart of the Binsar Wildlife Sanctuary."
            ]
        },
        {
            "name": "Purnagiri Temple",
            "image": "images/purnagiri_temple.jfif",
            "points": [
                "A revered Shakti Peeth on a hilltop near Tanakpur, offering views of the Sarda river."
            ]
        },
        {
            "name": "Gwaldam British Era Cantonment Structures",
            "image": "images/gwaldam_cantonment.jfif",
            "points": [
                "The old colonial bungalows and buildings in this quiet hill station are heritage monuments."
            ]
        },
        {
            "name": "Chandrabadni Temple",
            "image": "images/chandrabadni_temple.jfif",
            "points": [
                "A Shakti Peeth in Tehri Garhwal, where the torso of Sati is said to have fallen."
            ]
        },
        {
            "name": "Kunjapuri Temple",
            "image": "images/kunjapuri_temple.jfif",
            "points": [
                "Another Shakti Peeth near Rishikesh, offering spectacular sunrise views over the Himalayas."
            ]
        },
        {
            "name": "St. John's Church, Nainital",
            "image": "images/st_johns_church_nainital.jfif",
            "points": [
                "One of the earliest buildings in Nainital, an Anglican church built in the Gothic style in a serene deodar forest."
            ]
        },
        {
            "name": "Governor's House (Raj Bhavan), Nainital",
            "image": "images/raj_bhavan_nainital.jfif",
            "points": [
                "A magnificent Victorian Gothic style building, modeled on Buckingham Palace, built as the summer residence of British governors."
            ]
        },
        {
            "name": "George Everest's House, Mussoorie",
            "image": "images/george_everests_house.jfif",
            "points": [
                "The historic home and observatory of Sir George Everest, the Surveyor General of India after whom Mt. Everest is named."
            ]
        },
        {
            "name": "Christ Church, Mussoorie",
            "image": "images/christ_church_mussoorie.jfif",
            "points": [
                "The first Catholic church in the Himalayas, a beautiful Gothic style building."
            ]
        },
        {
            "name": "Tehri Dam",
            "image": "images/tehri_dam.jfif",
            "points": [
                "The tallest dam in India and one of the tallest in the world, a modern engineering monument."
            ]
        },
        {
            "name": "Pindari Glacier Trekking Huts",
            "image": "images/pindari_glacier_huts.jfif",
            "points": [
                "The historic PWD inspection bungalows along this famous trekking route are heritage monuments."
            ]
        },
        {
            "name": "Mahasu Devta Temple, Hanol",
            "image": "images/mahasu_devta_temple.jfif",
            "points": [
                "An ancient temple complex in the Jaunsar-Bawar region, dedicated to the four Mahasu brothers, a unique local deity."
            ]
        },
        {
            "name": "Kainchi Dham Ashram",
            "image": "images/kainchi_dham.jfif",
            "points": [
                "A modern pilgrimage center and temple dedicated to the sage Neem Karoli Baba, a monument of 20th-century spiritualism."
            ]
        },
        {
            "name": "Clock Tower, Dehradun",
            "image": "images/clock_tower_dehradun.jfif",
            "points": [
                "A pre-independence hexagonal clock tower, a significant landmark in the heart of Dehradun city."
            ]
        }
    ],
    "West Bengal": [
        {
            "name": "Victoria Memorial",
            "image": "images/victoria_memorial.jfif",
            "points": [
                "A majestic white marble monument in Kolkata dedicated to Queen Victoria, now a museum and an iconic city landmark."
            ]
        },
        {
            "name": "Hazarduari Palace",
            "image": "images/hazarduari_palace.jfif",
            "points": [
                "Known as the 'Palace with a Thousand Doors', this 19th-century palace in Murshidabad is now a museum with a vast collection of artifacts."
            ]
        },
        {
            "name": "Cooch Behar Palace (Victor Jubilee Palace)",
            "image": "images/cooch_behar_palace.jfif",
            "points": [
                "A landmark in Cooch Behar modeled on Buckingham Palace, showcasing classical Western architecture."
            ]
        },
        {
            "name": "Adina Mosque",
            "image": "images/adina_mosque.jfif",
            "points": [
                "The ruins of the largest medieval mosque in the Indian subcontinent, located in Malda, built in the 14th century."
            ]
        },
        {
            "name": "Dakshineswar Kali Temple",
            "image": "images/dakshineswar_kali_temple.jfif",
            "points": [
                "A famous Hindu temple in Kolkata built by Rani Rashmoni, closely associated with the mystic Ramakrishna Paramahamsa."
            ]
        },
        {
            "name": "Kalighat Temple",
            "image": "images/kalighat_temple.jfif",
            "points": [
                "Located in Kolkata, this is one of the 51 sacred Shakti Peethas, a revered Hindu pilgrimage site."
            ]
        },
        {
            "name": "Belur Math",
            "image": "images/belur_math.jfif",
            "points": [
                "The headquarters of the Ramakrishna Mission, its unique architecture incorporates Hindu, Christian, and Islamic motifs."
            ]
        },
        {
            "name": "Jor Bangla Temple, Bishnupur",
            "image": "images/jor_bangla_temple.jfif",
            "points": [
                "A masterpiece of terracotta art, built by the Malla kings, resembling two traditional thatched huts joined together."
            ]
        },
        {
            "name": "Rasmancha, Bishnupur",
            "image": "images/rasmancha.jfif",
            "points": [
                "A unique pyramidal temple in Bishnupur, architecturally one of a kind, used to exhibit idols during the Ras festival."
            ]
        },
        {
            "name": "St. Paul’s Cathedral, Kolkata",
            "image": "images/st_pauls_cathedral_kolkata.jfif",
            "points": [
                "An Anglican cathedral in Kolkata, a fine example of Indo-Gothic architectural style."
            ]
        },
        {
            "name": "Indian Museum",
            "image": "images/indian_museum_kolkata.jfif",
            "points": [
                "The oldest and largest museum in India, housed in a magnificent colonial building in Kolkata."
            ]
        },
        {
            "name": "Marble Palace",
            "image": "images/marble_palace_kolkata.jfif",
            "points": [
                "A palatial 19th-century mansion in North Kolkata, famous for its European paintings, sculptures, and opulent marble work."
            ]
        },
        {
            "name": "Howrah Bridge (Rabindra Setu)",
            "image": "images/howrah_bridge.jfif",
            "points": [
                "An iconic cantilever bridge and engineering marvel, serving as a gateway to Kolkata."
            ]
        },
        {
            "name": "Shaheed Minar (Ochterlony Monument)",
            "image": "images/shaheed_minar.jfif",
            "points": [
                "A tall monument in Kolkata, originally built to commemorate a British military victory, now dedicated to the martyrs of the Indian freedom movement."
            ]
        },
        {
            "name": "Jorasanko Thakur Bari",
            "image": "images/jorasanko_thakur_bari.jfif",
            "points": [
                "The ancestral home of the Tagore family, including Rabindranath Tagore. Now a museum and university."
            ]
        },
        {
            "name": "Shantiniketan (Visva-Bharati University Buildings)",
            "image": "images/shantiniketan.jfif",
            "points": [
                "A UNESCO World Heritage site, the unique buildings and sculptures within the university campus are monuments to Tagore's vision of education."
            ]
        },
        {
            "name": "Writers' Building",
            "image": "images/writers_building.jfif",
            "points": [
                "A historic Greco-Roman style building that served as the secretariat of the Bengal government for centuries."
            ]
        },
        {
            "name": "Hooghly Imambara",
            "image": "images/hooghly_imambara.jfif",
            "points": [
                "A magnificent Shia Muslim congregation hall and mosque known for its towering clock tower and intricate tile work."
            ]
        },
        {
            "name": "Bandel Church (Basilica of the Holy Rosary)",
            "image": "images/bandel_church.jfif",
            "points": [
                "One of the oldest Christian churches in Bengal, founded by the Portuguese in 1599."
            ]
        },
        {
            "name": "Katoa's Gate (Nawab's তোরণ)",
            "image": "images/katoas_gate.jfif",
            "points": [
                "A historic gateway in Murshidabad associated with the Nawabs of Bengal."
            ]
        },
        {
            "name": "Nizamat Imambara",
            "image": "images/nizamat_imambara.jfif",
            "points": [
                "The largest Imambara in India, located in Murshidabad, built in the 19th century."
            ]
        },
        {
            "name": "Tomb of Siraj-ud-Daulah (Khushbagh)",
            "image": "images/tomb_of_siraj-ud-daulah.jfif",
            "points": [
                "The garden cemetery where the last independent Nawab of Bengal, Siraj-ud-Daulah, is buried."
            ]
        },
        {
            "name": "Gaur Ruins (Baro Sona Masjid, Dakhil Darwaza)",
            "image": "images/gaur_ruins.jfif",
            "points": [
                "The archaeological ruins of the medieval capital of Bengal, with numerous mosques, gateways, and tombs."
            ]
        },
        {
            "name": "Pandua Ruins (Eklakhi Mausoleum, Qutub Shahi Mosque)",
            "image": "images/pandua_ruins.jfif",
            "points": [
                "Another former capital of the Bengal Sultanate, with important monuments like the Eklakhi Mausoleum."
            ]
        },
        {
            "name": "Terracotta Temples of Kalna",
            "image": "images/kalna_terracotta_temples.jfif",
            "points": [
                "A complex of beautiful terracotta temples, including the unique 108 Shiva Temples arranged in concentric circles."
            ]
        },
        {
            "name": "Hangseshwari Temple, Bansberia",
            "image": "images/hangseshwari_temple.jfif",
            "points": [
                "A unique temple with 13 towers, each shaped like a lotus bud, reflecting tantric principles in its architecture."
            ]
        },
        {
            "name": "Madan Mohan Temple, Bishnupur",
            "image": "images/madan_mohan_temple.jfif",
            "points": [
                "An Eka-Ratna style temple in Bishnupur, renowned for its exquisite terracotta panels depicting scenes from the epics."
            ]
        },
        {
            "name": "Netaji Bhawan",
            "image": "images/netaji_bhawan.jfif",
            "points": [
                "The ancestral home of Subhas Chandra Bose in Kolkata, now a memorial and research center."
            ]
        },
        {
            "name": "Clive's House, Dum Dum",
            "image": "images/clives_house.jfif",
            "points": [
                "A historic colonial building, one of the oldest in Kolkata, once the residence of Robert Clive."
            ]
        },
        {
            "name": "Ghum Railway Station",
            "image": "images/ghum_railway_station.jfif",
            "points": [
                "The highest railway station in India, a part of the UNESCO World Heritage Darjeeling Himalayan Railway."
            ]
        },
        {
            "name": "Darjeeling Himalayan Railway (Toy Train)",
            "image": "images/darjeeling_himalayan_railway.jfif",
            "points": [
                "The entire railway line, with its stations and loops, is a living engineering monument and UNESCO site."
            ]
        },
        {
            "name": "Morgan House, Kalimpong",
            "image": "images/morgan_house.jfif",
            "points": [
                "A colonial-era mansion built in the 1930s, a classic example of British colonial architecture."
            ]
        },
        {
            "name": "MacFarlane Memorial Church, Kalimpong",
            "image": "images/macfarlane_memorial_church.jfif",
            "points": [
                "A historic church built by Scottish missionaries, a landmark in Kalimpong."
            ]
        },
        {
            "name": "Ghoom Monastery (Yiga Choeling Monastery)",
            "image": "images/ghoom_monastery.jfif",
            "points": [
                "An old and famous monastery near Darjeeling, which houses a large statue of the Maitreya Buddha."
            ]
        },
        {
            "name": "Japanese Peace Pagoda, Darjeeling",
            "image": "images/japanese_peace_pagoda_darjeeling.jfif",
            "points": [
                "A brilliant white stupa built by the Japanese Buddhist Nipponzan-Myōhōji order to promote world peace."
            ]
        },
        {
            "name": "Vidyasagar Setu (Second Hooghly Bridge)",
            "image": "images/vidyasagar_setu.jfif",
            "points": [
                "The longest cable-stayed bridge in India, a modern engineering monument in Kolkata."
            ]
        },
        {
            "name": "Kolkata General Post Office (GPO)",
            "image": "images/kolkata_gpo.jfif",
            "points": [
                "A magnificent colonial building with a high-domed roof, built on the site of the original Fort William."
            ]
        },
        {
            "name": "Metcalfe Hall",
            "image": "images/metcalfe_hall.jfif",
            "points": [
                "A beautiful neoclassical building in Kolkata with prominent Greek-style pillars, now a museum."
            ]
        },
        {
            "name": "Town Hall, Kolkata",
            "image": "images/town_hall_kolkata.jfif",
            "points": [
                "A grand colonial building in the Roman-Doric style, a historic venue for public gatherings."
            ]
        },
        {
            "name": "Tipu Sultan Mosque, Kolkata",
            "image": "images/tipu_sultan_mosque.jfif",
            "points": [
                "A famous mosque in the heart of Kolkata, built by the son of Tipu Sultan."
            ]
        },
        {
            "name": "Taraknath Temple, Tarakeswar",
            "image": "images/taraknath_temple.jfif",
            "points": [
                "A major pilgrimage site for Shaivites, a famous temple dedicated to Lord Shiva."
            ]
        },
        {
            "name": "ISKCON Temple, Mayapur",
            "image": "images/iskcon_temple_mayapur.jfif",
            "points": [
                "The world headquarters of ISKCON, featuring the grand Temple of the Vedic Planetarium, a massive modern monument."
            ]
        },
        {
            "name": "Patha Bhavan, Shantiniketan",
            "image": "images/patha_bhavan.jfif",
            "points": [
                "The main school building in Shantiniketan, a monument to Rabindranath Tagore's educational philosophy."
            ]
        },
        {
            "name": "Jaldapara Forest Bungalow",
            "image": "images/jaldapara_forest_bungalow.jfif",
            "points": [
                "A historic British-era wooden forest lodge within the Jaldapara National Park."
            ]
        },
        {
            "name": "Buxa Fort",
            "image": "images/buxa_fort.jfif",
            "points": [
                "A fort in the Buxa Tiger Reserve, used by the British as a detention camp for Indian freedom fighters."
            ]
        },
        {
            "name": "Siddheswari Kali Temple, Malda",
            "image": "images/siddheswari_kali_temple.jfif",
            "points": [
                "An ancient and revered Kali temple in the historic city of Malda."
            ]
        },
        {
            "name": "House of Sarat Chandra Chattopadhyay, Deulti",
            "image": "images/sarat_chandra_chattopadhyay_house.jfif",
            "points": [
                "The riverside house of the famous Bengali novelist, preserved as a literary monument."
            ]
        },
        {
            "name": "Tamluk Rajbari Ruins",
            "image": "images/tamluk_rajbari_ruins.jfif",
            "points": [
                "The ruins of the palace of the ancient Tamralipta kingdom, a significant archaeological monument."
            ]
        },
        {
            "name": "Chandraketugarh Archaeological Site",
            "image": "images/chandraketugarh.jfif",
            "points": [
                "An archaeological site with ruins dating back to the pre-Mauryan period, a monument to Bengal's ancient history."
            ]
        },
        {
            "name": "Dupleix Palace, Chandannagar",
            "image": "images/dupleix_palace.jfif",
            "points": [
                "The former residence of the French Governor Joseph François Dupleix in the former French colony of Chandannagar."
            ]
        }
    ],
"Andaman and Nicobar Islands": [
        {
            "name": "Cellular Jail National Memorial",
            "image": "images/cellular_jail.jpg",
            "points": [
                "A colonial prison known as 'Kala Pani', where Indian freedom fighters were exiled and tortured.",
                "Now a national memorial, its walls echo the tales of sacrifice for India's independence."
            ]
        },
        {
            "name": "Ross Island Ruins (Netaji Subhash Chandra Bose Dweep)",
            "image": "images/ross_island_ruins.jpg",
            "points": [
                "The ruins of the British administrative headquarters, including a church, powerhouse, and Chief Commissioner's bungalow.",
                "These structures are now reclaimed by nature, creating a unique historical landscape."
            ]
        },
        {
            "name": "Japanese Bunkers",
            "image": "images/japanese_bunkers.jpg",
            "points": [
                "A network of bunkers and gun emplacements built by the Japanese forces during their occupation in World War II.",
                "They are found across Port Blair and other islands, serving as reminders of the war."
            ]
        },
        {
            "name": "Chatham Saw Mill",
            "image": "images/chatham_saw_mill.jpg",
            "points": [
                "One of the oldest and largest sawmills in Asia, established by the British in 1883.",
                "The historic structures and machinery are a monument to the islands' industrial heritage."
            ]
        },
        {
            "name": "Viper Island Gallows",
            "image": "images/viper_island_gallows.jpg",
            "points": [
                "The ruins of the gallows on Viper Island, where convicts and freedom fighters were executed before the Cellular Jail was built."
            ]
        },
        {
            "name": "Netaji Flag Hoisting Memorial",
            "image": "images/netaji_flag_hoisting_memorial.jpg",
            "points": [
                "A monument at the Gymkhana Ground in Port Blair, commemorating the spot where Subhas Chandra Bose hoisted the Indian flag in 1943."
            ]
        },
        {
            "name": "Murugan Temple, Port Blair",
            "image": "images/murugan_temple_port_blair.jpg",
            "points": [
                "The main Hindu temple in Port Blair, a monument to the diverse cultural fabric of the islands."
            ]
        },
        {
            "name": "Ross Memorial, Ross Island",
            "image": "images/ross_memorial.jpg",
            "points": [
                "A memorial dedicated to Daniel Ross, a British marine surveyor who surveyed the islands."
            ]
        },
        {
            "name": "Port Blair Clock Tower (Aberdeen Bazaar)",
            "image": "images/port_blair_clock_tower.jpg",
            "points": [
                "A prominent landmark in the main market area of Port Blair."
            ]
        },
        {
            "name": "Rajiv Gandhi Water Sports Complex Memorial",
            "image": "images/rajiv_gandhi_memorial.jpg",
            "points": [
                "A memorial within the complex commemorating the Battle of Aberdeen fought between the Andamanese tribes and the British."
            ]
        },
        {
            "name": "Havelock Island Lighthouse (Swaraj Dweep)",
            "image": "images/havelock_island_lighthouse.jpg",
            "points": [
                "A modern but iconic lighthouse guiding ships in the popular tourist island."
            ]
        },
        {
            "name": "Neil Island Lighthouse (Shaheed Dweep)",
            "image": "images/neil_island_lighthouse.jpg",
            "points": [
                "An important navigational aid and landmark on Neil Island."
            ]
        },
        {
            "name": "Barren Island Lighthouse",
            "image": "images/barren_island_lighthouse.jpg",
            "points": [
                "A lighthouse on India's only active volcano, a monument to navigation in a remote and harsh environment."
            ]
        },
        {
            "name": "Indira Point Lighthouse",
            "image": "images/indira_point_lighthouse.jpg",
            "points": [
                "The lighthouse at the southernmost tip of India, which was partially submerged after the 2004 tsunami."
            ]
        },
        {
            "name": "Car Nicobar Tsunami Memorial",
            "image": "images/car_nicobar_tsunami_memorial.jpg",
            "points": [
                "A memorial dedicated to the victims of the 2004 Indian Ocean tsunami in the Nicobar Islands."
            ]
        },
        {
            "name": "Anthropological Museum Building, Port Blair",
            "image": "images/anthropological_museum_port_blair.jpg",
            "points": [
                "The building housing exhibits on the indigenous tribes of the islands is a cultural monument."
            ]
        },
        {
            "name": "Samudrika Naval Marine Museum Building",
            "image": "images/samudrika_museum_building.jpg",
            "points": [
                "The building housing this museum is a monument to the marine biodiversity and naval history of the islands."
            ]
        },
        {
            "name": "Param Vir Chakra Memorial, Port Blair",
            "image": "images/param_vir_chakra_memorial.jpg",
            "points": [
                "A memorial dedicated to the recipients of India's highest military honor."
            ]
        },
        {
            "name": "South Point Lighthouse, Port Blair",
            "image": "images/south_point_lighthouse.jpg",
            "points": [
                "A historic lighthouse that guides ships into Port Blair harbor."
            ]
        },
        {
            "name": "Kalapani Museum Building",
            "image": "images/kalapani_museum_building.jpg",
            "points": [
                "A private museum whose building is a monument dedicated to the history of the freedom struggle associated with the islands."
            ]
        },
        {
            "name": "Nicobari Huts (Traditional)",
            "image": "images/nicobari_huts.jpg",
            "points": [
                "The unique beehive-shaped traditional houses of the Nicobari tribes are living architectural monuments."
            ]
        },
        {
            "name": "Great Nicobar Biosphere Reserve Entry Gate",
            "image": "images/great_nicobar_reserve_gate.jpg",
            "points": [
                "A gateway monument to the protected biosphere reserve."
            ]
        },
        {
            "name": "Little Andaman Lighthouse",
            "image": "images/little_andaman_lighthouse.jpg",
            "points": [
                "A tall lighthouse offering panoramic views of the island's coastline."
            ]
        },
        {
            "name": "St. Mary's Cathedral, Port Blair",
            "image": "images/st_marys_cathedral_port_blair.jpg",
            "points": [
                "The main Catholic church in the city, a religious monument."
            ]
        },
        {
            "name": "Andaman Club Ruins, Ross Island",
            "image": "images/andaman_club_ruins.jpg",
            "points": [
                "The remains of the exclusive club for British officers."
            ]
        },
        {
            "name": "Wimberley Gunj War Memorial",
            "image": "images/wimberley_gunj_war_memorial.jpg",
            "points": [
                "A memorial dedicated to the 300 Andamanese who were killed by the Japanese."
            ]
        },
        {
            "name": "Netaji Stadium Building",
            "image": "images/netaji_stadium.jpg",
            "points": [
                "The main sports stadium, a modern monument in Port Blair."
            ]
        },
        {
            "name": "Haddo Wharf Structures",
            "image": "images/haddo_wharf.jpg",
            "points": [
                "The old port structures and jetties are monuments to the islands' maritime history."
            ]
        },
        {
            "name": "Chatham Power House Ruins",
            "image": "images/chatham_power_house_ruins.jpg",
            "points": [
                "The remains of an old British-era power station."
            ]
        },
        {
            "name": "Sippighat Agricultural Farm Structures",
            "image": "images/sippighat_farm.jpg",
            "points": [
                "Historic farm buildings representing the history of agriculture and horticulture in the islands."
            ]
        },
        {
            "name": "Mount Harriet National Park Watchtower",
            "image": "images/mount_harriet_watchtower.jpg",
            "points": [
                "A viewpoint tower offering views of the surrounding islands, including the view depicted on the 20 rupee note."
            ]
        },
        {
            "name": "Diglipur Church",
            "image": "images/diglipur_church.jpg",
            "points": [
                "A significant Christian monument in the northern part of the Andaman Islands."
            ]
        },
        {
            "name": "Rangat Town Gate",
            "image": "images/rangat_town_gate.jpg",
            "points": [
                "A gateway monument to the main town in Middle Andaman."
            ]
        },
        {
            "name": "Mayabunder German Jetty Ruins",
            "image": "images/mayabunder_german_jetty.jpg",
            "points": [
                "The ruins of a jetty believed to have been built by German engineers."
            ]
        },
        {
            "name": "Karmatang Beach Watchtowers",
            "image": "images/karmatang_beach_watchtowers.jpg",
            "points": [
                "Structures for viewing turtle nesting at this important nesting site."
            ]
        },
        {
            "name": "Baratang Island Jetty",
            "image": "images/baratang_jetty.jpg",
            "points": [
                "The main jetty for the island, a monument to the local transport network."
            ]
        },
        {
            "name": "Long Island Church",
            "image": "images/long_island_church.jpg",
            "points": [
                "A historic church serving the community on this remote island."
            ]
        },
        {
            "name": "Hut Bay Jetty, Little Andaman",
            "image": "images/hut_bay_jetty.jpg",
            "points": [
                "The main harbor structure for Little Andaman island."
            ]
        },
        {
            "name": "Kamorta Island Church",
            "image": "images/kamorta_island_church.jpg",
            "points": [
                "A key religious monument in the Nicobar island group."
            ]
        },
        {
            "name": "Nancowry Harbour Structures",
            "image": "images/nancowry_harbour.jpg",
            "points": [
                "The port and administrative buildings at this natural harbor."
            ]
        },
        {
            "name": "Katchal Island Rubber Plantation Structures",
            "image": "images/katchal_plantation.jpg",
            "points": [
                "Old buildings associated with the island's large rubber plantations."
            ]
        },
        {
            "name": "Campbell Bay Jetty",
            "image": "images/campbell_bay_jetty.jpg",
            "points": [
                "The main jetty for Great Nicobar, the largest of the Nicobar islands."
            ]
        },
        {
            "name": "Galathea National Park Entry Gate",
            "image": "images/galathea_park_gate.jpg",
            "points": [
                "A monument marking the entrance to the national park known for its giant leatherback turtle nesting sites."
            ]
        },
        {
            "name": "Teressa Island Catholic Church",
            "image": "images/teressa_island_church.jpg",
            "points": [
                "A significant religious monument for the island's inhabitants."
            ]
        },
        {
            "name": "Aberdeen Jetty",
            "image": "images/aberdeen_jetty.jpg",
            "points": [
                "The main passenger jetty in Port Blair, a historic transportation hub."
            ]
        },
        {
            "name": "Corbyn's Cove Japanese Bunker",
            "image": "images/corbyns_cove_bunker.jpg",
            "points": [
                "A well-preserved Japanese bunker at the popular Corbyn's Cove beach."
            ]
        },
        {
            "name": "Andaman & Nicobar Islands Police Memorial",
            "image": "images/police_memorial_port_blair.jpg",
            "points": [
                "A memorial dedicated to the police personnel who lost their lives in the line of duty."
            ]
        },
        {
            "name": "Grave of Lord Mayo, Viper Island",
            "image": "images/lord_mayo_grave.jpg",
            "points": [
                "The site where the British Viceroy Lord Mayo was assassinated in 1872."
            ]
        },
        {
            "name": "Homfrayganj Martyrs Memorial",
            "image": "images/homfrayganj_martyrs_memorial.jpg",
            "points": [
                "A memorial dedicated to 44 Indian freedom fighters executed by the Japanese."
            ]
        },
        {
            "name": "Fisheries Museum Building",
            "image": "images/fisheries_museum_building.jpg",
            "points": [
                "The building housing the museum is a monument to the rich marine life of the islands."
            ]
        }
    ],
 "Chandigarh": [
        {
            "name": "The Open Hand Monument",
            "image": "images/the_open_hand_monument.jpeg",
            "points": [
                "A symbolic structure designed by the architect Le Corbusier, the emblem of Chandigarh.",
                "It conveys the message of peace and reconciliation: 'open to give and open to receive'."
            ]
        },
        {
            "name": "Capitol Complex",
            "image": "images/capitol_complex_chandigarh.jpeg",
            "points": [
                "A UNESCO World Heritage Site, this complex designed by Le Corbusier includes the major government buildings.",
                "It is considered a masterpiece of modern architecture and urban planning."
            ]
        },
        {
            "name": "Palace of Assembly",
            "image": "images/palace_of_assembly.jpeg",
            "points": [
                "The legislative assembly building within the Capitol Complex, known for its monumental scale and sculptural form."
            ]
        },
        {
            "name": "Secretariat Building",
            "image": "images/secretariat_building_chandigarh.jpeg",
            "points": [
                "The largest building in the Capitol Complex, a long horizontal slab of concrete housing government offices."
            ]
        },
        {
            "name": "High Court Building",
            "image": "images/high_court_chandigarh.jpeg",
            "points": [
                "A key part of the Capitol Complex, famous for its grand arches, colorful pillars, and a distinctive double roof."
            ]
        },
        {
            "name": "Rock Garden",
            "image": "images/rock_garden_chandigarh.jpeg",
            "points": [
                "A unique sculpture garden created by Nek Chand, built entirely from industrial and home waste.",
                "It is a monumental example of outsider art and recycling."
            ]
        },
        {
            "name": "Sukhna Lake Regulator and Dam",
            "image": "images/sukhna_lake_dam.jpeg",
            "points": [
                "The dam and regulator structure of this man-made lake, also designed by Le Corbusier's team, are an engineering monument."
            ]
        },
        {
            "name": "Tower of Shadows",
            "image": "images/tower_of_shadows.jpeg",
            "points": [
                "A monument in the Capitol Complex designed by Le Corbusier to demonstrate his theories of sun control."
            ]
        },
        {
            "name": "Geometric Hill",
            "image": "images/geometric_hill.jpeg",
            "points": [
                "A man-made landscape feature in the Capitol Complex, part of Le Corbusier's overall design."
            ]
        },
        {
            "name": "Martyrs' Memorial",
            "image": "images/martyrs_memorial_chandigarh.jpeg",
            "points": [
                "An abstract memorial within the Capitol Complex, dedicated to the martyrs of the Punjabi Suba movement."
            ]
        },
        {
            "name": "Gandhi Bhawan",
            "image": "images/gandhi_bhawan_chandigarh.jpeg",
            "points": [
                "A center for Gandhian studies in Panjab University, designed by Pierre Jeanneret, notable for its unique concrete structure set in a pool of water."
            ]
        },
        {
            "name": "Le Corbusier Centre",
            "image": "images/le_corbusier_centre.jpg",
            "points": [
                "Housed in the old office of Le Corbusier, this building is a monument to the architect and the city's creation."
            ]
        },
        {
            "name": "Government Museum and Art Gallery Building",
            "image": "images/museum_art_gallery_chandigarh.jpeg",
            "points": [
                "Another Corbusier-designed building, conceived as a part of the city's cultural complex."
            ]
        },
        {
            "name": "Chandigarh Architecture Museum",
            "image": "images/architecture_museum_chandigarh.jpeg",
            "points": [
                "The building itself, designed by S.D. Sharma, is a modern monument showcasing the city's architectural history."
            ]
        },
        {
            "name": "Sukhna Lake Club Building",
            "image": "images/sukhna_lake_club.jpeg",
            "points": [
                "The original building of the lake club, part of the initial modernist vision for the city."
            ]
        },
        {
            "name": "Chandigarh Club Building",
            "image": "images/chandigarh_club.jpeg",
            "points": [
                "A historic club with colonial-era architectural influences, pre-dating the modern city."
            ]
        },
        {
            "name": "The 'Tower of Lights' (Sector 17)",
            "image": "images/tower_of_lights.jpeg",
            "points": [
                "A modernist structure in the main commercial plaza, part of the original design."
            ]
        },
        {
            "name": "Neelam Theatre Building",
            "image": "images/neelam_theatre.jpeg",
            "points": [
                "A classic example of modernist cinema architecture from the Corbusier era."
            ]
        },
        {
            "name": "City Centre Sector 17 Plaza Fountains",
            "image": "images/sector_17_fountains.jpeg",
            "points": [
                "The original fountains and water bodies in the plaza are key elements of the urban design monument."
            ]
        },
        {
            "name": "Panjab University Administrative Building",
            "image": "images/panjab_university_admin_building.jpeg",
            "points": [
                "The main administrative block of the university, a significant modernist architectural piece."
            ]
        },
        {
            "name": "Punjab Engineering College (PEC) Main Building",
            "image": "images/pec_main_building.jpeg",
            "points": [
                "The historic main building of this century-old institution is a monument to technical education."
            ]
        },
        {
            "name": "Chandigarh College of Architecture Building",
            "image": "images/college_of_architecture_building.jpeg",
            "points": [
                "The building designed for architectural education is itself a monument of the Corbusian school."
            ]
        },
        {
            "name": "Rose Garden Sculptures",
            "image": "images/rose_garden_sculptures.jpeg",
            "points": [
                "The various modern sculptures and fountains within the Zakir Hussain Rose Garden."
            ]
        },
        {
            "name": "Garden of Fragrance Structures",
            "image": "images/garden_of_fragrance.jpeg",
            "points": [
                "The pavilions and pathways of this themed garden are part of the city's planned landscape monuments."
            ]
        },
        {
            "name": "Terraced Garden Musical Fountain",
            "image": "images/terraced_garden_fountain.jpeg",
            "points": [
                "A popular attraction and a monument to recreational design within the city."
            ]
        },
        {
            "name": "Shanti Kunj Park Structures",
            "image": "images/shanti_kunj_park.jpeg",
            "points": [
                "The landscaping and structures in this peaceful garden are part of the city's green monument."
            ]
        },
        {
            "name": "Bougainvillea Garden Entrance",
            "image": "images/bougainvillea_garden_entrance.jpeg",
            "points": [
                "The entry gate and structures of this garden dedicated to bougainvillea flowers."
            ]
        },
        {
            "name": "Chandigarh War Memorial",
            "image": "images/chandigarh_war_memorial.jpeg",
            "points": [
                "Located in the Bougainvillea Garden, it honors soldiers from the city who have died in service."
            ]
        },
        {
            "name": "Air Force Heritage Museum Building",
            "image": "images/air_force_heritage_museum.jpeg",
            "points": [
                "A modern monument dedicated to the history and valor of the Indian Air Force."
            ]
        },
        {
            "name": "Manekshaw Auditorium",
            "image": "images/manekshaw_auditorium.jpeg",
            "points": [
                "A major auditorium in Chandimandir Cantonment, a monument to military infrastructure."
            ]
        },
        {
            "name": "CII Building, Sector 31",
            "image": "images/cii_building_chandigarh.jpeg",
            "points": [
                "A modern architectural monument, known for its green and sustainable design."
            ]
        },
        {
            "name": "The 'Light and Sound Show' Structure at Sukhna Lake",
            "image": "images/sukhna_light_sound_show.jpeg",
            "points": [
                "The installation for this show is a modern recreational monument."
            ]
        },
        {
            "name": "Garden of Palms Structures",
            "image": "images/garden_of_palms.jpeg",
            "points": [
                "The pavilions and layout of this garden dedicated to palm trees."
            ]
        },
        {
            "name": "The Japanese Garden",
            "image": "images/japanese_garden_chandigarh.jpeg",
            "points": [
                "A park with Japanese-style pagodas, water bodies, and bridges, a monument to international design."
            ]
        },
        {
            "name": "Topiary Park Sculptures",
            "image": "images/topiary_park.jpeg",
            "points": [
                "The animal-shaped ornamental plants are living monuments of horticultural art."
            ]
        },
        {
            "name": "National Cactus and Succulent Botanical Garden Structures",
            "image": "images/cactus_garden.jpeg",
            "points": [
                "The unique glasshouses and layout of this garden in nearby Panchkula are part of the region's monument landscape."
            ]
        },
        {
            "name": "Mansa Devi Temple, Panchkula",
            "image": "images/mansa_devi_temple.jpeg",
            "points": [
                "An ancient and revered Shakti Peeth in the immediate vicinity of Chandigarh."
            ]
        },
        {
            "name": "Gurudwara Nada Sahib, Panchkula",
            "image": "images/gurudwara_nada_sahib.jpeg",
            "points": [
                "A historic Sikh shrine on the banks of the Ghaggar river, closely associated with Guru Gobind Singh."
            ]
        },
        {
            "name": "Sector 17 Underpass Murals",
            "image": "images/sector_17_underpass_murals.jpeg",
            "points": [
                "The modern art and murals in the recently built underpass are a contemporary monument."
            ]
        },
        {
            "name": "Chandigarh Railway Station Building",
            "image": "images/chandigarh_railway_station.jpeg",
            "points": [
                "The main building of the railway station, reflecting the modernist style of the city."
            ]
        },
        {
            "name": "ISBT Sector 17 Building",
            "image": "images/isbt_sector_17.jpeg",
            "points": [
                "The old Inter-State Bus Terminus, an example of functionalist modern architecture."
            ]
        },
        {
            "name": "Vidhan Sabha Tower",
            "image": "images/vidhan_sabha_tower.jpeg",
            "points": [
                "The distinctively shaped tower of the Palace of Assembly is a monument in itself."
            ]
        },
        {
            "name": "High Court's Grand Entrance",
            "image": "images/high_court_entrance.jpeg",
            "points": [
                "The monumental entrance with its three giant, colorful pillars is a specific monument within the High Court building."
            ]
        },
        {
            "name": "The Museum of the Evolution of Life Building",
            "image": "images/evolution_of_life_museum.jpeg",
            "points": [
                "The building housing this museum is a part of the city's cultural complex."
            ]
        },
        {
            "name": "International Dolls Museum Building",
            "image": "images/dolls_museum_chandigarh.jpeg",
            "points": [
                "A cultural monument in the city, popular among children."
            ]
        },
        {
            "name": "Smriti Upavan (Garden of Remembrance)",
            "image": "images/smriti_upavan.jpeg",
            "points": [
                "A garden where people plant trees in memory of their loved ones, a living monument."
            ]
        },
        {
            "name": "Pierre Jeanneret House Museum",
            "image": "images/pierre_jeanneret_house.jpeg",
            "points": [
                "The preserved residence of Le Corbusier's cousin and collaborator, a monument to his contribution to the city."
            ]
        },
        {
            "name": "Sector 16 Cricket Stadium Pavilion",
            "image": "images/sector_16_stadium_pavilion.jpeg",
            "points": [
                "The main pavilion of this historic cricket ground is a local sporting monument."
            ]
        },
        {
            "name": "Chandigarh Traffic Park Structures",
            "image": "images/traffic_park.jpeg",
            "points": [
                "The miniature buildings and road signs designed for children's education are unique city monuments."
            ]
        },
        {
            "name": "The 'Grid' Iron Road System",
            "image": "images/grid_iron_road_system.jpeg",
            "points": [
                "The entire planned road network of Chandigarh, with its V1 to V7 hierarchy, is a conceptual urban planning monument."
            ]
        }
    ],
"Dadra and Nagar Haveli and Daman and Diu": [
        {
            "name": "Diu Fort",
            "image": "images/diu_fort.jpeg",
            "points": [
                "A massive Portuguese fort built in 1535 that overlooks the Arabian Sea.",
                "It features a lighthouse, cannons, and commanding views of the sea."
            ]
        },
        {
            "name": "Moti Daman Fort (Fort of St. Jerome)",
            "image": "images/moti_daman_fort.jpeg",
            "points": [
                "A large fort built by the Portuguese in the 16th century, enclosing the old town with its churches and colonial buildings."
            ]
        },
        {
            "name": "Nani Daman Fort (Fort of St. Jerome)",
            "image": "images/nani_daman_fort.jpeg",
            "points": [
                "A smaller fort featuring an impressive gateway, a church, and old colonial structures."
            ]
        },
        {
            "name": "St. Paul’s Church, Diu",
            "image": "images/st_pauls_church_diu.jpg",
            "points": [
                "A functioning church built in 1601, considered one of the finest examples of Baroque architecture in India."
            ]
        },
        {
            "name": "St. Thomas Church, Diu",
            "image": "images/st_thomas_church_diu.jpeg",
            "points": [
                "A historic church in Gothic style, which has now been converted into a museum displaying religious artifacts."
            ]
        },
        {
            "name": "Bom Jesus Church, Moti Daman",
            "image": "images/bom_jesus_church_daman.jpeg",
            "points": [
                "A 16th-century Roman Catholic church considered an architectural marvel for its intricate rosewood carvings and ornate altar."
            ]
        },
        {
            "name": "Church of Our Lady of the Rosary, Moti Daman",
            "image": "images/our_lady_of_rosary_church.jpeg",
            "points": [
                "One of the oldest churches in Daman, known for its beautiful altar and artwork depicting the life of Jesus."
            ]
        },
        {
            "name": "Gangeshwar Mahadev Temple, Diu",
            "image": "images/gangeshwar_mahadev_temple.jpeg",
            "points": [
                "A unique cave temple with five Shiva lingams that are naturally washed by the sea waves during high tide."
            ]
        },
        {
            "name": "Jain Temple, Daman",
            "image": "images/jain_temple_daman.jpeg",
            "points": [
                "Located in Nani Daman, this 18th-century temple is known for its beautiful carvings, murals, and glasswork."
            ]
        },
        {
            "name": "Tribal Museum, Silvassa",
            "image": "images/tribal_museum_silvassa.jpeg",
            "points": [
                "Showcases the rich heritage, lifestyle, and artifacts of the Warli and other local tribes of Dadra and Nagar Haveli."
            ]
        },
        {
            "name": "Light House, Daman",
            "image": "images/lighthouse_daman.jpeg",
            "points": [
                "An old Portuguese-era lighthouse located within Moti Daman Fort, offering panoramic views."
            ]
        },
        {
            "name": "Fortim-do-Mar (Panikota Fort), Diu",
            "image": "images/fortim-do-mar.jpeg",
            "points": [
                "A magnificent stone fortress located in the middle of the sea at the mouth of the creek.",
                "It was once a jail and has a small chapel and a lighthouse."
            ]
        },
        {
            "name": "Naida Caves, Diu",
            "image": "images/naida_caves.jpeg",
            "points": [
                "An intricate network of man-made caves and tunnels, believed to have been formed by the quarrying of stone by the Portuguese."
            ]
        },
        {
            "name": "Our Lady of Remedies Church, Nani Daman",
            "image": "images/our_lady_of_remedies_church.jpeg",
            "points": [
                "A massive church built in the early 17th century, known for its grand facade and ornate interiors."
            ]
        },
        {
            "name": "Church of Our Lady of the Sea, Daman",
            "image": "images/our_lady_of_the_sea_church.jpeg",
            "points": [
                "A beautiful church located inside the Nani Daman Fort."
            ]
        },
        {
            "name": "INS Khukri Memorial, Diu",
            "image": "images/ins_khukri_memorial.jpeg",
            "points": [
                "A war memorial dedicated to the officers and sailors of the Indian naval ship Khukri, which was sunk during the 1971 Indo-Pak war."
            ]
        },
        {
            "name": "Zampa Gateway, Diu",
            "image": "images/zampa_gateway.jpeg",
            "points": [
                "The main town gateway of Diu, a large and ornate structure with carvings of lions, angels, and a priest."
            ]
        },
        {
            "name": "Silvassa Roman Catholic Church",
            "image": "images/silvassa_roman_catholic_church.jpeg",
            "points": [
                "A historic church built by the Portuguese, one of the oldest standing monuments in Silvassa."
            ]
        },
        {
            "name": "Daman Freedom Memorial",
            "image": "images/daman_freedom_memorial.jpeg",
            "points": [
                "A memorial in Nani Daman commemorating the liberation of Daman from Portuguese rule in 1961."
            ]
        },
        {
            "name": "Diu Museum",
            "image": "images/diu_museum.jpeg",
            "points": [
                "Housed in the old St. Thomas Church, it is a monument to the region's history."
            ]
        },
        {
            "name": "Bindrabin Temple, Silvassa",
            "image": "images/bindrabin_temple.jpeg",
            "points": [
                "A Hindu temple dedicated to Lord Shiva, located on the banks of the Sakartod River."
            ]
        },
        {
            "name": "Hilsa Aquarium, Daman",
            "image": "images/hilsa_aquarium.jpeg",
            "points": [
                "The building housing this unique fish aquarium is a local monument on the Devka beach road."
            ]
        },
        {
            "name": "Jetty Garden, Daman",
            "image": "images/jetty_garden.jpeg",
            "points": [
                "The garden and its structures, including fountains and seating areas, are a riverside monument."
            ]
        },
        {
            "name": "St. Francis of Assisi Church, Diu",
            "image": "images/st_francis_church_diu.jpeg",
            "points": [
                "A former church from the 16th century, which now functions as a hospital."
            ]
        },
        {
            "name": "Vanganga Lake Garden Structures",
            "image": "images/vanganga_lake_garden.jpeg",
            "points": [
                "The Japanese-style bridges, pagodas, and cottages in this garden in Silvassa are recreational monuments."
            ]
        },
        {
            "name": "Daman Collectorate Building",
            "image": "images/daman_collectorate.jpeg",
            "points": [
                "A historic colonial administrative building inside Moti Daman Fort."
            ]
        },
        {
            "name": "Dominican Monastery Ruins, Daman",
            "image": "images/dominican_monastery_ruins.jpg",
            "points": [
                "The ruins of a former Catholic monastery and seminary, known for its grand facade and ornate altar."
            ]
        },
        {
            "name": "Hirwa Van Garden Entrance, Silvassa",
            "image": "images/hirwa_van_garden.jpeg",
            "points": [
                "The gateway and structures of this garden dedicated to the local deity Hirwa."
            ]
        },
        {
            "name": "Devka Beach Park Structures",
            "image": "images/devka_beach_park.jpeg",
            "points": [
                "The amusement park structures and fountains at Devka Beach are local landmarks."
            ]
        },
        {
            "name": "Jampore Beach Watchtowers",
            "image": "images/jampore_beach_watchtowers.jpeg",
            "points": [
                "Viewing towers on the popular Jampore beach in Daman."
            ]
        },
        {
            "name": "Church of Our Lady of Augustias, Moti Daman",
            "image": "images/our_lady_of_augustias_church.jpeg",
            "points": [
                "A smaller, historic chapel within the Moti Daman fort complex."
            ]
        },
        {
            "name": "Gomatimala Beach Structures",
            "image": "images/gomatimala_beach.jpeg",
            "points": [
                "The pavilions and changing rooms on this scenic beach in Diu are local monuments."
            ]
        },
        {
            "name": "Diu Post Office Building",
            "image": "images/diu_post_office.jpeg",
            "points": [
                "A heritage building from the Portuguese era."
            ]
        },
        {
            "name": "Old Water Tower, Moti Daman",
            "image": "images/water_tower_moti_daman.jpeg",
            "points": [
                "A historic water tower within the fort, an example of colonial infrastructure."
            ]
        },
        {
            "name": "Satya Sagar Udyan Statue",
            "image": "images/satya_sagar_udyan.jpeg",
            "points": [
                "A monument and statue within this garden on the Daman coast."
            ]
        },
        {
            "name": "Dudhni Lake Jetty",
            "image": "images/dudhni_lake_jetty.jpeg",
            "points": [
                "The main jetty and water sports center at this large lake near Silvassa."
            ]
        },
        {
            "name": "Khanvel Garden Structures",
            "image": "images/khanvel_garden.jpeg",
            "points": [
                "The cottages and structures in this garden retreat near Silvassa."
            ]
        },
        {
            "name": "Daman Municipal Council Building",
            "image": "images/daman_municipal_council.jpeg",
            "points": [
                "A heritage administrative building in the city."
            ]
        },
        {
            "name": "Silvassa Town Hall",
            "image": "images/silvassa_town_hall.jpeg",
            "points": [
                "A key administrative and civic building in the capital city."
            ]
        },
        {
            "name": "Old Circuit House, Daman",
            "image": "images/old_circuit_house_daman.jpeg",
            "points": [
                "A colonial-era guesthouse with heritage value."
            ]
        },
        {
            "name": "Diu Checkpost Arch",
            "image": "images/diu_checkpost_arch.jpeg",
            "points": [
                "The main archway at the land entrance to the island of Diu."
            ]
        },
        {
            "name": "Our Lady of Piety Church, Silvassa",
            "image": "images/our_lady_of_piety_church.jpeg",
            "points": [
                "Another historic Portuguese church in Silvassa."
            ]
        },
        {
            "name": "Daman Jetty Lighthouse",
            "image": "images/daman_jetty_lighthouse.jpeg",
            "points": [
                "A modern lighthouse at the mouth of the Daman Ganga River."
            ]
        },
        {
            "name": "Nagoa Beach Memorial",
            "image": "images/nagoa_beach_memorial.jpeg",
            "points": [
                "A small monument on the popular Nagoa beach in Diu."
            ]
        },
        {
            "name": "Church of the Holy Name of Jesus, Daman",
            "image": "images/holy_name_of_jesus_church.jpeg",
            "points": [
                "A significant church located near the sea."
            ]
        },
        {
            "name": "Silvassa Swaminarayan Temple",
            "image": "images/silvassa_swaminarayan_temple.jpeg",
            "points": [
                "A modern Hindu temple, a prominent religious monument in the city."
            ]
        },
        {
            "name": "Old Hospital Building, Moti Daman",
            "image": "images/old_hospital_moti_daman.jpeg",
            "points": [
                "A heritage building within the fort that once served as the main hospital."
            ]
        },
        {
            "name": "Cemetery of Moti Daman",
            "image": "images/cemetery_moti_daman.jpeg",
            "points": [
                "The historic Christian cemetery with old Portuguese graves."
            ]
        },
        {
            "name": "The Governor's Palace, Daman",
            "image": "images/governors_palace_daman.jpeg",
            "points": [
                "The official residence of the administrator, a grand colonial-era building within Moti Daman Fort."
            ]
        },
        {
            "name": "Sea Wall of Moti Daman Fort",
            "image": "images/sea_wall_moti_daman.jpeg",
            "points": [
                "The entire fortified sea wall with its bastions is a monumental structure."
            ]
        }
    ],
"Delhi": [
        {
            "name": "Qutub Minar",
            "image": "images/qutub_minar.jpeg",
            "points": [
                "The world's tallest brick minaret and a UNESCO World Heritage Site.",
                "The complex contains an ancient iron pillar that has resisted rust for over 1600 years."
            ]
        },
        {
            "name": "Humayun's Tomb",
            "image": "images/humayuns_tomb.jpeg",
            "points": [
                "A magnificent garden-tomb that was a major inspiration for the Taj Mahal's architecture.",
                "It was the first of the grand dynastic mausoleums of the Mughals and is a UNESCO World Heritage site."
            ]
        },
        {
            "name": "Red Fort (Lal Qila)",
            "image": "images/red_fort.jpeg",
            "points": [
                "A powerful symbol of Mughal sovereignty that served as their main residence for nearly 200 years.",
                "The Prime Minister of India hoists the national flag here every Independence Day."
            ]
        },
        {
            "name": "India Gate",
            "image": "images/india_gate.jpeg",
            "points": [
                "A majestic war memorial dedicated to the 84,000 Indian soldiers who died in World War I.",
                "The Amar Jawan Jyoti, an eternal flame, burns beneath the arch in their memory."
            ]
        },
        {
            "name": "Lotus Temple",
            "image": "images/lotus_temple.jpeg",
            "points": [
                "A stunning Baháʼí House of Worship, famous for its unique flower-like shape.",
                "It is a modern architectural marvel, open to all people regardless of their religion."
            ]
        },
        {
            "name": "Purana Qila (Old Fort)",
            "image": "images/purana_qila.jpeg",
            "points": [
                "Built by Sher Shah Suri & Humayun, it is one of the oldest forts in Delhi, believed to be on the site of ancient Indraprastha."
            ]
        },
        {
            "name": "Tughlaqabad Fort",
            "image": "images/tughlaqabad_fort.jpeg",
            "points": [
                "The formidable ruins of a massive 14th-century fort built by Ghiyas-ud-din Tughlaq."
            ]
        },
        {
            "name": "Jama Masjid",
            "image": "images/jama_masjid.jpeg",
            "points": [
                "India’s largest mosque, built by the Mughal emperor Shah Jahan, with a capacity of 25,000 people."
            ]
        },
        {
            "name": "Safdarjung's Tomb",
            "image": "images/safdarjungs_tomb.jpeg",
            "points": [
                "A late Mughal-style garden tomb, often described as the 'last flicker in the lamp of Mughal architecture'."
            ]
        },
        {
            "name": "Lodi Gardens",
            "image": "images/lodi_gardens.jpeg",
            "points": [
                "A city park containing the tombs of Sayyidi and Lodi rulers, including Muhammad Shah and Sikander Lodi."
            ]
        },
        {
            "name": "Hauz Khas Complex",
            "image": "images/hauz_khas_complex.jpeg",
            "points": [
                "Features a water tank, an Islamic seminary, a mosque, a tomb and pavilions from the Delhi Sultanate era."
            ]
        },
        {
            "name": "Agrasen ki Baoli",
            "image": "images/agrasen_ki_baoli.jpeg",
            "points": [
                "An ancient and ornate stepwell located near Connaught Place, a protected monument."
            ]
        },
        {
            "name": "Akshardham Temple",
            "image": "images/akshardham_temple.jpeg",
            "points": [
                "A modern Hindu temple complex that is an architectural marvel displaying centuries of Indian culture."
            ]
        },
        {
            "name": "Rashtrapati Bhavan",
            "image": "images/rashtrapati_bhavan.jpeg",
            "points": [
                "The official residence of the President of India, a masterpiece of British colonial architecture designed by Edwin Lutyens."
            ]
        },
        {
            "name": "Jantar Mantar",
            "image": "images/jantar_mantar_delhi.jpeg",
            "points": [
                "An 18th-century astronomical observatory with unique, large-scale masonry instruments."
            ]
        },
        {
            "name": "Tomb of Ghiyas ud din Tughlaq",
            "image": "images/ghiyas_ud_din_tughlaq_tomb.jpeg",
            "points": [
                "The impressive mausoleum of the founder of the Tughlaq dynasty, located opposite Tughlaqabad Fort."
            ]
        },
        {
            "name": "Feroz Shah Kotla Fort",
            "image": "images/feroz_shah_kotla_fort.jpeg",
            "points": [
                "Ruins of the fortress of the city of Firozabad, which contains a 3rd century BCE Ashokan Pillar."
            ]
        },
        {
            "name": "Nizamuddin Dargah",
            "image": "images/nizamuddin_dargah.jpeg",
            "points": [
                "The revered mausoleum of the Sufi saint Nizamuddin Auliya, a major pilgrimage site known for its qawwali music."
            ]
        },
        {
            "name": "Tomb of Isa Khan",
            "image": "images/isa_khan_tomb.jpeg",
            "points": [
                "An octagonal tomb of an Afghan noble, located within the Humayun's Tomb complex."
            ]
        },
        {
            "name": "Mehrauli Archaeological Park",
            "image": "images/mehrauli_archaeological_park.jpeg",
            "points": [
                "A vast park with over 100 historically significant monuments, including the Tomb of Balban and Jamali Kamali Mosque."
            ]
        },
        {
            "name": "Raj Ghat",
            "image": "images/raj_ghat.jpeg",
            "points": [
                "A memorial dedicated to Mahatma Gandhi, marking the spot of his cremation."
            ]
        },
        {
            "name": "Parliament House (Sansad Bhavan)",
            "image": "images/parliament_house.jpeg",
            "points": [
                "The circular colonial-era building that housed the Parliament of India, designed by Lutyens and Baker."
            ]
        },
        {
            "name": "National War Memorial",
            "image": "images/national_war_memorial.jpeg",
            "points": [
                "A modern monument near India Gate, built to honor the soldiers of the Indian Armed Forces who died in combat."
            ]
        },
        {
            "name": "Gurudwara Bangla Sahib",
            "image": "images/gurudwara_bangla_sahib.jpeg",
            "points": [
                "A prominent Sikh house of worship, known for its stunning golden dome and a holy water tank (Sarovar)."
            ]
        },
        {
            "name": "Tomb of Adham Khan (Bhulbhulaiya)",
            "image": "images/adham_khan_tomb.jpeg",
            "points": [
                "The 16th-century tomb of a general of Akbar, located in Mehrauli."
            ]
        },
        {
            "name": "Shanti Vana",
            "image": "images/shanti_vana.jpeg",
            "points": [
                "The memorial marking the cremation site of India's first Prime Minister, Jawaharlal Nehru."
            ]
        },
        {
            "name": "Alai Darwaza",
            "image": "images/alai_darwaza.jpeg",
            "points": [
                "The magnificent southern gateway of the Quwwat-ul-Islam Mosque in the Qutub complex."
            ]
        },
        {
            "name": "Alai Minar",
            "image": "images/alai_minar.jpeg",
            "points": [
                "The ambitious but unfinished base of a massive minaret started by Alauddin Khilji, intended to be twice the height of the Qutub Minar."
            ]
        },
        {
            "name": "Jahanpanah Fort Ruins",
            "image": "images/jahanpanah_fort_ruins.jpeg",
            "points": [
                "The ruins of the fourth medieval city of Delhi established in 1326–1327 by Muhammad bin Tughlaq."
            ]
        },
        {
            "name": "Begumpur Mosque",
            "image": "images/begumpur_mosque.jpeg",
            "points": [
                "A large 14th-century mosque from the Tughlaq era, located in the Jahanpanah city area."
            ]
        },
        {
            "name": "Khirki Masjid",
            "image": "images/khirki_masjid.jpeg",
            "points": [
                "A unique 14th-century fortress-like mosque, notable for its covered roof, a rarity in mosque architecture."
            ]
        },
        {
            "name": "Qila Rai Pithora",
            "image": "images/qila_rai_pithora.jpeg",
            "points": [
                "The ruins of the fortified city of the Chauhan king Prithviraj III, the first of the seven cities of Delhi."
            ]
        },
        {
            "name": "Siri Fort Wall Remnants",
            "image": "images/siri_fort_wall.jpeg",
            "points": [
                "The surviving walls and structures of the second medieval city of Delhi, built by Alauddin Khilji."
            ]
        },
        {
            "name": "Coronation Park",
            "image": "images/coronation_park.jpeg",
            "points": [
                "The site where the Delhi Durbar was held to commemorate the coronation of British monarchs, with several statues."
            ]
        },
        {
            "name": "Tomb of Balban",
            "image": "images/tomb_of_balban.jpeg",
            "points": [
                "A historically important tomb in the Mehrauli Archaeological Park, as it is the first known structure in India to feature a true arch."
            ]
        },
        {
            "name": "Jamali Kamali Mosque and Tomb",
            "image": "images/jamali_kamali_mosque.jpeg",
            "points": [
                "A 16th-century mosque and the adjoining tomb of a Sufi saint and his unknown companion."
            ]
        },
        {
            "name": "Bhairon Temple (near Purana Qila)",
            "image": "images/bhairon_temple.jpeg",
            "points": [
                "An ancient temple dedicated to Bhairav, a fierce manifestation of Lord Shiva."
            ]
        },
        {
            "name": "Kashmiri Gate",
            "image": "images/kashmiri_gate.jpeg",
            "points": [
                "The northern gate to the historic walled city of Delhi, a key site of fighting during the 1857 Rebellion."
            ]
        },
        {
            "name": "St. James' Church",
            "image": "images/st_james_church.jpeg",
            "points": [
                "One of the oldest churches in Delhi, built in 1836 by Colonel James Skinner."
            ]
        },
        {
            "name": "Mutiny Memorial (Ajitgarh)",
            "image": "images/mutiny_memorial.jpeg",
            "points": [
                "A memorial on the Ridge, originally built by the British to honor soldiers who fought in the 1857 rebellion."
            ]
        },
        {
            "name": "Teen Murti Bhavan",
            "image": "images/teen_murti_bhavan.jpeg",
            "points": [
                "The former residence of Jawaharlal Nehru, now a museum and library."
            ]
        },
        {
            "name": "Khooni Darwaza",
            "image": "images/khooni_darwaza.jpeg",
            "points": [
                "The 'Bloody Gate', a historic gateway associated with several violent events in Delhi's history."
            ]
        },
        {
            "name": "Salimgarh Fort",
            "image": "images/salimgarh_fort.jpeg",
            "points": [
                "An old fort adjoining the Red Fort, which was used as a state prison by the Mughals and the British."
            ]
        },
        {
            "name": "Iron Pillar of Delhi",
            "image": "images/iron_pillar_delhi.jpeg",
            "points": [
                "A 7-meter iron pillar in the Qutub complex, famous for its rust-resistant composition from the 4th century."
            ]
        },
        {
            "name": "Ashokan Rock Edict, East of Kailash",
            "image": "images/ashokan_rock_edict_delhi.jpeg",
            "points": [
                "An inscription on a rock by the Mauryan emperor Ashoka, a significant archaeological monument."
            ]
        },
        {
            "name": "Zafar Mahal, Mehrauli",
            "image": "images/zafar_mahal_mehrauli.jpeg",
            "points": [
                "Considered the last monumental structure built by the Mughals, serving as their summer palace."
            ]
        },
        {
            "name": "Chor Minar",
            "image": "images/chor_minar.jpeg",
            "points": [
                "The 'Tower of Thieves', a 13th-century minaret with holes where the severed heads of thieves were displayed."
            ]
        },
        {
            "name": "Qadam Sharif Dargah",
            "image": "images/qadam_sharif_dargah.jpeg",
            "points": [
                "A 14th-century dargah that houses a stone believed to have the footprint of the Prophet Muhammad."
            ]
        },
        {
            "name": "Bijay Mandal",
            "image": "images/bijay_mandal.jpeg",
            "points": [
                "The ruins of a 14th-century fortified palace in the Jahanpanah city, with a distinctive octagonal pavilion."
            ]
        },
        {
            "name": "Sultan Ghari's Tomb",
            "image": "images/sultan_gharis_tomb.jpeg",
            "points": [
                "The first Islamic mausoleum in Delhi, built in 1231 for the eldest son of Sultan Iltutmish."
            ]
        }
    ],
"Jammu and Kashmir": [
        {
            "name": "Shankaracharya Temple",
            "image": "images/shankaracharya_temple.jpeg",
            "points": [
                "An ancient temple dedicated to Lord Shiva, located on a hilltop in Srinagar, offering panoramic views of the city."
            ]
        },
        {
            "name": "Martand Sun Temple",
            "image": "images/martand_sun_temple.jpeg",
            "points": [
                "The magnificent ruins of an 8th-century temple near Anantnag, dedicated to the Sun God, Surya. A masterpiece of Kashmiri architecture."
            ]
        },
        {
            "name": "Hazratbal Shrine",
            "image": "images/hazratbal_shrine.jpeg",
            "points": [
                "A revered Muslim shrine in Srinagar on the banks of Dal Lake, housing a relic believed to be a hair of the Prophet Muhammad."
            ]
        },
        {
            "name": "Jamia Masjid, Srinagar",
            "image": "images/jamia_masjid_srinagar.jpeg",
            "points": [
                "A 14th-century mosque in the heart of old Srinagar, renowned for its unique Indo-Saracenic architecture and 378 deodar wood pillars."
            ]
        },
        {
            "name": "Khanqah-e-Moula (Shah-e-Hamdan Mosque)",
            "image": "images/khanqah_e_moula.jpeg",
            "points": [
                "One of the oldest mosques in Kashmir, built in 1395, a fine example of Kashmiri wooden architecture with intricate carvings and papier-mâché work."
            ]
        },
        {
            "name": "Vaishno Devi Temple",
            "image": "images/vaishno_devi_temple.jpeg",
            "points": [
                "One of the most visited Hindu pilgrimage sites in India, a holy cave shrine located in the Trikuta Mountains in Katra."
            ]
        },
        {
            "name": "Amarnath Cave Temple",
            "image": "images/amarnath_cave_temple.jpeg",
            "points": [
                "A famous Hindu shrine located in a high-altitude cave, known for the natural formation of an ice stalagmite revered as a Shiva Lingam."
            ]
        },
        {
            "name": "Avantipur Temples",
            "image": "images/avantipur_temples.jpeg",
            "points": [
                "The impressive ruins of two 9th-century temples, one for Shiva and one for Vishnu, built by King Avantivarman."
            ]
        },
        {
            "name": "Bahu Fort & Mahakali Temple",
            "image": "images/bahu_fort.jpeg",
            "points": [
                "A historic fort in Jammu on the banks of the Tawi River, which houses a revered temple dedicated to the goddess Kali."
            ]
        },
        {
            "name": "Raghunath Temple, Jammu",
            "image": "images/raghunath_temple.jpeg",
            "points": [
                "One of the largest temple complexes in North India, located in Jammu, with seven shrines each with its own Shikhara."
            ]
        },
        {
            "name": "Pari Mahal",
            "image": "images/pari_mahal.jpeg",
            "points": [
                "The 'Palace of Fairies', a seven-terraced Mughal garden and observatory in Srinagar, built by Dara Shikoh."
            ]
        },
        {
            "name": "Shalimar Bagh",
            "image": "images/shalimar_bagh.jpeg",
            "points": [
                "A famous Mughal garden in Srinagar built by Emperor Jahangir for his wife Nur Jahan, known for its terraced layout and water channels."
            ]
        },
        {
            "name": "Nishat Bagh",
            "image": "images/nishat_bagh.jpeg",
            "points": [
                "The 'Garden of Bliss', a terraced Mughal-era garden on the banks of Dal Lake, with the Zabarwan Mountains as its backdrop."
            ]
        },
        {
            "name": "Krimchi Temples (Pandava Temples)",
            "image": "images/krimchi_temples.jpeg",
            "points": [
                "A complex of seven ancient temples near Udhampur, believed to date back to the 8th–9th century, showcasing early Nagara architectural style."
            ]
        },
        {
            "name": "Hari Parbat Fort",
            "image": "images/hari_parbat_fort.jpeg",
            "points": [
                "A Mughal-era fort on Sharika Hill overlooking Srinagar, which also houses Hindu temples and a revered Sufi shrine."
            ]
        },
        {
            "name": "Mubarak Mandi Palace Complex",
            "image": "images/mubarak_mandi_palace.jpeg",
            "points": [
                "The former royal residence of the Dogra kings in Jammu, a vast complex showcasing a blend of Rajasthani, Mughal, and European architecture."
            ]
        },
        {
            "name": "Poonch Fort",
            "image": "images/poonch_fort.jpeg",
            "points": [
                "A 16th-century fort located in the town of Poonch, with a mix of Mughal and local architectural styles."
            ]
        },
        {
            "name": "Chatti Padshahi Gurudwara, Srinagar",
            "image": "images/chatti_padshahi_gurudwara.jpeg",
            "points": [
                "A significant Sikh shrine in Srinagar dedicated to the sixth Sikh Guru, Guru Hargobind Ji."
            ]
        },
        {
            "name": "Pathar Masjid",
            "image": "images/pathar_masjid.jpeg",
            "points": [
                "A unique Mughal-era mosque in Srinagar built by Empress Noor Jahan, distinctive for not having a traditional pyramidal roof."
            ]
        },
        {
            "name": "Aali Masjid",
            "image": "images/aali_masjid.jpeg",
            "points": [
                "The second largest mosque in Srinagar, located in the Eidgah area, built by Sultan Sikandar in the 14th century."
            ]
        },
        {
            "name": "Makhdoom Sahib Shrine",
            "image": "images/makhdoom_sahib_shrine.jpeg",
            "points": [
                "A revered shrine on the southern slope of Hari Parbat, dedicated to the Sufi saint Sheikh Hamza Makhdoom."
            ]
        },
        {
            "name": "Ranbireshwar Temple, Jammu",
            "image": "images/ranbireshwar_temple.jpeg",
            "points": [
                "A major temple in Jammu dedicated to Lord Shiva, built by Maharaja Ranbir Singh in 1883."
            ]
        },
        {
            "name": "Sharika Devi Temple",
            "image": "images/sharika_devi_temple.jpeg",
            "points": [
                "A sacred Shakti Peeth located on Hari Parbat hill in Srinagar, dedicated to the goddess Jagadamba Sharika Bhagwati."
            ]
        },
        {
            "name": "Sudh Mahadev Temple",
            "image": "images/sudh_mahadev_temple.jpeg",
            "points": [
                "An ancient and highly revered Shiva temple near Patnitop, which houses a holy trident (trishul)."
            ]
        },
        {
            "name": "Chashme Shahi",
            "image": "images/chashme_shahi.jpeg",
            "points": [
                "The smallest of the Mughal gardens in Srinagar, known for its royal spring ('Chashme Shahi') of fresh water."
            ]
        },
        {
            "name": "Verinag Spring & Garden",
            "image": "images/verinag_spring.jpeg",
            "points": [
                "The source of the Jhelum River, surrounded by an octagonal stone monument and arcades built by Mughal emperors."
            ]
        },
        {
            "name": "Pandrethan Temple",
            "image": "images/pandrethan_temple.jpeg",
            "points": [
                "An 8th-century Shiva temple built in the middle of a water tank, a well-preserved example of early Kashmiri temple architecture."
            ]
        },
        {
            "name": "Kheer Bhawani Temple, Ganderbal",
            "image": "images/kheer_bhawani_temple.jpeg",
            "points": [
                "A highly revered temple dedicated to the goddess Ragnya Devi, located in the middle of a sacred spring that is said to change color."
            ]
        },
        {
            "name": "Mamleshwar Temple, Pahalgam",
            "image": "images/mamleshwar_temple.jpeg",
            "points": [
                "An ancient stone temple dedicated to Lord Shiva, dating back to the 5th century."
            ]
        },
        {
            "name": "Naranag Temple Complex",
            "image": "images/naranag_temple_complex.jpeg",
            "points": [
                "An archaeological site with a cluster of ancient temples near a sacred spring, dating to the 8th century."
            ]
        },
        {
            "name": "Payer Temple",
            "image": "images/payer_temple.jpeg",
            "points": [
                "A small but perfectly preserved 10th-century Shiva temple, carved from a single stone."
            ]
        },
        {
            "name": "Ramnagar Fort, Udhampur",
            "image": "images/ramnagar_fort.jpeg",
            "points": [
                "A historic fort with a palace inside, known for its beautiful Sheesh Mahal (hall of mirrors)."
            ]
        },
        {
            "name": "Akhnoor Fort",
            "image": "images/akhnoor_fort.jpeg",
            "points": [
                "A fort on the banks of the Chenab river, located on a site with archaeological remains from the Harappan civilization."
            ]
        },
        {
            "name": "Bhimgarh Fort, Reasi",
            "image": "images/bhimgarh_fort.jpeg",
            "points": [
                "A reconstructed hilltop fort overlooking the town of Reasi, originally built with clay."
            ]
        },
        {
            "name": "Babore Temples",
            "image": "images/babore_temples.jpeg",
            "points": [
                "The ruins of a complex of six temples near Jammu, showcasing fine examples of Dogra architecture."
            ]
        },
        {
            "name": "Shri Mata Vaishno Devi University Auditorium",
            "image": "images/smvdu_auditorium.jpeg",
            "points": [
                "A modern architectural monument, the university's auditorium is a prominent landmark."
            ]
        },
        {
            "name": "Dargah of Baba Reshi, Gulmarg",
            "image": "images/baba_reshi_dargah.jpeg",
            "points": [
                "The shrine of a revered Muslim saint from the 15th century, known for its unique blend of Mughal and Kashmiri architecture."
            ]
        },
        {
            "name": "Sheesh Mahal, Ramnagar",
            "image": "images/sheesh_mahal_ramnagar.jpeg",
            "points": [
                "A beautiful palace within the Ramnagar Fort known for its mirror work and paintings."
            ]
        },
        {
            "name": "Peer Kho Cave Temple, Jammu",
            "image": "images/peer_kho_cave_temple.jpeg",
            "points": [
                "An ancient cave temple dedicated to Lord Shiva, located on the banks of the Tawi river."
            ]
        },
        {
            "name": "Amar Mahal Palace, Jammu",
            "image": "images/amar_mahal_palace.jpeg",
            "points": [
                "A French-chateau style palace overlooking the Tawi river, now a museum with art and royal artifacts."
            ]
        },
        {
            "name": "Dastgeer Sahib Shrine, Srinagar",
            "image": "images/dastgeer_sahib_shrine.jpeg",
            "points": [
                "A 200-year-old Sufi shrine dedicated to Sheikh Syed Abdul Qadir Jelani."
            ]
        },
        {
            "name": "Ziarat of Baba Ghulam Shah Badshah, Rajouri",
            "image": "images/baba_ghulam_shah_shrine.jpeg",
            "points": [
                "A popular shrine dedicated to a revered Sufi saint, visited by people of all faiths."
            ]
        },
        {
            "name": "Old Secretariat, Srinagar",
            "image": "images/old_secretariat_srinagar.jpeg",
            "points": [
                "A historic administrative building from the Dogra rule, representing the state's political history."
            ]
        },
        {
            "name": "Dhanidhar Fort, Rajouri",
            "image": "images/dhanidhar_fort.jpeg",
            "points": [
                "A historic fort built by a Dogra ruler, offering panoramic views of Rajouri town."
            ]
        },
        {
            "name": "Gurdwara Nangali Sahib, Poonch",
            "image": "images/gurdwara_nangali_sahib.jpeg",
            "points": [
                "A highly revered Sikh shrine located in the Poonch district."
            ]
        },
        {
            "name": "Billawar Temples (Mahabilvakeshwar Temple)",
            "image": "images/billawar_temples.jpeg",
            "points": [
                "An ancient temple complex in Kathua district, believed to date back to the Pandava era."
            ]
        },
        {
            "name": "Theed Palace Ruins",
            "image": "images/theed_palace_ruins.jpeg",
            "points": [
                "The ruins of a palace built by the wife of Mughal emperor Jahangir."
            ]
        },
        {
            "name": "SPS Museum Building, Srinagar",
            "image": "images/sps_museum.jpeg",
            "points": [
                "The former summer palace of the Dogra Maharajas, now the state museum, is a heritage monument."
            ]
        },
        {
            "name": "Mughal Road 'Alia Abad Sarai' Ruins",
            "image": "images/mughal_road_sarai.jpeg",
            "points": [
                "The ruins of a historic caravanserai (inn) along the ancient Mughal Road."
            ]
        }
    ],
"Ladakh": [
        {
            "name": "Leh Palace",
            "image": "images/leh_palace.jpeg",
            "points": [
                "A 17th-century former royal palace overlooking the town of Leh, modeled on the Potala Palace in Lhasa.",
                "It is a stunning example of medieval Tibetan architecture."
            ]
        },
        {
            "name": "Thiksey Monastery",
            "image": "images/thiksey_monastery.jpeg",
            "points": [
                "A spectacular 12-story monastery affiliated with the Gelug sect, noted for its resemblance to the Potala Palace.",
                "It houses a magnificent 49-foot statue of Maitreya Buddha."
            ]
        },
        {
            "name": "Hemis Monastery",
            "image": "images/hemis_monastery.jpeg",
            "points": [
                "The largest and wealthiest monastery in Ladakh, belonging to the Drukpa Lineage.",
                "It is famous for the annual Hemis festival and its rich collection of thangkas."
            ]
        },
        {
            "name": "Diskit Monastery & Maitreya Buddha Statue",
            "image": "images/diskit_monastery.jpeg",
            "points": [
                "The oldest and largest monastery in the Nubra Valley, known for its towering 106-foot statue of Maitreya Buddha."
            ]
        },
        {
            "name": "Alchi Monastery (Alchi Choskor)",
            "image": "images/alchi_monastery.jpeg",
            "points": [
                "A monastic complex famous for its unique and well-preserved 11th-12th century wall paintings in Kashmiri style.",
                "It is located on the flat ground, unlike other hilltop monasteries."
            ]
        },
        {
            "name": "Lamayuru Monastery",
            "image": "images/lamayuru_monastery.jpeg",
            "points": [
                "One of the oldest and largest monasteries in Ladakh, famous for its 'moonland' like landscape and ancient legends."
            ]
        },
        {
            "name": "Shanti Stupa",
            "image": "images/shanti_stupa.jpeg",
            "points": [
                "An iconic white-domed Buddhist stupa on a hilltop in Leh, built by Japanese monks to promote world peace.",
                "It offers breathtaking panoramic views of Leh and the surrounding mountains."
            ]
        },
        {
            "name": "Shey Monastery & Palace",
            "image": "images/shey_monastery.jpeg",
            "points": [
                "The former summer capital of Ladakh, the complex contains a palace and monastery with a giant copper and gilded gold statue of Buddha."
            ]
        },
        {
            "name": "Spituk Monastery",
            "image": "images/spituk_monastery.jpeg",
            "points": [
                "An 11th-century monastery overlooking the Indus Valley, known for its giant statue of Kali, which is unveiled during the annual festival."
            ]
        },
        {
            "name": "Stok Palace",
            "image": "images/stok_palace.jpeg",
            "points": [
                "The current residence of the former Ladakhi royal family, a part of which has been converted into a museum displaying royal artifacts."
            ]
        },
        {
            "name": "Drass War Memorial (Kargil War Memorial)",
            "image": "images/drass_war_memorial.jpeg",
            "points": [
                "A poignant memorial that commemorates the heroes of the 1999 Kargil War, located in the town of Drass."
            ]
        },
        {
            "name": "Basgo Palace and Monastery",
            "image": "images/basgo_palace.jpeg",
            "points": [
                "A historic fortress and monastery complex with impressive ruins and surviving temples, perched on a steep hill."
            ]
        },
        {
            "name": "Likir Monastery",
            "image": "images/likir_monastery.jpeg",
            "points": [
                "An 11th-century monastery featuring a large, 75-foot outdoor statue of Maitreya Buddha."
            ]
        },
        {
            "name": "Mulbekh Monastery & Chamba Statue",
            "image": "images/mulbekh_monastery.jpeg",
            "points": [
                "Famous for its giant 9-meter, 8th-century rock-carved statue of Maitreya Buddha."
            ]
        },
        {
            "name": "Hall of Fame, Leh",
            "image": "images/hall_of_fame_leh.jpeg",
            "points": [
                "A war memorial and museum established and maintained by the Indian Army, honoring soldiers who served in Ladakh."
            ]
        },
        {
            "name": "Phyang Monastery",
            "image": "images/phyang_monastery.jpeg",
            "points": [
                "A 16th-century monastery that houses a museum with an extensive collection of ancient thangkas and artifacts."
            ]
        },
        {
            "name": "Rizong Monastery",
            "image": "images/rizong_monastery.jpeg",
            "points": [
                "Known for its strict monastic discipline, often called the 'Paradise for Meditation'."
            ]
        },
        {
            "name": "Matho Monastery",
            "image": "images/matho_monastery.jpeg",
            "points": [
                "The only monastery in Ladakh belonging to the Sakya sect of Tibetan Buddhism, famous for its annual oracle festival."
            ]
        },
        {
            "name": "Chiktan Fort",
            "image": "images/chiktan_fort.jpeg",
            "points": [
                "The impressive ruins of a 16th-century medieval fort in the Kargil district, a symbol of unity and strength."
            ]
        },
        {
            "name": "Turtuk Heritage Village Houses",
            "image": "images/turtuk_village.jpeg",
            "points": [
                "The traditional stone houses in this village showcase unique Balti culture and are living heritage monuments."
            ]
        },
        {
            "name": "Stakna Monastery",
            "image": "images/stakna_monastery.jpeg",
            "points": [
                "A small but picturesque monastery perched on a hill shaped like a tiger's nose, offering stunning views of the Indus River."
            ]
        },
        {
            "name": "Chemrey Monastery",
            "image": "images/chemrey_monastery.jpeg",
            "points": [
                "A 17th-century monastery known for its high statue of Padmasambhava and a collection of ancient scriptures."
            ]
        },
        {
            "name": "Zorawar Fort, Leh",
            "image": "images/zorawar_fort.jpeg",
            "points": [
                "A historic fort built by the Dogra general Zorawar Singh, which now houses a museum."
            ]
        },
        {
            "name": "Kargil Old Town (Purani Kargil)",
            "image": "images/kargil_old_town.jpeg",
            "points": [
                "The traditional houses and narrow lanes of the old town are a monument to the region's historical architecture."
            ]
        },
        {
            "name": "Sankar Monastery",
            "image": "images/sankar_monastery.jpeg",
            "points": [
                "A small, serene monastery located just outside Leh, known for its beautiful architecture and artwork."
            ]
        },
        {
            "name": "Namgyal Tsemo Monastery",
            "image": "images/namgyal_tsemo_monastery.jpeg",
            "points": [
                "A 15th-century monastery and fort ruins on a crag above Leh Palace, offering spectacular views."
            ]
        },
        {
            "name": "Karsha Monastery, Zanskar",
            "image": "images/karsha_monastery.jpeg",
            "points": [
                "The largest and most important monastery in the Zanskar Valley, with ancient rock carvings and murals."
            ]
        },
        {
            "name": "Phugtal Monastery, Zanskar",
            "image": "images/phugtal_monastery.jpeg",
            "points": [
                "A spectacular monastery built into the cliffside of a massive cave, one of the most isolated in the world."
            ]
        },
        {
            "name": "Stongdey Monastery, Zanskar",
            "image": "images/stongdey_monastery.jpeg",
            "points": [
                "The second largest monastery in Zanskar, perched on a hilltop overlooking the valley."
            ]
        },
        {
            "name": "Zangla Fort, Zanskar",
            "image": "images/zangla_fort.jpeg",
            "points": [
                "The ruins of a historic fortress and former royal palace of the Zangla kings."
            ]
        },
        {
            "name": "Gurdwara Pathar Sahib",
            "image": "images/gurdwara_pathar_sahib.jpeg",
            "points": [
                "A beautiful Sikh shrine built to commemorate the visit of Guru Nanak, maintained by the Indian Army."
            ]
        },
        {
            "name": "Takthok Monastery",
            "image": "images/takthok_monastery.jpeg",
            "points": [
                "The only monastery in Ladakh belonging to the Nyingma school, built around a cave where Padmasambhava is said to have meditated."
            ]
        },
        {
            "name": "Tingmosgang Fort & Monastery",
            "image": "images/tingmosgang_fort.jpeg",
            "points": [
                "The ruins of a large 15th-century fortress and a monastery with important historical significance."
            ]
        },
        {
            "name": "Wanla Monastery",
            "image": "images/wanla_monastery.jpeg",
            "points": [
                "A historic monastery built inside an ancient castle, with a famous three-storied statue of Avalokiteshvara."
            ]
        },
        {
            "name": "Mangyu Temple Complex",
            "image": "images/mangyu_temple_complex.jpeg",
            "points": [
                "A complex of ancient temples contemporary to Alchi, known for their exquisite and well-preserved murals."
            ]
        },
        {
            "name": "Nyarma University Ruins",
            "image": "images/nyarma_university_ruins.jpeg",
            "points": [
                "The archaeological remains of an ancient Buddhist university and monastic complex near the Indus River."
            ]
        },
        {
            "name": "Druk White Lotus School (Rancho's School)",
            "image": "images/druk_white_lotus_school.jpeg",
            "points": [
                "A modern architectural monument known for its sustainable design and fame from the movie '3 Idiots'."
            ]
        },
        {
            "name": "Khardung La Pass Stupa",
            "image": "images/khardung_la_pass_stupa.jpeg",
            "points": [
                "The stupa and signage at one of the world's highest motorable passes, a monument to human endeavor."
            ]
        },
        {
            "name": "Central Asian Museum, Leh",
            "image": "images/central_asian_museum_leh.jpeg",
            "points": [
                "A museum housed in a traditional stone tower, showcasing Ladakh's historical role on the Silk Road."
            ]
        },
        {
            "name": "Samstanling Monastery, Nubra",
            "image": "images/samstanling_monastery.jpeg",
            "points": [
                "A serene and colorful monastery in the Sumur village of Nubra Valley."
            ]
        },
        {
            "name": "Bardan Monastery, Zanskar",
            "image": "images/bardan_monastery.jpeg",
            "points": [
                "A 17th-century monastery perched on a rocky cliff, belonging to the Drukpa Kagyu sect."
            ]
        },
        {
            "name": "Sani Monastery, Zanskar",
            "image": "images/sani_monastery.jpeg",
            "points": [
                "Believed to be the oldest religious site in Ladakh and Zanskar, associated with the Kushan emperor Kanishka."
            ]
        },
        {
            "name": "Rangdum Monastery",
            "image": "images/rangdum_monastery.jpeg",
            "points": [
                "A Tibetan Buddhist monastery on top of a small hill in the remote Suru Valley."
            ]
        },
        {
            "name": "Hundar Monastery, Nubra",
            "image": "images/hundar_monastery.jpeg",
            "points": [
                "A monastery located near the famous sand dunes of Hundar in Nubra Valley."
            ]
        },
        {
            "name": "Tsemo Fort, Leh",
            "image": "images/tsemo_fort.jpeg",
            "points": [
                "The ruins of an old fort and monastery on the peak above Leh Palace, offering the highest viewpoint of the city."
            ]
        },
        {
            "name": "Leh Old Town Mosque (Jama Masjid)",
            "image": "images/leh_old_town_mosque.jpeg",
            "points": [
                "A historic Sunni mosque in the main bazaar of Leh, representing the region's religious diversity."
            ]
        },
        {
            "name": "Hunder Dok heritage houses",
            "image": "images/hunder_dok_houses.jpeg",
            "points": [
                "Traditional farm houses in the Hunder area that preserve the old way of life and architecture."
            ]
        },
        {
            "name": "Shargole Monastery",
            "image": "images/shargole_monastery.jpeg",
            "points": [
                "A fascinating monastery built into a granite cliff face, appearing as if suspended in the rock."
            ]
        },
        {
            "name": "Pashkum Fort Ruins, Kargil",
            "image": "images/pashkum_fort_ruins.jpeg",
            "points": [
                "The historic ruins of a fort in the village of Pashkum, reflecting the architectural style of the region."
            ]
        },
        {
            "name": "Tegar Monastery, Nubra",
            "image": "images/tegar_monastery.jpeg",
            "points": [
                "A significant monastery located in the Sumur village of the Nubra valley."
            ]
        }
    ],
"Lakshadweep": [
        {
            "name": "Ujra Mosque, Kavaratti",
            "image": "images/ujra_mosque.jpeg",
            "points": [
                "One of the most beautiful and revered mosques in the archipelago, located in Kavaratti.",
                "It is famous for its ornate ceiling, carved from a single piece of driftwood, and intricate wood carvings."
            ]
        },
        {
            "name": "Minicoy Island Lighthouse",
            "image": "images/minicoy_lighthouse.jpeg",
            "points": [
                "A towering lighthouse built by the British in 1885, a major landmark offering panoramic views."
            ]
        },
        {
            "name": "Andrott Island Lighthouse",
            "image": "images/andrott_lighthouse.jpeg",
            "points": [
                "A modern but crucial navigational monument on the largest island of the archipelago."
            ]
        },
        {
            "name": "Hazrat Ubaidullah’s Tomb, Andrott",
            "image": "images/hazrat_ubaidullah_tomb.jpeg",
            "points": [
                "The shrine of the revered Arab saint credited with spreading Islam in Lakshadweep, a key pilgrimage site."
            ]
        },
        {
            "name": "Ancient Buddhist Archaeological Remains, Andrott",
            "image": "images/buddhist_remains_andrott.jpeg",
            "points": [
                "The ruins, including a Buddha head, provide evidence of a pre-Islamic Buddhist influence in the region."
            ]
        },
        {
            "name": "Mohiyudeen Mosque, Kalpeni",
            "image": "images/mohiyudeen_mosque_kalpeni.jpeg",
            "points": [
                "A historic and architecturally significant mosque on Kalpeni Island, known for its traditional design."
            ]
        },
        {
            "name": "Kalpeni Lighthouse",
            "image": "images/kalpeni_lighthouse.jpeg",
            "points": [
                "A landmark on Kalpeni island, vital for the local maritime community."
            ]
        },
        {
            "name": "Agatti Island Lighthouse",
            "image": "images/agatti_lighthouse.jpeg",
            "points": [
                "A navigational beacon at the gateway to the islands, as Agatti hosts the main airport."
            ]
        },
        {
            "name": "Juma Mosque, Minicoy",
            "image": "images/juma_mosque_minicoy.jpeg",
            "points": [
                "An old and important mosque on Minicoy, showcasing the unique Maldivian cultural influence on the island."
            ]
        },
        {
            "name": "Marine Museum Building, Kavaratti",
            "image": "images/marine_museum_kavaratti.jpeg",
            "points": [
                "A monument to the rich marine biodiversity of the islands, showcasing rare aquatic specimens."
            ]
        },
        {
            "name": "Planetarium Building, Kavaratti",
            "image": "images/planetarium_kavaratti.jpeg",
            "points": [
                "A modern monument to science and education, a unique attraction in the archipelago."
            ]
        },
        {
            "name": "Desalination Plant, Kavaratti",
            "image": "images/desalination_plant_kavaratti.jpeg",
            "points": [
                "A modern engineering monument crucial for providing fresh water to the island's population."
            ]
        },
        {
            "name": "Jamnath Mosque, Kavaratti",
            "image": "images/jamnath_mosque_kavaratti.jpeg",
            "points": [
                "A historic mosque on the capital island, representing the deep-rooted Islamic culture."
            ]
        },
        {
            "name": "Suheli Par Lighthouse",
            "image": "images/suheli_par_lighthouse.jpeg",
            "points": [
                "A lighthouse on an uninhabited atoll, a monument to the safety of sea routes."
            ]
        },
        {
            "name": "Agatti Airport Terminal Building",
            "image": "images/agatti_airport_terminal.jpeg",
            "points": [
                "The main air gateway to the islands, a modern monument representing connectivity and tourism."
            ]
        },
        {
            "name": "Tuna Canning Factory, Minicoy",
            "image": "images/tuna_canning_factory_minicoy.jpeg",
            "points": [
                "An industrial monument showcasing the economic heritage of Minicoy, famous for its tuna fishing."
            ]
        },
        {
            "name": "Bada Mosque, Amini",
            "image": "images/bada_mosque_amini.jpeg",
            "points": [
                "The main and largest mosque on the historically important Amini Island."
            ]
        },
        {
            "name": "Oldest House, Amini Island",
            "image": "images/oldest_house_amini.jpeg",
            "points": [
                "A preserved traditional house that stands as a monument to the vernacular architecture of the islands."
            ]
        },
        {
            "name": "Kiltan Island Mosque",
            "image": "images/kiltan_island_mosque.jpeg",
            "points": [
                "The main mosque on this northern island, a center of community life."
            ]
        },
        {
            "name": "Chetlat Island Mosque",
            "image": "images/chetlat_island_mosque.jpeg",
            "points": [
                "A significant religious monument on one of the most densely populated islands."
            ]
        },
        {
            "name": "Bitra Island's Smallest Mosque",
            "image": "images/bitra_island_mosque.jpeg",
            "points": [
                "The mosque on the smallest inhabited island, a monument to faith in a tiny community."
            ]
        },
        {
            "name": "Traditional 'Dhoni' Boats",
            "image": "images/dhoni_boats.jpeg",
            "points": [
                "Preserved traditional sailing vessels are living monuments to the islands' maritime history."
            ]
        },
        {
            "name": "Mahal Language Script Stones, Minicoy",
            "image": "images/mahal_script_stones.png",
            "points": [
                "Stone inscriptions bearing the old Mahal script, a monument to the unique linguistic heritage of Minicoy."
            ]
        },
        {
            "name": "Government Secretariat Building, Kavaratti",
            "image": "images/secretariat_kavaratti.jpeg",
            "points": [
                "The main administrative building, a monument to the governance of the Union Territory."
            ]
        },
        {
            "name": "Indira Gandhi Hospital Building, Kavaratti",
            "image": "images/indira_gandhi_hospital_kavaratti.jpeg",
            "points": [
                "The primary healthcare facility, a monument to the development of public services in the islands."
            ]
        },
        {
            "name": "Kavaratti Jetty",
            "image": "images/kavaratti_jetty.jpeg",
            "points": [
                "The main sea link for the capital island, a crucial infrastructural monument."
            ]
        },
        {
            "name": "Kadmat Island Mosque",
            "image": "images/kadmat_island_mosque.jpeg",
            "points": [
                "A key religious building on the popular tourist island of Kadmat."
            ]
        },
        {
            "name": "Andrott Jetty",
            "image": "images/andrott_jetty.jpeg",
            "points": [
                "The landing point for the largest island, a monument to inter-island connectivity."
            ]
        },
        {
            "name": "Kalpeni Jetty",
            "image": "images/kalpeni_jetty.jpeg",
            "points": [
                "The main harbor structure for Kalpeni and its surrounding islets."
            ]
        },
        {
            "name": "Amini Jetty",
            "image": "images/amini_jetty.jpeg",
            "points": [
                "The port for Amini island, known for its skilled craftsmen."
            ]
        },
        {
            "name": "Weather Observatory Building, Minicoy",
            "image": "images/weather_observatory_minicoy.jpeg",
            "points": [
                "A historic building for meteorological studies, a scientific monument."
            ]
        },
        {
            "name": "Bangaram Island Resort Huts",
            "image": "images/bangaram_resort_huts.jpeg",
            "points": [
                "The iconic resort huts on this uninhabited island are a monument to Lakshadweep's tourism."
            ]
        },
        {
            "name": "Kavaratti Town Hall",
            "image": "images/kavaratti_town_hall.jpeg",
            "points": [
                "A public building that serves as a monument to civic life in the capital."
            ]
        },
        {
            "name": "Radio Station Building, Kavaratti",
            "image": "images/radio_station_kavaratti.jpeg",
            "points": [
                "A monument to communication and media in the isolated archipelago."
            ]
        },
        {
            "name": "Helipad Structure, Kavaratti",
            "image": "images/helipad_kavaratti.jpeg",
            "points": [
                "A vital piece of infrastructure for emergency services and transport, a modern monument."
            ]
        },
        {
            "name": "Pittock Island Bird Sanctuary Watchtower",
            "image": "images/pittock_watchtower.jpeg",
            "points": [
                "A structure for observing seabirds, a monument to the region's unique ecology."
            ]
        },
        {
            "name": "Coir Production Centre Buildings",
            "image": "images/coir_production_centre.jpeg",
            "points": [
                "The buildings for coir twisting and production are monuments to the traditional economy of the islands."
            ]
        },
        {
            "name": "Cheriyam Island Lighthouse",
            "image": "images/cheriyam_lighthouse.jpeg",
            "points": [
                "A lighthouse on the islet near Kalpeni."
            ]
        },
        {
            "name": "Juma Masjid, Agatti",
            "image": "images/juma_masjid_agatti.jpeg",
            "points": [
                "The main congregational mosque on Agatti island."
            ]
        },
        {
            "name": "Light House, Kiltan",
            "image": "images/lighthouse_kiltan.jpeg",
            "points": [
                "The navigational beacon for the northern island of Kiltan."
            ]
        },
        {
            "name": "Jamath Mosque, Andrott",
            "image": "images/jamath_mosque_andrott.jpeg",
            "points": [
                "Another historic mosque on Andrott island, significant to the local community."
            ]
        },
        {
            "name": "Navodaya School Building, Minicoy",
            "image": "images/navodaya_school_minicoy.jpeg",
            "points": [
                "A key educational institution, a monument to learning in the southernmost island."
            ]
        },
        {
            "name": "Athiri Mosque, Kalpeni",
            "image": "images/athiri_mosque_kalpeni.jpeg",
            "points": [
                "One of the many small, traditional mosques that are cultural monuments on Kalpeni."
            ]
        },
        {
            "name": "Sports Authority of India (SAI) Centre, Andrott",
            "image": "images/sai_centre_andrott.jpeg",
            "points": [
                "A modern monument to the promotion of sports in the islands."
            ]
        },
        {
            "name": "Kavaratti Graveyard Tombs",
            "image": "images/kavaratti_graveyard.jpeg",
            "points": [
                "The ornate and ancient tombstones in the main graveyards are historical monuments."
            ]
        },
        {
            "name": "Minicoy Village Council Houses (Athiris)",
            "image": "images/minicoy_athiris.jpeg",
            "points": [
                "The traditional council houses for each village in Minicoy are living cultural monuments."
            ]
        },
        {
            "name": "Valiyapani Reef Lighthouse",
            "image": "images/valiyapani_lighthouse.jpeg",
            "points": [
                "An offshore lighthouse built on a submerged reef, an engineering monument."
            ]
        },
        {
            "name": "Kavaratti Post Office Building",
            "image": "images/kavaratti_post_office.jpeg",
            "points": [
                "The main postal building, a monument to communication services."
            ]
        },
        {
            "name": "Tsunami Memorial, Kalpeni",
            "image": "images/tsunami_memorial_kalpeni.jpeg",
            "points": [
                "A local memorial dedicated to the resilience of the islanders after the 2004 tsunami."
            ]
        }
    ],
   "Puducherry": [
        {
            "name": "French War Memorial",
            "image": "images/french_war_memorial.jpeg",
            "points": [
                "An elegant memorial on Goubert Avenue dedicated to the soldiers from French India who died in World War I.",
                "It is beautifully illuminated every year on Bastille Day (July 14th)."
            ]
        },
        {
            "name": "Aayi Mandapam (Park Monument)",
            "image": "images/aayi_mandapam.jpeg",
            "points": [
                "A striking white Greco-Roman monument in the center of Bharathi Park, built during the time of Napoleon III.",
                "It commemorates the provision of water to the city by a 16th-century courtesan named Aayi."
            ]
        },
        {
            "name": "Sri Aurobindo Ashram",
            "image": "images/sri_aurobindo_ashram.jpeg",
            "points": [
                "A world-renowned spiritual community and monument to the teachings of Sri Aurobindo and The Mother.",
                "Its main building houses their mortal remains in a shrine called the 'Samadhi'."
            ]
        },
        {
            "name": "Auroville Matrimandir",
            "image": "images/auroville_matrimandir.jpeg",
            "points": [
                "A modern architectural marvel, this giant golden sphere is a place for silent concentration.",
                "It is the spiritual and physical heart of the experimental township of Auroville."
            ]
        },
        {
            "name": "Basilica of the Sacred Heart of Jesus",
            "image": "images/sacred_heart_basilica.jpeg",
            "points": [
                "A magnificent brown and white Catholic basilica, a fine example of Gothic Revival architecture.",
                "It is known for its beautiful stained-glass panels depicting the life of Christ."
            ]
        },
        {
            "name": "Immaculate Conception Cathedral",
            "image": "images/immaculate_conception_cathedral_puducherry.jpeg",
            "points": [
                "A 300-year-old cathedral built in the Herrerian style, the mother church for the Roman Catholic Archdiocese of Pondicherry."
            ]
        },
        {
            "name": "Manakula Vinayagar Temple",
            "image": "images/manakula_vinayagar_temple.jpeg",
            "points": [
                "A highly revered ancient temple dedicated to Lord Ganesha, which existed before the French occupation.",
                "It is famous for its temple elephant, Lakshmi."
            ]
        },
        {
            "name": "Old Lighthouse",
            "image": "images/old_lighthouse_puducherry.jpeg",
            "points": [
                "A 19th-century lighthouse on the promenade, which was once the only guiding light for ships.",
                "It now stands as a historic landmark."
            ]
        },
        {
            "name": "Mahatma Gandhi Statue, Promenade Beach",
            "image": "images/gandhi_statue_puducherry.jpeg",
            "points": [
                "An iconic 4-meter high statue of Mahatma Gandhi, surrounded by eight magnificent granite pillars from the Gingee Fort."
            ]
        },
        {
            "name": "Raj Nivas",
            "image": "images/raj_nivas_puducherry.jpeg",
            "points": [
                "The former palace of the French Governor, now the official residence of the Lieutenant Governor of Puducherry."
            ]
        },
        {
            "name": "Puducherry Museum Building",
            "image": "images/puducherry_museum.jpeg",
            "points": [
                "Housed in a former Law Building, this museum contains a rich collection of sculptures from the Pallava and Chola dynasties, and artifacts from the Roman settlement at Arikamedu."
            ]
        },
        {
            "name": "Ananda Ranga Pillai Mansion",
            "image": "images/ananda_ranga_pillai_mansion.jpeg",
            "points": [
                "A historic 18th-century private mansion, one of the finest examples of Indo-French architecture."
            ]
        },
        {
            "name": "Our Lady of Angels Church (Église de Notre Dame des Anges)",
            "image": "images/our_lady_of_angels_church.jpeg",
            "points": [
                "The only church in Puducherry that offers mass in three languages, known for its beautiful limestone and egg-white plaster facade."
            ]
        },
        {
            "name": "Statue of Dupleix",
            "image": "images/statue_of_dupleix.jpeg",
            "points": [
                "A 2.88-meter tall granite statue honoring the famous French Governor Joseph François Dupleix."
            ]
        },
        {
            "name": "Cluny Embroidery Centre Building",
            "image": "images/cluny_embroidery_centre.jpeg",
            "points": [
                "A beautiful heritage building that houses a convent and a social enterprise teaching embroidery to underprivileged women."
            ]
        },
        {
            "name": "Arikamedu Archaeological Site",
            "image": "images/arikamedu.jpeg",
            "points": [
                "The ruins of an ancient Roman trading post, a monument to the region's 2000-year-old maritime history."
            ]
        },
        {
            "name": "Lycée Français de Pondichéry Building",
            "image": "images/lycee_francais_puducherry.jpeg",
            "points": [
                "One of the oldest French international schools in Asia, its historic main building is a colonial monument."
            ]
        },
        {
            "name": "Thirunallar Saniswaran Temple, Karaikal",
            "image": "images/thirunallar_saniswaran_temple.jpeg",
            "points": [
                "A world-renowned temple dedicated to Lord Shani (Saturn), a major pilgrimage site in the Karaikal district."
            ]
        },
        {
            "name": "Karaikal Ammaiyar Temple, Karaikal",
            "image": "images/karaikal_ammaiyar_temple.jpeg",
            "points": [
                "A unique temple dedicated to one of the 63 Nayanmars (Shaivite saints), a revered female saint from Karaikal."
            ]
        },
        {
            "name": "Varadaraja Perumal Temple",
            "image": "images/varadaraja_perumal_temple.jpeg",
            "points": [
                "One of the oldest temples in Puducherry, dating back to the 12th century, dedicated to Lord Vishnu."
            ]
        },
        {
            "name": "Kanniga Parameswari Temple",
            "image": "images/kanniga_parameswari_temple.jpeg",
            "points": [
                "A unique temple dedicated to a local goddess, known for its blend of French and Deccan architectural elements."
            ]
        },
        {
            "name": "St. Andrew’s Church",
            "image": "images/st_andrews_church_puducherry.jpeg",
            "points": [
                "A historic Protestant church built in the 18th century, a fine example of colonial church architecture."
            ]
        },
        {
            "name": "Goubert Market Clock Tower",
            "image": "images/goubert_market_clock_tower.jpeg",
            "points": [
                "The clock tower of the main market, a colonial-era landmark in the heart of the city."
            ]
        },
        {
            "name": "Muthumariamman Temple, Mahe",
            "image": "images/muthumariamman_temple_mahe.jpeg",
            "points": [
                "An ancient and famous temple in the Mahe district, a significant religious monument."
            ]
        },
        {
            "name": "St. Theresa's Church, Mahe",
            "image": "images/st_theresas_church_mahe.jpeg",
            "points": [
                "One of the oldest and most revered shrines in the Malabar region, located in Mahe."
            ]
        },
        {
            "name": "Yanam Sivalayam",
            "image": "images/yanam_sivalayam.jpeg",
            "points": [
                "A prominent Shiva temple in the Yanam district."
            ]
        },
        {
            "name": "Yanam Catholic Church",
            "image": "images/yanam_catholic_church.jpeg",
            "points": [
                "A historic church built by French missionaries in the Yanam district."
            ]
        },
        {
            "name": "Bharathi Park",
            "image": "images/bharathi_park.jpeg",
            "points": [
                "The entire park, with its lush greenery and historic statues, is considered a public monument."
            ]
        },
        {
            "name": "French Institute of Pondicherry",
            "image": "images/french_institute_puducherry.jpeg",
            "points": [
                "A premier research institution housed in a beautiful colonial building, a monument to Indo-French academic cooperation."
            ]
        },
        {
            "name": "Puducherry Botanical Garden Structures",
            "image": "images/puducherry_botanical_garden.jpeg",
            "points": [
                "The ornate French-style gate, musical fountain, and toy train station within the garden are heritage monuments."
            ]
        },
        {
            "name": "Chunnambar Boat House",
            "image": "images/chunnambar_boat_house.jpeg",
            "points": [
                "A popular tourist spot, its main building and jetty are a monument to the region's backwater tourism."
            ]
        },
        {
            "name": "Puducherry Science Centre & Planetarium",
            "image": "images/puducherry_science_centre.jpg",
            "points": [
                "A modern monument to science and technology education in the region."
            ]
        },
        {
            "name": "Jawahar Toy Museum Building",
            "image": "images/jawahar_toy_museum.jpeg",
            "points": [
                "Housed in a heritage building near the old lighthouse, it's a cultural monument for children."
            ]
        },
        {
            "name": "Our Lady of Lourdes Shrine, Karaikal",
            "image": "images/our_lady_of_lourdes_shrine_karaikal.jpeg",
            "points": [
                "A famous Catholic shrine in Karaikal, attracting pilgrims from all over."
            ]
        },
        {
            "name": "Karaikal Port Main Building",
            "image": "images/karaikal_port.jpeg",
            "points": [
                "The administrative building of this modern deep-water port is a monument to maritime commerce."
            ]
        },
        {
            "name": "French Consulate Building",
            "image": "images/french_consulate_puducherry.jpeg",
            "points": [
                "A grand colonial building that houses the Consulate General of France, a monument to ongoing diplomatic ties."
            ]
        },
        {
            "name": "Puducherry Head Post Office",
            "image": "images/puducherry_head_post_office.jpeg",
            "points": [
                "A beautiful heritage building that has been the center of postal services for over a century."
            ]
        },
        {
            "name": "Old Distillery Building",
            "image": "images/old_distillery_puducherry.jpeg",
            "points": [
                "The historic building of one of the oldest distilleries, an industrial heritage monument."
            ]
        },
        {
            "name": "Sri Gokilambal Thirukameswarar Temple, Villianur",
            "image": "images/villianur_temple.jpeg",
            "points": [
                "A famous ancient temple known for its annual chariot festival, which involves a French-era chariot."
            ]
        },
        {
            "name": "Mahe River Walkway Structures",
            "image": "images/mahe_river_walkway.jpeg",
            "points": [
                "The landscaped promenade with benches and lamp posts along the Mahe river is a public monument."
            ]
        },
        {
            "name": "St. George's Fort ruins, Mahe",
            "image": "images/st_georges_fort_mahe.jpeg",
            "points": [
                "The remains of a fort on a hillock, a monument to the colonial-era conflicts in Mahe."
            ]
        },
        {
            "name": "Yanam Obelisk",
            "image": "images/yanam_obelisk.jpeg",
            "points": [
                "A historic monument erected in the 19th century in the Yanam district."
            ]
        },
        {
            "name": "Yanam Ferry Terminal",
            "image": "images/yanam_ferry_terminal.jpeg",
            "points": [
                "The main ferry point on the Godavari River, an infrastructural monument for the region."
            ]
        },
        {
            "name": "The Court House (Tribunal)",
            "image": "images/court_house_puducherry.jpeg",
            "points": [
                "A heritage building in Puducherry that houses the main judicial courts."
            ]
        },
        {
            "name": "Hotel de Ville (Town Hall)",
            "image": "images/hotel_de_ville_puducherry.jpeg",
            "points": [
                "The historic town hall building, a fine example of French colonial civic architecture."
            ]
        },
        {
            "name": "Mairie Building",
            "image": "images/mairie_building.jpeg",
            "points": [
                "Another historic French-era administrative building, which now houses the municipal offices."
            ]
        },
        {
            "name": "Romain Rolland Library Building",
            "image": "images/romain_rolland_library.jpeg",
            "points": [
                "The historic building of one of the oldest public libraries in India."
            ]
        },
        {
            "name": "INTACH Heritage Centre",
            "image": "images/intach_heritage_centre.jpeg",
            "points": [
                "Housed in a restored French colonial building, it is a monument to heritage conservation itself."
            ]
        },
        {
            "name": "Puducherry University Clock Tower",
            "image": "images/puducherry_university_clock_tower.jpeg",
            "points": [
                "A prominent modern landmark within the university campus."
            ]
        }
    ]
};

const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');

const chakra = document.getElementById('ashoka-chakra-container');
for (let i = 0; i < 12; i++) {
    const spoke = document.createElement('div');
    spoke.className = 'spoke';
    spoke.style.transform = `rotate(${i * 15}deg)`;
    chakra.appendChild(spoke);
}

const isApiKeyAvailable = () => GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE' && GEMINI_API_KEY.length > 10;

const showLoader = (show, text = 'Unveiling India’s Treasures...') => {
    loaderText.textContent = text;
    loader.classList.toggle('hidden', !show);
};

const switchView = (viewId, restoreScroll = false) => {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');

        // --- UPDATED/ADDED CODE ---
        // If switching to home view, restore its specific scroll position
        if (viewId === 'home-view') {
            const scrollPosition = sessionStorage.getItem('homeScrollPosition');
            if (scrollPosition) {
                setTimeout(() => {
                    window.scrollTo(0, parseInt(scrollPosition, 10));
                    sessionStorage.removeItem('homeScrollPosition');
                }, 100);
                return; // Important: exit here to not interfere with the logic below
            }
        }
        // --- END UPDATED/ADDED CODE ---

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

async function callGeminiForJsonAPI(prompt) {
    if (!isApiKeyAvailable()) throw new Error("API_KEY_MISSING");
    const payload = {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        "generationConfig": { "responseMimeType": "application/json" }
    };
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(`API Error: ${error.error.message}`);
    }
    const result = await response.json();
    if (result.candidates?.[0]?.finishReason === "SAFETY") {
        throw new Error("Response blocked due to safety settings.");
    }
    if (!result.candidates?.length) {
        throw new Error("No content received from AI. The prompt may be blocked.");
    }
    const text = result.candidates[0].content.parts[0].text;
    try {
        return JSON.parse(text);
    } catch (parseError) {
        console.error("Failed to parse AI response as JSON:", text);
        throw new Error("AI returned an invalid format. Cannot display details.");
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
    Object.keys(statesData).sort().forEach(stateName => {
        const option = document.createElement('option');
        option.value = stateName;
        option.textContent = stateName;
        dropdown.appendChild(option);
    });
};

const displayMonumentsAsList = (stateName) => {
    document.getElementById('monument-list-title').textContent = `Monuments in ${stateName}`;
    const container = document.getElementById('monument-list-content');
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
    document.getElementById('monument-detail-title').textContent = monumentName;
    document.getElementById('detail-back-button').dataset.stateName = stateName;
    const container = document.getElementById('ai-response-container');
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
        7. "ticketing_guide": A single, concise string providing essential advice for booking tickets for this specific monument. Mention if online booking is mandatory or recommended, and any specific tips. For example: "Booking online via the official ASI portal is highly recommended to avoid long queues. Tickets are often available on major travel platforms as part of tour packages.".
        8. "nearby_facilities": An array of 3 strings describing nearby accommodation options. Example: ["Luxury hotels (5-star) are available within a 3km radius.", "Numerous budget-friendly hotels and guesthouses can be found in the main city area.", "Government-run tourist lodges offer an affordable stay option."].
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
                    <div class="booking-platforms-box">
                        <h4><i class="fas fa-star"></i> Trusted Travel Platforms</h4>
                        <p>Find tickets, guided tours, and combo deals on these popular platforms. Ideal for all-inclusive packages.</p>
                        <div class="platform-grid">
                            <a href="https://www.makemytrip.com/activities/" class="platform-card" target="_blank" rel="noopener noreferrer"><img src="images/mmt_logo.png" alt="MakeMyTrip"><span>MakeMyTrip</span></a>
                            <a href="https://www.goibibo.com/activities/" class="platform-card" target="_blank" rel="noopener noreferrer"><img src="images/goibibo_logo.png" alt="Goibibo"><span>Goibibo</span></a>
                            <a href="https://www.cleartrip.com/activities/" class="platform-card" target="_blank" rel="noopener noreferrer"><img src="images/cleartrip_logo.png" alt="Cleartrip"><span>Cleartrip</span></a>
                            <a href="https://www.klook.com/en-IN/things-to-do-in-india/" class="platform-card" target="_blank" rel="noopener noreferrer"><img src="images/klook_logo.png" alt="Klook"><span>Klook</span></a>
                            <a href="https://paytm.com/travel/activities" class="platform-card" target="_blank" rel="noopener noreferrer"><img src="images/paytm_logo.jpeg" alt="Paytm"><span>Paytm</span></a>
                            <a href="https://www.yatra.com/activities/" class="platform-card" target="_blank" rel="noopener noreferrer"><img src="images/yatra_logo.png" alt="Yatra"><span>Yatra</span></a>
                        </div>
                        <p class="disclaimer">Note: These platforms often bundle tickets with services like tours or transport. For standalone entry tickets, the official ASI portal is the most direct option.</p>
                    </div>
                </div>
            </div>`;

    } catch (error) {
        console.error("Error fetching monument details:", error);
        let errorMessage = `Sorry, our AI Specialist could not generate the details for ${monumentName}. Please try another monument.`;
        if (error.message.includes("API_KEY_MISSING")) {
            errorMessage = "The AI system is currently offline. We are working to restore it. Please check back later.";
        } else if (error.message.includes("SAFETY")) {
            errorMessage = `The request for ${monumentName} was blocked for safety reasons. Please try another monument.`;
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
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
};

const getAIChatResponse = async (userQuery) => {
    if (!isApiKeyAvailable()) {
        appendChatMessage("The AI assistant is currently unavailable. Please try again later.", 'ai');
        return;
    }
    const thinkingBubble = appendChatMessage('YASU AI is thinking...', 'ai');
    thinkingBubble.querySelector('.message-bubble').classList.add('thinking');
    const prompt = `You are YASU AI, a helpful and friendly expert on Indian monuments. The user asked: "${userQuery}". Answer concisely and helpfully.`;
    try {
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
        const response = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        const result = await response.json();
        const aiText = result.candidates[0].content.parts[0].text;
        thinkingBubble.remove();
        appendChatMessage(aiText, 'ai');
    } catch (error) {
        console.error("Error fetching chat response:", error);
        thinkingBubble.remove();
        appendChatMessage("Sorry, I'm having trouble connecting right now. Please try again later.", 'ai');
    }
};

const setupEventListeners = () => {
    const searchInput = document.getElementById('main-search');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
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

    const performSearch = () => {
        const query = searchInput.value.trim();
        if (!query) {
            populateStateGrid();
            return;
        }
        switchView('home-view');
        populateStateGrid(query);
    };
    document.getElementById('search-btn').addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    searchInput.addEventListener('input', () => { clearSearchBtn.style.display = searchInput.value ? 'block' : 'none'; });
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        populateStateGrid();
    });

    document.getElementById('home-link').addEventListener('click', (e) => { e.preventDefault(); switchView('home-view'); });
    document.getElementById('state-dropdown').addEventListener('change', (e) => {
        if (e.target.value) displayMonumentsAsList(e.target.value);
    });

    document.getElementById('state-grid-container').addEventListener('click', (e) => {
        const card = e.target.closest('.state-card');
        if (card) {
            sessionStorage.setItem('homeScrollPosition', window.scrollY); // Save scroll position
            displayMonumentsAsList(card.dataset.stateName);
        }
    });
    document.getElementById('monument-list-content').addEventListener('click', (e) => {
        const item = e.target.closest('.monument-list-item');
        if (item) {
            sessionStorage.setItem('scrollPosition', window.scrollY);
            showMonumentDetail(item.dataset.monumentName, item.dataset.stateName, item.dataset.imageUrl);
        }
    });

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

    document.getElementById('detail-back-button').addEventListener('click', (e) => {
        e.preventDefault();
        displayMonumentsAsList(e.target.dataset.stateName);
    });

    document.getElementById('ai-chat-button').addEventListener('click', () => chatContainer.classList.toggle('visible'));
    document.getElementById('close-chat-btn').addEventListener('click', () => chatContainer.classList.remove('visible'));
    document.getElementById('chat-input-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('chat-input');
        const userQuery = input.value.trim();
        if (userQuery) {
            appendChatMessage(userQuery, 'user');
            input.value = '';
            getAIChatResponse(userQuery);
        }
    });
    
    const menuToggle = document.getElementById('menu-toggle');
    const drawerMenu = document.getElementById('drawer-menu');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const openDrawer = () => {
        drawerMenu.classList.add('open');
        drawerOverlay.style.display = 'block';
    };
    const closeDrawer = () => {
        drawerMenu.classList.remove('open');
        drawerOverlay.style.display = 'none';
    };
    menuToggle.addEventListener('click', openDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
};

const initApp = () => {
    populateStateGrid();
    populateStateDropdown();
    setupEventListeners();
    document.getElementById('api-loader').classList.add('hidden');
};

const validateApiKeyAndStart = async () => {
    if (!isApiKeyAvailable()) {
        document.getElementById('api-loader-text').textContent = 'AI Configuration Error. Site is offline.';
        console.error("API Key is missing. App halted.");
        return;
    }
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash?key=${GEMINI_API_KEY}`);
        if (!response.ok) {
            throw new Error('Invalid API Key or API error.');
        }
        initApp();
    } catch (error) {
        document.getElementById('api-loader-text').textContent = 'Could not connect to AI Specialist. Please try again later.';
        console.error("API Key validation failed:", error.message);
    }
};

validateApiKeyAndStart();

});
