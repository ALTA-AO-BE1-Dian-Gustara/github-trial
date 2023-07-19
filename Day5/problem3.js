function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x != y) {
            
            return false;
        }
    }
   
    return true;
 
}
console.log("Is Palindrome? : " + check_palindrome("civic"));
console.log("Is Palindrome?: " + check_palindrome("katak"));
console.log("Is Palindrome?: " + check_palindrome("kasur rusak"));
console.log("Is Palindrome?: " + check_palindrome("kupu - kupu"));
console.log("Is Palindrome?: " + check_palindrome("lion"));