const rateRequest = new XMLHttpRequest();
rateRequest.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
rateRequest.responseType = "json";
rateRequest.send();
rateRequest.addEventListener('readystatechange', () => {
    if (rateRequest.readyState === rateRequest.DONE) {
        let load = document.querySelector('.loader_active');
        if (load) {
            load.classList.remove('loader_active');
        };
        let rateFile = rateRequest.response;
        // console.log(rateFile["response"]["Valute"]["AUD"]);
        let listCurrency = Object.keys(rateFile["response"]["Valute"])
        // console.log(listCurrency);
        let ItemsEl = document.querySelector("#items");
        // console.log(ItemsEl); 
        let itemElems = document.querySelectorAll('.item');
        for (const item of itemElems) {
            item.remove();
        }
        for (const val of listCurrency) {
            let curElNew = document.createElement("div");
            curElNew.classList.add('item');
            ItemsEl.appendChild(curElNew);
            // console.log(ItemsEl);
            // console.log(rateFile["response"]["Valute"][val]["CharCode"]);
            let nameCur = rateFile["response"]["Valute"][val]["CharCode"];
            let rateCur = rateFile["response"]["Valute"][val]["Value"];
            curElNew.innerHTML = `
                <div class="item__code">
                    ${nameCur}
                </div>
                <div class="item__value">
                    ${rateCur}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            `
        }
        localStorage.setItem('list', ItemsEl.innerHTML);
        // console.log(ItemsEl.innerHTML);
    }
})
document.addEventListener('DOMContentLoaded', () => {
    let oldList = localStorage.getItem('list');
    let listEl = document.querySelector("#items");
    let load = document.querySelector('.loader_active');
    if (oldList) {
        load.classList.remove('loader_active');
        listEl.innerHTML = oldList;
    }
})