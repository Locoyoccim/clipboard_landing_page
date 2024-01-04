(function(){
    let Lightbtn = document.getElementsByClassName('light')[0];
    let Darkbtn = document.getElementsByClassName('dark')[0];

    Lightbtn.addEventListener('click', ()=>{
        document.querySelector('body').classList.toggle('dark_on');
        Darkbtn.classList.remove('dark_on');
    })
    Darkbtn.addEventListener('click', ()=>{
        document.querySelector('body').classList.toggle('dark_on');
        Lightbtn.classList.remove('dark_on');
    })



}());