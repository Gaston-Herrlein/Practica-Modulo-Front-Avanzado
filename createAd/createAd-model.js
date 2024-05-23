export const createAd = async (ad) => {
  const url = "http://localhost:8000/api/ads";
  const token = localStorage.getItem("token");

  // const dummyData = {
  //   author: "keepcoding",
  //   comments: [],
  //   image: "https://pbs.twimg.com/media/D1KNUQ8VAAAEx8L.jpg",
  //   likes: [],
  // };

  // const body = {
  //   ad: ad,
  //   ...dummyData,
  // };

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(ad),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
};
