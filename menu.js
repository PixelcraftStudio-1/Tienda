// Opcional: aquí puedes agregar más interactividad
document.querySelectorAll('.submenu li').forEach(item => {
  item.addEventListener('click', () => {
    alert('Seleccionaste: ' + item.innerText);
  });
});
