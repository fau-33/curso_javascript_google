let num = document.getSelection('input#fnum')
let lista = document.getSelection('select#flista')
let res = document.getSelection('div#res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else{
    return false
  }
}

function inLista(n , 1){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    window.alert(`Tudo OK`)
  }else{
    window.alert(`Valor inválido e não encontrado na lista.`)
  }
}

