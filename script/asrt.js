const filterModal = document.querySelector('.main__left-filter-modal-button-window')

const buttonFilter = document.querySelector('.main__left-filter-modal-button')
const filterBlur = document.querySelector('.main__blur')
const header = document.querySelector('header')


buttonFilter.addEventListener('click', function() {
    
    if(filterBlur.style.display !== 'block'){
        filterModal.style.display = 'flex'
        filterBlur.style.display = 'block'
        header.scrollIntoView({ behavior: 'smooth' })
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
    filterBlur.style.opacity = '0'
    document.querySelector('html').style.overflowY= 'scroll'
    setTimeout(function() {
        filterModal.style.display = 'none'
        filterBlur.style.display = 'none'
        buttonFilter.style.zIndex = '0'
        
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