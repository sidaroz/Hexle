export const answerGrid = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const correctColour = "F12AD2";

export const currAttempt = {
  attempt: 0,
  letterPosition: 0,
};

export const gameOver = "";

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
