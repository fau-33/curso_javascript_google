var agora = new Date()
var diaSem = agora.getDay()
/*
  0 = Domingo
  1 = segunda 
  2 = terça
  3 = quarta
  4 = quinta
  5 = sexta
  6 = sábado
 */

 console.log(diaSem)

 switch(diaSem){
   case 0:
     console.log(`Domingo`)
     break
   case 1:
     console.log(`Segunda`)
     break
   case 2:
     console.log(`Terça`)
     break
   case 3:
     console.log(`quarta`)
     break
   case 4:
     console.log(`quinta`)
     break
   case 5:
     console.log(`sexta`)
     break
   case 6:
     console.log(`sábado`)
     break
   default:
     console.log(`[erro] Dia inválido!`)
     break  
     
    
     
 }