document.addEventListener('DOMContentLoaded', function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  )

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener('click', function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})

let skills = document.querySelectorAll('.tech')
let header = document.querySelector('.hero')
let navItems = document.querySelectorAll('.boop')
let arrow = document.querySelector('.down-arrow')
let about = document.querySelector('.about-section')
let project = document.querySelectorAll('.project')

const query768 = window.matchMedia('(max-width: 768px)')
const query1100 = window.matchMedia('(max-width: 1100px)')

// ensure that tech list/skills fade in the same on desktop as they do mobile

const mediaQueries = (mobile, query2) => {
  // if window is smaller than 768px wide
  if (mobile.matches) {
    skills.forEach(skill => {
      skill.classList.remove('tech')
      skill.classList.add('techMobile')
    })

    header.classList.remove('is-large')
    header.classList.add('is-fullheight')

    arrow.classList.remove('hidden')

    about.classList.remove('about-section')

    // project.forEach(proj => {
    //   proj.classList.remove('project')
    // })

    console.log(project[0])

    // if window is bigger than 768px wide
  } else if (!mobile.matches) {
    skills.forEach(skill => {
      skill.classList.add('tech')
      skill.classList.remove('techMobile')
    })
    header.classList.remove('is-fullheight')
    header.classList.add('is-large')

    arrow.classList.add('hidden')
    about.classList.add('about-section')

    // project.forEach(proj => {
    //   proj.classList.add('project')
    // })
    
  }

  // if window is smaller than 1100px wide
  if (query2.matches) {
    navItems.forEach(nav => {
      nav.classList.remove('boop')
    })

    console.log('below 1100px')
    console.log(projectDescription[0])
    // projectDescription.forEach(desc => {
    //   desc.classList.remove('is-two-thirds')
    //   desc.classList.add('is-one-third')
    // })

    // projectDescription[0].classList.remove('is-two-thirds')
    // projectDescription[0].classList.add('is-one-third')

    // projectImage.forEach(img => {
    //   img.classList.remove('is-one-third')
    //   img.classList.add('one-two-thirds')
    // })

    // if window is bigger than 1100px wide
  } else {
    navItems.forEach(nav => {
      nav.classList.add('boop')
    })
  }
}

mediaQueries(query768, query1100)
query768.addListener(mediaQueries)
query1100.addListener(mediaQueries)

// fade in elements on page
window.sr = ScrollReveal()
sr.reveal('#project')
sr.reveal('#contact')
sr.reveal('.tech', 50)
sr.reveal('.techMobile')
sr.reveal('.boop', 25)
sr.reveal('.level-item', 25)
sr.reveal('.tag', { delay: 100 }, 50)
sr.reveal('.tag2', { delay: 100 }, 50)
sr.reveal('.tag3', { delay: 100 }, 50)

// initialize particles.js header
particlesJS(
  'particles-js',
  {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
        image: { src: 'img/github.svg', width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  },
  function() {
    console.log('particles.js activate!')
  }
)
