const btns=document.querySelectorAll('.button')
const body=document.querySelector("body")

btns.forEach( function(btn){
    console.log(btn);
    btn.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id==='grey') {
            body.style.backgroundColor='e.target.id'
        }
        if (e.target.id==='white') {
            body.style.backgroundColor='e.target.id'
        }
        if (e.target.id==='blue') {
            body.style.backgroundColor='e.target.id'
        }
        if (e.target.id==='yellow') {
            body.style.backgroundColor='e.target.id'
        }
    });
});
console.log(btns);