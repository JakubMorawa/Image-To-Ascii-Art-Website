const img = new Image();
img.src = "image.jpg";

let myElement = document.getElementById("ASCIIart");
myElement.innerHTML = "New content for the element.";


img.onload = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  const densityString = "@#%8&WM$BXGPDQHOCUAKdwmopxzncvnxrjftl|i!;:,. ";
  const densityStringLength = densityString.length-1;


  let ASCIISTRING = "";
  
let difference = 2

  for(let i = 0;i<img.height;i+=difference){
    for (let j = 0; j < img.width; j+=difference*0.6) {

        let x = parseInt(j), y = i; // pixel coordinates

        let pixel = ctx.getImageData(x, y, 1, 1).data;
        const [r, g, b, a] = pixel;

        let avgBrightness = parseInt((r + g + b)/3);

        let normalizedBrightness = avgBrightness/255.0;

        let brightnessFunction = Math.min(2*normalizedBrightness**3.3,1) //this function translate the brightness to make the image look better

        ASCIISTRING += densityString[densityStringLength-parseInt(densityStringLength*brightnessFunction)]
    }
    ASCIISTRING += "<br>"
  }
  myElement.innerHTML = ASCIISTRING;
  
};