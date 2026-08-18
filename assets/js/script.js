const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if(menu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

// Cerrar al tocar un enlace
document.querySelectorAll("#menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        const icon=menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// Cerrar al tocar fuera
document.addEventListener("click",(e)=>{

    if(!menu.contains(e.target) && !menuBtn.contains(e.target)){

        menu.classList.remove("active");

        const icon=menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});
/*==============================
    REDES FLOTANTES
==============================*/

const shareBtn = document.querySelector(".share-btn");

const socialLinks = document.querySelector(".social-links");

shareBtn.addEventListener("click",()=>{

    socialLinks.classList.toggle("active");

});

// =========================
// BUSCADOR DE NOTICIAS
// =========================

const searchInput = document.querySelector(".search input");
const newsCards = document.querySelectorAll(".news-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let texto = searchInput.value.toLowerCase();

        newsCards.forEach(card => {

            let titulo = card.dataset.titulo.toLowerCase();

            if (titulo.includes(texto)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}