const pages = ['Home', 'Resume', 'Services', 'Blog', 'Contact'];
showPage = (obj) => {
    pages.forEach(element => {
        document.getElementById(element).classList.remove('show');
    });
    let page =obj.textContent;
    document.getElementById(page).classList.add('show');
}