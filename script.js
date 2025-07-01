// 1. Gezilecek yerlerin verisini burada bir dizi olarak tutuyoruz.
// Bu yapı ilerde backend'den veri çekmeye geçiş için kolaylık sağlar.
const yalovaPlaces = [
  {
    name: "Sudüşen Şelalesi",
    category: "Doğa",
    image: "images/sudüsen.jpeg", 
    description: "Yalova'nın en meşhur doğal güzelliklerinden biri.",
    location: "https://www.google.com/maps/place/Sud%C3%BC%C5%9Fen+%C5%9Eelalesi/@40.5723571,29.1373471,826m/data=!3m1!1e3!4m6!3m5!1s0x14caf787e0b69017:0x2e36bb7756dd8bb7!8m2!3d40.5723531!4d29.139922!16s%2Fg%2F11q8xk8pw8?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" // Google Maps linki
  },
  {
  name: "Hersek Lagünü",
  category: "Doğa",
  image: "images/hersek.jpg", 
  description: "Göçmen kuşların uğrak yeri olan, Yalova’nın doğal hazinelerinden biridir. Kuş gözlem kulesiyle meşhurdur.",
  location: "https://www.google.com/maps/place/Alt%C4%B1nova+Hersek+Lag%C3%BCn%C3%BC+-+Ku%C5%9F+Oteli/@40.7223845,29.5031346,824m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cb1fbbb8409e51:0x421dc9366e5ef1ee!8m2!3d40.7223805!4d29.5057095!16s%2Fg%2F11h10fbbr_?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Termal Kaplıcaları",
    category: "Kaplıca",
    image: "images/termalkaplıcaları.jpg",
    description: "Roma döneminden kalma, şifalı sularıyla ünlü.",
    location: "https://www.google.com/maps/place/Yalova+Termal+Kapl%C4%B1calar%C4%B1/@40.603379,29.1712221,825m/data=!3m1!1e3!4m10!3m9!1s0x14caf6d288ba6d6f:0x908ccb6b2d38b1d5!5m3!1s2025-07-03!4m1!1i2!8m2!3d40.603375!4d29.173797!16s%2Fg%2F1tfx73ls?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Karaca Arboretumu",
    category: "Doğa",
    image: "images/karaca.jpg",
    description: "Botanik severler için eşsiz bir yer.",
    location: "https://www.google.com/maps/place/Karaca+Arboretum/@40.6341597,29.2221738,825m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14caf07b954a2109:0x2431ba9019e73acc!8m2!3d40.6341557!4d29.2247487!16s%2Fg%2F121dprcg?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Yürüyen Köşk",
    category: "Tarih",
    image: "images/yürüyenkösk.jpeg",
    description: "Atatürk’ün Yalova sevgisini anlatan simge yapı.",
    location: "https://www.google.com/maps/place/Y%C3%BCr%C3%BCyen+K%C3%B6%C5%9Fk/@40.6646611,29.29496,824m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14cae4eaba264479:0xa05aaac4dbe94151!8m2!3d40.6646571!4d29.2975349!16s%2Fg%2F11b86f7v15?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D"
  }
];

const container = document.getElementById("places-container");
const categorySelect = document.getElementById("category");


function displayPlaces(filteredPlaces) {
  container.innerHTML = "";

  filteredPlaces.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" />
      <div class="card-content">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <a href="${place.location}" target="_blank">Haritada Gör</a>
      </div>
    `;

    container.appendChild(card);
  });
}

categorySelect.addEventListener("change", function () {
  const selected = this.value;

  if (selected === "Hepsi") {
    displayPlaces(yalovaPlaces);
  } else {
    const filtered = yalovaPlaces.filter(place => place.category === selected);
    displayPlaces(filtered);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  displayPlaces(yalovaPlaces);
});