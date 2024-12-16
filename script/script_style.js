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
  if(compteurCookie>=50){
    compteurCookie-=50;
    puissanceClick+=1;
    nbreCookies.innerHTML =`${compteurCookie}`;
  }
})