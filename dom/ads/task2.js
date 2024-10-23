let cardItems = document.querySelectorAll('.card');

for (const item of cardItems) {
    let adsItems = item.querySelectorAll('.rotator__case');
    let sp = [];
    for (const ad of adsItems) {
    let col=ad.dataset.color;
    sp.push(parseInt(ad.dataset.speed));
    ad.style.color = col;
    } 
    console.log(sp);
    for (let s of sp) {
        setInterval(() => {
            let elemCurrent = item.querySelector('.rotator__case_active');
            let rotator = item.querySelector('.rotator');
            //   console.log(rotator)
            elemCurrent.classList.remove('rotator__case_active');
            elemCurrent = elemCurrent.nextElementSibling;
            //   console.log(elemCurrent);
            if (elemCurrent !== null) {
                elemCurrent.classList.add('rotator__case_active');
            } else {
                elemCurrent = rotator.firstElementChild;
                // console.log(elemCurrent)
                elemCurrent.classList.add('rotator__case_active');
            }   
        },s)
 }
}

let cardItems = document.querySelectorAll('.card');

for (const item of cardItems) {
    let adsItems = item.querySelectorAll('.rotator__case');
    let sp = [];
    // let s = 0;
    for (const ad of adsItems) {
    let col=ad.dataset.color;
    sp.push(parseInt(ad.dataset.speed));
    ad.style.color = col;
    }
    for (let s of sp) {
    // s = parseInt(ad.dataset.speed);
        const changeAd = setTimeout(() => {
            let elemCurrent = item.querySelector('.rotator__case_active');
            // s = parseInt(elemCurrent.dataset.speed); 
            // console.log(s);
            let rotator = item.querySelector('.rotator');
            //   console.log(rotator)
            elemCurrent.classList.remove('rotator__case_active');
            elemCurrent = elemCurrent.nextElementSibling;
            //   console.log(elemCurrent);
            if (elemCurrent !== null) {
                elemCurrent.classList.add('rotator__case_active');
                changeAd;
            } else {
                elemCurrent = rotator.firstElementChild;
                // console.log(elemCurrent)
                elemCurrent.classList.add('rotator__case_active');
                changeAd;
            }      
        },s)
    }
}

