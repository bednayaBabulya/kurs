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


const btnHeaderMode = document.querySelector('.header__left-button')
const divBtnHeaderMode = document.querySelector('.header__left-button')
const textMode = document.querySelector('.cover__previw-textLeft-text-mode')
const imgGarage = document.querySelector('.cover__garage')
const vector = document.querySelector('.cover__vector-vector-arenda')
const btnAcr = document.querySelector('.cover__previw-textLeft-button')
const textPrw = document.querySelector('.cover__previw-textLeft-swipe')
const textStr = document.querySelector('.cover__previw-textLeft-swipe-str')
const sectionTwo = document.querySelector('.main')
const asrtText = document.getElementById('asrt')
const asrtVariant = document.querySelector('.cov__prev-btn-str')
const cover = dq('.cover')

function btnModeSite(event){
    let btn = event.target


    if(!btn.classList.contains('header__left-button') && !btn.classList.contains('header__left-button-btn-active')){
        for(let el of this.children){
            el.classList = 'header__left-button-btn'
        }
        
        



        if(btn.innerHTML == 'Покупка'){
            let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            if(viewport_width <= 768){
                cover.style.height = 'auto'
            }else{
                cover.style.height = '775px'
            }

            btn.classList = 'header__left-button-btn-active'

            sectionTwo.style.display = 'block'
            
            textStr.style.left = '-1300px'
            imgGarage.style.right = '-1200px'
            textMode.style.left = '-750px'
            vector.classList = 'cover__vector-vector-stonks'
            vector.style.left = '950px'
            

            btnAcr.classList = 'cover__previw-textLeft-button'
            
            btnAcr.style.backgroundColor = '#425463'

            asrtVariant.style.opacity = 0
            asrtVariant.style.bottom = '0px'
            asrtVariant.style.left = '0px'
            asrtVariant.style.transform = 'scale(0.2)'


            //действие с остольным интерфейсом после скрытия режима строительства
            setTimeout(function(){
                textMode.innerHTML = 'Покупка'
                imgGarage.src = 'image/garageStonks.png'
                imgGarage.style.right = '0'
                textPrw.style.left = '0px'
                setTimeout(() => {
                    asrtText.classList.remove('none')
                    asrtVariant.classList.add('none')
                    asrtVariant.style.bottom = '180px'
                    asrtVariant.style.left = '-180px'
                    setTimeout(() => {
                        asrtText.style.opacity = 1
                    }, 50)
                }, 500)
                
                

                textMode.style.left = '0'
            }, 500)

            console.log(btn)
        }

        if(btn.innerHTML == 'Аренда'){
            let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            if(viewport_width <= 768){
                cover.style.height = 'auto'
            }else{
                cover.style.height = '775px'
            }
            
            btn.classList = 'header__left-button-btn-active'

            sectionTwo.style.display = 'block'
            imgGarage.style.right = '-1200px'
            textMode.style.left = '-750px'
            vector.classList = 'cover__vector-vector-arenda'
            vector.style.left = '700px'
            
            btnAcr.classList = 'cover__previw-textLeft-button'
            btnAcr.style.backgroundColor = '#FF9C00'
            textStr.style.left = '-1300px'

            asrtVariant.style.opacity = 0

            asrtVariant.style.bottom = '0px'
            asrtVariant.style.left = '0px'
            asrtVariant.style.transform = 'scale(0.2)'



            //действие с остольным интерфейсом после скрытия режима строительства
            setTimeout(function(){

                textMode.innerHTML = 'Аренда'
                imgGarage.src = 'image/garageArenda.png'
                textPrw.style.left = '0px'
                setTimeout(() => {
                    asrtText.classList.remove('none')
                    setTimeout(() => {
                        asrtText.style.opacity = 1
                    }, 50)
                    asrtVariant.classList.add('none')
                    asrtVariant.style.bottom = '180px'
                    asrtVariant.style.left = '-180px'
                }, 500)
                

                imgGarage.style.right = '0'
                textMode.style.left = '0'
            }, 500)
            console.log(btn)
        }



        

        if(btn.innerHTML == 'Строительство'){
            let viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
            if (viewport_width <= 425) {
                cover.style.height = '1240px'

                console.log(viewport_width)
            }else if(viewport_width <= 768){
                cover.style.height = '616px'

            }
            
            btn.classList = 'header__left-button-btn-active'
            textPrw.style.left = '-750px'




            asrtText.style.opacity = 0
            setTimeout(() => {
                asrtVariant.classList.remove('none')

            },190)

            sectionTwo.style.display = 'none'

            //код для выполнения после отодвигания текста
            setTimeout(() => {
                imgGarage.style.right = '-1200px'
                vector.style.left = '1900px'
                asrtText.classList.add('none')

                if (viewport_width > 768) {
                    textStr.style.left = '400px'

                    console.log(viewport_width)
                }else{
                    textStr.style.left = '25px'

                }

                asrtVariant.style.opacity = 1
                asrtVariant.style.bottom = 0
                asrtVariant.style.left = 0
                asrtVariant.style.transform = 'scale(1)'

                btnAcr.style = ''
                btnAcr.classList = 'cover__previw-textLeft-button-str'

            }, 200);
            

            


            console.log(btn)
        }
        
    }
    
}

