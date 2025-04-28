function dq(f){
    return document.querySelector(f)
}

function notDisplayNone(what, where){
    for(let el of where){
        if (el.children.length !== 0){
            notDisplayNone(what, el.children)
        }
        if(!el.classList.contains(what)){
            /* el.style.opacity = 1
            el.style.transition = 'all 250ms cubic-bezier(0.52, 0.01, 0.44, 0.99)';
            el.style.opacity = 0
            setTimeout(() => {
                el.classList.add('none')
            },250) */
            el.classList.add('none')
        } 
    }
}

function yeDisplayNone(what, where){
    for(let el of where){
        if (el.children.length !== 0){
            yeDisplayNone(what, el.children)
        }
        if(!el.classList.contains(what)){
            /* el.style.opacity = 1
            el.style.transition = 'all 250ms cubic-bezier(0.52, 0.01, 0.44, 0.99)';
            el.style.opacity = 0
            setTimeout(() => {
                el.classList.add('none')
            },250) */
            el.classList.remove('none')
        } 
    }
}

function removeDisplayNone(what, where){
    for(let el of where){
        
        if(el.classList.contains(what)){
            /* el.style.opacity = 1
            el.style.transition = 'all 250ms cubic-bezier(0.52, 0.01, 0.44, 0.99)';
            el.style.opacity = 0
            setTimeout(() => {
                el.classList.add('none')
            },250) */
            el.classList.add('none')
        } 
        if (el.children.length !== 0){
            yeDisplayNone(what, el.children)
        }
    }
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

const buttonMenu = document.querySelector('.mods')
const buttonMenuActive = document.querySelector('.active__mode')
const buttonMenuStart = document.querySelector('.start')


let offsetX = buttonMenuStart.offsetLeft;
let offsetY = buttonMenuStart.offsetTop;
let centerX = offsetX;
let centerY = offsetY;
buttonMenuActive.style.left = centerX + 'px';
buttonMenuActive.style.top = centerY + 'px';
buttonMenuActive.style.display = 'block';

const buttonContact = dq('.line__gor-center-contacts')
const buttonContactActive = dq('.active__mode-contact')

const sv = dq('.basic__info-sv')
const pr = dq('.basic__pr')
const prText = dq('.basic__txt')
const prLineTop = dq('.line__gor-top')
const prLineCenter = dq('.line__gor-center')
const prLineBottom = dq('.line__gor-bottom')
const msContacts = dq('.line__gor-center-contacts')
const msMsgs = dq('.msgs')
const msPrMsIzMsgs = dq('.center__pr-ms-iz-msg')
const msIn = dq('.msg-input')
const notifBtnMode = dq('.notif-btn-mode')
const prImg = document.querySelectorAll('.pr-op')

const hM = dq('.center__pr-ms-iz')

buttonContact.addEventListener('click', function(event){
    let btn = event.target
    if(btn.classList.contains('contact-name')){
        let offsetX = btn.offsetLeft;
        let offsetY = btn.offsetTop;
        let centerX = offsetX - 4;
        let centerY = offsetY - 4;
        buttonContactActive.style.left = centerX + 'px';
        buttonContactActive.style.top = centerY + 'px';
    }

})

let btn
let i = [0, 0]

buttonMenu.addEventListener('click', function(event){

    if(btn !== undefined){
        i.push(300)
    }

    btn = event.target

    
    if(btn.children[0].textContent == 'Сводка'){
        i.push(0)
    }
    

    
    console.log(i)

    if(btn.classList.contains('mode')){
        /* let rect = btn.getBoundingClientRect();
        let centerX = rect.left + rect.width / 2 - 140.5;
        let centerY = rect.top + rect.height / 2 - 26; */
        let offsetX = btn.offsetLeft;
        let offsetY = btn.offsetTop;
        let centerX = offsetX;
        let centerY = offsetY;
        buttonMenuActive.style.left = centerX + 'px';
        buttonMenuActive.style.top = centerY + 'px';
        
        if(btn.children[0].textContent == 'Сводка'){
            
            pr.style.opacity = 0
            setTimeout(() => {
                pr.classList.add('none')
                sv.classList.remove('none')
                setTimeout(() => {
                    sv.style.opacity = 1
                },1)
                
            }, 205)
            opacDisDisappear(notifBtnMode, 150)

        }

        if(btn.children[0].textContent == 'Профиль'){
                  
            hM.style.height = 'auto'
            sv.style.opacity = 0
            setTimeout(() => {
                sv.classList.add('none')
                pr.classList.remove('none')
                setTimeout(() => {
                    pr.style.opacity = 1
                },1)
                
            }, 205)

            /* prText.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'
            
            prLineTop.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'
            prLineCenter.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'
            prLineBottom.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'

            prText.innerHTML = 'Станислав Путятин'

            prText.style.top = '0px'
            prText.style.left = '0px'
            
            prLineTop.style.top = '0px'
            prLineTop.style.width = '602px'
            // prLineTop.style.marginButtom = '16px'

            prLineCenter.style.height = '2px'
            prLineCenter.style.width = '602px'
            prLineCenter.style.top = '0px'
            prLineCenter.style.background = '#FF6300'
            prLineCenter.style.borderRadius = '0px'
            
            prLineBottom.style.width = '602px'
            prLineBottom.style.top = '0px'

            opacDisDisappear(msContacts, 0)
            opacDisDisappear(msMsgs, 0)
            opacDisDisappear(msPrMsIzMsgs, 0)

            
            setTimeout(()=>{
                opacDisDisappear(msContacts, 500)

                yeDisplayNone('uni', pr.children)
                
                prText.style.top = '0px'
                prText.style.left = '0px'
                
                prLineTop.style.top = '0px'
                prLineCenter.style.top = '0px'
                prLineBottom.style.top = '0px'
                
            },1) 
            
            */
            msContacts.classList.add('none')
            msMsgs.classList.add('none')
            msIn.classList.add('none')
            
            prText.style.top = '25px'
            prText.style.left = '149px'
            
            prLineTop.style.top = '91px'
            prLineCenter.style.top = '269px'
            prLineBottom.style.top = '429px'
            prText.innerHTML = 'Станислав Путятин'

            
            
            prLineTop.style.width = '602px'
            // prLineTop.style.marginButtom = '16px'

            prLineCenter.style.height = '2px'
            prLineCenter.style.width = '602px' 
            prLineCenter.style.background = '#FF6300'
            prLineCenter.style.borderRadius = '16px'
            
            prLineBottom.style.width = '602px'
            // yeDisplayNone('uni', pr.children)

            
            setTimeout(()=>{
                // yeDisplayNone('uni', pr.children)
                for(let el of prImg){
                    opacDisAdvent(el, 500)
                }
                
                prText.style.transition = '0ms'
                prLineTop.style.transition = '0ms'
                prLineCenter.style.transition = '0ms'
                prLineBottom.style.transition = '0ms'

                prText.style.top = '0px'
                prText.style.left = '0px'
                prLineTop.style.top = '0px'
                prLineCenter.style.top = '0px'
                prLineBottom.style.top = '0px'
                setTimeout(()=>{
                    opacDisAdvent(prImg, 200)
                },1)
                // i = 300
            },i[i.length - 2])
            opacDisDisappear(notifBtnMode, 150)
            
        }

        if(btn.children[0].textContent == 'Сообщения'){
            sv.style.opacity = 0
            setTimeout(() => {
                sv.classList.add('none')
                pr.classList.remove('none')
                setTimeout(() => {
                    pr.style.opacity = 1
                },1)
                
            }, 205)

            



            notDisplayNone('uni', pr.children)
            /* setTimeout(()=>{
                prText.style.top = '25px'
                prText.style.left = '149px'
                
                prLineTop.style.top = '92px'
                prLineCenter.style.top = '270px'
                prLineBottom.style.top = '430px'
            },250) */
            prText.style.top = '25px'
            prText.style.left = '149px'
            
            prLineTop.style.top = '91px'
            prLineCenter.style.top = '269px'
            prLineBottom.style.top = '106px'
            setTimeout(()=>{

                prText.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'
                prLineTop.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'
                prLineCenter.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'
                prLineBottom.style.transition = 'all 300ms cubic-bezier(0.52, 0.01, 0.44, 0.99)'

                prText.innerHTML = 'Сообщения'

                prText.style.top = '0px'
                prText.style.left = '0px'
                
                prLineTop.style.top = '16px'
                prLineTop.style.width = '1167px'
                // prLineTop.style.marginButtom = '16px'

                const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                if (viewport_width > 768) {
                    hM.style.height = '634px'
                    console.log(viewport_width)
                }

                


                prLineCenter.style.height = '100%' //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                prLineCenter.style.width = '307px'
                prLineCenter.style.top = '30px'
                prLineCenter.style.background = '#F6F6F6'
                prLineCenter.style.borderRadius = '16px'
                
                prLineBottom.style.width = '1167px'
                prLineBottom.style.top = '50px'

                opacDisAdvent(msContacts, 500)
                opacDisAdvent(msMsgs, 500)
                opacDisAdvent(msPrMsIzMsgs, 500)
                opacDisAdvent(msIn, 500)
                opacDisDisappear(notifBtnMode, 150)
            },1)
            
        }
        
        if(btn.children[0].textContent == 'Уведомления'){
            opacDisAdvent(notifBtnMode, 150)
        }


        

        console.log(pr.children)

    }
})