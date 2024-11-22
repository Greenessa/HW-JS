let tipsElems = document.querySelectorAll(".has-tooltip");
let placeList = ["bottom", "bottom", "top", "top", "left", "right"];
for (const el of tipsElems) {
    let curElTip = document.createElement("div"); 
    curElTip.classList.add('tooltip');
    curElTip.textContent = el.title;
    el.insertAdjacentElement('afterend', curElTip);
    for (const place of placeList) {
        el.dataset.position = place;
    }
}
let clickTip = null;
for (const el of tipsElems) {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(el);
        console.log(clickTip);
        if (clickTip === el) {
            el.nextElementSibling.classList.toggle('tooltip_active');
        } else {
        let activeTip = document.querySelector('.tooltip_active');
        if (activeTip) {
            activeTip.classList.remove('tooltip_active');
        } 
        activeTip = el.nextElementSibling;
        activeTip.classList.add('tooltip_active');
        console.log(el.dataset.position);
        let left = parseInt(el.getBoundingClientRect().left);
        let top = parseInt(el.getBoundingClientRect().top);
        let right = parseInt(el.getBoundingClientRect().right);
        let bottom = parseInt(el.getBoundingClientRect().bottom);
        if (el.dataset.position = "top") {
            let  q = top - (bottom - top)*2;
            activeTip.style.top = q + 'px';
            activeTip.style.left = left+'px';
        }
        if (el.dataset.position = "bottom") {
            let  b = bottom + (bottom - top)*2;
            activeTip.style.top = b + 'px';
            activeTip.style.left = left+'px';
        }
        if (el.dataset.position = "left") {
            let  l = left - (right - left)*0.9;
            activeTip.style.top = top + 'px';
            activeTip.style.left = l+'px';
        }
        if (el.dataset.position = "right") {
            let  r = right + (right - left)*0.2;
            activeTip.style.top = top + 'px';
            activeTip.style.left = r +'px';
        }
    }
    clickTip = el;
    })
}