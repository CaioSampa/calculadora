const visor = document.querySelector('#visor')
const inputs = document.querySelector('input')
const limpar = document.querySelector('#clean')
const igual = document.querySelector('#igual')
const clicou = (val) =>{
  let vi = visor
  vi.value+=val
}
const clear = () =>{
    visor.value=''
}
const igualt = () =>{
    if(visor.value==''){
        return 
    }
   let vi = eval(visor.value)
   visor.value = vi
}

limpar.addEventListener('click',clear)
igual.addEventListener('click',igualt)
