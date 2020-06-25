const url = "https://likeme-backend.herokuapp.com/api/v1";
const headers = {
  "Content-Type": "application/json",
};
export async function getFetch(urlApi) {
    try {
      const response = await fetch(`${url}/${urlApi}`);
      return await response.json()
    } catch (err) {
      return err;
    }
  }