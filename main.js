document.addEventListener('DOMContentLoaded', function() {
    const shortTextElement = document.getElementById('short-text'); // переменная "свернутый текст"
    const toggleButton = document.getElementById('toggle-button'); // переменная "кнопка"

    // Original text from the <h3> element
    const originalText = shortTextElement.innerText; // переменная "развернутый текст"
    
    // Function to trim the text, ф-ция сворачивать текст
    function trimText(text, limit) {
        if (text.length > limit) { // если текст привысил лимит в 100 символов,
            return text.substring(0, limit) + "..."; // показать не весь текст
        } else { // если не привысил
            return text; // оставить текст
        }
    }

    // Initially trim the text to 100 characters
    shortTextElement.innerText = trimText(originalText, 100); // макс. кол-во видимых символов при свернутом тексте

    // Toggle the text between trimmed and full version
    toggleButton.addEventListener('click', function() { //ф-ции кнопки
        console.log("lenght = " +shortTextElement.innerText.length); // свернутый текст
        console.log("lenght = " +originalText.length); // полный текст
        var isLess =  toggleButton.innerText === "Меньше"; // название кнопки, когда показан текст полностью
        if (shortTextElement.innerText.length > 100 && !isLess) { // если виден весь текст
            shortTextElement.innerText = originalText; // Show full text
            toggleButton.innerText = "Меньше"; // Change button text
        } else {
            shortTextElement.innerText = trimText(originalText, 100); // Show trimmed text
            toggleButton.innerText = "Больше"; // Reset button text
        }
    });
});