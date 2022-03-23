const listOpenMenu = document.querySelectorAll(".container__list-same-title");
const listMenu = document.querySelectorAll(".home-filter-same")
const iconArrows = document.querySelectorAll(".container__list-same-icon")
const buyBtns = document.querySelectorAll(".buy-product");
const container = document.querySelector(".containersub__product");
const btnHomeFilters = document.querySelectorAll(".home-filter-item");


var commonProducts =  [
       
    {
        name: "Urbas Ruler - Low Top",
        img: "./assests/img/Pro_AV00124_2-500x500.jpeg",
        description: "Granite Green",
        price: 590000,
        quantity: 3,
        imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
        state: true
    },
    {
        name: "Urbas Ruler - Low Top",
        img: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
        description: "Icelandic Blue",
        price: 590000,
        quantity: 3,
        imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
        state: false
    },
    {
        name: "Urbas Rbbuler - Low Top",
        img: "https://ananas.vn/wp-content/uploads/Pro_AV00126_1.jpeg",
        description: "Silver Pink",
        price: 590000,
        quantity: 3,
        imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
        state: false
    },
    {
        name: "UrbasccRuler - Low Top",
        img: "./assests/img/Pro_AV00124_2-500x500.jpeg",
        description: "Granite Green",
        price: 590000,
        quantity: 3,
        imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
        state: true
    },
  
  
]

function renderDefault() {
    let html = "";
    commonProducts.forEach((product, i) => {
        html += `
            <div class="containersub__product-item">
                <div class="containersub__product-item-image">
                    <a href="./product.html" class="containersub__product-item-link">
                        <img src="${product.img}" alt="" class="containersub__product-item-img">
                    </a>
                    <i onclick="activeHeart()" class="icon-heart fa-solid fa-heart"></i>
                    <a href="./product.html" class="buy-product-link">
                        <button class="buy-product">MUA NGAY</button>
                    </a>
                </div>

                <div class="containersub__product-item-brand">
                    <span> New Arrival</span>
                </div>

                <div class="containersub__product-item-info">
                    <a href="./product.html" class="containersub__product-item-link">
                        <h3 class="containersub__product-item-name">
                        ${product.name}
                        </h3>
                    </a>

                    <span class="containersub__product-item-descr">
                        ${product.description}
                    </span>

                    <span class="containersub__product-item-price">
                        ${product.price}
                    </span>
                </div>

            </div>
        `
    })
    document.querySelector(".containersub__product-row").innerHTML = html;
    
}


function myFunc() {
    let tmp
    commonProducts.forEach((pro, i) => {
        const name = document.querySelectorAll(".containersub__product-item-name")[i]
        const btn = document.querySelectorAll(".buy-product-link")[i]
        const img = document.querySelectorAll(".containersub__product-item-img")[i];
        img.onmouseover = function(e) {
            tmp = img.src;
            img.src = pro.imgHover;
        }
        img.onmouseout = function(e) {
            img.src = tmp;
        }

        img.onclick = btn.onclick = name.onclick = function(e) {
            window.localStorage.setItem("getData", JSON.stringify(pro))
        }
    })
}



// var femaleProducts = [
       
//     {
//         id: 1,
//         name: "Urbas Ruler - Low Top",
//         img: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         description: "Icelandic Blue",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
//     {
//         id: 2,
//         name: "Urbas Ruler - Low Top",
//         img: "https://ananas.vn/wp-content/uploads/Pro_AV00126_1.jpeg",
//         description: "Silver Pink",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
//     {
//         id: 3,
//         name: "Urbas Ruler - Low Top",
//         img: "./assests/img/Pro_AV00124_2-500x500.jpeg",
//         description: "Granite Green",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
//     {
//         id: 4,
//         name: "Urbas Ruler - Low Top",
//         img: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         description: "Icelandic Blue",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
  
// ]

// var maleProducts =  [
       
//     {
//         id: 1,
//         name: "Urbas Ruler - Low Top",
//         img: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         description: "Icelandic Blue",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
//     {
//         id: 2,
//         name: "Urbas Ruler - Low Top",
//         img: "https://ananas.vn/wp-content/uploads/Pro_AV00126_1.jpeg",
//         description: "Silver Pink",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
//     {
//         id: 3,
//         name: "Urbas Ruler - Low Top",
//         img: "./assests/img/Pro_AV00124_2-500x500.jpeg",
//         description: "Granite Green",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
//     {
//         id: 4,
//         name: "Urbas Ruler - Low Top",
//         img: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         description: "Icelandic Blue",
//         price: "590.000 VND",
//         quantity: 3,
//         imgHover: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1.jpeg",
//         state: true
//     },
   
    
// ]




