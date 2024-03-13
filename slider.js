// libreria de slider 

(function(){
      const sliders =[...document.querySelectorAll(".sliders")];
      const buttonNext = document.querySelector("#next");
      const buttonBefore = document.querySelector("#before");
      let value;

      buttonNext.addEventListener("click", ()=>{
        changePosition(1);
      });

      buttonBefore.addEventListener("click", ()=>{
        changePosition(-1);
      });

      const changePosition = (add)=>{
        const currentTestimony = document.querySelector(".active").dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony)-1].classList.remove("active")
        if(value === sliders.length+1 || value === 0){
              value = value === 0 ? sliders.length : 1;
        }
  
        sliders[value-1].classList.add("active");
      }


     

})();


// cada section darle un data id = al numero de elementos