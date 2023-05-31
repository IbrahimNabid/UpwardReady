const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
dropdownMenu.classList.toggle('open');
const isOpen = dropdownMenu.classList.contains('open');
toggleBtnIcon.classList = isOpen ? 'fa fa-times' : 'fa fa-bars';
if (dropdownMenu.style.display === 'none') {
   dropdownMenu.style.display = 'list-item';
 } else {
   dropdownMenu.style.display = 'none';
 }
};