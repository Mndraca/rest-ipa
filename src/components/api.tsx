export async function getData(url: string) {
  try {
    const response = await fetch(url);
    const res = await response.json();

    if (!response.ok) {
      console.log("Something went wrong with the response");
    }
    return res;
  } catch (err) {
    console.error(`Something went wrong`, err);
  }
}
