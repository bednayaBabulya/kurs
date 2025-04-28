function dq(f){
    return document.querySelector(f)
}

function opacDisAdvent(what, time){
    what.style.opacity = 0
    what.classList.remove('none')
    setTimeout(()=>{
        what.style.transition = `all ${time}ms cubic-bezier(0.52, 0.01, 0.44, 0.99)`
        what.style.opacity = 1
    },1)
}


function opacDisDisappear(what, time){
    what.style.opacity = 1
    setTimeout(()=>{
        what.style.transition = `all ${time}ms cubic-bezier(0.52, 0.01, 0.44, 0.99)`
        what.style.opacity = 0
        setTimeout(()=>{
            what.classList.add('none')
        },time + 1)
    },1)
    
    
}

const btnNotifHeader = dq('.header__btn-ac-notif-button')
const headerNotif = dq('.notif-btn-header')


document.body.addEventListener('click', function(event){
    let btn = event.target
    console.log(btn)
    // opacDisAdvent(headerNotif, 150)
    if(btn.classList.contains('header__btn-ac-notif-button-img')){
        opacDisAdvent(headerNotif, 150)
    }else{
        opacDisDisappear(headerNotif, 150)
    }
})
