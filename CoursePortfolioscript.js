document.addEventListener("DOMContentLoaded", () => {
  // Custom cursor
  const cursor = document.getElementById("cursor")
  const cursorBlur = document.getElementById("cursor-blur")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
    cursorBlur.style.left = e.clientX - 200 + "px"
    cursorBlur.style.top = e.clientY - 200 + "px"
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      const navbarHeight = document.querySelector("#navbar").offsetHeight
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    })
  })

  // Change navbar background color on scroll
  const navbar = document.getElementById("navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "rgba(12, 12, 12, 0.8)"
    } else {
      navbar.style.backgroundColor = "transparent"
    }
  })

  // Typing effect for home
  const typewriter = document.getElementById("typewriter")
  const text = "Computer Science Student"
  let i = 0

  function typeWriter() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  typeWriter()

  VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  })

  const faders = document.querySelectorAll(".fade-in")
  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add("appear")
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  faders.forEach((fader) => {
    appearOnScroll.observe(fader)
  })
})

document.body.style.cursor = "none";  // Hide cursor
