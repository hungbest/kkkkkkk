
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const cartBtn = document.getElementById("cart");
const jsCartModal = document.querySelector(".cart-modal")
const getSlideMain = document.querySelector(".header__slide-main")
const tabSlides = document.querySelectorAll(".header__slide-wrapper-tab");
const lengthSlideWrapper = tabSlides[0].offsetWidth;
const dataCart = JSON.parse(window.localStorage.getItem("dataCart"))
// document.querySelector(".cart__quantity").textContent = JSON.parse(window.localStorage.getItem("quantity"));

function renderCart(arr) {
    let html = "";
    arr.forEach((product) => {
        html += `
            <div class="cart-modal-list-item">
                <div class="cart-modal-list-item-image">
                    <img src="${product.img}" alt="" class="cart-modal-list-item-img">
                </div>

                <div class="cart-modal-list-item-info">
                    <h3 class="cart-modal-list-item-name">${product.name}</h3>
                    <p class="cart-modal-list-item-price">${product.price} VND</p>
                    <div class="cart-modal-list-item-size">
                        <span class="cart-modal-list-item-size-text">Size:</span>
                        <span class="cart-modal-list-item-size-number">${product.size}</span>
                    </div>

                    <div class="cart-modal-list-item-quantity">
                        <span class="cart-modal-list-item-quantity-text">Số lượng:</span>
                        <span class="cart-modal-list-item-quantity-number">${product.quantity}</span>
                    </div>
                </div>
             </div>
        `
    })
    document.querySelector(".cart-modal-list").innerHTML = html;
    
}


function moveSlide() {
    let positionX = 0;
    let count = 0;
    let index = 0;
    nextBtn.onclick = (e) => {
        if(count >= tabSlides.length - 1) {
            count = tabSlides.length - 1;
            return 
        } 
        positionX -= lengthSlideWrapper;
        getSlideMain.style = `transform: translateX(${positionX}px)`
        count++;
    }

    prevBtn.onclick = (e) => {
        if(count <= 0) {
            count = 0;
            return
        } 
        positionX += lengthSlideWrapper;
        getSlideMain.style = `transform: translateX(${positionX}px)`
        count--;
    }

    // setInterval(() => {
    //     console.log(count)
    //     if(count <= 0) {
    //         count = 0;
    //         return;
    //     } 
    //     positionX += lengthSlideWrapper;
    //     getSlideMain.style = `transform: translateX(${positionX}px)`
    //     count--;
       
    //  }, 1500)
}


function cart() {
    cartBtn.onclick = function(e) {
        if(jsCartModal.style.display == "flex") {
            jsCartModal.style.display = "none"
        }
        else 
        jsCartModal.style.display = "flex"
    }
}


renderCart(dataCart)
moveSlide()
cart()

