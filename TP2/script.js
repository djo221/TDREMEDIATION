var side_menu = document.getElementById('menu_side');
var btn_open = document.getElementById('btn_open');
var body = document.getElementById('body');
var images = document.getElementById('images');
var images2 = document.getElementById('images2');
var name_page = document.getElementById('namePage');
var name_page2 = document.getElementById('namePage2');
const option__menu = document.getElementById("optionsMenu");

/* 
images2.addEventListener("mouseover", ()=>{
    alert("baa")
}) */

/* let wrap__icons = document.createElement("div");
option__menu.appendChild(wrap__icons );
wrap__icons.id = 'test';    
 */


/* side_menu.addEventListener("mouseout" , ()=>{
    open_close_menu();
}) */
/* side_menu.addEventListener("mouseover" , ()=>{
    open_close_menu();
}) */

btn_open.addEventListener("click", () => {
    open_close_menu();
})

function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
    images.classList.toggle("img_move");
    images2.classList.toggle("img_move");
    name_page.classList.toggle("name__page_move");
    name_page2.classList.toggle("name__page_move");
}
/* 
* 
var menu = [
    
   "icone" = {
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
  },
    "widget" =  {x
          "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
    },
    "LayoutOptions" = {
          "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
    }, 
    "Charts "= {
          "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
    }, 
    "UiElements" = {
          "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
    }, 
    "Forms" = {
          "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
    },
    "Tables" = {
          "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
        "element" : "elevalue",
    }
]
  */

/* Pour reponsivité à faire après pour experience  */
/* if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
} */