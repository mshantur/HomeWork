let flag = true;

const Palindrome = (somestring) => {
    let arr1 = somestring.split('');
    let arr2 = somestring.split('').reverse();

    for(let i = 0; i <= arr1.length; i ++){
        if( arr1[i] == arr2[i] ){
            flag = true;            
        }
        else{
            console.log(somestring + " isn't a Polindrome!");
            flag = false;
            break;
        }
    }

    if (flag == true) {
        console.log(somestring + ' is a Polindrome!');	
    }
}