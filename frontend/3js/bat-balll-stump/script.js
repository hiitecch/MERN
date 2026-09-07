let scoreStr = localStorage.getItem('Score');
let score;

resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `Score: Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
  };

  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber >= 0 && randomNumber < 1) {
    return 'Stone';
  } else if (randomNumber >= 1 && randomNumber < 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Stone') {
    if (computerMove === 'Stone') {
      score.tie++;
      return "It's a tie";
    } else if (computerMove === 'Paper') {
      score.lost++;
      return 'Computer has won';
    } else {
      score.win++;
      return 'User won.';
    }
  }

  else if (userMove === 'Paper') {
    if (computerMove === 'Stone') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Paper') {
      score.tie++;
      return "It's a tie";
    } else {
      score.lost++;
      return 'Computer has won';
    }
  }

  else if (userMove === 'Scissors') {
    if (computerMove === 'Stone') {
      score.lost++;
      return 'Computer has won';
    } else if (computerMove === 'Paper') {
      score.win++;
      return 'User won.';
    } else {
      score.tie++;
      return "It's a tie";
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('Score', JSON.stringify(score));

  document.querySelector('#user-move').innerText =
    userMove ? `You chose: ${userMove}` : '';

  document.querySelector('#computer-move').innerText =
    computerMove ? `Computer chose: ${computerMove}` : '';

  document.querySelector('#result').innerText = result || '';

  document.querySelector('#score').innerText = score.displayScore();
}

function resetGame() {
  localStorage.clear();
  resetScore();
}