const { expect } = require("@jest/globals");
const { didPlayerWin } = require("../RPS");

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

describe("Our Functions", () => {
  describe("didPlayerWin", () => {
    describe("when player chooses ROCK and computer chooses SCISSORS", () => {
      it("should return true", () => {
        expect(
          didPlayerWin({ playerChoice: ROCK, computerChoice: SCISSORS })
        ).toEqual(true);
      });
    });

    describe("when player chooses ROCK and computer chooses PAPER", () => {
      it("should return false", () => {
        expect(
          didPlayerWin({ playerChoice: ROCK, computerChoice: PAPER })
        ).toEqual(false);
      });
    });

    describe("when player chooses PAPER and computer chooses ROCK", () => {
      it("should return true", () => {
        expect(
          didPlayerWin({ playerChoice: PAPER, computerChoice: ROCK })
        ).toEqual(true);
      });
    });

    describe("when player chooses PAPER and computer chooses SCISSORS", () => {
      it("should return false", () => {
        expect(
          didPlayerWin({ playerChoice: PAPER, computerChoice: SCISSORS })
        ).toEqual(false);
      });
    });

    describe("when player chooses SCISSORS and computer chooses ROCK", () => {
      it("should return false", () => {
        expect(
          didPlayerWin({ playerChoice: SCISSORS, computerChoice: ROCK })
        ).toEqual(false);
      });
    });

    describe("when player chooses SCISSORS and computer chooses PAPER", () => {
      it("should return true", () => {
        expect(
          didPlayerWin({ playerChoice: SCISSORS, computerChoice: PAPER })
        ).toEqual(true);
      });
    });

    describe("when the player and computer choose the same option", () => {
      it("should return tie", () => {
        expect(
          didPlayerWin({ playerChoice: SCISSORS, computerChoice: SCISSORS })
        ).toEqual("Tie game!");
      });
    });
  });
});
