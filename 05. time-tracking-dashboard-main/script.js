const displayCards = [
  {
    title: "Work",
    elipsis: "./images/icon-ellipsis.svg",
    hours: "32hrs",
    work: `Last Week - 32hrs`,
    backgroundImage: `./images/icon-work.svg`,
    bgColor: "hsla(15, 100%, 70%, 1)",
  },
  {
    title: "Play",
    elipsis: "./images/icon-ellipsis.svg",
    hours: "10hrs",
    work: `Last Week - 8hrs`,
    backgroundImage: `./images/icon-play.svg`,
    bgColor: "hsla(195, 74%, 62%, 1)",
  },
  {
    title: "Study",
    elipsis: "./images/icon-ellipsis.svg",
    hours: "4hrs",
    work: `Last Week - 7hrs`,
    backgroundImage: `./images/icon-study.svg`,
    bgColor: "hsla(348, 100%, 68%, 1)",
  },
  {
    title: "Exercise",
    elipsis: "./images/icon-ellipsis.svg",
    hours: "4hrs",
    work: `Last Week - 5hrs`,
    backgroundImage: `./images/icon-exercise.svg`,
    bgColor: "hsla(145, 58%, 55%, 1)",
  },
  {
    title: "Social",
    elipsis: "./images/icon-ellipsis.svg",
    hours: "5hrs",
    work: `Last Week - 10hrs`,
    backgroundImage: `./images/icon-social.svg`,
    bgColor: "hsla(263, 63%, 51%, 1);",
  },
  {
    title: "Self Care",
    elipsis: "./images/icon-ellipsis.svg",
    hours: "2hrs",
    work: `Last Week - 2hrs`,
    backgroundImage: `./images/icon-self-care.svg`,
    bgColor: "hsla(43, 83%, 65%, 1)",
  },
];

const cardsHolder = document.querySelector("#container");

displayCards.forEach((dets) => {
  // creating an element
  let cardToDisplay = document.createElement("div");

  cardToDisplay = `
    <div class="cards" style="background-color:${dets.bgColor};">
      <img
        src="${dets.backgroundImage}"
        alt="${dets.title}-iamge"
        class="background-opacity-low"
      />
      <div class="card-body">
        <div class="card-title">
          <p class="semi-bold--text">${dets.title}</p>
          <img src="${dets.elipsis}" alt="dropdown menu" />
        </div>
        <div class="card-status">
          <p class="title-heading-text">${dets.hours}</p>
          <p class="regular-text">${dets.work}</p>
        </div>
      </div>
    </div>
  `;

  // appending cards to element
  cardsHolder.innerHTML += cardToDisplay;
});

/*
 */
