const questions = require("./question");
const text = [
  {
    type: "name",
    ask: "What's your name? ",
  },
  {
    type: "phone",
    ask: "What's your phone number? ",
  },
  {
    type: "email",
    ask: "What's your email? ",
  },
];
console.info(text);
questions(0, text, []);
