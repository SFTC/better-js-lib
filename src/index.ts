/** 包括任意属性的对象 */
export interface AnyObject {
  [propName: string]: any;
}

export { default as dayjs } from 'dayjs';

export { default as NP } from 'number-precision';

export { default as deepCopy } from 'lodash.clonedeep';

export { default as xlsx } from 'xlsx';

export { default as is } from './is';

export { default as check } from './check';

export { default as exchangeCoordinates  } from './exchangeCoordinates';

export { default as filterVoidObject } from './filterVoidObject';

export { default as formatDate } from './formatDate';

export { default as getArrIntersection } from './getArrIntersection';

export { default as getPointsDistance } from './getPointsDistance';

export { default as getUrlQuery } from './getUrlQuery';

export { default as getUrlString } from './getUrlString';

export { default as hasEmoji } from './hasEmoji';

export { default as Idcard } from './idcard';

export { default as isEmpty } from './isEmpty';

export { default as isVoidObject } from './isVoidObject';

export { default as exchangeTreeFieldName } from './exchangeTreeFieldName';

export { default as exchangeObjectFieldName } from './exchangeObjectFieldName';

export { default as batchHandleObjectFields } from './batchHandleObjectFields';

export { default as asyncWorker } from './asyncWorker';

export { default as checkXlsxWorker } from './checkXlsxWorker';
