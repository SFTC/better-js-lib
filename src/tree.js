const Iterator = (value, newKey, oldKey, isDelete) => {
  const temp = Object.assign(value);
  temp[newKey] = temp[oldKey];
  isDelete && delete temp[oldKey];
  if (!value.children) {
    return temp;
  }
  return Object.assign({}, temp, {
    children: [
      // { dept_code: '0', [newKey]: '全部' },
      ...temp.children.map((item) => Iterator(item, newKey, oldKey)),
    ],
  });
};
/*
 * @param {arr} [arr] - 要处理的数组
 * @param {string} [newKey] - 要替换成的 key
 * @param {string} [oldKey] - 要被换成的 key
 * @param {boolen} [isDelete] - 旧的 key 是否要被干掉
 */

const tree = (arr, newKey, oldKey, isDelete) =>
  arr.map((item) => Iterator(item, newKey, oldKey, isDelete));

export default tree;
