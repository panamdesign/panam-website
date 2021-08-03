

const header = document.querySelector("#header-inactive")
const sectionOne = document.querySelector(".method-top")


const sectionOneOptions = {
    rootMargin: "-500px 0px 0px 0px"
    
};


const sectionOneObserver = new IntersectionObserver(function (
entries,
sectionOneObserver

) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
          header.classList.add('nav-scrolled')
      } else (header.classList.remove('nav-scrolled'));
    });
},
sectionOneOptions);

sectionOneObserver.observe (sectionOne);






