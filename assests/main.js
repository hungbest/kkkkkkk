const prevBtnImg = document.querySelector(".container__product-left-prev");
const nextBtnImg = document.querySelector(".container__product-left-next");
const blockSlides = document.querySelectorAll(".container__product-left-tab");
const BTNS = document.querySelectorAll('.btn1');
const banners = document.querySelectorAll(".container__banner");
const imgSlides = document.querySelectorAll(".container__product-3-1");
const btn2Prev = document.querySelector(".btn__2-prev");
const btn2Next = document.querySelector(".btn__2-next");
const mainSlide = document.querySelector('.container__product-3-main');
const mainTabLine = document.querySelector(".container__product-left-main");
const productSlides = document.querySelectorAll(".container__product-3-slide");
const getBanner = document.querySelectorAll(".container__banner");
const mainBanner = document.querySelector(".container__main");
const getBannerWrapper = document.querySelector(".container__wrapper");
const mainSlideLength = productSlides[0].offsetWidth + "px";
const mainTabLineLength = blockSlides[0].offsetWidth + "px";
const lengthBanner = getBanner[0].offsetWidth;
getBannerWrapper.style.width = getBanner[0].offsetWidth + "px";
let currentTabIndex = 0;
let currentTabIndex1 = 0;


//
function moveImg() {
    let countBtn = 0;
    let positionXBtn = 0;
    btn2Next.onclick = function(e) {
        countBtn++;
        if(countBtn > 1) {
            countBtn = 1;
            return;
        } 
        positionXBtn = positionXBtn - productSlides[0].offsetWidth;
        mainSlide.style = `transform: translateX(${positionXBtn}px)`;

    }
    btn2Prev.onclick = function(e) {
        countBtn--;
        if(countBtn < 0) {
            countBtn = 0;
            return;
        } 
        positionXBtn = positionXBtn + productSlides[0].offsetWidth;
        mainSlide.style = `transform: translateX(${positionXBtn}px)`;
    }
    //}
}

//
function moveBanner() {
    let currentBtn = 0;
    let positionX = 0;
    BTNS.forEach((btn, index) => {
        btn.onclick = function(e) {
            BTNS[currentBtn].classList.remove("active");
            btn.classList.add("active")
            if(index > currentBtn) {
                positionX += lengthBanner * (index - currentBtn);
                console.log(positionX)
            } else if(index < currentBtn){
                positionX -= lengthBanner * (currentBtn - index);
                console.log(positionX)
            }
            currentBtn = index;
            mainBanner.style = `transform: translateX(${-positionX}px)`
            
        }
    })
   
}

//
function moveTab() {
        let positionXLine = 0;
        let countLine = 0;
        nextBtnImg.onclick = () => {
            prevBtnImg.style.backgroundColor = "white";
            nextBtnImg.style.backgroundColor = "orangered";
            countLine++;
            if(countLine > 1) {
                countLine = 1;
                return;
            } 
            positionXLine = positionXLine - blockSlides[0].offsetWidth;
            mainTabLine.style = `transform: translateX(${positionXLine}px)`;
        }
       
        prevBtnImg.onclick = () => {
            nextBtnImg.style.backgroundColor = "white";
            prevBtnImg.style.backgroundColor = "orangered";
            countLine--;
            if(countLine < 0) {
                countLine = 0;
                return;
            } 
            positionXLine = positionXLine + blockSlides[0].offsetWidth;
            mainTabLine.style = `transform: translateX(${positionXLine}px)`;
       }
}

function main() {
    moveImg()
    moveTab()
    moveSlide()
    moveBanner()
    cart()
  
}

main()
