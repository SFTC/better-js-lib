const emojiRegex = require('emoji-regex');

export default text => emojiRegex().test(text);
