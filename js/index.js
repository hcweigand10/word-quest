const wordBank = [
  "BANK",
  "FISH",
  "HUCK",
  "FIRE",
  "MILK",
  "LAKE",
  "HIGH",
  "WILT",
  "TURN",
  "DENT",
  "COIL",
  "PROS",
  "VIEW",
  "NEXT",
  "KILN",
  "MEAN",
  "NICE",
  "LUNG",
  "FREE",
  "DICY",
  "RISK",
  "GRIN",
  "MOVE",
  "NUDE",
  "RUSH",
  "JOKE",
  "LOVE",
  "JUST",
  "KITE",
  "CREW",
  "BEAD",
  "SOAP",
  "SPAS",
  "LEAK",
  "NAME",
  "FANG",
  "GUYS",
  "KEYS",
];
let word1 = "";
let word2 = "";
const display1 = $("#word1");
const display2 = $("#word2");
const newBtn = $("#newWords");
const form = $("#form");
const input = $("#guess");
const alert = $('#alert');
const playAgain = $('#playAgain');


const genWords = () => {
  word1 = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
  word2 = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
  display1.text(word1.toUpperCase());
  display2.text(word2.toUpperCase());
  
};

// const checkDictionary = (guess) => {
//     const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`
//     fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         console.log(data)
//         if (data.title == "No Definitions Found") {
//             alert.text("Sorry pal, I don't think that's a word...");
//         } else {
//             setNewWord(guess);
//         }
//     });
// }

const checkWord = (guess) => {
    const currentArr = word1.split("");
    const guessArr = guess.split("");
    let result = true;
    let count = 0;
    for (let i = 0; i < 4; i++) {
        const e = guessArr[i];
        if (e != currentArr[i]) {
            count++;
        }
        if (count > 1) {
            result = false;
        }
        
    }
    return result;
}

const checkWin = (guess) => {
    if (guess == word2) {
        display1.text(word1.toUpperCase());
        $('#winnerModal').modal("show");
    }
}

const setNewWord = (guess) => {
    word1 = guess;
    display1.text(word1.toUpperCase());
    alert.text("Nice!")
    setTimeout(() => {
        alert.text("");
    }, 2000);
}



genWords();

// handle form submit
form.submit(function (e) {
    e.preventDefault();
    const guess = (input.val()).toLowerCase();
    input.val('');
    console.log(guess);
    if (guess.length == 4) {
        if (checkWord(guess)) {
            if (checkWin(guess)) {
                return;
            } else {
                setNewWord(guess);
            }
            // checkDictionary(guess);
        } else {
            alert.text("New word must be only one letter differet from current word")
        };
    } else {
        alert.text("You must enter a 4-letter word!");
        setTimeout(() => {
            alert.text("");
        }, 2000);
    }
  });

newBtn.on("click", genWords);

