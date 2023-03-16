function toggleMenu(){
    document.querySelector("nav ul").classList.toggle("menu-active");
    document.querySelector("#menu-closed").classList.toggle("menu-active");
    document.querySelector("#menu-open").classList.toggle("menu-active");
}

document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);



const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( new Date() );
document.querySelector(".header-today p").textContent = fulldate;

const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified;

