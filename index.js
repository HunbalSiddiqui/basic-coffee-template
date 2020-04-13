const one=document.querySelector('#one')
const two=document.querySelector('#two')
const three=document.querySelector('#three')
const four=document.querySelector('#four')
const five=document.querySelector('#five')
const nav=document.querySelector('.nav')
function setDisplay(){
    setTimeout(() => {
        one.style.opacity='1'
        // one.style.display='block'
    }, 2000);
    setTimeout(() => {
        two.style.opacity='1'
    }, 3000);
    setTimeout(() => {
        three.style.opacity='1'
    }, 4000);
    setTimeout(() => {
        four.style.opacity='1'
    }, 5000);
    setTimeout(() => {
        five.style.opacity='1'
    }, 6000);
    setTimeout(() => {
        nav.style.borderBottom='1px solid brown'
    }, 7000);

}

setDisplay()