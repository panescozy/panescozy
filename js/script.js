function addTextToEmptyChildren(parent) {
    const children = parent.querySelectorAll('.vanish');
    var elemento = document.getElementById("gen");
    var op1 = document.getElementById("o-title");
    var op2 = document.getElementById("o-spec");
    op1.textContent ='Lactal';
    op2.textContent ='Pan lactal totalmente natural, con un peso de 850gr y 32cm de largo, 10cm de ancho y 10cm de alto.';
}

function removeTextFromChildren(parent) {
    const children = parent.querySelectorAll('.vanish');
    var elemento = document.getElementById("gen");
    elemento.style.display = "block";
    children.forEach(child => {
        child.textContent = '';
    });
}

function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }