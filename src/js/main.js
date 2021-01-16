const pages = ['Home', 'Resume', 'Services', 'Blog', 'Contact'];
showPage = (obj) => {
    pages.forEach(page => {
        document.getElementById(page).classList.remove('show');
    });

    if(document.getElementsByClassName('active').length > 0){
    let actives = [...document.getElementsByClassName('active')] 
        console.log(document.getElementsByClassName('active'));
        actives.forEach(active => {
            active.classList.remove('active');
        });
    }
    let page =obj.textContent;
    document.getElementById(page).classList.add('show');
    obj.classList.add('active');
}
const header = document.getElementById('header');
window.onscroll = () => {
    setTimeout(() => {
    window.pageYOffset >= 6 ? header.classList.add('sticker')
    : header.classList.remove('sticker');
    }, 100);
console.log(window.pageYOffset);
}