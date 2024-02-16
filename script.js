const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

const dragend = (event) => {
  event.target.classList.remove('hold', 'hide');
};

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0);
}

dragleave = (event) => event.target.classList.remove('metka')
dragover = (event) => event.preventDefault()
dragenter = (event) => event.target.classList.add('metka')

dragdrop = (event) => {
  event.target.classList.remove('metka')
  event.target.append(item)
}

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
  placeholder.addEventListener('dragenter', dragenter);
}