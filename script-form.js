const header = document.querySelector("#header-inactive")
const sectionTwo = document.querySelector(".form-top")


const sectionTwoOptions = {
    rootMargin: "-500px 0px 0px 0px"
    
};


const sectionTwoObserver = new IntersectionObserver(function (
entries,
sectionTwoObserver

) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          header.classList.add('nav-scrolled')
      } else (header.classList.remove('nav-scrolled'));
    });
},
sectionTwoOptions);

sectionTwoObserver.observe (sectionTwo);