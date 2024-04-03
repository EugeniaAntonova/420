const accordeon = document.querySelector('.faq-list');

const closePanel = (item) => {
    let panel = item.querySelector('.panel');
    item.classList.remove('opened');
    panel.style.maxHeight = `0`;
}

const openPanel = (item) => {
    let panel = item.querySelector('.panel');
    item.classList.add('opened');
    panel.style.maxHeight = `${panel.scrollHeight + 40}px`;
}
const onAccordeonClick = (evt) => {
  const target = evt.target;
  let opened = accordeon.querySelector('.opened');
  
  if (!target.classList.contains('js-toggle')) return;
  if (opened) {
    closePanel(opened);
  };
  
  let item = target.closest('li');
  let panel = item.querySelector('.panel');
  
  if (item != opened) {
    openPanel(item);
    opened = item;
  } 
}

accordeon.addEventListener('click', onAccordeonClick);

document.addEventListener('DOMContentLoaded', () => {
  const learnMore = document.querySelector('.js-learn-more');
  const id = learnMore.dataset.target;
  learnMore.onclick = (evt) => {
    evt.preventDefault();
    document.querySelector(`${id}`).scrollIntoView();
  }
})