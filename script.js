let playerGuess = document.querySelector('.game__player-guess');
let guessButton = document.querySelector('.game__guess-btn');
let hint = document.querySelector('.game__hint');
let playAgainButton = document.querySelector('.game__play-again-btn')
let interaction = document.querySelector('.game__interaction')
let amount = document.querySelector('.game__amount')

let randomNumber = Math.ceil(Math.random()*100)
console.log(randomNumber)
let counter = 0;
let attempts = 0;

amount.textContent = `Сыграно игр: ${counter}`


let guessTheNumber = () => {
    let guessStr = playerGuess.value;


    if (guessStr === '') {
        hint.textContent = 'Введите число от 1 до 100';
        hint.classList.add('error')
    } else {
        let guess = +guessStr.trim();
        hint.classList.remove('error')
        console.log(guess)
        if (isNaN(guess)) {
            hint.textContent = 'Введите число от 1 до 100';
            hint.classList.add('error')
            playerGuess.value = '';
        } else if (guess < 1) {
            hint.textContent = 'Число должно быть больше 1';
            hint.classList.add('error')
            playerGuess.value = '';
        } else if (guess > 100) {
            hint.textContent = 'Число должно быть меньше 100'
            hint.classList.add('error')
            playerGuess.value = '';
        } else if (guess > randomNumber) {
            hint.textContent = 'Меньше'
            playerGuess.value= '';
            attempts++;
        } else if (guess < randomNumber) {
            hint.textContent = 'Больше'
            playerGuess.value = '';
            attempts++;
        } else if (guess === randomNumber) {
            attempts++;
            counter++;
            amount.textContent = `Сыграно игр: ${counter}`
            if (attempts % 10 === 1 && attempts !== 11) {
                hint.textContent = 'Угадал за ' + attempts + ' ход'
            } else if ((attempts % 10 === 2 && attempts !== 12) || (attempts % 10 === 3 && attempts !== 13) || (attempts % 10 === 4 && attempts !== 14)) {
                hint.textContent = 'Угадал за ' + attempts + ' хода'
            } else {
            hint.textContent = 'Угадал за ' + attempts + ' ходов'
            }
            playAgainButton.classList.remove('d-none');
            interaction.classList.add('d-none');
            hint.style.marginTop = 0;
        }
    }
}
let restartGame = () => {
    playAgainButton.classList.add('d-none');
    interaction.classList.remove('d-none');
    hint.textContent = '–';
    playerGuess.value = '';
    hint.style.marginTop = '48px';
    attempts = 0;
    randomNumber = Math.ceil(Math.random()*100)
    console.log(randomNumber)
}
guessButton.addEventListener('click', guessTheNumber)
playAgainButton.addEventListener('click', restartGame)
playerGuess.onkeypress = function(e) {
    let key = e.which || e.keyCode
    if (key === 13) {
        guessButton.click();
    }
}

