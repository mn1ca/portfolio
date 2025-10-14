var cardsDrawn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const min = 1;
const max = 13;

var total = 0;
var drawn = '';
var numAces = 0;
var goal = 0;

var wins = 0;
var games = 0;


function startBlackjack() {
    var dialogue = document.getElementById('dialogue');
    var choices = document.getElementById('choices');

    if (!total)
        dialogue.innerHTML = 'Huh? ... Okay, I guess.';
    else {
        if (wins / games > 0.5)
             dialogue.innerHTML = "Pretty lucky, huh?";
        else if (wins / games > 0.25)
            dialogue.innerHTML = "Shall we keep playing?";
        else
            dialogue.innerHTML = "Hm... you’re lucky we aren’t betting money."

        dialogue.innerHTML += "<br>You’ve won " + wins + " out of " + games;
        if (games == 1)
             dialogue.innerHTML += " game.";
        else
            dialogue.innerHTML += " games.";
    }
    choices.innerHTML =
        "<span class='choice' onclick='hit(1)'>next</span><br><span class='choice' onclick='reset()'>never mind, go back.</span>";

    total = 0;
    drawn = '';
    numAces = 0;
    //cardsDrawn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function reset() {
    location.reload();
}

function blackjack() {
    var dialogue = document.getElementById('dialogue');
    var choices = document.getElementById('choices');


    if (total > 21) {
        if (numAces) {
            total -= 10;
            numAces--;
        } else {
            total += " (BUST!)";
            games++;
        }
    } else if (total == 21) {
        total += " (YOU WIN!)";
        wins++;
        games++;
    }

    dialogue.innerHTML = '<b>your cards: </b>' + drawn;
    dialogue.innerHTML += '<br><b>total: </b><strong>' + total + '</strong>';

    if (total <= 20)
        choices.innerHTML =
        "<span class='choice' onclick='hit(0)'>hit</span><br><span class='choice' onclick='dealer(0)'>stand</span>";
    else
        choices.innerHTML = "<span class='choice' onclick='startBlackjack()'>play again</span><br><span class='choice' onclick='reset()'>back</span>";

}

function dealer(i) {
    var end = false;
    var dialogue = document.getElementById('dialogue');
    var choices = document.getElementById('choices');

    if (!i) {
        goal = Math.max(17, total);
        total = 0;
        drawn = '';
        numAces = 0;

        stand(1);
    }

    if (total > 21) {
        if (numAces) {
            total -= 10;
            numAces--;
        } else {
            total += " (YOU WIN!)";
            wins++;
            end = true;
        }
    } else if (total == 21 || total > goal) {
        total += " (404CAT WINS!)";
        end = true;
    }

    dialogue.innerHTML = "<b>404cat’s cards: </b>" + drawn;
    dialogue.innerHTML += '<br><b>total: </b><strong>' + total + '</strong>';

    if (end) {
        games++;
        choices.innerHTML = "<span class='choice' onclick='startBlackjack()'>play again</span><br><span class='choice' onclick='reset()'>back</span>";
    } else
        choices.innerHTML = "<span class='choice' onclick='stand(0)'>next</span><br>&nbsp;";


    return;
}

function hit(i) {
    generateCard(i);
    blackjack();
}

function stand(i) {
    generateCard(i);
    dealer(1);
}

function generateCard(i) {
    for (var j = 0; j < 100; j++) {
        var card = Math.floor(Math.random() * (max - min + 1)) + min;
        if (cardsDrawn[card - 1] < 4) {
            cardsDrawn[card - 1]++;
            break;
        } else {
            continue;
        }
    }

    if (j >= 99) {
        alert('Hey card counters, the deck is getting reset!');
        cardsDrawn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var card = Math.floor(Math.random() * (max - min + 1)) + min;
        cardsDrawn[card - 1]++;
    }

    if (!i)
        drawn += ' &nbsp;';

    switch (card) {
        case 1:
            drawn += 'A';
            if ((total + 11) > 21)
                total += 1;
            else {
                total += 11;
                numAces++;
            }
            break;
        case 11:
            drawn += 'J';
            total += 10;
            break;
        case 12:
            drawn += 'Q';
            total += 10;
            break;
        case 13:
            drawn += 'K';
            total += 10;
            break;
        default:
            drawn += card;
            total += card;
    }

    return;
}
