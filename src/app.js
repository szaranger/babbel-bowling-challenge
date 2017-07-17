class Frame {

  constructor(number, roll) {
    this.number = number;
    this.roll = roll;
  }

}

class Game {

  constructor() {
    this.score = 0;
    this.frames = 10;
    this.strikes = [];
    this.spares = [];
  }

  addToScore(frame, pins, isStrike = false, isSpare = false) {

    if (isStrike) {
      this.strikes.push(frame) ;
    }

    if (isSpare) {
      this.spares.push(frame) ;
    }

    if (this.spares[frame] + 1 === frame) {
      // if the last frame was a spare
      this.score += pins + 10;
    } else if (this.spares[frame] + 1 === frame || this.spares[frame] + 2 === frame) {
      // if the last two frames are a score
      this.score += pins + 10;
    } else {
      this.score += pins;
    }
  }

  getScore() {
    return this.score;
  }

  play(name) {
    for (let i = 1; i < this.frames + 1; i++) {
      let score = 0;
      let total = 0;
      for (let j = 1; j < 3; j++) {
        if (score !== 10) {
          score = Math.floor((Math.random() * (10 - score)) + 1);
          total = total + score;
          document.getElementById(`frame_header${i}`).innerText = i;
          document.getElementById('frame1').innerText = name;
          document.getElementById(`frame${i + 1}`).innerText = score;
          console.log('Frame: ', i);
          console.log('Roll: ', j);
          console.log('Score: ', score);
          console.log('Total: ', total);
          this.addToScore(i, score, score === 10, total === 10);
        }
      }
    }

    document.getElementById('total').innerText = this.getScore();
  }

}

class Player {

  constructor(name) {
    this.name = name;
  }

  play() {
    const game = new Game();
    game.play(this.name);

    console.log(game.getScore());
  }

}

const sean =  new Player('Sean');

sean.play();
