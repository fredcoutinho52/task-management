function createCard() {
  const emptyText = document.querySelector(".empty-text");

  // 1 - adicionar o estilo ao elemento
  // emptyText.style.display = "none";

  // 2 - adicionar uma classe que tenha o estilo desejado
  emptyText.classList.add("hide");

  // capturar o elemento modelo
  const elementModel = document.querySelector(".card");

  // capturar o container dos cards
  const container = document.querySelector(".cards-container");

  // criar um clone do modelo
  const card = elementModel.cloneNode(true);

  // inserir o clone no container
  container.insertAdjacentElement("beforeend", card);
}

function deleteCard(event) {
  const button = event.target;
  const div = button.parentElement;
  const card = div.parentElement;
  card.remove();

  const cards = document.querySelectorAll(".card");
  if (cards.length === 1) {
    const emptyText = document.querySelector(".empty-text");
    emptyText.classList.remove("hide");
  }
}
