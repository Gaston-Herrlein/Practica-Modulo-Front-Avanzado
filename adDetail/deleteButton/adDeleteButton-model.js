export async function deletProductById(adId = "") {
  const url = `http://localhost:8000/api/ads/${adId}`;
  const token = window.localStorage.getItem("token");
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    return error;
  }
}
