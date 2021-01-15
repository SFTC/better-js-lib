import NP from 'number-precision';
NP.enableBoundaryChecking(false); // 关闭数字范围超过边界的 warn 提示

/** 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式) */
export function colorRgb(color: string): number[] {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange: number[] = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`, 16));
    }
    return sColorChange;
  }
  console.error(`该色值非法【${color}】`);
  return [];
}

/** 将rgb表示方式转换为hex表示方式 */
export function colorHex(rgb: string): string {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(rgb)) {
    const aColor = rgb.replace(/(?:(|)|rgb|RGB)*/g, '').split(',');
    let strHex = '#';
    for (let i = 0; i < aColor.length; i++) {
      let hex: string | number = +(+aColor[i]).toString(16);
      hex = hex < 10 ? `${0}${hex}` : `${hex}`; // 保证每个rgb的值为2位
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = rgb;
    }
    return strHex;
  }
  if (reg.test(rgb)) {
    const aNum = rgb.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return rgb;
    }
    if (aNum.length === 3) {
      let numHex = '#';
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  }
  return rgb;
}

/** 根据首尾颜色和步长计算出渐变颜色的色值 */
class GradientColor {
  /** 起始颜色 */
  private startRGB: number[];
  /** 结束颜色 */
  private endRGB: number[];

  public constructor(startColor: string, endColor: string) {
    this.startRGB = colorRgb(startColor);
    this.endRGB = colorRgb(endColor);
  }

  /**
   * 获取颜色值数组
   * @param {number} step 步长
   * @returns 渐变颜色值数组
   * @memberof GradientColor
   */
  public getColor(step: number): string[] {
    const [startR, startG, startB] = this.startRGB;
    const [endR, endG, endB] = this.endRGB;

    const sR = (endR - startR) / step; // 总差值
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr: string[] = [];
    for (let i = 0; i < step; i++) {
      // 计算每一步的hex值
      const hex = colorHex(
        `rgb(${[
          NP.round(sR * i + startR, 0),
          NP.round(sG * i + startG, 0),
          NP.round(sB * i + startB, 0),
        ].join()})`,
      );
      colorArr.push(hex);
    }
    return colorArr;
  }
}

export default GradientColor;
