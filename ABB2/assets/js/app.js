var axtariw=document.querySelector('#axtariw')
var search=document.querySelector('.search')
var bars=document.querySelector('#bars')
var dil =document.querySelector('#azdil')
var dill=document.querySelector('.dil')
var barsclick=document.querySelector('.barsclick')
var barsclickphone=document.querySelector('#barsclick')
var down=document.querySelector('#down')
barsclickphone.onclick=function(){
    
   barsclick.classList.toggle('barsclickvisible')

   if(barsclickphone.className=='fa-solid fa-x'){
    barsclickphone.className=('fa-solid fa-bars')
   }
   else {
    barsclickphone.className=('fa-solid fa-x')
   }
}

axtariw.onclick=function(){
  
    search.classList.toggle('active')
}
bars.onclick=function(){
    search.classList.remove('active')
}
dil.onclick=function(){
    dill.classList.toggle('active')
    down.classList.toggle('rotate')
}