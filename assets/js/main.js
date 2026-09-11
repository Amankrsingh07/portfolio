const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const header = document.querySelector('.header');

function setMenuOpen(open) {
  if (!menuButton || !menu) return;
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = open ? 'Close' : 'Menu';
}

menuButton?.addEventListener('click', () => setMenuOpen(!menu?.classList.contains('open')));
document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});
window.addEventListener('scroll', () => header?.classList.toggle('is-scrolled', window.scrollY > 10));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.body.classList.add('js-animated');
const sections = document.querySelectorAll('.section');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        target.classList.add('is-visible');
        revealObserver.unobserve(target);
      }
    });
  }, { threshold: 0.12 });
  sections.forEach((section) => revealObserver.observe(section));
} else {
  sections.forEach((section) => section.classList.add('is-visible'));
}

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const formData = Object.fromEntries(new FormData(contactForm).entries());
  if (submitButton) submitButton.disabled = true;
  if (formStatus) formStatus.textContent = 'Sending your message…';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'Unable to send your message. Please try again.');
    if (formStatus) formStatus.textContent = result.message || 'Thanks — your message has been sent.';
    contactForm.reset();
  } catch (error) {
    if (formStatus) formStatus.textContent = error.message || 'Unable to send your message. Please try again.';
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});

const chat = document.querySelector('#chatbot');
const chatToggle = document.querySelector('#chatbot-toggle');
const chatClose = document.querySelector('#chatbot-close');
const chatForm = document.querySelector('#chatbot-form');
const chatInput = document.querySelector('#chatbot-input');
const chatMessages = document.querySelector('#chatbot-messages');

const addMessage = (text, role) => {
  if (!chatMessages) return;
  const message = document.createElement('p');
  message.className = `chat-message ${role}`;
  message.textContent = text;
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const answerQuestion = (question) => {
  const q = question.toLowerCase();
  if (q.includes('skill') || q.includes('technology') || q.includes('tech')) return 'Aman works with C, Java, HTML, CSS, JavaScript, Node.js, Next.js, SQL, Git, and GitHub.';
  if (q.includes('project') || q.includes('expense')) return 'Aman’s projects include this personal portfolio and an Expense Tracker web application. You can find them in the Projects section.';
  if (q.includes('resume') || q.includes('cv')) return 'Use the “View resume” button at the top of the page to open Aman’s resume.';
  if (q.includes('github')) return 'Aman’s GitHub is github.com/Amankrsingh07.';
  if (q.includes('linkedin')) return 'Aman’s LinkedIn is linkedin.com/in/amankrsingh05.';
  if (q.includes('contact') || q.includes('email')) return 'You can use the contact form on this page to leave Aman a message.';
  return 'I can answer questions about Aman’s skills, projects, resume, GitHub, LinkedIn, or contact details.';
};

const setChatOpen = (open) => {
  if (!chat || !chatToggle) return;
  chat.classList.toggle('is-open', open);
  chat.setAttribute('aria-hidden', String(!open));
  chatToggle.setAttribute('aria-expanded', String(open));
  if (open) chatInput?.focus();
};

chatToggle?.addEventListener('click', () => setChatOpen(!chat?.classList.contains('is-open')));
chatClose?.addEventListener('click', () => setChatOpen(false));
chatForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = chatInput?.value.trim();
  if (!question || !chatInput) return;
  addMessage(question, 'user');
  chatInput.value = '';
  window.setTimeout(() => addMessage(answerQuestion(question), 'bot'), 280);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setChatOpen(false);
});
