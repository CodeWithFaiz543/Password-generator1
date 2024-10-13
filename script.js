function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUpper = document.getElementById("includeUpper").checked;
    const includeLower = document.getElementById("includeLower").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let charset = "";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~|}{[]:;?><,./-=";

    if (charset === "") {
        alert("Please select at least one option.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById("copyMessage").classList.add("hidden");
}
function updateLengthValue(value) {
    document.getElementById("lengthValue").innerText = value;
}


function copyPassword() {
    const password = document.getElementById("password");
    if (password.value === "") {
        alert("No password to copy. Please generate one first.");
        return;
    }
    
    password.select();
    password.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(password.value);

    // Show copy confirmation
    const copyMessage = document.getElementById("copyMessage");
    copyMessage.classList.remove("hidden");
    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 2000);
}
