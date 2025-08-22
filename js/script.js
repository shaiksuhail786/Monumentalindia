document.addEventListener('DOMContentLoaded', () => {

    // Corrected API_URL (removed extra space)
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    const statesData = {
        // States
        "Andhra Pradesh": { monuments: [{ name: "Lepakshi Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Veerabhadra_temple_%28Lepakshi%29.jpg/640px-Veerabhadra_temple_%28Lepakshi%29.jpg" }, { name: "Tirupati Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_Venkateswara_Temple.jpg/640px-Tirumala_Venkateswara_Temple.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Araku_valley_in_the_morning.jpg/640px-Araku_valley_in_the_morning.jpg" },
        "Arunachal Pradesh": { monuments: [{ name: "Tawang Monastery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tawang_Monastery_in_2018.jpg/640px-Tawang_Monastery_in_2018.jpg" }, { name: "Malinithan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Malinithan_Temple.jpg/640px-Malinithan_Temple.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sela_Pass_Arunachal_Pradesh.jpg/640px-Sela_Pass_Arunachal_Pradesh.jpg" },
        "Assam": { monuments: [{ name: "Kamakhya Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kamakhya_Temple_Guwahati_Assam.jpg/640px-Kamakhya_Temple_Guwahati_Assam.jpg" }, { name: "Rang Ghar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rang_ghar_sivasagar.jpg/640px-Rang_ghar_sivasagar.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kaziranga_National_Park%2C_Assam.jpg/640px-Kaziranga_National_Park%2C_Assam.jpg" },
        "Bihar": { monuments: [{ name: "Mahabodhi Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mahabodhi_Temple_in_Bodh_Gaya.jpg/640px-Mahabodhi_Temple_in_Bodh_Gaya.jpg" }, { name: "Nalanda", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Nalanda_University_ruins.jpg/640px-Nalanda_University_ruins.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mahabodhi_Temple_in_Bodh_Gaya.jpg/640px-Mahabodhi_Temple_in_Bodh_Gaya.jpg" },
        "Chhattisgarh": { monuments: [{ name: "Bhoramdeo Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bhoramdeo_Temple_in_Chhattisgarh.jpg/640px-Bhoramdeo_Temple_in_Chhattisgarh.jpg" }, { name: "Sirpur Group of Monuments", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lakshmana_temple%2C_Sirpur.jpg/640px-Lakshmana_temple%2C_Sirpur.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Chitrakote_Falls_in_Chhattisgarh.jpg/640px-Chitrakote_Falls_in_Chhattisgarh.jpg" },
        "Goa": { monuments: [{ name: "Basilica of Bom Jesus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Basilica_of_Bom_Jesus_in_Goa.jpg/640px-Basilica_of_Bom_Jesus_in_Goa.jpg" }, { name: "Fort Aguada", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fort_Aguada_in_Goa.jpg/640px-Fort_Aguada_in_Goa.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Fort_Aguada_in_Goa.jpg/640px-Fort_Aguada_in_Goa.jpg" },
        "Gujarat": { monuments: [{ name: "Rani ki Vav", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rani_ki_Vav_in_Patan%2C_Gujarat.jpg/640px-Rani_ki_Vav_in_Patan%2C_Gujarat.jpg" }, { name: "Sun Temple, Modhera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sun_Temple_in_Modhera%2C_Gujarat.jpg/640px-Sun_Temple_in_Modhera%2C_Gujarat.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rani_ki_Vav_in_Patan%2C_Gujarat.jpg/640px-Rani_ki_Vav_in_Patan%2C_Gujarat.jpg" },
        "Haryana": { monuments: [{ name: "Sheikh Chilli's Tomb", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sheikh_Chilli%27s_Tomb_in_Kurukshetra.jpg/640px-Sheikh_Chilli%27s_Tomb_in_Kurukshetra.jpg" }, { name: "Surajkund", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Surajkund_in_Faridabad.jpg/640px-Surajkund_in_Faridabad.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Surajkund_in_Faridabad.jpg/640px-Surajkund_in_Faridabad.jpg" },
        "Himachal Pradesh": { monuments: [{ name: "Hadimba Devi Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hidimba_Devi_Temple_in_Manali.jpg/640px-Hidimba_Devi_Temple_in_Manali.jpg" }, { name: "Kangra Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kangra_Fort_in_Himachal_Pradesh.jpg/640px-Kangra_Fort_in_Himachal_Pradesh.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kangra_Fort_in_Himachal_Pradesh.jpg/640px-Kangra_Fort_in_Himachal_Pradesh.jpg" },
        "Jharkhand": { monuments: [{ name: "Baidyanath Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Baidyanath_Temple_in_Deoghar.jpg/640px-Baidyanath_Temple_in_Deoghar.jpg" }, { name: "Jagannath Temple, Ranchi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Jagannath_Temple_in_Ranchi.jpg/640px-Jagannath_Temple_in_Ranchi.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Baidyanath_Temple_in_Deoghar.jpg/640px-Baidyanath_Temple_in_Deoghar.jpg" },
        "Karnataka": { monuments: [{ name: "Hampi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hampi_virupaksha_temple.jpg/640px-Hampi_virupaksha_temple.jpg" }, { name: "Mysore Palace", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_at_night.jpg/640px-Mysore_Palace_at_night.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hampi_virupaksha_temple.jpg/640px-Hampi_virupaksha_temple.jpg" },
        "Kerala": { monuments: [{ name: "Padmanabhaswamy Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Padmanabhaswamy_Temple_in_Thiruvananthapuram.jpg/640px-Padmanabhaswamy_Temple_in_Thiruvananthapuram.jpg" }, { name: "Bekal Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bekal_Fort_in_Kerala.jpg/640px-Bekal_Fort_in_Kerala.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bekal_Fort_in_Kerala.jpg/640px-Bekal_Fort_in_Kerala.jpg" },
        "Madhya Pradesh": { monuments: [{ name: "Khajuraho Temples", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Khajuraho_Group_of_Monuments.jpg/640px-Khajuraho_Group_of_Monuments.jpg" }, { name: "Sanchi Stupa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sanchi_Stupa_from_the_top.jpg/640px-Sanchi_Stupa_from_the_top.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Khajuraho_Group_of_Monuments.jpg/640px-Khajuraho_Group_of_Monuments.jpg" },
        "Maharashtra": { monuments: [{ name: "Ajanta Caves", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Cave_26%2C_Ajanta_Caves.jpg/640px-Cave_26%2C_Ajanta_Caves.jpg" }, { name: "Ellora Caves", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ellora_Caves_2.jpg/640px-Ellora_Caves_2.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gateway_of_India_Mumbai.jpg/640px-Gateway_of_India_Mumbai.jpg" },
        "Manipur": { monuments: [{ name: "Kangla Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kangla_Fort_in_Imphal.jpg/640px-Kangla_Fort_in_Imphal.jpg" }, { name: "Shri Govindajee Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Shree_Govindajee_Temple_in_Imphal.jpg/640px-Shree_Govindajee_Temple_in_Imphal.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kangla_Fort_in_Imphal.jpg/640px-Kangla_Fort_in_Imphal.jpg" },
        "Meghalaya": { monuments: [{ name: "Nartiang Monoliths", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nartiang_Monoliths_in_Meghalaya.jpg/640px-Nartiang_Monoliths_in_Meghalaya.jpg" }, { name: "David Scott Trail", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/David_Scott_Trail_in_Meghalaya.jpg/640px-David_Scott_Trail_in_Meghalaya.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nartiang_Monoliths_in_Meghalaya.jpg/640px-Nartiang_Monoliths_in_Meghalaya.jpg" },
        "Mizoram": { monuments: [{ name: "Solomon's Temple, Aizawl", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Solomon%27s_Temple_in_Aizawl.jpg/640px-Solomon%27s_Temple_in_Aizawl.jpg" }, { name: "Vantawng Falls", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Vantawng_Falls_in_Mizoram.jpg/640px-Vantawng_Falls_in_Mizoram.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Vantawng_Falls_in_Mizoram.jpg/640px-Vantawng_Falls_in_Mizoram.jpg" },
        "Nagaland": { monuments: [{ name: "Kohima War Cemetery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Kohima_War_Cemetery.jpg/640px-Kohima_War_Cemetery.jpg" }, { name: "Kachari Ruins", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Kachari_Ruins_in_Dimapur.jpg/640px-Kachari_Ruins_in_Dimapur.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Kohima_War_Cemetery.jpg/640px-Kohima_War_Cemetery.jpg" },
        "Odisha": { monuments: [{ name: "Konark Sun Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Konark_Sun_Temple_in_Odisha.jpg/640px-Konark_Sun_Temple_in_Odisha.jpg" }, { name: "Lingaraja Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lingaraja_Temple_in_Bhubaneswar.jpg/640px-Lingaraja_Temple_in_Bhubaneswar.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Konark_Sun_Temple_in_Odisha.jpg/640px-Konark_Sun_Temple_in_Odisha.jpg" },
        "Punjab": { monuments: [{ name: "Golden Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Golden_Temple_in_Amritsar.jpg/640px-Golden_Temple_in_Amritsar.jpg" }, { name: "Jallianwala Bagh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jallianwala_Bagh_in_Amritsar.jpg/640px-Jallianwala_Bagh_in_Amritsar.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Golden_Temple_in_Amritsar.jpg/640px-Golden_Temple_in_Amritsar.jpg" },
        "Rajasthan": { monuments: [{ name: "Amber Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Amber_Fort_in_Amer%2C_Jaipur.jpg/640px-Amber_Fort_in_Amer%2C_Jaipur.jpg" }, { name: "Hawa Mahal", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Hawa_Mahal_in_Jaipur.jpg/640px-Hawa_Mahal_in_Jaipur.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thar_desert_sam_sand_dunes.jpg/640px-Thar_desert_sam_sand_dunes.jpg" },
        "Sikkim": { monuments: [{ name: "Rumtek Monastery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rumtek_Monastery_in_Sikkim.jpg/640px-Rumtek_Monastery_in_Sikkim.jpg" }, { name: "Dubdi Monastery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dubdi_Monastery_in_Sikkim.jpg/640px-Dubdi_Monastery_in_Sikkim.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rumtek_Monastery_in_Sikkim.jpg/640px-Rumtek_Monastery_in_Sikkim.jpg" },
        "Tamil Nadu": { monuments: [{ name: "Meenakshi Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Meenakshi_Amman_Temple_seen_from_Aayiram_Kaal_Mandapam.jpg/640px-Meenakshi_Amman_Temple_seen_from_Aayiram_Kaal_Mandapam.jpg" }, { name: "Brihadeeswara Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Brihadisvara_Temple_in_Thanjavur.jpg/640px-Brihadisvara_Temple_in_Thanjavur.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Brihadisvara_Temple_in_Thanjavur.jpg/640px-Brihadisvara_Temple_in_Thanjavur.jpg" },
        "Telangana": { monuments: [{ name: "Charminar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Charminar_in_Hyderabad.jpg/640px-Charminar_in_Hyderabad.jpg" }, { name: "Golconda Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Golconda_Fort_in_Hyderabad.jpg/640px-Golconda_Fort_in_Hyderabad.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Charminar_in_Hyderabad.jpg/640px-Charminar_in_Hyderabad.jpg" },
        "Tripura": { monuments: [{ name: "Ujjayanta Palace", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ujjayanta_Palace_in_Agartala.jpg/640px-Ujjayanta_Palace_in_Agartala.jpg" }, { name: "Neermahal", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Neermahal_in_Tripura.jpg/640px-Neermahal_in_Tripura.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ujjayanta_Palace_in_Agartala.jpg/640px-Ujjayanta_Palace_in_Agartala.jpg" },
        "Uttar Pradesh": { monuments: [{ name: "Taj Mahal", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/640px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg" }, { name: "Agra Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Agra_Fort_in_2013.jpg/640px-Agra_Fort_in_2013.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/640px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg" },
        "Uttarakhand": { monuments: [{ name: "Kedarnath Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kedarnath_Temple_in_Uttarakhand.jpg/640px-Kedarnath_Temple_in_Uttarakhand.jpg" }, { name: "Badrinath Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Badrinath_Temple_in_Uttarakhand.jpg/640px-Badrinath_Temple_in_Uttarakhand.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kedarnath_Temple_in_Uttarakhand.jpg/640px-Kedarnath_Temple_in_Uttarakhand.jpg" },
        "West Bengal": { monuments: [{ name: "Victoria Memorial", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Victoria_Memorial_in_Kolkata.jpg/640px-Victoria_Memorial_in_Kolkata.jpg" }, { name: "Hazarduari Palace", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hazarduari_Palace_in_Murshidabad.jpg/640px-Hazarduari_Palace_in_Murshidabad.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Victoria_Memorial_in_Kolkata.jpg/640px-Victoria_Memorial_in_Kolkata.jpg" },
        // Union Territories
        "Andaman and Nicobar Islands": { monuments: [{ name: "Cellular Jail", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cellular_Jail_in_Port_Blair.jpg/640px-Cellular_Jail_in_Port_Blair.jpg" }, { name: "Ross Island", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ross_Island_in_Andaman.jpg/640px-Ross_Island_in_Andaman.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cellular_Jail_in_Port_Blair.jpg/640px-Cellular_Jail_in_Port_Blair.jpg" },
        "Chandigarh": { monuments: [{ name: "The Open Hand Monument", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Open_Hand_Monument_in_Chandigarh.jpg/640px-Open_Hand_Monument_in_Chandigarh.jpg" }, { name: "Capitol Complex", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Capitol_Complex_in_Chandigarh.jpg/640px-Capitol_Complex_in_Chandigarh.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Open_Hand_Monument_in_Chandigarh.jpg/640px-Open_Hand_Monument_in_Chandigarh.jpg" },
        "Dadra and Nagar Haveli and Daman and Diu": { monuments: [{ name: "Diu Fort", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Diu_Fort.jpg/640px-Diu_Fort.jpg" }, { name: "St. Paul's Church, Diu", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/St._Paul%27s_Church_in_Diu.jpg/640px-St._Paul%27s_Church_in_Diu.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Diu_Fort.jpg/640px-Diu_Fort.jpg" },
        "Delhi": { monuments: [{ name: "Qutub Minar", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Qutub_Minar_in_the_monsoons_2.jpg/640px-Qutub_Minar_in_the_monsoons_2.jpg" }, { name: "Humayun's Tomb", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Humayun%27s_Tomb%2C_Delhi.jpg/640px-Humayun%27s_Tomb%2C_Delhi.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Humayun%27s_Tomb%2C_Delhi.jpg/640px-Humayun%27s_Tomb%2C_Delhi.jpg" },
        "Jammu and Kashmir": { monuments: [{ name: "Shankaracharya Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shankaracharya_Temple_in_Srinagar.jpg/640px-Shankaracharya_Temple_in_Srinagar.jpg" }, { name: "Martand Sun Temple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Martand_Sun_Temple_in_Anantnag.jpg/640px-Martand_Sun_Temple_in_Anantnag.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Shankaracharya_Temple_in_Srinagar.jpg/640px-Shankaracharya_Temple_in_Srinagar.jpg" },
        "Ladakh": { monuments: [{ name: "Thiksey Monastery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Thiksey_Monastery_in_Ladakh.jpg/640px-Thiksey_Monastery_in_Ladakh.jpg" }, { name: "Leh Palace", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Leh_Palace_in_Ladakh.jpg/640px-Leh_Palace_in_Ladakh.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Thiksey_Monastery_in_Ladakh.jpg/640px-Thiksey_Monastery_in_Ladakh.jpg" },
        "Lakshadweep": { monuments: [{ name: "Ujra Mosque", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ujra_Mosque_in_Kavaratti.jpg/640px-Ujra_Mosque_in_Kavaratti.jpg" }, { name: "Minicoy Island Lighthouse", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Minicoy_Island_Lighthouse.jpg/640px-Minicoy_Island_Lighthouse.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ujra_Mosque_in_Kavaratti.jpg/640px-Ujra_Mosque_in_Kavaratti.jpg" },
        "Puducherry": { monuments: [{ name: "French War Memorial", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/French_War_Memorial_in_Puducherry.jpg/640px-French_War_Memorial_in_Puducherry.jpg" }, { name: "Basilica of the Sacred Heart of Jesus", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Basilica_of_the_Sacred_Heart_of_Jesus_in_Puducherry.jpg/640px-Basilica_of_the_Sacred_Heart_of_Jesus_in_Puducherry.jpg" }], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/French_War_Memorial_in_Puducherry.jpg/640px-French_War_Memorial_in_Puducherry.jpg" }
    };

    // Updated mockAIData with a working map link
    const mockAIData = {
        "Taj Mahal": `### Image URL
https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1280px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg

### History
The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. It is considered by many to be the finest example of Mughal architecture and a symbol of India's rich history.

### Interesting Facts
* It took approximately 22,000 laborers to build.
* The monument's color appears to change depending on the time of day.
* The four minarets are slightly tilted outwards to protect the main tomb in case of an earthquake.

### Travel Guide
**Tickets:** Book online via the official Archaeological Survey of India (ASI) website.
**Prices:** Approx. ₹50 for Indians, ₹1100 for foreign tourists.

### Live Map Location
https://www.google.com/maps?q=27.1751,78.0421

### Coordinates
27.1751° N, 78.0421° E

### Nearby Stays
**Luxury:** The Oberoi Amarvilas Agra
**Mid-Range:** Hotel Taj Resorts
**Budget:** Zostel Agra`
    };

    const loader = document.getElementById('loader');

    /** Checks if the Gemini API key is provided. */
    const isApiKeyAvailable = () => GEMINI_API_KEY && GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE';

    /** Toggles the visibility of the main loader. */
    const showLoader = (show) => loader.classList.toggle('hidden', !show);

    /** Switches the active view. */
    const switchView = (viewId) => {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId)?.classList.add('active');
        window.scrollTo(0, 0);
    };

    /** Creates and appends a state card to the grid. */
    const createStateCard = (stateName, state) => {
        const card = document.createElement('div');
        card.className = 'state-card';
        card.dataset.stateName = stateName;

        card.innerHTML = `
            <img src="${state.image}" alt="${stateName}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/300x180/cccccc/ffffff?text=Image+Error';">
            <div class="card-content">
                <h3>${stateName}</h3>
                <p>${state.monuments.length} famous monuments</p>
            </div>`;
        return card;
    };

    /** Populates the main grid with state cards. */
    const populateStateGrid = (filter = '') => {
        const container = document.getElementById('state-grid-container');
        container.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const lowerCaseFilter = filter.toLowerCase();

        const filteredStates = Object.keys(statesData).filter(stateName =>
            stateName.toLowerCase().includes(lowerCaseFilter) ||
            statesData[stateName].monuments.some(m => m.name.toLowerCase().includes(lowerCaseFilter))
        );

        if (filteredStates.length === 0) {
            container.innerHTML = `<p>No results found for "${filter}".</p>`;
            return;
        }

        filteredStates.forEach(stateName => {
            const card = createStateCard(stateName, statesData[stateName]);
            fragment.appendChild(card);
        });
        container.appendChild(fragment);
    };

    /** Populates the state selection dropdown in the header. */
    const populateStateDropdown = () => {
        const dropdown = document.getElementById('state-dropdown');
        const sortedStates = Object.keys(statesData).sort();
        sortedStates.forEach(stateName => {
            const option = document.createElement('option');
            option.value = stateName;
            option.textContent = stateName;
            dropdown.appendChild(option);
        });
    };

    /** Populates the monument grid for a specific state. */
    const populateMonumentGrid = (stateName) => {
        const state = statesData[stateName];
        if (!state) return;

        document.getElementById('monument-list-title').textContent = `Monuments in ${stateName}`;
        const container = document.getElementById('monument-grid-container');
        container.innerHTML = '';

        state.monuments.forEach(monument => {
            const card = document.createElement('div');
            card.className = 'monument-card';
            card.dataset.monumentName = monument.name;
            card.dataset.stateName = stateName; // Store state context

            card.innerHTML = `
                <img src="${monument.image}" alt="${monument.name}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/300x180/cccccc/ffffff?text=Image+Error';">
                <div class="card-content"><h3>${monument.name}</h3></div>`;
            container.appendChild(card);
        });
        switchView('monument-list-view');
    };

    /** Fetches and displays details for a specific monument. */
    const showMonumentDetail = async (monumentName, stateName) => {
        document.getElementById('monument-detail-title').textContent = monumentName;
        document.getElementById('detail-back-button').dataset.stateName = stateName;
        const container = document.getElementById('ai-response-container');
        container.innerHTML = '';
        switchView('monument-detail-view');

        if (!isApiKeyAvailable()) {
            if (mockAIData[monumentName]) {
                renderAIDataFromMarkdown(mockAIData[monumentName]);
            } else {
                container.innerHTML = `<div class="detail-section"><h3><i class="fas fa-info-circle"></i> API Key Required</h3><p>This is sample data. To get live AI-powered details for this monument, please add your free Gemini API key to the 'GEMINI_API_KEY' variable in the JavaScript code.</p></div>`;
            }
            return;
        }

        showLoader(true);

        // --- PERFECTED AI PROMPT ---
        const prompt = `You are YASU AI, an expert travel guide specializing in Indian monuments. Your primary goal is to provide accurate, reliable, and well-formatted information.

**TASK:** Generate details for "${monumentName}".

**RESPONSE FORMAT:**
You MUST structure your response using markdown with these exact headings in this exact order:
### Image URL
### History
### Interesting Facts
### Travel Guide
### Live Map Location
### Coordinates
### Nearby Stays

**CRITICAL INSTRUCTIONS FOR HEADINGS:**

1.  **### Image URL**
    * **Source:** The URL MUST come from Wikimedia Commons. It must start with \`https://upload.wikimedia.org\`. This is non-negotiable.
    * **Format:** The URL must be a DIRECT link to the image file. It MUST end in \`.jpg\`, \`.jpeg\`, \`.png\`, or \`.webp\`.
    * **Quality:** Find a high-quality, real photograph of the monument.
    * **Example of a PERFECT URL:** \`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Taj_Mahal_in_India_-_Kristian_Bertel.jpg/1280px-Taj_Mahal_in_India_-_Kristian_Bertel.jpg\`

2.  **### History**
    * Provide a concise and engaging history of the monument.

3.  **### Interesting Facts**
    * List 3-4 bullet points of interesting, lesser-known facts. Start each line with a \`*\`.

4.  **### Travel Guide**
    * Give practical tips for visitors, like ticketing information, best times to visit, etc.

5.  **### Live Map Location**
    * **Format:** Provide a standard, shareable Google Maps URL. The best format is \`https://www.google.com/maps?q=LATITUDE,LONGITUDE\`.
    * **Example of a PERFECT URL:** \`https://www.google.com/maps?q=27.1751,78.0421\`

6.  **### Coordinates**
    * Provide the precise latitude and longitude, for example: \`27.1751° N, 78.0421° E\`.

7.  **### Nearby Stays**
    * Suggest one hotel for each category: Luxury, Mid-Range, and Budget. Format it clearly.`;

        try {
            const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
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
            if (!result.candidates?.length) {
                throw new Error("No content received from AI. The prompt may be blocked.");
            }
            const markdownText = result.candidates[0].content.parts[0].text;
            renderAIDataFromMarkdown(markdownText);
        } catch (error) {
            console.error("Error fetching AI data:", error);
            container.innerHTML = `<div class="detail-section"><h3><i class="fas fa-exclamation-triangle"></i> YASU AI Error</h3><p>Sorry, I couldn't fetch the details. This may be due to an invalid API key or a network issue. Please verify your key and try again. Check the console for more details.</p></div>`;
        } finally {
            showLoader(false);
        }
    };

    /** Renders the AI-generated markdown into structured HTML. */
    const renderAIDataFromMarkdown = (markdown) => {
        const container = document.getElementById('ai-response-container');
        const getContent = (heading) => markdown.match(new RegExp(`### ${heading}\\s*([\\s\\S]*?)(?=\\s*###|$)`))?.[1].trim() ?? 'Not available.';

        const imageURL = getContent("Image URL");
        const history = getContent("History").replace(/\n/g, '<br>');
        const facts = '<ul>' + getContent("Interesting Facts").split(/[\n\r]\s*\*/).filter(Boolean).map(fact => `<li>${fact.trim()}</li>`).join('') + '</ul>';
        const travelGuide = getContent("Travel Guide").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
        const mapURL = getContent("Live Map Location");
        const coordinates = getContent("Coordinates");
        const stays = getContent("Nearby Stays").replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

        container.innerHTML = `
            <div class="detail-header"><img src="${imageURL || 'https://placehold.co/900x400'}" alt="${document.getElementById('monument-detail-title').textContent}" onerror="this.onerror=null;this.src='https://placehold.co/900x400/cccccc/ffffff?text=Image+Load+Error';"></div>
            <div class="detail-section"><h3><i class="fas fa-landmark"></i> History</h3><p>${history}</p></div>
            <div class="detail-section"><h3><i class="fas fa-star"></i> Interesting Facts</h3>${facts}</div>
            <div class="detail-section"><h3><i class="fas fa-map-signs"></i> Travel Guide</h3><p>${travelGuide}</p></div>
            <div class="detail-section">
                <h3><i class="fas fa-location-arrow"></i> Live Map Location</h3>
                <p><strong>Coordinates:</strong> ${coordinates}</p>
                <a href="${mapURL}" class="map-button" target="_blank" rel="noopener noreferrer"><i class="fas fa-map-location-dot"></i> View on Google Maps</a>
            </div>
            <div class="detail-section"><h3><i class="fas fa-hotel"></i> Nearby Stays</h3><p>${stays}</p></div>`;
    };

    // --- AI Chat Assistant Logic ---
    const chatContainer = document.getElementById('ai-chat-container');
    const chatMessages = document.getElementById('chat-messages');

    const appendChatMessage = (text, sender) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        messageDiv.innerHTML = `<div class="message-bubble">${text}</div>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return messageDiv;
    };

    const getAIChatResponse = async (userQuery) => {
        if (!isApiKeyAvailable()) {
            appendChatMessage("To enable live chat, please get a free Gemini API key from Google AI Studio and add it to the code.", 'ai');
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

    // --- Event Listeners Setup ---
    const setupEventListeners = () => {
        const searchInput = document.getElementById('main-search');
        const clearSearchBtn = document.getElementById('clear-search-btn');

        // Search functionality
        const performSearch = () => populateStateGrid(searchInput.value);
        document.getElementById('search-btn').addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
        searchInput.addEventListener('input', () => { clearSearchBtn.style.display = searchInput.value ? 'block' : 'none'; });
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearSearchBtn.style.display = 'none';
            populateStateGrid();
        });

        // Navigation
        document.getElementById('home-link').addEventListener('click', (e) => { e.preventDefault(); switchView('home-view'); });
        document.getElementById('state-dropdown').addEventListener('change', (e) => {
            if (e.target.value) populateMonumentGrid(e.target.value);
        });

        // Grid clicks (event delegation)
        document.getElementById('state-grid-container').addEventListener('click', (e) => {
            const card = e.target.closest('.state-card');
            if (card) populateMonumentGrid(card.dataset.stateName);
        });
        document.getElementById('monument-grid-container').addEventListener('click', (e) => {
            const card = e.target.closest('.monument-card');
            if (card) showMonumentDetail(card.dataset.monumentName, card.dataset.stateName);
        });

        // Back buttons
        document.querySelector('#monument-list-view .back-button').addEventListener('click', (e) => { e.preventDefault(); switchView('home-view'); });
        document.getElementById('detail-back-button').addEventListener('click', (e) => {
            e.preventDefault();
            populateMonumentGrid(e.target.dataset.stateName);
        });

        // AI Chat
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
    };

    // --- Initial Load ---
    const init = () => {
        populateStateGrid();
        populateStateDropdown();
        setupEventListeners();
    };

    init();
});
