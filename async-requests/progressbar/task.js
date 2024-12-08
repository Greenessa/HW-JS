let form = document.forms[0];
// console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = form.elements.file;
    console.log(input);
    let file = input.files[0];
    console.log(file);
    if (file) {
      upload(form);
    }
    e.target.reset();
    setTimeout(() => {
        const elName = document.querySelector('.input__wrapper-desc');
        elName.textContent = "";
        const progress = document.getElementById( 'progress' );  
        progress.value = 0;
    }, 1500)
  })
function updateProgress(event) {
    // console.log(event.lengthComputable);
    if (event.lengthComputable) {
      const progress = document.getElementById('progress');  
      progress.value = parseInt(event.loaded)/parseInt(event.total);
    //   console.log(progress.value);
    } else {
      alert('невозможно вычислить состояние загрузки');
    }
  } 
function upload(form) {
    const req = new XMLHttpRequest();
    req.upload.addEventListener('progress', updateProgress);
    req.onload = req.onerror = function() {
      if (this.status >= 200 && this.status < 300) {
        console.log("success");
      } else {
        console.log("error " + this.status);
      }
    };
    req.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    let formData = new FormData(form);
    req.send(formData);
  }
  