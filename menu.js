// Agregar interacción opcional: alert al seleccionar un producto
document.querySelectorAll('.submenu li a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Seleccionaste: ' + item.innerText);
  });
});
