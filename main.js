document.addEventListener('DOMContentLoaded', () => {
    const accessButton = document.getElementById('accessButton');
    const textInput = document.getElementById('textInput');

    accessButton.addEventListener('click', () => {
        const _0x1 = textInput.value.trim().toLowerCase();
        const _0x2 = document.getElementById('message');
        
        if (!_0x1) return;

        // Obfuscated codes using character shifting
        const _0x3 = ["gmpps!:", "qjtp!:", "qjtpa", "gmppra"];
        const _0x4 = _0x1.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');
        
        if (_0x3.includes(_0x4)) {
            _0x2.textContent = "Redirecting...";
            _0x2.style.color = "#fff";
            window.location.href = "https://gofile.io/d/ohXWOz";
        } else {
            _0x2.textContent = "Incorrect";
            _0x2.style.color = "#ff4444";
        }
    });

    // Permitir entrada con la tecla Enter
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            accessButton.click();
        }
    });
});