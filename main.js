document.addEventListener('DOMContentLoaded', () => {
    const accessButton = document.getElementById('accessButton');
    const textInput = document.getElementById('textInput');

    accessButton.addEventListener('click', () => {
        const value = textInput.value.trim();
        const messageDiv = document.getElementById('message');
        
        if (!value) return;

        const validCodes = ["floor 9", "piso 9", "piso9", "floor9"];
        
        if (validCodes.includes(value.toLowerCase())) {
            messageDiv.textContent = "You unlocked the next video";
            messageDiv.style.color = "#fff";
        } else {
            messageDiv.textContent = "Incorrect";
            messageDiv.style.color = "#ff4444";
        }
    });

    // Permitir entrada con la tecla Enter
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            accessButton.click();
        }
    });
});