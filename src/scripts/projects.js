let query = document.querySelector('.h-projects');
let text = 'Meus Projetos';

let count = 0;
function writeText() {
    if(count < text.length) {
        query.textContent += text.charAt(count);
        count++;
        setTimeout(writeText, 220);
    }
}

writeText();