// ========================================
// SCRIPT DE VALIDAÇÃO DE TELEFONE
// ========================================
// Este script garante que o campo de telefone aceite apenas números
// e tenha entre 8 e 11 dígitos (incluindo DDD)
//
// COMO USAR:
// 1. Adicione um ID ao seu campo de telefone, exemplo: id="hero-phone-input"
// 2. Inclua este script no final do seu arquivo HTML ou no seu script.js
// 3. Ajuste o ID do campo na função setupHeroPhoneValidation() se necessário
//
// ========================================

// Garante apenas números e limita a 11 dígitos
function enforceNumericOnly(inputElement) {
    let value = inputElement.value.replace(/[^0-9]/g, "");
    const maxLength = 11;
    if (value.length > maxLength) {
        value = value.slice(0, maxLength);
    }
    inputElement.value = value;
}

// Mostra mensagem de erro
function showPhoneError(inputElement, message) {
    let errorDiv = inputElement.parentNode.querySelector(".phone-length-error");
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.className = "phone-length-error";
        errorDiv.style.color = "red";
        errorDiv.style.fontSize = "12px";
        errorDiv.style.marginTop = "5px";
        inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
    }
    errorDiv.textContent = message;
    inputElement.style.borderColor = "red";
}

// Limpa mensagem de erro
function clearPhoneError(inputElement) {
    let errorDiv = inputElement.parentNode.querySelector(".phone-length-error");
    if (errorDiv) {
        errorDiv.textContent = "";
    }
    inputElement.style.borderColor = "";
}

// Configura a validação no campo de telefone
function setupHeroPhoneValidation() {
    // ⚠️ AJUSTE O ID AQUI SE NECESSÁRIO
    const phoneInput = document.getElementById("hero-phone-input");

    if (phoneInput) {
        phoneInput.setAttribute("inputmode", "numeric");
        phoneInput.removeAttribute("pattern");

        // Validação em tempo real (enquanto digita)
        phoneInput.addEventListener("input", function () {
            enforceNumericOnly(this);
            const phoneNumber = this.value.replace(/[^0-9]/g, "");
            if (phoneNumber.length > 0 && phoneNumber.length < 8) {
                showPhoneError(this, "O telefone deve ter pelo menos 8 dígitos.");
            } else {
                clearPhoneError(this);
            }
        });

        // Validação no envio do formulário
        const formElement = phoneInput.closest("form");

        if (formElement) {
            formElement.addEventListener("submit", function (event) {
                const phoneNumber = phoneInput.value.replace(/[^0-9]/g, "");
                if (phoneNumber.length < 8) {
                    event.preventDefault();
                    event.stopPropagation();
                    showPhoneError(phoneInput, "O telefone deve ter pelo menos 8 dígitos.");
                    console.warn(`Envio bloqueado: Telefone ${phoneNumber} tem menos de 8 dígitos.`);
                } else {
                    clearPhoneError(phoneInput);
                }
            }, true); // Use capture para executar antes de outros handlers
            console.log("✅ Validação de telefone aplicada com sucesso!");
        }
    } else {
        console.error("❌ Campo de telefone não encontrado. Verifique o ID.");
    }
}

// Executa quando o DOM estiver pronto
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupHeroPhoneValidation);
} else {
    setupHeroPhoneValidation();
}
