// let i = 0;
// let s = 1000;
// let adsItems = Array.from(document.querySelectorAll('.rotator__case'));
// const changeAd = setTimeout(function cnahge () {
//     adsItems.forEach((ad, i, adsItems) => {
//         if (ad.classList.contains('rotator__case_active')) {
//             ad.classList.remove('rotator__case_active')
//         }
//         adsItems[i].classList.add('rotator__case_active');
//         if (adsItems[i].nextElementSibling) {
//             i=i+1;
//         } else {
//             i=0;
//         }
//         s = ad.dataset.speed;
//         ad.style.color = ad.dataset.color;
//         changeAd = setTimeout(cnahge,s);
//     });
// },s)


let cardItems = document.querySelectorAll('.card');

for (const item of cardItems) { 
    let adsItems = item.querySelectorAll('.rotator__case');
    let s = 1000;
    for (const ad of adsItems) {
    let col=ad.dataset.color;
    ad.style.color = col;
    }
        let changeAd = setTimeout(function cnahge () {
            let elemCurrent = item.querySelector('.rotator__case_active');
            s = parseInt(elemCurrent.dataset.speed); 
            // console.log(s);
            let rotator = item.querySelector('.rotator');
            //   console.log(rotator)
            elemCurrent.classList.remove('rotator__case_active');
            elemCurrent = elemCurrent.nextElementSibling;
            //   console.log(elemCurrent);
            if (elemCurrent !== null) {
                elemCurrent.classList.add('rotator__case_active');
                changeAd = setTimeout(cnahge,s);
            } else {
                elemCurrent = rotator.firstElementChild;
                // console.log(elemCurrent)
                elemCurrent.classList.add('rotator__case_active');
                changeAd = setTimeout(cnahge,s);
            }      
        },s)
}

