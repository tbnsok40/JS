var scores, roundScore, activePlayer; // this is global scope

// Math.random() : random 출력(decimals)
// Math.floor(Math.random()): random 출력 (integers)
// Math.random()*6 : 0~5 출력

//dice = Math.floor(Math.random() * 6) + 1;
//querySelector(): select the first stuff as CSS way
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' // string으로 작성하는거 잊지말기, <em>: italic
// innerHTML과 textContent 차이

//css속성을 바꾸는 것
// document.querySelector('.dice').style.display = 'none'
init();



// Events, Event listener

// function btn() {

// }
// btn();

// add a event listener
//document.querySelector('.btn-roll').addEventListener('click', btn); // careful not to use btn(), because with that (), function btn will operate all the time


//this is called anonymous function
document.querySelector('.btn-roll').addEventListener('click', function () {
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1; //scoping chane, use only in here

    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'; // changing the image

    //3. update the round score if the rolled number was not a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

    // check if the player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none;'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // what the hell is classList
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // add, remove, toggle
    } else {
        nextPlayer();
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // 삼항 연산자(조건문),sipler than if statements
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); // whatis classList?
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none'; // default는 안 보이도록 setting(주사위)
    document.getElementById('score-0').textcontent = '0';
    document.getElementById('score-1').textcontent = '0';
    document.getElementById('current-0').textcontent = '0';
    document.getElementById('current-1').textcontent = '0'; //html의 text를 직접 셋팅
}

// getElementsById와 getElementById는 다를다. s 주의 **