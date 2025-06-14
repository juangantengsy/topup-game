document.querySelectorAll(".game-card").forEach((card) => {
  card.addEventListener("click", () => {
    const gameName = card.getAttribute("data-game");
    document.getElementById("gameName").value = gameName;
  });
});

document.getElementById("pembayaran").addEventListener("change", function () {
  const metode = this.value;
  const infoBox = document.getElementById("infoPembayaran");
  const metodeText = document.getElementById("metodeText");

  infoBox.style.display = "block";

  if (metode === "Dana") {
    metodeText.innerHTML = "Silakan transfer ke DANA: <strong>0812-9999-8888</strong> a.n Admin GamerZone";
  } else if (metode === "Pulsa") {
    metodeText.innerHTML = "Silakan kirim Pulsa ke: <strong>0857-7777-6666</strong>";
  } else if (metode === "QRIS") {
    metodeText.innerHTML = "Scan QRIS berikut: <strong><a href='#'>Lihat Gambar QRIS</a></strong>";
  } else {
    infoBox.style.display = "none";
  }
});

document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const game = document.getElementById("gameName").value;
  const id = document.getElementById("gameId").value;
  const nominal = document.getElementById("nominal").value;
  const metode = document.getElementById("pembayaran").value;
  const nomor = document.getElementById("nomor").value;

  const pesan = `Halo admin, saya ingin top up:

- Game: ${game}
- ID Game: ${id}
- Nominal: ${nominal}
- Pembayaran: ${metode}
- No WA Saya: ${nomor}`;

  const url = "https://wa.me/6281234567890?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
});
