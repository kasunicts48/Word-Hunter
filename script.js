/* 
!    develop : kasuncts48 
*    date : 2021.06.19
?    version : 0.1v
*    title : word hunter
 */
window.addEventListener("load", init);

//! available levels
const levels = {
    easy : 7,
    medium : 5,
    hard : 3
}

//! to change level
const currentLevel = levels.easy;

//! Dloabale
let time = currentLevel;
let second = currentLevel;
let score = 0;
let isPlaying;

//! DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const secondDisplay = document.querySelector("#second");

const words = [
    "zoneless","zoner","zoners","zones","zonetime","zonetimes","zoning","zonings","zonk","zonked","zonking","zonks","zonoid","zonula","zonulae","zonular","zonulas","zonule","zonules","zonulet","zonulets","zonure","zonures","zoo","zoobiotic","zooblast","zooblasts","zoocephalic","zoochemical","zoochemistries","zoochemistry","zoochore","zoochores","zoochories","zoochorous","zoochory","zooculture","zoocultures","zoocytia","zoocytium","zoodendria"
];

//! intialize Game
function init()
{
    //? console.log("init");
    //! Load word from array
    showWord(words);

    //! start matching on word input
    wordInput.addEventListener("input", startMatch);

    //! Call countdown every second
    setInterval(countdown, 1000)

    //! check game status
    setInterval(checkStatus,50)
}

//! Start match
function startMatch() 
{
    if(matchWords())
    {
    //    console.log("Correct Match!");
        isPlaying = true;
        time = currentLevel+1;
        second = currentLevel+1;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    //! if score is -1, display 0
    if(score === -1)
    {
        scoreDisplay.innerHTML = 0;
    }
    else
    {
        scoreDisplay.innerHTML = score;
    }

   
}

//! Mtach currentWord to WordInput
function matchWords() 
{
    if(wordInput.value === currentWord.innerHTML)
    {
        message.innerHTML = "Correct Match!";
        return true; 
    }
    else
    {
        message.innerHTML = "";
        return false;
    }
}

//! pick and show random word in array
function showWord(words) 
{
    //! genarate random array index
  const num = Math.floor(Math.random()* words.length);

    //! output randim word
    currentWord.innerHTML = words[num];
}

//! Countdown timer
function countdown() 
{
    if(time > 0) 
    {
      //! decrement 
      time--; 
      second--;
    }
    else if(time === 0)
    {
        //! game over
        isPlaying = false;
    }
    //! show time
    // timeDisplay.innerHTML = time;
    secondDisplay.innerHTML = second;
} 

//! check game status
function checkStatus()
{
    if(!isPlaying && time === 0)
    {
        message.innerHTML = "Game Over!";
        score = -1;
    }
}
