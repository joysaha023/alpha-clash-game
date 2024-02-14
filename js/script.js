// function play() {
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section.
//     const  homeSections = document.getElementById("home-screen")
//     homeSections.classList.add('hidden')

//     //Show the playground
//     const playground = document.getElementById('play-ground')
//     playground.classList.remove('hidden')
// }

function continuewGame(){
    // generat a rendom alphabet
   const alphabet =  getARandomAlphabet();
    console.log('your random alphabets:', alphabet);

    //set a randomly alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set Background color
    addBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continuewGame();
}