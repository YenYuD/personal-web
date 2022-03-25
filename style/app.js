const text = document.querySelectorAll(".thePaths");

console.log(text[0].getTotalLength());

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#seventeenth");
console.log(lastWord);

const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1s ease; opacity: 0; pointer-events: none;";
});

// const svgGroup = document.querySelectorAll(".logo > svg > path");
// svgGroup.forEach((item) => {
//   const totalLength = item.getTotalLength();
//   item.style = `
//         stroke-dasharray: ${Math.ceil(totalLength)}px;
//         stroke-dashoffset: ${Math.ceil(totalLength)}px;
//     `;
//   setTimeout(function () {
//     item.style = `
//     stroke-dasharray: ${Math.ceil(totalLength)}px;
//     stroke-dashoffset: 0px;
//     transition: all 0.6s ease-in;
//     `;
//   }, 3800);
// });
