function search() {
  const key = document.getElementById("keyword").value;

  if (key === "rabbit") {
    window.location.href = "answer_α.html";
  } else if (key === "clock") {
    window.location.href = "answer_β.html";
  } else {
    window.location.href = "nosearch");
  }
}
