export function buildAdsList(ads) {
  return `
  <a href="/productDetail.html?id=${ads.id}">
    <div class="card-container flex-column center">
      <img class="img-ads mb-s" width="200px" src="${
        "./assets/image/" + ads.picture
      }">
      <div class="hr"></div>
      <div class="container flex-column center">
          <h2>${ads.title}</h2>
          
          <p>Categoria: ${ads.category}</p>
          <span>${ads.type}</span>
          <p>$${ads.price}</p>
      </div>
    </div>
  </a>
`;
}

export function buildAdsError() {
  return `<h1>NO ADS FOUNDS</h1>`;
}
