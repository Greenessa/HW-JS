setInterval(() => {

const poliRequest = new XMLHttpRequest();
poliRequest.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
poliRequest.responseType = "json";
poliRequest.send();
poliRequest.addEventListener('load', () => {
    if ((poliRequest.status >= 200) && (poliRequest.status < 300)) {
        const poliFile = poliRequest.response;
        // console.log(poliFile["data"]);
        let titleEl = document.querySelector(".poll__title");
        titleEl.textContent = poliFile["data"]["title"];
        const listAnswers = Object.values(poliFile["data"]["answers"]);
        let idPoll = poliFile["id"];
        const ansAllEl = document.querySelector(".poll__answers");
        ansAllEl.innerHTML = "";
        for (const ans of listAnswers) {
            let ansEl = document.createElement('button');
            ansEl.classList.add('poll__answer');
            ansEl.textContent = ans;
            ansAllEl.appendChild(ansEl);
        }
        let listAnsElems = document.querySelectorAll('.poll__answer');
        for (let i = 0; i < listAnsElems.length; i++) {
            const el = listAnsElems[i];
            el.addEventListener('click', (e) =>{
                alert("Спасибо, ваш голос засчитан!");
                // e.preventDefault();
                const quanRequest = new XMLHttpRequest;
                quanRequest.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                quanRequest.responseType = "json";
                quanRequest.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                quanRequest.send(`vote=${idPoll}&answer=${i}`);
                quanRequest.addEventListener("load", () => {
                    let resFile = quanRequest.response;
                    // console.log(quanRequest.status);
                    let listStat = resFile["stat"];
                    // console.log(listStat);
                    // console.log(resFile["stat"][0]["answer"]);
                    // console.log(resFile["stat"][0]["votes"]);
                    const ansAllNew = document.querySelector(".poll__answers");
                    ansAllNew.innerHTML = "";
                    let sum = 0;
                    for (const ans of listStat) {
                        sum = sum + parseInt(ans["votes"]);
                    };
                    for (const ans of listStat) {
                        let ansStat = document.createElement("div");
                        let stat = Math.round(parseInt(ans["votes"])/sum*100);
                        ansStat.textContent = `${ans["answer"]}: ${stat}%`;
                        ansAllNew.appendChild(ansStat)
                    }
                    // location.reload();
                })
                
                // location.reload();
            })
        }
      } else {
        console.error('Ошибка загрузки:', poliRequest.statusText);
      }
})
}, 6000)