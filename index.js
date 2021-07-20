const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });

  firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
  });

  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });

  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();

    // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";
    console.log("You clicked the name sorter");

    // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});

const ratingSorter = document.querySelector("#rating-sorter");

ratingSorter.addEventListener("click", (event) => {
    event.preventDefault();

    const main = document.querySelector("main");

    const ratingsList = main.querySelectorAll(".park-display");
    console.log(ratingsList);
    main.innerHTML = "";
    console.log("You clicked the rating sorter");

    const ratingsArray = Array.from(ratingsList);

    ratingsArray.sort((ratingA, ratingB) => {
        const ratingAValue = ratingA.querySelector(".value").innerText;
        const ratingBValue = ratingB.querySelector(".value").innerText;
        if (ratingAValue < ratingBValue) {
          return -1;
        } else if (ratingAValue > ratingBValue) {
          return 1;
        } else {
          return 0;
        }
    });

    ratingsArray.forEach((rating) => {
        main.appendChild(rating);
    });
});

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");