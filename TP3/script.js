const imageContainer = document.getElementById("imageContainer");
const images = document.getElementById("img");

const btnDroite = document.getElementById("btnDroite")
const btnGauche =  document.getElementById("btnGauche")

const droiteLokho  = document.getElementById("droiteLokho")
const gaucheLokho= document.getElementById("gaucheLokho")


/* ________________________________________________________________ */

btnDroite.addEventListener("mouseenter", ()=>{
   
    droiteLokho.classList.add("droiteLokhoToggle")
    
})

btnDroite.addEventListener("mouseleave" , ()=>{
    
    droiteLokho.setAttribute("class", "droiteLokho")
 } )


btnGauche.addEventListener("mouseenter", ()=>{
   
    gaucheLokho.classList.toggle("gaucheLokhoToggle")

     btnGauche.addEventListener("mouseleave" , ()=>{
        gaucheLokho.setAttribute("class", "gaucheLokho")
     } )
    
})

/**************************************** */

btnGauche.addEventListener("click" , ()=>{
    i--;
    if (i < 0) {  
        i= imagesTab.length - 1;
    }
    document.getElementById("image").src = imagesTab[i]
})
  btnDroite.addEventListener("click" , ()=>{
      i++;
      if (i > imagesTab.length - 1) {
          i = 0;
      }
      document.getElementById("image").src = imagesTab[i]
  })

const img1 = "../TP3MAX/images/sa1.jpg";
const img2 = "../TP3MAX/images/sa2.jpg";
const img3 = "../TP3MAX/images/sa3.jpg";
const img4 = "../TP3MAX/images/sa4.jpg";
const img5 = "../TP3MAX/images/sa5.jpg";
const img6 = "../TP3MAX/images/sa6.jpg";
/* imagesTab.push() */

let imagesTab = [img1, img2, img3, img4, img5, img6]
var i = 0;

/* slider(); */

function slider() {
    document.getElementById("image").src = imagesTab[i]
    document.getElementsByTagName("body")[0].style.backgroundImage = `url('${imagesTab[i]}')`

    if (i < imagesTab.length - 1) {
        i++;
    } else {
        i = 0;
    }
 
   setTimeout(slider, 5000); 
}
//testeur
/* btnGauche.addEventListener("click", function () {
    alert();
}) 
 */

window.onload = slider