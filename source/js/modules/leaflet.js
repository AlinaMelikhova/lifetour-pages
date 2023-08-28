// const mapWrapper = document.querySelector(".contacts__map-wrapper");

const map = L.map("map", {
  scrollWheelZoom: false,
}).setView(
  {
    lat: 55.774778,
    lng: 37.632483,
  },
  16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "./img/svg/map-pin.svg",
  iconSize: [48, 48],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 55.774778,
    lng: 37.632483,
  },
  {
    icon: mainPinIcon,
  }
);

mainPinMarker.addTo(map);
