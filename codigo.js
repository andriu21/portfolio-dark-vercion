

// let swiper = new Swiper(".portfolio__container",{
      
//       grabCursor:true,
//       centeredSlides:true,
//       slidesPerView:"auto",
//       loop:true,
//       autoplay:{
//             delay:3000,
//             disableOnInteraction:false,
//       },
//       navigation:{
//             nextEl:".swiper-button-next",
//             prevEl:".swiper-button-prev",
//       },
//       pagination:{
//             el:".swiper-pagination"
//       },
//       cssMode:true,
//       mousewheel:true,
//       keyboard:true,
// })

let swiperPortfolio = new Swiper(".portfolio__container",{
      
      cssMode:true,
      loop:true,

      navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev",
      },
      pagination:{
            el:".swiper-pagination",
            clickable:true,
      },
     
});

let swiperTestimonial = new Swiper(".testimonial__container",{
      
      loop:true,
      autoplay:true,
      grabCursor:true,
      pagination:{
            el:".swiper-pagination",
            clickable:true,
            dynamiBullets:true,
      },
      breakpoints:{
            568:{
                  slidesPerView:2,
            }
      },
     
     
})






// $(document).ready(function(){
//     $('.arrivals__contents').owlCarousel({
//         loop:true,
//         margin:0,
//         nav:true,
//         items:1,
//         autoplay:false,
//        responsive:{
//             0:{
//                 items:1,
//                 nav:true
//             },
//             600:{
//                 items:2
//             },
//             1200:{
//                items:4
//             }
            
//         }
//     });
//    });


// AOS


// AOS.init({
//   duration:800,
//   offset:150,
// });











// card 3d

// VanillaTilt.init(document.querySelectorAll(".phone"),{
//    max:25,
//    speed:400,
//    glare:true,
//    "max-glare":1,
// });


// scroll behavior

// window.sr = ScrollReveal();
// sr.reveal('.bottom',{
//    duration:3000,
//    origin:'bottom',
//    distance:'100px'

// });



















// precarga

// function loader(){
//     document.querySelector(".loader__container").classList.add("fade-out");
// }

// function fadeOut(){
//     setInterval(loader, 6000);
// }

// window.onload = fadeOut;


