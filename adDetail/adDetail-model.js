function parseDetailAd(data) {
  return {
    title: data.title,
    description: data.description,
    price: data.price,
    type: data.type,
    category: data.category,
    picture: data.image !== "" ? data.image : "not-found-image.jpg",
    id: data.id,
  };
}

export async function getProductById(adId = "") {
  const url = `http://localhost:8000/api/ads/${adId}`;
  const token = window.localStorage.getItem("token");
  let ad = {};
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (Object.keys(data).length === 0) {
      return ad;
    }
    ad = parseDetailAd(data);
  } catch (error) {
    console.log(error);
    return error;
  }
  return ad;
}
