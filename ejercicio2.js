function loopDePares(number){
    for(let i=0; i <= 100; i++){
      if((number + i) % 2 === 0){
        console.log (`${number +i} es un numero par`)
      } else {
        console.log (number + i)
      }
    }
  }
  
  loopDePares(50);