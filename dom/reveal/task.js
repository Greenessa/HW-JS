let elems = document.querySelectorAll('.reveal');

    for (const elem of elems) {
      document.addEventListener('scroll', () => {
      // console.log(elem);
      const {top, bottom} = elem.getBoundingClientRect();
      console.log(top,bottom,window.innerHeight);
      if (bottom < 0 || top > window.innerHeight) {
        elem.classList.remove('reveal_active'); 
      } else if (bottom > 0 || top < window.innerHeight) {
        elem.classList.add('reveal_active');
      }
    })
  }