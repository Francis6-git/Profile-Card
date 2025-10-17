// Time
const timeElement = document.getElementById("user-time");
function updateTime() {
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload preview
const fileInput = document.getElementById("avatar-upload");
const avatarImg = document.getElementById("user-avatar");

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    avatarImg.src = e.target.result;
  };
  reader.readAsDataURL(file);
});
