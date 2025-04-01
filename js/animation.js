
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', checkVisibility);

window.addEventListener('DOMContentLoaded', checkVisibility);


  document.getElementById('telefone').addEventListener('input', function(e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});