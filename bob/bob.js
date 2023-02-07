const isNothing = (message) => message.length === 0;
const isQuestion = (message) => message.endsWith('?');
const isAllCaps = (message) => /[a-z]/i.test(message) && message === message.toUpperCase();
const isAllCapsAndQuestion = (message) => isAllCaps(message) && isQuestion(message);
const everythingElse = () => true;

const rules = [
    {assert: isNothing, response: 'Fine. Be that way!'},
    {assert: isAllCapsAndQuestion, response: 'Calm down, I know what I\'m doing!'},
    {assert: isAllCaps, response: 'Whoa, chill out!'},
    {assert: isQuestion, response: 'Sure.'},
    {assert: everythingElse, response: 'Whatever.'},
];
export const hey = (message) => rules
    .find(({assert}) => assert(message.trim()))
    .response;
