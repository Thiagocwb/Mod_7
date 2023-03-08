const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const campoA = Number(document.getElementById("campoA").value);
    const campoB = Number(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido!");
    } else {
        alert("O valor do campo B deve ser maior que o valor do campo A.");
    }
});