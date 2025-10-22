// --- Time (only if element exists) ---
const timeElement = document.getElementById("user-time");
function updateTime() {
  if (!timeElement) return;
  timeElement.textContent = Date.now();
}
if (timeElement) {
  updateTime();
  setInterval(updateTime, 1000);
}

// --- Avatar upload preview (only if inputs exist) ---
const fileInput = document.getElementById("avatar-upload");
const avatarImg = document.getElementById("user-avatar");

if (fileInput && avatarImg) {
  fileInput.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// --- Mobile nav toggle (register safely) ---
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  // Only attach handler if both elements are present
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("show");
    });
  }
});
