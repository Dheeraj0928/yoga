const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');

        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.querySelector('span').textContent = '+';
            q.nextElementSibling.style.display = 'none';
        });

        if (!isActive) {
            question.classList.add('active');
            question.querySelector('span').textContent = '−';
            answer.style.display = 'block';
        }
    });
});

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-div ul');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {  
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
