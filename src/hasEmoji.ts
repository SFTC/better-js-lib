import emojiRegex from 'emoji-regex';

export function hasEmoji(text: string): boolean {
  return emojiRegex().test(text);
}
