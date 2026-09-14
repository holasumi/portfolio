const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const submitButton = contactForm.querySelector('[type="submit"]');
  const status = document.getElementById("contactStatus");
  let sending = false;

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending || !contactForm.reportValidity()) return;

    sending = true;
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    contactForm.setAttribute("aria-busy", "true");
    status.dataset.state = "pending";
    status.textContent = "Sending your message…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(contactForm.action.replace(
        "https://formsubmit.co/", "https://formsubmit.co/ajax/"
      ), {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(contactForm),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Submission was not accepted");
      }
      contactForm.reset();
      status.dataset.state = "success";
      status.textContent = "Thank you! Your message has been submitted successfully.";
    } catch (error) {
      status.dataset.state = "error";
      status.textContent = error.name === "AbortError"
        ? "We couldn't confirm delivery in time. Your message is still here; please try again later."
        : "Your message couldn't be sent. Please check your connection and try again, or email sakinah.frha@gmail.com.";
    } finally {
      clearTimeout(timeout);
      sending = false;
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
      contactForm.removeAttribute("aria-busy");
    }
  });
}
