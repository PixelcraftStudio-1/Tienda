// Opcional: alert al hacer click en submenú
document.querySelectorAll('.submenu li a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Seleccionaste: ' + item.innerText);
  });
});
