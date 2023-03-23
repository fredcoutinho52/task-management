function createCard() {
  // capturar o elemento modelo
  const elementModel = document.querySelector(".card");

  // capturar o container dos cards
  const container = document.querySelector(".cards-container");

  // criar um clone do modelo
  const card = elementModel.cloneNode(true);

  // inserir o clone no container
  container.insertAdjacentElement("beforeend", card);
}
