const grid = document.querySelector(".grid")

/* função para passar os elemento dinamico */
const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element;
}

/* função para criar carta */
const createCard = () => {

  /* criando os elemento div */
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  /* montando a carta com appendChild */
  card.appendChild(front)
  card.appendChild(back)

  /* inserindo o objeto card dentro do elemento grid */
  grid.appendChild(card)
};
createCard()
