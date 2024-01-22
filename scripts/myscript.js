// -------------------- FAQ DROPDOWN -------------------- //
const faqs  = document.querySelectorAll('.faq-container');
// const toggleBtn = document.querySelectorAll('.toggle-btn');


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

// -------------------- Navbar responsivness -------------------- //
const navBarBtnOpen = document.getElementById('navBarBtnOpen');
const navBarBtnClose = document.getElementById('navBarBtnClose');
const navBar = document.getElementById("navbar");

navBarBtnOpen.addEventListener('click', function(){
    navBar.classList.add('displayed')
})

navBarBtnClose.addEventListener('click', function(){
    navBar.classList.remove('displayed')
})
