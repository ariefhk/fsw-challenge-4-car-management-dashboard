let toggle = document.querySelector("#toggle");
let sideMenu = document.querySelector(".sidebar");
let target = document.querySelector("#main");
let deleteNotif = document.querySelector(".notif__delete");
let saveNotif = document.querySelector(".notif__save");
let errorNotif = document.querySelector(".notif__error");
let cardCar = document.querySelectorAll("#card__car");
let btnCategory = document.querySelectorAll("#btn__category");

//Handling to make dissappear notification
if (deleteNotif) {
  setTimeout(() => {
    document.querySelector(".notif__delete").remove();
  }, 2500);
}
if (saveNotif) {
  setTimeout(() => {
    document.querySelector(".notif__save").remove();
  }, 2500);
}
if (errorNotif) {
  setTimeout(() => {
    document.querySelector(".notif__error").remove();
  }, 2500);
}

// handling state of url params
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

//Sidebar toggle
toggle.addEventListener("click", () => {
  if (sideMenu.style.display === "none") {
    sideMenu.style.display = "flex";
    localStorage.setItem("open", "true");
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-3");
      element.classList.add("col-sm-4");
    });
  } else {
    sideMenu.style.display = "none";
    localStorage.removeItem("open");
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-4");
      element.classList.add("col-sm-3");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  //Get url search params type category
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  btnCategory.forEach((element) => {
    //handling focused button filter type category
    if (!params.category && element.value == "all") {
      element.classList.remove("btn__category__non");
      element.classList.add("btn__category__active");
    }
    if (element.value == params.category) {
      element.classList.remove("btn__category__non");
      element.classList.add("btn__category__active");
    }
    element.classList.add("btn__category__non");
  });

  //if local true open sidebar
  if (localStorage.getItem("open")) {
    sideMenu.style.display = "flex";
  }

  // handling dynamic cards on open/close sidebar
  if (sideMenu.style.display === "flex") {
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-3");
      element.classList.add("col-sm-4");
    });
  } else {
    cardCar.forEach((element) => {
      element.classList.remove("col-sm-4");
      element.classList.add("col-sm-3");
    });
  }
});
