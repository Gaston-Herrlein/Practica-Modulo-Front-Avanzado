function parseAds(data) {
  return data.map((data) => ({
    title: data.title,
    description: data.description,
    price: data.price,
    type: data.type,
    category: data.category,
    picture: data.image !== "" ? data.image : "not-found-image.jpg",
    id: data.id,
  }));
}

export async function getAds(adId = "") {
  const url = `http://localhost:8000/api/ads/${adId}`;
  const token = window.localStorage.getItem("token");
  let ads = [];
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    ads = parseAds(data);
  } catch (error) {
    console.log(error);
    throw new Error("Error getting Ads");
  }
  return ads;
}