// function renderNewArr() {
//     let html = "";
//     newArrival.forEach((sp, index) => {
//         html += `
//                 <div class="containersub__product-item">
//                 <div class="containersub__product-item-image">
//                     <a href="./product.html" class="containersub__product-item-link">
//                         <img src="${sp.img}"  alt="" class="containersub__product-item-img">
//                     </a>
//                     <i onclick="activeHeart()" class="icon-heart fa-solid fa-heart"></i>
//                     <a href="./product.html" class="buy-product-link">
//                             <button class="buy-product">MUA NGAY</button>
//                     </a>
//                 </div>
//                 <div class="containersub__product-item-brand">
//                     <span> New Arrival</span>
//                 </div>

//                 <div class="containersub__product-item-info">
//                     <h3 class="containersub__product-item-name">
//                         ${sp.name}
//                     </h3>

//                     <span class="containersub__product-item-descr">
//                         ${sp.description}
//                     </span>

//                     <span class="containersub__product-item-price">
//                         ${sp.price}
//                     </span>
//                 </div>

//             </div>
//         `
//     })
//     document.querySelector(".containersub__product-row-new").innerHTML = html;
// }



// function renderProduct(arr) {
//     let html = "";
//     arr.forEach((product) => {
//         var obj = product;
//         html += `
//                 <div class="containersub__product-item">
//                     <div class="containersub__product-item-image">
//                        <a href="./product.html" class="containersub__product-item-link">
//                            <img src="${product.img}" alt="" class="containersub__product-item-img">
//                         </a>
//                         <i onclick="activeHeart()" class="icon-heart fa-solid fa-heart"></i>
//                         <a href="./product.html" class="buy-product-link">
//                             <button class="buy-product">MUA NGAY</button>
//                         </a>
//                     </div>

//                     <div class="containersub__product-item-info">
//                         <a href="./product.html" class="containersub__product-item-link">
//                             <h3 class="containersub__product-item-name">
//                             ${product.name}
//                             </h3>
//                         </a>

//                         <span class="containersub__product-item-descr">
//                             ${product.description}
//                         </span>

//                         <span class="containersub__product-item-price">
//                             ${product.price}
//                         </span>
//                     </div>

//                 </div>
//         `
//     })
//     document.querySelector(".containersub__product-row").innerHTML = html;
   
// }

function changeBtn() {
    btnHomeFilters.forEach((btn, index) => {
        btn.addEventListener("click", function(e){
            console.log(index)
            btnHomeFilters[0].style.opacity = btnHomeFilters[1].style.opacity = btnHomeFilters[2].style.opacity =0.5;
            btn.style.opacity = 1;
            if(index == 0) {
               // renderProduct(commonProducts);
            }
            else if(index == 1) {
               // renderProduct(femaleProducts)
            }
            else if(index == 2) {
               // renderProduct(maleProducts)
            }
        })
    })
}

function activeHeart() {
    const iconHearts = document.querySelectorAll(".icon-heart")
    iconHearts.forEach((icon, index) => {
        icon.addEventListener("click", (e) => {
            icon.classList.toggle("active-heart")
        })
    })
}

function openMenu() {
    listOpenMenu.forEach((btnMenu, index) => {
        btnMenu.addEventListener('click', (e) => {
            if(listMenu[index].style.display == "none") {
                listMenu[index].style.display = "block";
                iconArrows[index].style.transform = "rotate(180deg)";
                document.querySelectorAll(".container__list-same-title")[index].style.color = "orangered";

            }
            else  {
                listMenu[index].style.display = "none";
                iconArrows[index].style.transform = "rotate(0deg)";
                document.querySelectorAll(".container__list-same-title")[index].style.color = "black";
            }
                
        })
    })
}

// function isNew(data) {
//     if(data)
// }


//renderNewArr()
renderDefault()
myFunc()
changeBtn()
openMenu()
activeHeart()



