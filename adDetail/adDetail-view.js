export function buildAd(ad) {
  return `
    <div class="card-container flex-column center">
        <img class="img-ads mb-s" width="200px" src="${
          "./assets/image/" + ad.picture
        }">
        <div class="hr"></div>
        <div class="container flex-column center">
            <h2>${ad.title}</h2>
            <p>Description:</p>
            <p>${ad.description}</p>
            <p>Categoria: ${ad.category}</p>
            <span>${ad.type}</span>
            <p>$${ad.price}</p>
        </div>
    </div>
  `;
}

export function addRemoveButton(nodo) {
  const deleteButton = document.createElement("button");
  deleteButton.id = "deleteButton";
  deleteButton.textContent = "Delete advert";
  nodo.appendChild(deleteButton);
}
