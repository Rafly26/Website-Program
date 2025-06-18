// Handle the contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contact form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = form.name.value.trim();
    const email = form.email.value.trim();
    const pesan = form.message.value.trim();

    if (!nama || !email || !pesan) {
      alert("Silakan lengkapi semua kolom.");
      return;
    }

    alert(`Terima kasih, ${nama}! Pesan Anda telah terkirim.`);
    form.reset();
  });
});
