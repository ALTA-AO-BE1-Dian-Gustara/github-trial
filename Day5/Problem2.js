
//Menggbaungkan Array 

function joinAraay(arrayA){
  
   return arrayA.filter((e1, index) => arrayA.indexOf(e1) === index);
}

const list = [ ' Samsung ', ' Apple ', ' Apple ', ' Sony ', 'Xiaomi' ]
console.log(list)
console.log(joinAraay(list));











