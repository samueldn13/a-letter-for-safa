const dateElement = document.querySelector("#date");
const envelopeScreen = document.querySelector("#envelopeScreen");
const openEnvelope = document.querySelector("#openEnvelope");
const letterPage = document.querySelector("#letterPage");

dateElement.textContent = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format(new Date());

openEnvelope.addEventListener("click", () => {
  openEnvelope.disabled = true;
  envelopeScreen.classList.add("is-opening");

  const openingDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 100
    : 850;

  window.setTimeout(() => {
    letterPage.inert = false;
    document.body.classList.add("is-open");
    envelopeScreen.classList.add("is-dismissed");
  }, openingDuration);
});
