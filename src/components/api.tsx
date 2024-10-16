export async function getData(url: string) {
  try {
    const response = await fetch(url);
    const res = await response.json();

    return res;
  } catch (error) {
    console.error("There is error", error);
  }
}
