document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("open");
});

document.getElementById("close-sidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("open");
});

document
  .getElementById("luogoNascita")
  .addEventListener("change", function (e) {
    const cittaLabel = document.getElementById("citta-label");
    const cittaInput = cittaLabel.querySelector('input[name="cittaNascita"]');
    if (e.target.value === "") {
      cittaLabel.style.display = "none";
      cittaInput.value = "";
    } else {
      cittaLabel.style.display = "block";
    }
  });

document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log("Dati inseriti", data);
  alert("Dati salvati! Controlla la console.");
});

document.getElementById("btn-home").addEventListener("click", function () {
  alert("Navigazione verso la home page");
  document.getElementById("sidebar").classList.remove("open");
});
document.getElementById("btn-docs").addEventListener("click", function () {
  alert("Navigazione verso la pagina Documenti");
  document.getElementById("sidebar").classList.remove("open");
});
document.getElementById("btn-dati").addEventListener("click", function () {
  alert("Navigazione verso la pagina di ricerca");
  document.getElementById("sidebar").classList.remove("open");
});
