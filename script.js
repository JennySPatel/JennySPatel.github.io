// file for interactivity on website

function toggleContact() {
  const info = document.getElementById("contact-info");
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}

