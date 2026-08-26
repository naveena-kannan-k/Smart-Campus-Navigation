// ================= DATE & TIME =================

function updateDateTime() {

    const now = new Date();

    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("date").innerHTML =
        "📅 " + now.toLocaleDateString("en-IN", dateOptions);

    document.getElementById("time").innerHTML =
        "🕒 " + now.toLocaleTimeString();

}

setInterval(updateDateTime, 1000);

updateDateTime();


// ================= SEARCH =================

function searchPlace() {

    let place = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    // Remove extra spaces
    place = place.replace(/\s+/g, " ");


    // =====================================================
    // OTHER BLOCKS / LOCATIONS
    // =====================================================


    // ================= LIBRARY =================

    if (
        place.includes("library") ||
        place.includes("லைப்ரரி") ||
        place.includes("நூலகம்")
    ) {
        window.location = "/library";
    }


    // ================= CANTEEN =================

    else if (
        place.includes("canteen") ||
        place.includes("கேண்டீன்") ||
        place.includes("கேன்டீன்") ||
        place.includes("உணவகம்")
    ) {
        window.location = "/canteen";
    }


    // ================= MANAGEMENT OFFICE =================

    else if (
        place.includes("management office") ||
        place.includes("management") ||
        place.includes("office") ||
        place.includes("மேனேஜ்மெண்ட் ஆபிஸ்") ||
        place.includes("மேனேஜ்மென்ட் ஆபிஸ்") ||
        place.includes("மேலாண்மை அலுவலகம்")
    ) {
        window.location = "/office";
    }


    // ================= OLD AUDITORIUM =================

    else if (
        place.includes("old auditorium") ||
        place.includes("old auditorium hall") ||
        place.includes("ஓல்ட் ஆடிடோரியம்") ||
        place.includes("ஓல்டு ஆடிடோரியம்") ||
        place.includes("பழைய ஆடிடோரியம்") ||
        place.includes("பழைய கலையரங்கம்")
    ) {
        window.location = "/old_auditorium";
    }


    // ================= AUDITORIUM =================

    else if (
        place.includes("auditorium") ||
        place.includes("ஆடிடோரியம்") ||
        place.includes("ஆடிட்டோரியம்") ||
        place.includes("கலையரங்கம்")
    ) {
        window.location = "/auditorium";
    }


    // ================= PARKING AREA =================

    else if (
        place.includes("parking area") ||
        place.includes("parking") ||
        place.includes("பார்க்கிங் ஏரியா") ||
        place.includes("பார்க்கிங்") ||
        place.includes("வாகன நிறுத்தம்")
    ) {
        window.location = "/parking";
    }


    // ================= CANARA BANK =================

    else if (
        place.includes("canara bank") ||
        place.includes("canara") ||
        place.includes("கனரா பேங்க்") ||
        place.includes("கனரா வங்கி")
    ) {
        window.location = "/canara_bank";
    }


    // ================= CAMPUS MAP =================

    else if (
        place.includes("campus map") ||
        place.includes("campus") ||
        place.includes("map") ||
        place.includes("கேம்பஸ் மேப்") ||
        place.includes("கேம்பஸ்") ||
        place.includes("வரைபடம்")
    ) {
        window.location = "/campus_map";
    }


    // ================= AI ASSISTANT =================

    else if (
        place.includes("ai assistant") ||
        place.includes("ai assistant chatbot") ||
        place.includes("chatbot") ||
        place.includes("ஏஐ அசிஸ்டென்ட்") ||
        place.includes("ஏஐ உதவியாளர்")
    ) {
        window.location = "/chatbot";
    }


    // =====================================================
    // AIDED DEPARTMENTS
    // =====================================================


    // ================= AIDED TAMIL =================

    else if (
        place.includes("tamil") ||
        place.includes("tamil department") ||
        place.includes("தமிழ்") ||
        place.includes("தமிழ் துறை") ||
        place.includes("தமிழ் டிபார்ட்மெண்ட்")
    ) {
        window.location = "/tamil";
    }


    // ================= AIDED ENGLISH =================

    else if (
        place.includes("aided english") ||
        place.includes("aided english department") ||
        place.includes("ஏடட் இங்கிலீஷ்") ||
        place.includes("ஏய்டட் இங்கிலீஷ்") ||
        place.includes("ஏடட் ஆங்கிலம்") ||
        place.includes("ஏய்டட் ஆங்கிலம்")
    ) {
        window.location = "/aided_english";
    }


    // ================= AIDED MATHEMATICS =================

    else if (
        place.includes("aided mathematics") ||
        place.includes("aided maths") ||
        place.includes("aided math") ||
        place.includes("ஏடட் மேத்ஸ்") ||
        place.includes("ஏய்டட் மேத்ஸ்") ||
        place.includes("ஏடட் கணிதம்") ||
        place.includes("ஏய்டட் கணிதம்")
    ) {
        window.location = "/aided_mathematics";
    }


    // ================= AIDED PHYSICS =================

    else if (
        place.includes("aided physics") ||
        place.includes("ஏடட் பிசிக்ஸ்") ||
        place.includes("ஏய்டட் பிசிக்ஸ்") ||
        place.includes("ஏடட் இயற்பியல்") ||
        place.includes("ஏய்டட் இயற்பியல்")
    ) {
        window.location = "/aided_physics";
    }


    // ================= AIDED CHEMISTRY =================

    else if (
        place.includes("aided chemistry") ||
        place.includes("ஏடட் கெமிஸ்ட்ரி") ||
        place.includes("ஏய்டட் கெமிஸ்ட்ரி துறை") ||
        place.includes("ஏடட் வேதியியல்") ||
        place.includes("கெமிஸ்ட்ரி") ||
        place.includes("வேதியியல்")
    ) {
        window.location = "/chemistry";
    }


    // ================= AIDED B.COM / COMMERCE =================

    else if (
        place.includes("aided b.com") ||
        place.includes("aided bcom") ||
        place.includes("aided commerce") ||
        place.includes("ஏடட் பிகாம்") ||
        place.includes("ஏய்டட் பிகாம்") ||
        place.includes("ஏடட் காமர்ஸ்") ||
        place.includes("ஏய்டட் காமர்ஸ்") ||
        place.includes("ஏடட் வணிகவியல்")
    ) {
        window.location = "/commerce";
    }


    // ================= AIDED ZOOLOGY =================

    else if (
        place.includes("zoology") ||
        place.includes("zoology department") ||
        place.includes("ஜூவாலஜி") ||
        place.includes("ஜூவாலஜி துறை") ||
        place.includes("விலங்கியல்")
    ) {
        window.location = "/zoology";
    }


    // ================= AIDED BOTANY =================

    else if (
        place.includes("botany") ||
        place.includes("botany department") ||
        place.includes("பாட்டனி") ||
        place.includes("பாட்டனி துறை") ||
        place.includes("தாவரவியல்")
    ) {
        window.location = "/botany";
    }


    // ================= AIDED ECONOMICS =================

    else if (
        place.includes("economics") ||
        place.includes("economics department") ||
        place.includes("எகனாமிக்ஸ்") ||
        place.includes("எகனாமிக்ஸ் துறை") ||
        place.includes("பொருளியல்")
    ) {
        window.location = "/economics";
    }


    // =====================================================
    // UNAIDED DEPARTMENTS
    // =====================================================


    // ================= UNAIDED ENGLISH =================

    else if (
        place.includes("unaided english") ||
        place.includes("unaided english department") ||
        place.includes("அன்னேட் இங்கிலீஷ்") ||
        place.includes("அன்எய்டட் இங்கிலீஷ்") ||
        place.includes("அன்னேட் ஆங்கிலம்") ||
        place.includes("அன்எய்டட் ஆங்கிலம்")
    ) {
        window.location = "/unaided_english";
    }


    // ================= UNAIDED MATHEMATICS =================

    else if (
        place.includes("unaided mathematics") ||
        place.includes("unaided maths") ||
        place.includes("unaided math") ||
        place.includes("அன்னேட் மேத்ஸ்") ||
        place.includes("அன்எய்டட் மேத்ஸ்") ||
        place.includes("அன்னேட் கணிதம்") ||
        place.includes("அன்எய்டட் கணிதம்")
    ) {
        window.location = "/unaided_mathematics";
    }


    // ================= UNAIDED PHYSICS =================

    else if (
        place.includes("unaided physics") ||
        place.includes("அன்னேட் பிசிக்ஸ்") ||
        place.includes("அன்எய்டட் பிசிக்ஸ்") ||
        place.includes("அன்னேட் இயற்பியல்") ||
        place.includes("அன்எய்டட் இயற்பியல்")
    ) {
        window.location = "/unaided_physics";
    }


    // ================= UNAIDED B.COM / COMMERCE =================

    else if (
        place.includes("unaided b.com") ||
        place.includes("unaided bcom") ||
        place.includes("unaided commerce") ||
        place.includes("அன்னேட் பிகாம்") ||
        place.includes("அன்எய்டட் பிகாம்") ||
        place.includes("அன்னேட் காமர்ஸ்") ||
        place.includes("அன்எய்டட் காமர்ஸ்") ||
        place.includes("அன்னேட் வணிகவியல்") ||
        place.includes("அன்எய்டட் வணிகவியல்")
    ) {
        window.location = "/unaided_bcom";
    }


    // ================= NANOSCIENCE =================

    else if (
        place.includes("nanoscience") ||
        place.includes("nano science") ||
        place.includes("nano science department") ||
        place.includes("நானோ சயின்ஸ்") ||
        place.includes("நானோசயின்ஸ்") ||
        place.includes("நானோ அறிவியல்")
    ) {
        window.location = "/nanoscience";
    }


    // ================= COMPUTER APPLICATIONS =================

    else if (
        place.includes("computer applications") ||
        place.includes("computer application") ||
        place.includes("computer application department") ||
        place.includes("bca") ||
        place.includes("கம்ப்யூட்டர் அப்ளிகேஷன்") ||
        place.includes("கம்ப்யூட்டர் அப்ளிகேஷன்ஸ்") ||
        place.includes("கணினி பயன்பாடுகள்")
    ) {
        window.location = "/computer_applications";
    }


    // ================= COMPUTER SCIENCE =================

    else if (
        place.includes("computer science") ||
        place.includes("computer sciences") ||
        place.includes("computer science department") ||
        place.includes("கம்ப்யூட்டர் சயின்ஸ்") ||
        place.includes("கம்ப்யூட்டர் சயின்ஸ் துறை") ||
        place.includes("கணினி அறிவியல்")
    ) {
        window.location = "/computer_science";
    }


    // ================= FOOD SCIENCE =================

    else if (
        place.includes("food science") ||
        place.includes("food science department") ||
        place.includes("ஃபுட் சயின்ஸ்") ||
        place.includes("புட் சயின்ஸ்") ||
        place.includes("உணவு அறிவியல்")
    ) {
        window.location = "/food_science";
    }


    // =====================================================
    // NOT FOUND
    // =====================================================

    else {

        alert("❌ Destination Not Found");

    }

}


// ================= ENTER KEY =================

document
    .getElementById("searchInput")
    .addEventListener("keypress", function(e) {

        if (e.key === "Enter") {
            searchPlace();
        }

    });
