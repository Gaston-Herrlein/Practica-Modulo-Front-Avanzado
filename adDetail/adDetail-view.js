export function buildAd(ad) {
  return `
    <div class="flex-column center mt-l mb-s">
        <img class="img-ads mb-s" width="200px" src="${
          "./assets/image/" + ad.picture
        }">
        <div class="hr"></div>
        <div class="container flex-column center">
            <h1>${ad.title}</h1>
            <p class="container-description"> <span class="b">Description:</span>${
              ad.description
            }</p>
            
            <p><span class="b">Categoria:</span> ${ad.category}</p>
            <span class="b">${ad.type}</span>
            <p class="b">$${ad.price}</p>
        </div>
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