btnHeaderMode.addEventListener('click', btnModeSite)


const asrtVariants = document.querySelector('.cov__prev-btn-str')
const asrtVariantBlBlure = document.querySelector('.cov__prev-btn-str')
const asrtVariantBlBlureBtn = document.querySelector('.boxImgAsrObl__btn')



asrtVariants.addEventListener('mouseover', function(event){
    let btn = event.target

    if(btn.classList.contains('boxImgAsrOblBl')){
        btn.style.opacity = 0

        btn.parentElement.children[0].style.opacity = 1
    }

})


asrtVariants.addEventListener('mouseout', function(event){
    let btn = event.target

    if(btn.classList.contains('boxImgAsrOblBl')){
        btn.style.opacity = 0.8

        btn.parentElement.children[0].style.opacity = 0
    }
    
})


const buttonCommentsRight = document.querySelector('.comments__button-right')
const buttonCommentsLeft = document.querySelector('.comments__button-left')
const ul = document.querySelector('.comments__spisok')
const fraction = document.querySelector('.fraction')
const main = document.querySelector('.main')

let i = 0
let c = 1

const masPx = [0, -650, -1610, -2570, -3530, -4490]

buttonCommentsRight.addEventListener('click', function() {
    
    if (c < 6) {
        i++
        c++
        fraction.innerHTML = `${c}/6`
    }
    ul.style.transition = "300ms";
    ul.style.transform = `translate3d(${masPx[i]}px, 0px, 0px)`

})

buttonCommentsLeft.addEventListener('click', function() {
    if (c > 1) {
        i--
        c--
        fraction.innerHTML = `${c}/6`
    }

    ul.style.transition = "300ms";
    ul.style.transform = `translate3d(${masPx[i]}px, 0px, 0px)`
    console.log(buttonFilter)
    
})

const buttonFilter = document.querySelector('.main__left-filter-modal-button')
const filterModal = document.querySelector('.main__left-filter-modal-button-window')
const filterBlur = document.querySelector('.main__blur')

const buttonHelp = document.querySelector('.main__left-help-button')
const helpModal = document.querySelector('.main__left-help-modal-button-window')

buttonHelp.addEventListener('click', function() {
    
    if(filterBlur.style.display !== 'block'){
        opacDisAdvent(helpModal, 100)
        filterBlur.style.display = 'block'
        main.scrollIntoView({ behavior: 'smooth' })
        document.querySelector('html').style.overflowY= 'hidden'
        filterBlur.style.opacity = '1'
        buttonHelp.style.zIndex = 200
        
    }else{
        opacDisDisappear(helpModal, 100)
        filterBlur.style.opacity = '0'
        document.querySelector('html').style.overflowY= 'scroll'
        filterBlur.style.display = 'none'
        buttonHelp.style.zIndex = 0
    }
    /* document.documentElement.style.overflowY = 'hidden' */
})

