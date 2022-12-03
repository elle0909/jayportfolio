let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;

function setup() {
    createCanvas(600, 600);
    drawButtons();
}

function draw() {
    fill('##E91E63');
    textSize(14);
    text('Add a point when you win , Minus when you lose', 15, 250);
    textSize(15);
    text('Score: ' + score, 270, 300);
}

function rock() {
    drawButtons();
    computerguess = random(['rock', 'paper', 'scissors']);
    textSize(15);
    text('you chose : rock', 60, 300);
    text('computer chose : ' + computerguess, 360, 300);
    if (computerguess == 'rock') {
        textSize(20);
        text("It's a tie!", 240, 450);
    } else if (computerguess == 'scissors') {
        textSize(20);
        text("You win!", 255, 450);
    } else {
        textSize(20);
        text("You lose :(", 250, 450);
    }
}

function paper() {
    drawButtons();
    computerguess = random(['rock', 'paper', 'scissors']);
    textSize(15);
    text('you chose : paper', 60, 300);
    text('computer chose : ' + computerguess, 360, 300);
    if (computerguess == 'paper') {
        textSize(20);
        text("It's a tie!", 240, 450);
    } else if (computerguess == 'scissors') {
        textSize(20);
        text("You lose:(", 255, 450);
    } else {
        textSize(20);
        text("You win! ", 250, 450);
    }
}

function scissors() {
    drawButtons();
    computerguess = random(['rock', 'paper', 'scissors']);
    textSize(15);
    text('you chose : scissors', 60, 300);
    text('computer chose : ' + computerguess, 360, 300);
    if (computerguess == 'scissors') {
        textSize(20);
        text("It's a tie!", 240, 450);

    } else if (computerguess == 'rock') {
        textSize(20);
        text("You win!", 255, 450);
    } else {
        textSize(20);
        text("You lose :(", 250, 450);
    }
}

function addPoints() {
    background('#E91E63');
    if (score >= 0)
        score += 1;
}

function minusPoints() {
    background('#E91E63');
    if (score >= 0)
        score -= 1;
}

function drawButtons() {
    fill('#F7EDE2');
    background('#E91E63');
    buttonadd =
        createButton('AddPoint');
    buttonadd.position(275, 400);
    buttonadd.mousePressed(addPoints);

    buttonmin =
        createButton('MinusPoint');
    buttonmin.position(270, 430);
    buttonmin.mousePressed(minusPoints);

    buttonrock = createButton('Rock');
    buttonrock.position(10, 140);
    buttonrock.mousePressed(rock);

    buttonpaper = createButton('Paper');
    buttonpaper.position(10, 180);
    buttonpaper.mousePressed(paper);

    buttonscissors = createButton('Scissors');
    buttonscissors.position(10, 220);
    buttonscissors.mousePressed(scissors);
    textSize(20);
    textFont("Helvetica");
    background('#E91E63');
    text("Let's Play The Game of Rock, Paper, Scissors!", 36, 30);

}