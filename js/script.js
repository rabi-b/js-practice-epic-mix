const epicMix = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  total.innerText = `${epicMix.length} great songs!`;
  mixInfo(epicMix);
});

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    const listItem = document.createElement("li");
    listItem.classList.add("song");
    listItem.innerHTML = `<span class="song-number">#${
      index + 1
    }</span> ${song}`;
    mixList.append(listItem);
  });
};
