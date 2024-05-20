let query = document.querySelector('.name-author');
let text = 'Gabriel Alves';

let count = 0;
function writeText() {
    if(count < text.length) {
        query.textContent += text.charAt(count);
        count++;
        setTimeout(writeText, 220);
    }
}

writeText();