function pause(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  async function effetCookie() {
    cookieImg.classList.add("effetClickCookie");
    await pause(201);
    cookieImg.classList.remove("effetClickCookie");
  }

const cookieImg = document.querySelector("#cookieImg")
const nbreCookies = document.querySelector("#nbreCookies")
var compteurCookie = 0;
cookieImg.addEventListener("click",()=>{
    effetCookie();
    compteurCookie++;
    nbreCookies.innerHTML =`${compteurCookie}`;
})