buttonFilter.addEventListener('click', function() {
    
    if(filterBlur.style.display !== 'block'){
        filterModal.style.display = 'flex'
        filterBlur.style.display = 'block'
        main.scrollIntoView({ behavior: 'smooth' })
        document.querySelector('html').style.overflowY= 'hidden'
        

        setTimeout(function() {
            buttonFilter.style.zIndex = '200'
            filterModal.style.opacity = '1'
            /* filterBlur.style.transition = '500ms' */
            filterBlur.style.opacity = '1'
        }, 1)
    }else{
        
        filterModal.style.opacity = '0'
        filterBlur.style.opacity = '0'
        document.querySelector('html').style.overflowY= 'scroll'
        setTimeout(function() {
            filterModal.style.display = 'none'
            filterBlur.style.display = 'none'
            buttonFilter.style.zIndex = '0'
            
        }, 100)
    }
    
    /* document.documentElement.style.overflowY = 'hidden' */
})

filterBlur.addEventListener('click', function() {
    
    
    filterModal.style.opacity = '0'
    opacDisDisappear(helpModal, 100)

    filterBlur.style.opacity = '0'
    document.querySelector('html').style.overflowY= 'scroll'
    setTimeout(function() {
        filterModal.style.display = 'none'
        filterBlur.style.display = 'none'
        buttonFilter.style.zIndex = '0'
        buttonHelp.style.zIndex = 0
        
    }, 100)
    
    
    /* document.documentElement.style.overflowY = 'hidden' */
})

function btnActive(event){
    
    let btn = event.target
    console.log(btn.parentNode)
    
    let kollection = document.querySelector(`.${btn.parentNode.classList[0]}`).children
    console.log(kollection)


    if(btn.classList.contains('filter-button')){
        let i = 0

        for(let buttonActive of kollection){   
            if(buttonActive.classList.contains('filter-button-active')){
                kollection[i].classList.remove('filter-button-active')
                kollection[i].classList.add('filter-button')
            }
            i++
        }
        btn.classList.add('filter-button-active')
        btn.classList.remove('filter-button')
    }
    
}

filterModal.addEventListener('click', btnActive)

let filterModalAccept = document.querySelector('.main__left-filter-modal-button-window-button')
let helpModalAccept = document.querySelector('.main__left-help-modal-button-window-button')

helpModalAccept.addEventListener('click', function(){

    opacDisDisappear(helpModal, 100)

    filterBlur.style.opacity = '0'
    document.querySelector('html').style.overflowY= 'scroll'
    setTimeout(function() {
        
        filterBlur.style.display = 'none'
        buttonHelp.style.zIndex = '0'
        
    }, 100)
})

filterModalAccept.addEventListener('click', function(){

    filterModal.style.opacity = '0'
    filterBlur.style.opacity = '0'
    document.querySelector('html').style.overflowY= 'scroll'
    setTimeout(function() {
        filterModal.style.display = 'none'
        filterBlur.style.display = 'none'
        buttonFilter.style.zIndex = '0'
        
    }, 100)
})


const dataFilterButton = document.querySelector('.main__left-filter-modal-button-window-filterMode-date-variants-window')
const btnDateE = document.querySelector('.filter-button-data')

dataFilterButton.addEventListener('mouseover', function(event){
    let btnDate = event.target
    /* .style.backgroundColor = '#dbdbdb'; */
    if(btnDate.classList.contains('btn-filter-date-active') || btnDate.classList.contains('btn-filter-date')){
        let i = 0
        for(let el of this.children){
            if(el.classList.contains('btn-filter-date-active')){
                this.children[i].classList.remove('btn-filter-date-active')
                this.children[i].classList.add('btn-filter-date')
            }
            i++
        }
        btnDate.classList.add('btn-filter-date-active')
        btnDate.classList.remove('btn-filter-date')
        
    }

    btnDate.addEventListener('click', function(){
        if(!this.classList.contains('main__left-filter-modal-button-window-filterMode-date-variants-window'))
        btnDateE.innerHTML = this.innerHTML 
    })
    

})



btnDateE.addEventListener('click', function(){

    if(dataFilterButton.style.display !== 'flex'){
        dataFilterButton.style.display = 'flex'
    }else{
        dataFilterButton.style.display = 'none'
    }

})