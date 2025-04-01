document.addEventListener("DOMContentLoaded", function () {
    const cnpjInput = document.getElementById("cnpj");
  
    cnpjInput.addEventListener("input", function () {
      let value = cnpjInput.value.replace(/\D/g, ""); // Remove tudo que não for número
  
      if (value.length > 14) {
        value = value.slice(0, 14);
      }
  
      // Aplica a máscara XX.XXX.XXX/XXXX-XX
      value = value.replace(/(\d{2})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
  
      cnpjInput.value = value;
    });
  });