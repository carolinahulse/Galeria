let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcValor = "";

for(let i = 0; i < imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        srcValor = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcValor);
        modal.classList.toggle('modal_active');
    });
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});
