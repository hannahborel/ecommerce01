const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const menuMarker = document.getElementById("navMarker");
let menuCount = 0;
menuMarker.style.left = menuItems[0].offsetLeft + "px";
menuMarker.style.width = menuItems[0].offsetWidth + "px";

const products = [
  {
    id: 1,
    title: "Superrep",
    price: 119,
    colors: [
      {
        code: "#bbe453",
        img: "./img/supeRepGreen.png",
      },
      {
        code: "white",
        img: "./img/supeRepWhite.png",
      },
    ],
  },
  {
    id: 2,
    title: "Crater",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/craterWhite.png",
      },
      {
        code: "black",
        img: "./img/craterBlack.png",
      },
    ],
  },
  {
    id: 3,
    title: "Free Run",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./img/nikeFreeBlack.png",
      },
      {
        code: "white",
        img: "./img/nikeFreeWhite.png",
      },
    ],
  },
  {
    id: 4,
    title: "Presto",
    price: 99,
    colors: [
      {
        code: "white",
        img: "./img/prestoColor.png",
      },
      {
        code: "black",
        img: "./img/prestoBlack.png",
      },
    ],
  },
  {
    id: 5,
    title: "Pegasus",
    price: 99,
    colors: [
      {
        code: "#bbe453",
        img: "./img/pegasusNeon.png",
      },
      {
        code: "white",
        img: "./img/pegasusWhite.png",
      },
    ],
  },
];
let chooseProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

const bannerBtn = document.querySelector(".bannerBtn");

// Event Listener For Arrow Buttons

leftArrow.addEventListener("click", () => {
  if (menuCount > 0) {
    menuCount--;
    slideMenu(menuItems[menuCount], menuCount);
    console.log("clicked");
  }
});
rightArrow.addEventListener("click", () => {
  if (menuCount < 4) {
    ++menuCount;
    slideMenu(menuItems[menuCount], menuCount);
    console.log("clicked");
  }
});

// EVENT LISTENER FOR MENU ITEMS

menuItems.forEach((element, index) => {
  // trigger marker and wrapper slide
  element.addEventListener("click", (e) => {
    // reset count for arrows

    menuCount = index;
    slideMenu(element, index);

    changeFeature(index);
  });
});

const slideMenu = (element, index) => {
  menuMarker.style.left = element.offsetLeft + "px";
  menuMarker.style.width = element.offsetWidth + "px";
  wrapper.style.transform = `translateX(${-100 * index}vw)`;
  console.log("slideMeu");
  changeFeature(index);
};

const changeFeature = (index) => {
  console.log("changeFeature");
  chooseProduct = products[index];

  // change text of current  product
  currentProductImg.src = chooseProduct.colors[0].img;
  currentProductTitle.innerText = chooseProduct.title;
  currentProductPrice.innerText = "$" + chooseProduct.price;

  // update color
  currentProductColors.forEach((color, index) => {
    console.log("update color");
    color.style.backgroundColor = chooseProduct.colors[index].code;
  });
};

//update img with color blocks on click

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    console.log("click");
    currentProductImg.src = chooseProduct.colors[index].img;
  });
});

// EVENT LISTENERS FOR FEATURED

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      console.log(size, "Inner");
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
    console.log(size, "outer");
  });
});

// update feature with banner button

bannerBtn.addEventListener("click", () => {
  chooseProduct = products[0];

  // change text of current  product
  currentProductImg.src = chooseProduct.colors[0].img;
  currentProductTitle.innerText = chooseProduct.title;
  currentProductPrice.innerText = "$" + chooseProduct.price;

  // update color
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = chooseProduct.colors[index].code;
  });
});

// MODAL

const paymentModal = document.querySelector(".payment");
const checkoutButton = document.querySelector(".payButton");

const openModal = () => {
  console.log("openModal() triggered");
  paymentModal.style.display = "flex";
};

const closeModal = () => {
  paymentModal.style.display = "none";
};

checkoutButton.addEventListener("click", () => {
  paymentModal.style.display = "none";
});
