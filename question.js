const validator = require("validator");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function questions(index, text, answers) {
  rl.question(text[index].ask, (ans) => {
    if (isValid(text[index].type, ans) == false) {
      questions(index, text, answers);
    } else {
      answers.push(ans);
      if (text.length > index + 1) {
        index++;
        questions(index, text, answers);
      } else {
        console.log(
          `Hi, ${answers[0]}. Your number is ${answers[1]}. Your email is ${answers[2]}`
        );
        rl.close();
      }
    }
  });
}

function isValid(text, answer) {
  if (text == "name") {
    return validator.isAlpha(answer);
  } else if (text == "phone") {
    return validator.isMobilePhone(answer, "id-ID");
  } else {
    return validator.isEmail(answer);
  }
}

module.exports = questions;
