function parseAds(data) {
  return data.map((data) => ({
    title: data.name,
    description: data.description,
    tags: data.tag,
    price: data.price,
    picture: data.img,
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
