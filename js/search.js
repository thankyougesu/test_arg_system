function search() {
  const key = document.getElementById("keyword").value
    .trim()
    .toLowerCase();

  const routes = {
    "rabbit": "answer_α.html",
    "clock": "answer_β.html",
    "新入社員": "newcommer.html",
    "若村颯太": "2040801.html",
    "西村かなえ": "2040802.html",
    "林原健斗": "2040803.html",
    "児童買春": "chat01.html",
    "新規事業部": "newsection.html",
    "都市開発事業部": "dailyblog01.html",
    "社内ブログ": "dailyblog02.html",
    "情報システム部": "securityannounce.html",
    "\\Deus-Network\08_project": "securityannounce.html",
  };

  if (routes[key]) {
    window.location.href = routes[key];
  } else {
    window.location.href = "nosearch.html";
  }
}