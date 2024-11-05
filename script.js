// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generateQRCode);
});

function generateQRCode() {
    const text = document.getElementById("text-input").value;
    const qrCodeSection = document.getElementById("qr-code-section");

    // Clear previous QR code
    qrCodeSection.innerHTML = '';

    if (text.trim() === '') {
        qrCodeSection.innerHTML = '<p id="qr-placeholder">Please enter text to generate a QR code</p>';
        return;
    }

    // Generate new QR code
    new QRCode(qrCodeSection, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });
}
