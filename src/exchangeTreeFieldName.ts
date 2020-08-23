import { AnyObject } from './index';

const Iterator = (value: AnyObject, newKey: string, oldKey: string, isDelete: boolean): AnyObject => {
  const temp = Object.assign(value);
  temp[newKey] = temp[oldKey];
  isDelete && delete temp[oldKey];
  if (!value.children) {
    return temp;
  }
  return Object.assign({}, temp, {
    children: [
      // { dept_code: '0', [newKey]: '全部' },
      ...temp.children.map((item: any): AnyObject => Iterator(item, newKey, oldKey, isDelete)),
    ],
  });
};

/**
 * @param {arr} [arr] - 要处理的数组
 * @param {string} [newKey] - 要替换成的 key
 * @param {string} [oldKey] - 要被换成的 key
 * @param {boolean} [isDelete] - 旧的 key 是否要被干掉
 */
export const exchangeTreeFieldName = (arr: any[], newKey: string, oldKey: string, isDelete: boolean): any[] =>
  arr.map((item): AnyObject => Iterator(item, newKey, oldKey, isDelete));
