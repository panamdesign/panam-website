

const header = document.querySelector("#header-inactive")
const sectionOne = document.querySelector(".method-top")


const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
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

// const toggle = document.querySelector('.toggler')
// const fix = document.getElementById ('#header-inactive')

// toggle.addEventListener('click', () =>{
//     toggle.classList.toggle('active')
//     navigation.classList.toggle('active')
// })

// const toggle = document.querySelector('toggler')
// const logo = document.querySelector ('logo-hide')

// toggler.addEventListener('click', (e) => {
//     logo.removeAttribute('hidden');


// });