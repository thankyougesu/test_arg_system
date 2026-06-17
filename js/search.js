console.log("SEARCH.JS LOADED");

function normalizeText(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize("NFKC");
}

async function search() {
  const input = document.getElementById("keyword").value;
  const key = normalizeText(input);

  console.log("送信する文字列 =", key);

  try {

    const response = await fetch(
      "https://deus-search.thankyougesu.workers.dev/?q=" +
      encodeURIComponent(key)
    );

    console.log("response status =", response.status);

    const data = await response.json();

    console.log("Worker応答 =", data);

    console.log("遷移先 =", data.page);
    alert("遷移先 = " + data.page);

  } catch (error) {

    console.error("FETCH ERROR", error);

    alert(error);

    window.location.href = "nosearch.html";

  }
}