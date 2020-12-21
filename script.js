'use strict';

const display = {
    secretNumber: function() {
        return Math.trunc(Math.random() * 20) + 1;
    },
    message: function(message) {
        document.querySelector('.message').textContent = message;
    },
    bgColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    },
    number: function(content) {
        document.querySelector('.number').textContent = content;
    },
    numberWidth: function(width) {
        document.querySelector('.number').style.width = width;
    },
    highScore: function(highscore) {
        document.querySelector('.highscore').textContent = highscore;
    },
    score: function(score) {
        document.querySelector('.score').textContent = score;
    },
    guessNum: function() {
        return Number(document.querySelector('.guess').value);
    },
    guessVal: function(val) {
        document.querySelector('.guess').value = val;
    },
};

let secretNumber = display.secretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = display.guessNum();

    if (!guess) {
        display.message('⛔ Masukkin Angkanya Bro!');
    } else if (guess === secretNumber) {
        display.message('🎉 Wedehhh Akhir Menang!');
        display.bgColor('#60b347');
        display.numberWidth('30rem');
        display.number(secretNumber);

        if (score > highscore) {
            highscore = score;

            display.highScore(highscore);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--;
            display.message(
                guess > secretNumber ?
                '📈 Angkanya Kegedean!' :
                '📉 Angkanya Kekecilan!'
            );
            display.score(score);
        } else {
            display.message('💥 Yahh kalah kan lu!');
            score = 0;
            display.score(score);
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    const guess = display.guessNum();

    if (guess === secretNumber || score === 0) {
        score = 20;
        secretNumber = display.secretNumber();
        display.score(score);
        display.number('?');
        display.message('Survei membuktikan...');
        display.guessVal('');
        display.bgColor('#222');
        display.numberWidth('15rem');
    } else if (score >= 1) {
        alert('Selesain dulu bro permainannya!');
    }
});