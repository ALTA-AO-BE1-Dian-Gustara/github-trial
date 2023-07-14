function primeX(num){
        if(num < 2){

            return false;
        }
            
            for (let i=2; i<num; i++){
                if (num % i === 0){

                return false;
                }
            }
            return true;
        }
   

console.log(primeX(11));
console.log(primeX(13));
console.log(primeX(17));
console.log(primeX(20));
console.log(primeX(35));