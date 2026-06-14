const BASE_URL =
  "https://us-central1-summaristt.cloudfunctions.net";

export async function getSelectedBooks() {
  const res = await fetch(
    `${BASE_URL}/getBooks?status=selected`
  );

  return res.json();
}

export async function getRecommendedBooks() {
  const res = await fetch(
    `${BASE_URL}/getBooks?status=recommended`
  );

  return res.json();
}

export async function getSuggestedBooks() {
  const res = await fetch(
    `${BASE_URL}/getBooks?status=suggested`
  );

  return res.json();
}
export async function getBook(id: string) {
  const response = await fetch(
    `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
  );

  const text = await response.text();

  if (!text) {
    throw new Error(`No book found for id: ${id}`);
  }

  return JSON.parse(text);
}
