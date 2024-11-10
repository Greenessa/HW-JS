let incItems = document.querySelectorAll(".product__quantity-control_inc");
let q = 0;
for (const incItem of incItems) {
    incItem.addEventListener("click", () => {
        let parent = incItem.parentElement;
        console.log(parent);
        let quanElem = parent.querySelector(".product__quantity-value");
        q = parseInt(quanElem.textContent);
        q += 1;
        quanElem.textContent = q;
        // console.log(q);
    })
}
let decItems = document.querySelectorAll(".product__quantity-control_dec");
for (const decItem of decItems) {
    decItem.addEventListener("click", () => {
        let parentDec = decItem.parentElement;
        // console.log(parentDec);
        let quanElem2 = parentDec.querySelector(".product__quantity-value");
        q = parseInt(quanElem2.textContent);
        if (q >1) {
            q -= 1;
            quanElem2.textContent = q; 
        }
        // console.log(q);
    })
}
let buttonItems = document.querySelectorAll(".product__add");
let cartElem = document.querySelector(".cart__products");
for (const buttonItem of buttonItems) {
    buttonItem.addEventListener("click", (e) => {
        e.preventDefault();
        let parentAdd = buttonItem.parentElement;
        // console.log(parentAdd)
        let valueElem = parentAdd.querySelector(".product__quantity-value");
        let value = parseInt(valueElem.textContent);
        let prodElem = parentAdd.closest(".product");
        let iden = prodElem.dataset.id;
        // console.log(iden);
        let imageElem = prodElem.querySelector(".product__image");
        let cloneImg = imageElem.cloneNode(true);
        let top = parseInt(imageElem.getBoundingClientRect().top);
        let left = parseInt(imageElem.getBoundingClientRect().left);
        // console.log(top,left);
        // console.log(imageElem)
        let srcImage = imageElem.src;
        // console.log(cartElem.dataset.id);
        let idElem = cartElem.querySelector(`[data-id="${iden}"]`);
        // console.log(idElem);
        if (!idElem) {
            cartElem.insertAdjacentHTML("beforeend", `<div class="cart__product" data-id=${iden}>
        <img class="cart__product-image" src=${srcImage}>
        <div class="cart__product-count">${value}</div>
    </div>`)
        } else {
           let q =  parseInt(idElem.querySelector(".cart__product-count").textContent);
           q=q+value;
           idElem.querySelector(".cart__product-count").textContent = q;
           let imgElcart = idElem.querySelector(".cart__product-image");
           let top1 = parseInt(imgElcart.getBoundingClientRect().top);
           let left1 = parseInt(imgElcart.getBoundingClientRect().left);
           if (top1>=0 && left1>=0) {
                let d1 = (top-top1)/4;
                let d2 = (left1-left)/4;
                // console.log(top,left);
                // console.log(top1,left1);
                    let cloneElem = null;
                let moveId = setInterval(() => {
                    cloneElem = cartElem.appendChild(cloneImg);
                    cloneElem.style.position = "absolute";
                    top = Math.round(top - d1);
                    left = Math.round(left+d2);
                    cloneElem.style.top = top + 'px';
                    cloneElem.style.left = left + 'px';
                },1000);
                setTimeout(() => {
                    clearInterval(moveId);
                    cloneElem.remove();
                },4000)
            }
            // let cartAll = document.querySelector(".cart__products");
        // let serialEl = JSON.stringify(cartAll);
        // localStorage.setItem('cart', serialE);
        // let returnEl = JSON.parse(localStorage.getItem('cart'));
        }
        let cartGood = cartElem.querySelector(".cart__product");
        let titleEl = cartElem.previousElementSibling;
        if (cartGood) {
            titleEl.style.display = 'block';
            localStorage.setItem('cart', cartElem.innerHTML);
        } else {
            titleEl.style.display = 'none';
            localStorage.removeItem('cart');
        }
        
        // cartRenew.insertAdjacentElement('beforeend', returnEl);
    })
}

let removeElems = document.querySelectorAll(".product__remove");
for (let removeElem of removeElems) {
    removeElem.addEventListener("click", () => {
        let parentRemove = removeElem.parentElement;
        let prodElemRemove = parentRemove.closest(".product");
        let idRemove = prodElemRemove.dataset.id;
        let cartEl2 = document.querySelector(".cart__products");
        let idRemoveEl = cartEl2.querySelector(`[data-id="${idRemove}"]`)
        if (idRemoveEl) {
            idRemoveEl.remove();
        }
        
        let cartGood = cartEl2.querySelector(".cart__product");
        let titleEl = cartEl2.previousElementSibling;
        if (cartGood) {
            titleEl.style.display = 'block';
            localStorage.setItem('cart', cartEl2.innerHTML);
        } else {
            titleEl.style.display = 'none';
            localStorage.removeItem('cart');
        }
        
    }) 
}
// localStorage.removeItem('cart');
document.addEventListener("DOMContentLoaded", () => {
    let returnEl = localStorage.getItem('cart');
    let titleEl = document.querySelector(".cart__title");
        console.log(returnEl);
        if (returnEl) {
            titleEl.style.display = 'block';
            cartElem.innerHTML = returnEl;
        }
})
