let word = [];

const SentenceUPD = (string1, number, string2) => {
    let arr1 = string1.split(' ');

    for(let i=0; i<arr1.length;i++){

        word = arr1[i].split('');

        if (number <= word.length){
            word [number] = string2; 
        }        
        arr1[i] = word.join('');
    }

    return arr1.join(' ');

};