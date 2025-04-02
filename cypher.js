// script.js

function caesarCipherDecrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            result += String.fromCharCode(((code - base - shift + 26) % 26) + base);
        } else {
            result += char;
        }
    }
    return result;
}

function checkPassword() {
    let password = document.getElementById("passwordBox").value;
    let decryptedText = "gftpdhghejr"; // Muudetud parooliks

    if (password === decryptedText) {
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Õige! Tubli töö!";
    } else {
        alert("Vale parool! Proovi uuesti.");
    }
}

function decryptUserInput() {
    let encryptedText = document.getElementById("encryptedText").value;
    let decryptedText = caesarCipherDecrypt(encryptedText, 3);
    document.getElementById("decryptedOutput").innerText = "Dekrüpteeritud tekst: " + decryptedText;
}
