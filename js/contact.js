document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    let valid = true;

    function showError(input, msg) {
      const err = document.getElementById(`error-${input.id}`);
      err.textContent = msg;
      input.setAttribute("aria-describedby", `error-${input.id}`);
      valid = false;
    }

    // Reset
    document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
    success.textContent = "";

    // Validation
    if (!name.value.trim()) showError(name, "Name is required");
    if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      showError(email, "Enter a valid email");
    if (!subject.value.trim()) showError(subject, "Subject is required");
    if (message.value.trim().length < 10)
      showError(message, "Message must be at least 10 characters");

    if (valid) {
      success.textContent =
        "Thank you! Your message has been sent successfully.";
      this.reset();
    }
  });
