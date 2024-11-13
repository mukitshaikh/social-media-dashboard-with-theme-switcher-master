//Switching between night and day mode

var mode = document.getElementById("switch").querySelector("input");
var root = document.querySelector(":root");

let DAY_MODE = "Day Mode";
let NIGHT_MODE = "Night Mode";
function switchMode(mode) {
    let rs = getComputedStyle(root);

    if (mode === DAY_MODE) {
        root.style.setProperty("--mainText", "hsl(228, 12%, 44%)");
        root.style.setProperty("--subText","hsl(230, 17%, 14%)");
        root.style.setProperty("--mainBg"," hsl(0, 0%, 100%)");
        root.style.setProperty("--cardBg","hsl(227, 47%, 96%)");
        root.style.setProperty("--topBg","hsl(225, 100%, 98%)");
    } else if (mode === NIGHT_MODE) {
         root.style.setProperty("--mainText", "hsl(228, 34%, 66%)");
        root.style.setProperty("--subText","hsl(0, 0%, 100%)");
        root.style.setProperty("--mainBg","hsl(230, 17%, 14%)");
        root.style.setProperty("--cardBg","hsl(228, 28%, 20%)");
        root.style.setProperty("--topBg","hsl(232, 19%, 15%)");
    }
}

mode.addEventListener("input", () => {
    if (mode.checked) {
        switchMode(DAY_MODE);
    } else {
        switchMode(NIGHT_MODE);
    }
})

/*
- White (BG): hsl(0, 0%, 100%)
- Very Pale Blue (Top BG Pattern): hsl(225, 100%, 98%)
- Light Grayish Blue (Card BG): hsl(227, 47%, 96%)
- Dark Grayish Blue (Text): hsl(228, 12%, 44%)
- Very Dark Blue (Text): hsl(230, 17%, 14%)




 --mainText: hsl(228, 34%, 66%);
  --subText: hsl(0, 0%, 100%);
  --mainBg: hsl(230, 17%, 14%);
  --cardBg: hsl(228, 28%, 20%);
  --topBg: hsl(232, 19%, 15%);

  */