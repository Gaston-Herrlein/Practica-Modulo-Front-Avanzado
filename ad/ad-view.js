export function buildAdsList(ads) {
  return `
  <img src="${ads.picture}">
  <h2>${ads.title}</h2>
  <p>${ads.description}</p>
  <p>${ads.tags}</p>
  <p>$${ads.price}</p>
  `;
}

export function buildAdsError() {
  return `<h1>NO ADS FOUNDS</h1>`;
}
