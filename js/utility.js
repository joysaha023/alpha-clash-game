function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    

    //get a random index between 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber)
    

    const riskOn = alphabets[index];
    // console.log(index, riskOn);
    return riskOn;
}