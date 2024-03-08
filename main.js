active = () => {
  let button = document.getElementById("button");
  let image = document.getElementById("image");
  console.log(button.style.backgroundColor.toString());
  if (button.style.backgroundColor != "rgb(109, 127, 151)") {
    button.style.backgroundColor = "rgb(109, 127, 151)";
    image.style.filter =
      "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(310deg) brightness(104%) contrast(101%)";
    links.style.opacity = "100%";
    square.style.opacity = "100%";
  } else {
    button.style.backgroundColor = "hsl(210, 46%, 95%)";
    image.style.filter =
      "brightness(0) saturate(100%) invert(49%) sepia(10%) saturate(828%) hue-rotate(175deg) brightness(98%) contrast(99%)";
    links.style.opacity = "0%";
    square.style.opacity = "0%";
  }
};
