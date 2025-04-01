document.addEventListener("DOMContentLoaded", function () {
    const feedbacks = document.querySelectorAll(".feedback");
    const prevButton = document.querySelector(".feedback-slide .arrow-left");
    const nextButton = document.querySelector(".feedback-slide .arrow-right");
    let currentIndex = 0;
  
    // Função para exibir o feedback atual
    function showFeedback(index) {
      feedbacks.forEach((feedback, i) => {
        feedback.classList.toggle("active", i === index);
      });
    }
  
    // Funções para alternar entre os feedbacks
    function nextFeedback() {
      currentIndex = (currentIndex + 1) % feedbacks.length;
      showFeedback(currentIndex);
    }
  
    function prevFeedback() {
      currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
      showFeedback(currentIndex);
    }
  
    // Event listeners para os botões
    nextButton.addEventListener("click", nextFeedback);
    prevButton.addEventListener("click", prevFeedback);
  
    // Exibir o primeiro feedback ao carregar
    showFeedback(currentIndex);
  });
  