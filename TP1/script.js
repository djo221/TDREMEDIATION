const btnContainer = document.getElementById('btnContainer')
const ntfContainer = document.getElementById('ntfContainer');
const ntf = ntfContainer.querySelector('.ntf');
const btns = btnContainer.querySelectorAll("button");

const tab = ['😃SUCCESS😃', '☠️danger☠️', '⚠️warning⚠️', '💡info💡']    


btns.forEach((btn,i)=>{
    btn.addEventListener("click", function(e){
        addNotif(e.target.classList[0], tab[i]);
    })  
})


function addNotif(color, message) {
    var ntfdiv = document.createElement("div");
    ntfdiv.classList.add(color);
    var h2 = document.createElement("h2")
    h2.textContent = message
    ntfdiv.appendChild(h2)
    ntfContainer.appendChild(ntfdiv)

    setTimeout( () => {
        ntfContainer.removeChild(ntfdiv)
    }, 2000);
}   

