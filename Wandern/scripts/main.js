/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/header.jpg") {
    myImage.setAttribute("src", "images/Collage.png");
  } else {
    myImage.setAttribute("src", "images/header.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Wandern macht Spaß, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Weiter wandern 2, ${storedName}`;
  }


  myButton.onclick = () => {
    setUserName();
  };