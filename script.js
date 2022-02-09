var itemCmp = document.querySelector('.item-content');
var imgItem = document.querySelector('.img-item');
var titleItem = document.querySelector('.title-item');
var valorItem = document.querySelector('.valor-item');
var pacelaItem = document.querySelector('.pacela-item');
var descricaoItem = document.querySelector('.descricao-item');
var bxX = document.querySelector('.bx-x');
var cdp = document.querySelector('.cdp');
var body = document.querySelector('body');
var item1 = document.querySelector('.item-1');
var item2 = document.querySelector('.item-2');
var item3 = document.querySelector('.item-3');
var item4 = document.querySelector('.item-4');

item1.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/PqMbZzNf/Whats-App-Image-2022-01-27-at-18-13-04-1-removebg-preview.png"
  titleItem.innerHTML = "Jogo americano com estampa em xadrez verde e branca"
  valorItem.innerHTML = "R$14,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Jogo americano com estampa em xadrez verde e branca para enfeitar sua mesa."
  cdp.value = "KSKS"
});

item2.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/PxrWMp8W/Whats-App-Image-2022-01-27-at-18-13-04-2-removebg-preview.png"
  titleItem.innerHTML = "Jogo americano com estampa natalina verde HOHOHO"
  valorItem.innerHTML = "R$14,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Jogo americano com estampa natalina verde HOHOHO para enfeitar sua mesa."
  cdp.value = "TAU3"
});

item3.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/ZR7rsbr1/Whats-App-Image-2022-01-27-at-18-13-04-3-removebg-preview.png"
  titleItem.innerHTML = "Jogo americano com estampa florida rosa"
  valorItem.innerHTML = "R$14,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Jogo americano com estampa florida rosa para enfeitar sua mesa."
  cdp.value = "WASD"
});

item4.addEventListener('click', function(){
  itemCmp.style.display = "block"
  body.style.overflow = "hidden"
  bxX.addEventListener('click', function(){
    itemCmp.style.display = "none"
    body.style.overflow = "visible"
  });
  imgItem.src = "https://i.postimg.cc/ZnW61GH0/Whats-App-Image-2022-01-27-at-18-13-04-4-removebg-preview.png"
  titleItem.innerHTML = "Jogo americano com estampa florida azul"
  valorItem.innerHTML = "R$14,90"
  pacelaItem.innerHTML = "Parcela: 1x sem juros"
  descricaoItem.innerHTML = "Jogo americano com estampa florida azul para enfeitar sua mesa."
  cdp.value = "GFCF"
});