import { AnyObject } from './index';

interface CopyedObjsType {
  target: AnyObject;
  copyTarget: AnyObject;
}

/**
 * 对一个对象中指定字段进行批量处理，目前只支持处理值为基本数据类型的字段
 * @param {Object} target 目标对象
 * @param {Array} handleArr 需要被处理的字段
 * @param {Function} handler 处理函数
 */
function batchHandleObjectFields(target: any, handleArr: string[], handler: (arg0: any) => any): AnyObject {
  let copyedObjs: CopyedObjsType[] = []; //此数组解决了循环引用和相同引用的问题，它存放已经递归到的目标对象
  function _deepCopy(target: AnyObject, needHandler = false): AnyObject {
    if (typeof target !== 'object' || !target) {
      return needHandler ? handler(target) : target;
    }
    for (let i = 0; i < copyedObjs.length; i++) {
      if (copyedObjs[i].target === target) {
        return copyedObjs[i].copyTarget;
      }
    }
    let obj = {};
    if (Array.isArray(target)) {
      obj = []; //处理target是数组的情况
    }
    copyedObjs.push({
      target: target,
      copyTarget: obj,
    });
    Object.keys(target).forEach((key): void => {
      if (obj[key]) {
        return;
      }

      if ((typeof target[key] !== 'object' || !target[key]) && handleArr.includes(key)) {
        obj[key] = _deepCopy(target[key], true);
      } else {
        obj[key] = _deepCopy(target[key]);
      }
    });
    return obj;
  }
  return _deepCopy(target);
}

export default batchHandleObjectFields;