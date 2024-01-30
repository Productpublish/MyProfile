function openNav() {
  document.getElementById("Sidenavv").style.width = "300px";
  document.getElementById("main-class").style.marginLeft = "300px";
  document.getElementById("rollswitch").style.marginLeft = "300px";
}

function closeNav() {
  document.getElementById("Sidenavv").style.width = "0";
  document.getElementById("main-class").style.marginLeft = "0";
  document.getElementById("rollswitch").style.marginLeft = "0";
}

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});