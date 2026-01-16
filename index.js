/**
 * twilio-node
 * poc for bug bounty 
 */

function hello(name = 'World') {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

module.exports = {
  hello,
  add
};
