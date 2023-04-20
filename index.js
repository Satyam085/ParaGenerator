const input = document.getElementById("numOfWords");
const container = document.querySelector('.container');

const generateWord = (n) => {
    const letter = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    let word = '';

    for (let index = 0; index < n; index++) {
        word += letter[(Math.random() * (letter.length - 1)).toFixed(0)];  
    };
    return word;
};

let numOfWords;
const generatePara = () => {
    numOfWords = input.value;

    const para = document.createElement('p');

    para.setAttribute('class','paras');
    
    para.innerText = 'sample para';

    container.append(para);

};