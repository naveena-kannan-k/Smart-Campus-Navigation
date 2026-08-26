// ================= VOICE SEARCH =================

const voiceBtn = document.getElementById("voiceBtn");
const searchInput = document.getElementById("searchInput");

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    // Tamil + English speech recognition
    recognition.lang = "ta-IN";

    recognition.continuous = false;
    recognition.interimResults = false;

    // 🎤 Voice button click
    voiceBtn.addEventListener("click", () => {

        recognition.start();

        voiceBtn.innerHTML =
            '<i class="fa-solid fa-microphone-slash"></i>';

        voiceBtn.title = "Listening...";

    });

    // 🎤 Speech converted to text
    recognition.onresult = (event) => {

        const text =
            event.results[0][0].transcript;

        searchInput.value = text;

        console.log("Voice Text:", text);

        // Automatically search
        searchPlace();

    };

    // 🎤 Voice finished
    recognition.onend = () => {

        voiceBtn.innerHTML =
            '<i class="fa-solid fa-microphone"></i>';

        voiceBtn.title = "Voice Search";

    };

    // ❌ Error handling
    recognition.onerror = (event) => {

        console.log("Voice Error:", event.error);

        voiceBtn.innerHTML =
            '<i class="fa-solid fa-microphone"></i>';

        if (event.error === "not-allowed") {

            alert("Please allow microphone permission.");

        } else {

            alert("Voice recognition failed. Please try again.");

        }

    };

} else {

    alert("Voice recognition is not supported in this browser.");

}
