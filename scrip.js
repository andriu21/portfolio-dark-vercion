const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

      // validar si la constante existe
if(navToggle){
      navToggle.addEventListener("click",()=>{
            navMenu.classList.add("show-menu");
      })
}

if(navClose){
      navClose.addEventListener("click",()=>{
            navMenu.classList.remove("show-menu");
      })
}

// ======= REMOVE MENU MOBILE ==========

const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
      const navMenu = document.getElementById("nav-menu");

      navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click",linkAction))

// ACCORDION SKILLS ACTIONS

const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
      let itemClass = this.parentNode.className;

      for(i=0; i < skillsContent.length; i++){// opcion para recorren el array cada ves que se de la click al hijo para que todo tengan la clase close osea cerrar todo
            skillsContent[i].className = "skills__content skills__close";
      };
      if(itemClass === "skills__content skills__close"){
            this.parentNode.className = "skills__content skills__open"
      };
};

skillsHeader.forEach(el =>{
      el.addEventListener("click", toggleSkills);
});

//  qualification tabs

const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab =>{
       tab.addEventListener("click", ()=>{
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tabContent =>{
                  tabContent.classList.remove("qualification__active");
            })
            target.classList.add("qualification__active");

            tabs.forEach(tab =>{
                  tab.classList.remove("qualification__active") 
            })
            tab.classList.add("qualification__active"); 
       })
})

//  ========= SERVICES MODAL ========
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick){
      modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn,i) => {
     modalBtn.addEventListener("click",()=>{
          modal(i) 
     }) 
});

modalCloses.forEach(modalClose =>{
      modalClose.addEventListener("click",()=>{
            modalViews.forEach(modalView=>{
               modalView.classList.remove("active-modal");
            })
      })
})

// section active{

const sections = document.querySelectorAll("section[id]");

function scrollActive(){
      const scrollY = window.pageYOffset;
      sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute("id")

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                  document.querySelector(`.nav__menu a[href*=`+ sectionId +`]`).classList.add("active-link")
            }else{
                  document.querySelector(`.nav__menu a[href*=`+ sectionId +`]`).classList.remove("active-link")
            }
      })
}
window.addEventListener("scroll",scrollActive)

// ====== change background header =======

function scrollHeader(){
      const nav = document.getElementById("header");
      if(this.scrollY >= 80) nav.classList.add("scroll-header"); else nav.classList.remove("scroll-header")
}

window.addEventListener("scroll", scrollHeader);

// show scroll

function scrollTop(){
      const scrollTop = document.getElementById("scroll-up");

      if(this.scrollY >= 500) scrollTop.classList.add("show-scroll");else  scrollTop.classList.remove("show-scroll");

}

window.addEventListener("scroll",scrollTop)

//  dark and light

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

const selectedTheme = localStorage.getItem("selected-them")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrenTheme = () => document.body.classList.contains(darkTheme)? "dark" : "light";
const getcurrentIcon = () => themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

if(selectedTheme){
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
      themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", ()=>{
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);

      localStorage.setItem("selected-theme",getCurrenTheme())
      localStorage.setItem("selected-icon",getcurrentIcon())
})