function openFolder(page) {
  const password = prompt("アクセスパスワードを入力してください");

  if (password === "0805") {
    window.location.href = page;
  } else {
    alert("認証に失敗しました。");
  }
}

function openDeleted() {
  window.location.href = "deleted.html";
}

function openfree() {
  window.location.href = "localfolder.html";
}

function openPDF(path) {
  window.open(path, "_blank");
}