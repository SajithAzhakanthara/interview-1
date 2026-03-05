var menuToggle = document.querySelector('.main_menu_toggle');
var mobileMenu = document.querySelector('.mobile_menu');
var menuCloseButton = document.querySelector('.menu_close_button');
var mobileSearchbar = document.querySelector('.mobile_searchbar');
var mobileSearchIcon = document.querySelector('.mobile_search_icon');

menuToggle.addEventListener('click',function(){
    mobileMenu.classList.remove('d-none');
})

menuCloseButton.addEventListener('click',function(){
    mobileMenu.classList.add('d-none');
})

mobileSearchIcon.addEventListener('click',function(){
    mobileSearchbar.classList.remove('d-none');
})


