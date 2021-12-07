// char - caractere
// conjunto de char - string
// number - numeros
// boolean - true / false

// DOM - Document Object Model
// DOM é a modelagem do documento HTML em javascript

// document.body.style.background = 'red'; // muda o back da pagina para vermelho



const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* o codigo acima faz com que ocorra a alternancia entre o menu e a pagina principal */

/* codigo abaixo para ir para cada seção da pagina */

const links = document.querySelectorAll('nav ul li a') /* identifica os links de seção */

for (const link of links) { /* para cada link em links */
  link.addEventListener('click', function() { /* ao clicar sobre ele */
    nav.classList.remove('show') /* remover a classe show/ para de mostrar */
  })
}

/* mudar o header da pagina quando der scroll */



function changeHeaderWhenScroll() {
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight

  window.addEventListener('scroll', function() {
    if(this.window.scrollY >= navHeight) {
      header.classList.add("scroll")
    } else {
      header.classList.remove("scroll")
    }
  })
}



/* testimonials slider swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* SCROLL REVEAL : mostrar elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card
  #contact .text, #contact .links`
  , 
  { interval: 100 }
)

/* botao voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  
  window.addEventListener('scroll', function() {
    if (window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
})
}

/* menu ativo conforme a seção visível na pagina */
const section = document.querySelector('section[id]')
function activateMenuAtCurrentSectio() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*= '+ sectionId, +']')
      .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId, +']')
      ,classList.remove('active')
    }
  }
} 

window.addEventListener('scroll', function() {
  changeHeaderWhenScroll()
  backToTop()
})

