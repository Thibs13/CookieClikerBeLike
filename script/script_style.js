function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  async function effetCookie() {
    cookieImg.classList.add("effetClickCookie");
    await pause(201);
    cookieImg.classList.remove("effetClickCookie");
  }

const blocSettings = document.querySelector(".bloc-settings")
const btnList = document.querySelector(".list-button")
const cookieImg = document.querySelector("#cookieImg")
const nbreCookies = document.querySelector("#nbreCookies")

const btnChef = document.querySelector(".chef")
const coutChef = document.querySelector("#coutChef")
var nombreChef = 0;
var coutChefComp = 50;

const btnUsine = document.querySelector(".usine")
const coutUsine = document.querySelector("#coutUsine")
var nombreUsine = 0;
var coutUsineComp = 1000;


var compteurCookie = 0;
var puissanceClick = 1;

cookieImg.addEventListener("click",()=>{
    effetCookie();
    compteurCookie+=puissanceClick;
    nbreCookies.innerHTML =`${compteurCookie}`;
})

btnList.addEventListener("click",()=>{
  blocSettings.classList.toggle("inv")
  cookieImg.classList.toggle("inv")
})
btnChef.addEventListener("click",()=>{
  if(compteurCookie>=coutChefComp){
    compteurCookie-=coutChefComp;
    puissanceClick+=1;
    nombreChef++;
    coutChefComp=Math.round(50*(1.25**nombreChef));
    coutChef.innerHTML= `Coût : ${coutChefComp}`
    nbreCookies.innerHTML =`${compteurCookie}`;
  }
})

btnUsine.addEventListener("click",()=>{
  if(compteurCookie>=coutUsineComp){
    compteurCookie-=coutUsineComp;
    puissanceClick+=25;
    nombreUsine++;
    coutUsineComp=Math.round(1000*(1.2**nombreUsine));
    coutUsine.innerHTML= `Coût : ${coutUsineComp}`
    nbreCookies.innerHTML =`${compteurCookie}`;
  }
})
document.addEventListener('dblclick', function (e) {
  e.preventDefault();
});