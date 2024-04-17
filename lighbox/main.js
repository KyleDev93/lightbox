'use strict'

//constantes
const imgList = document.querySelectorAll(`.img`)
const lbox = document.getElementById(`active`)



//al hacer click en .img 
   // al .lbox se add la clase isActive

   imgList.forEach(( eachImag , index )=>{
    
    imgList[index].addEventListener(`click` , ()=>{

        lbox.classList.add(`.lbox`)
    })
})

  