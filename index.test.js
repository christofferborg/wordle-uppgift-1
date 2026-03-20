const compareWords = require("./index");

test("should return correct for the word HEJ", () => {
  let expectedOutput = [
    { letter: "H", result: "correct" },
    { letter: "E", result: "correct" },
    { letter: "J", result: "correct" },
  ];
  expect(compareWords("HEJ", "HEJ")).toEqual(expectedOutput);
});

test("should return incorrect for the word HEJ when guessing BIL", () => {
  let expectedOutput = [
    { letter: "B", result: "incorrect" },
    { letter: "I", result: "incorrect" },
    { letter: "L", result: "incorrect" },
  ];
  expect(compareWords("BIL", "HEJ")).toEqual(expectedOutput);
});

test("should return error if input is in small letters", () => {
  let expectedOutput = [
    { letter: "H", result: "correct" },
    { letter: "E", result: "correct" },
    { letter: "J", result: "correct" },
  ];
  expect(compareWords("hej", "HEJ")).toEqual(expectedOutput);
});

test("should return error if input has a different length", () => {
  expect(() => {
    compareWords("hejsan", "radio");
  }).toThrow("Input must have same length as the target word");
});

test("should return misplaced for correct letter in the wrong place", () => {
  let expectedOutput = [
    { letter: "A", result: "misplaced" },
    { letter: "L", result: "misplaced" },
    { letter: "B", result: "incorrect" },
    { letter: "U", result: "incorrect" },
    { letter: "M", result: "incorrect" },
  ];
  expect(compareWords("ALBUM", "CYKLA")).toEqual(expectedOutput);
});

test("should return misplaced for only the first occurrence of a letter if target has fewer instances", () => {
  let expectedOutput = [
    { letter: "H", result: "incorrect" },
    { letter: "A", result: "incorrect" },
    { letter: "L", result: "misplaced" },
    { letter: "L", result: "incorrect" },
    { letter: "Å", result: "incorrect" },
  ];
  expect(compareWords("HALLÅ", "SLOTT")).toEqual(expectedOutput);
});