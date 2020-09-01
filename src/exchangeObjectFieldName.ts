import deepCopy from 'lodash.clonedeep';
import { AnyObject } from './index';


/** 需要替换的对象属性名 */
type ExchangeFields = {
  /** 原名称 */
  oldName: string;
  /** 新名称 */
  newName: string;
  /** 对属性值进行一些处理 */
  handler?: (value: any) => any;
}[];

/**
 * 替换一个对象中一些指定属性的属性名
 * @param obj 任意一个对象
 * @param exchangeFields 需要替换的对象属性名
 */
const exchangeObjectFieldName = (obj: AnyObject, exchangeFields: ExchangeFields): AnyObject => {
  const newObj: AnyObject = deepCopy(obj);
  exchangeFields.forEach(({ oldName, newName, handler }): void => {
    if (handler) {
      newObj[newName] = handler(obj[oldName]);
    } else {
      newObj[newName] = obj[oldName];
    }
    delete newObj[oldName];
  });
  return newObj;
};

export default exchangeObjectFieldName;