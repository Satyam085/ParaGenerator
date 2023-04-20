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

    let data = '';
    for (let index = 0; index < numOfWords; index++) {
        data += generateWord((Math.random() * 15).toFixed(0));
        data = toTitleCase(data);
        data += ' ';
    }
    
    para.innerText = data;

    container.append(para);

};

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }


