const header = document.querySelector("#header-inactive")
const sectionTwo = document.querySelector(".form-top")


const sectionTwoOptions = {
    rootMargin: "-600px 0px 0px 0px"
    
};


const sectionTwoObserver = new IntersectionObserver(function (
entries,
sectionTwoObserver

) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          header.classList.add('nav-scrolled-form')
      } else (header.classList.remove('nav-scrolled-form'));
    });
},
sectionTwoOptions);

sectionTwoObserver.observe (sectionTwo);