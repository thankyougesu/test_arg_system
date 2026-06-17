function normalizeText(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize("NFKC");
}

async function search() {
  const input = document.getElementById("keyword").value;
  const key = normalizeText(input);

  try {

    const response = await fetch(
      "https://deus-search.thankyougesu.workers.dev?q=" +
      encodeURIComponent(key)
    );

    const data = await response.json();

    window.location.href = data.page;

  } catch (error) {

    console.error(error);

    window.location.href = "nosearch.html";

  }
}