const a = document.querySelectorAll('.social_btn')

a.forEach(e => e.addEventListener('mouseover', () => {
   let reqClass = e.classList[1]
   let x = document.querySelector(`.social-text.${reqClass}1`)
   x.style.opacity = 1;
}))

a.forEach(e => e.addEventListener('mouseout', () => {
   let reqClass = e.classList[1]
   let x = document.querySelector(`.social-text.${reqClass}1`)
   x.style.opacity = 0;
}))
