import emojiRegex from 'emoji-regex';

/** 校验字符串中是否含有 Emoji 表情符号 */
export function hasEmoji(text: string): boolean {
  return emojiRegex().test(text);
}

export default hasEmoji;
