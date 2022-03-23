
const btnShow = document.querySelectorAll(".btn-show")
const information = document.querySelectorAll(".information")
const iconHeart = document.querySelector(".contain__info-add-icon")
const openSelectQuantity = document.querySelector(".contain__info-quantity-select")
const selectQuantity = document.querySelector(".contain__quantity")
const openSelectSize = document.querySelector(".contain__info-size-select")
const selectSize = document.querySelector(".contain__size")
let size = document.querySelector(".contain__info-size-select-number")
let quantity = document.querySelector(".contain__info-quantity-select-number")
const arrowIcons = document.querySelectorAll(".icon-arrow");
const btnAdd = document.querySelector(".contain__info-add-btn")
const data = JSON.parse(window.localStorage.getItem("getData"))
const myCart = []
var currentMoney = 0



function showSelect() {
    let currentIndex = 0;
    let currentIndex1 = 0;
    const tmp = document.querySelectorAll(".contain__size-wrapper table td")
    openSelectSize.addEventListener("click", function(e) {
        selectSize.classList.toggle("show")
        tmp.forEach((td, i) => {
            td.onclick = function(e) {
                tmp.forEach((el, j) => {
                    el.style.border = "1px solid #222"
                })
                size.textContent = e.target.textContent;
                size.style.fontWeight = 600;
                e.target.style.border = "3px solid #000"
                currentIndex = i;
            }
        })
        if(String(size.textContent) != "") {
            const tmp = document.querySelectorAll(".contain__quantity-wrapper table td");
            let current = 0;
            openSelectQuantity.style.cursor = "pointer"
            openSelectQuantity.addEventListener("click", function(e) {
                selectQuantity.classList.toggle("show")
                tmp.forEach((td, i) => {
                    td.onclick = function(e) {
                        tmp.forEach((el, j) => {
                            el.style.border = "1px solid #222"
                        })
                        
                        quantity.textContent = e.target.textContent;
                        quantity.style.fontWeight = 600;
                        e.target.style.border = "3px solid #000"
                        current = i;
                    }
                })
            })
        }
       
    })
    
     
}


function hasSizeQuantity() {
    if(String(size.textContent) == "" || String(quantity.textContent) == "")
        return false
    return true
}

// function btnBuyProduct() {
//     btnAdd.addEventListener('click', function(e) {
//         if(!hasSizeQuantity()) {
//             document.querySelector(".check").classList.toggle("hide");
//             return;
//         } 

//         currentMoney += data.price * Number(quantity.textContent)
//         data.size = Number(size.textContent)
//         data.quantity = Number(quantity.textContent)
//         myCart.push(data)
//         renderCart(myCart)
//          document.querySelector(".cart-modal-price-money").textContent = `${currentMoney } VND`
//         window.localStorage.setItem("dataCart", JSON.stringify(myCart))
        
//     })
// }


function renderInfomationProduct(data) {
    let htmlImg = `
        <div class="contain__info-image-big">
            <img src="${data.img}" alt="23345" class="contain__info-image-big-img">
        </div>

        <div class="contain__info-images-small">
            <div class="contain__info-images-small-wrapper">
                <div class="contain__info-images-small-main">
                    <div class="contain__info-images-small-main-slide">
                        <img src="" alt="">
                    </div>

                </div>
            </div>
        </div>
    `

    let htmlInfo = (data.state == true) ? `
        <h2 class="contain__info-text-name">
            ${data.name}
        </h2>

        <div class="contain__info-text-common">
            <span class="contain__info-text-code">Mã sản phẩm: 
                <span style="font-weight: 600;">AV00124</span>
            </span>
            <span class="contain__info-text-status">Tình trạng: 
                <span style="font-weight: 600;">Arrivial</span>
            </span>
        </div>

        <span style="color: orangered;font-weight: 600; font-size: 24px;" class="contain__info-text-price">${data.price} VND</span>    
    ` :
    `
        <h2 class="contain__info-text-name">
            ${data.name}
        </h2>

        <div class="contain__info-text-common">
            <span class="contain__info-text-code">Mã sản phẩm: 
                <span style="font-weight: 600;">AV00124</span>
            </span>
        </div>

        <span style="color: orangered;font-weight: 600; font-size: 24px;" class="contain__info-text-price">${data.price} VND</span>    
    `
    

    document.querySelector(".contain__info-image").innerHTML = htmlImg;
    document.querySelector(".contain__info-text-info").innerHTML = htmlInfo;

}

function activeHeart() {
    iconHeart.onclick = function(e) {
        iconHeart.classList.toggle("active-heart")
    }
}


function showInfomation() {
    btnShow.forEach((btn, index) => {
        btn.addEventListener("click", function(e) {
            if(information[index].style.display == "none") {
                information[index].style.display = "block"
                arrowIcons[index].style.transform = "rotate(180deg)";
                arrowIcons[index].style.color = "orangered";
                btn.style.color = "orangered";
            } else {
                information[index].style.display = "none"
                arrowIcons[index].style.transform = "rotate(0deg)";
                arrowIcons[index].style.color = "black";
                btn.style.color = "black";
            }
            
        })
      
    })
}

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
                        <span class="cart-modal-list-item-size-number">${size.textContent}</span>
                    </div>

                    <div class="cart-modal-list-item-quantity">
                        <span class="cart-modal-list-item-quantity-text">Số lượng:</span>
                        <span class="cart-modal-list-item-quantity-number">${product.repeat}</span>
                    </div>
                </div>
             </div>
        `
    })
    document.querySelector(".cart-modal-list").innerHTML = html;
}


renderInfomationProduct(data)
activeHeart()
showInfomation()
showSelect() 
//btnBuyProduct()