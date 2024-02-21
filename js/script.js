// function play() {
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section.
//     const  homeSections = document.getElementById("home-screen")
//     homeSections.classList.add('hidden')

//     //Show the playground
//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
// }

const audio = new Audio();
let isGamePlayOn = false;
const artBoard = document.getElementById('art-board');

function handleKeyboardUpEvent(event){
    if(isGamePlayOn == false) return;
    const playerPressed = event.key;
    // console.log('player pressed',playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const curretAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = curretAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        
        audio.src= "../audio/success.mp3";
        audio.play();

        const currenScore = getTextElementvalueById('current-score');
        const updatedScore = currenScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // const currentScoreElement = getTextElementvalueById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continuewGame();
    }
    else{
        console.log('You missed. you lost a life');
        const currentLife = getTextElementvalueById('current-life');
        const updateLife = currentLife - 1;

        const updateLifeParcentage = (updateLife / 5) * 100;
        artBoard.style.background = `linear-gradient(#FFFFFFFB3,red)`;


        setTextElementValueById('current-life', updateLife);

        audio.src= "../audio/wrong.mp3";
        audio.play();

        if(updateLife === 0){
            gameOver();
        }


        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardUpEvent)

function continuewGame(){
    // generat a rendom alphabet
   const alphabet =  getARandomAlphabet();
    

    //set a randomly alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set Background color
    addBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    isGamePlayOn = true;

    continuewGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('score');

    const lastScore = getTextElementvalueById('current-score');
    setTextElementValueById('game-score', lastScore);

    const currentAlpha = getElementTextById('current-alphabet');
    // console.log(currentAlpha)
    removeBackgroundColorById(currentAlpha);

    isGamePlayOn = false;
}