import dayjs from 'dayjs';

export * from 'number-precision';

export { dayjs };
// export { is };

export * from './check';
export * from './deepCopy';
export * from './exchangeCoordinates';
export * from './filterVoidObject';
export * from './formatDate';
export * from './getArrIntersection';
export * from './getPointsDistance';
export * from './getUrlQuery';
export * from './getUrlString';
export * from './hasEmoji';
export * from './idcard';
export * from './isEmpty';
export * from './isVoidObject';
export * from './exchangeTreeFieldName';
export * from './exchangeObjectFieldName';
export * from './batchHandleObjectFields';

/** 包括任意属性的对象 */
export interface AnyObject {
  [propName: string]: any;
}
