let maliste = document.getElementById('maliste')
for (i = 0; i < maliste.children.length; i++) 
{

    maliste.children[i].addEventListener("click", function (e) 
    {
        clone_li = e.currentTarget.cloneNode(true);  

        maliste2 = document.getElementById("liste2")  
        maliste2.appendChild(clone_li)               
        e.currentTarget.remove()                    

    }, { once: true })        
}
 
function getTarget(e) 
{
    e = window.event
    return e.target
}

let maliste2 = document.getElementById('liste2')

maliste2.addEventListener("click", function (e) 
{
    for (var i = 0; i < maliste2.children.length; i++) 
    {
        maliste2.children[i].classList.remove("selected")
    }
    target = getTarget(e)
    target.className = "selected"   

})

let haut = document.getElementById('haut')
haut.addEventListener("click", function () {
    if (target.previousElementSibling) {
        maliste2.insertBefore(target, target.previousElementSibling)
    }
})

let bas = document.getElementById('bas')
bas.addEventListener("click", function () {
    if (target.nextElementSibling) {
        target.nextElementSibling.insertAdjacentElement("afterend", target);
    }
})


let first = document.getElementById('first')
first.addEventListener("click", function () {
    maliste2.insertAdjacentElement("afterbegin", target)
})

let last = document.getElementById('last')

last.addEventListener("click", function () 
{
    maliste2.insertAdjacentElement("beforeend", target)
})

let supprimer = document.getElementById('supprimer')
supprimer.addEventListener("click", function () {
    let clone_li = target.cloneNode(true)
    clone_li.className = "list-item"
    maliste.prepend(clone_li)
    maliste2.removeChild(target)

})