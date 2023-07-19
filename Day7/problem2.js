function largestNUmber(array){ 
if(array.length === 1){
    return array[0] 
     }
 else{
       if(array[0]>=array[array.length-1]){
           array.pop() 
           return largestNUmber(array) 
       }
       else{
           return largestNUmber(array.slice(1)) 
       }
    }
}

console.log(largestNUmber([5,2,67,37,85,19,10]))
console.log(largestNUmber([5,10,20,3,98,95]))
console.log(largestNUmber([20,22,18,25,75,62,88]))