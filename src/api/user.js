import { BASE_PATH } from "../utils/constants";

export async function registerApi(userData) {
  try {
    const url = `${BASE_PATH}/api/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        username: userData.username,
      }),
    };

    const resp = await fetch(url, params);
    const result = await resp.json();
    console.log(result);
  } catch (error) {
    console.log(error);
    return null;
  }
}
