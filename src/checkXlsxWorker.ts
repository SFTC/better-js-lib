/* eslint-disable @typescript-eslint/explicit-function-return-type */
import xlsx from 'xlsx';

// 计算行数
function calcRows(str): number {
  const codeIndex = 64,
    len = str.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += (str.charCodeAt(i) - codeIndex) * Math.pow(26, len - i - 1);
  }
  return sum;
}

// 10进制转26进制
function convert26(num): string {
  var str = '';
  while (num > 0) {
    var m = num % 26;
    if (m == 0) {
      m = 26;
    }
    str = String.fromCharCode(m + 64) + str;
    num = (num - m) / 26;
  }
  return str;
}

const checkXlsxWorker = function(e: any, res: any): void {
  const { file, options } = e.data;
  const rABS = false;
  const isXlsx =
    file.type ===
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  let row = 0,
    column = 0;

  // 格式不正确
  if (!isXlsx) {
    res({
      errno: -1,
      errmsg: '请上传标准格式的xlsx文件',
      result: null
    });
  }
  const f = file;

  if (options.size && options.size < f.size * 1024) {
    res({
      errno: -1,
      errmsg: `上传文件大小上限为${
        options.size / 1024 >= 1
          ? Math.floor(options.size / 1024) + 'M'
          : options.size + 'KB'
      }`,
      result: null
    });
  }

  const reader = new FileReader();
  reader.onload = function(response: any): void {
    const data = response.target.result;
    let wb;
    wb = xlsx.read(data, {
      type: 'binary'
    });

    const wbCon = wb.Sheets['Sheet1'] || wb.Sheets['工作表1'];

    // A1:G11
    const calcBase = wbCon['!ref'].split(':')[1];
    const reg = /^([A-Z]+)(\d+)/;
    const rowColumnArr = calcBase.replace(reg, '$1:$2');

    // 行数、列数
    row = Number(rowColumnArr.split(':')[1]);
    column = calcRows(rowColumnArr.split(':')[0]);
    // 行数上限
    const rowLimit = options.rowLimit || 10001;

    // 列数上限
    const columnLimit = options.columnLimit || 10000;

    // 校验1: 空行校验
    let rowNull = {};
    for (let j = 2; j <= row; j++) {
      for (let i = 1; i <= column; i++) {
        const con =
          (wbCon[`${convert26(i)}${j}`] &&
            wbCon[`${convert26(i)}${j}`].w.trim()) ||
          '';
        rowNull[j] = (rowNull[j] || '') + con;
      }
    }
    if (Object.values(rowNull).some(v => !v)) {
      res({
        errno: -1,
        errmsg: '表格存在空行！请删除后重新上传文件',
        result: null
      });
    }

    // 校验2: 超行数上限
    if (row > rowLimit) {
      res({
        errno: -1,
        errmsg: '行数超出上限！请调整后上传文件',
        result: null
      });
    }

    // 校验3: 超列数上限
    if (column > columnLimit) {
      res({
        errno: -1,
        errmsg: '列数数超出上限！请调整后上传文件',
        result: null
      });
    }

    // 返回解析内容
    if (options.result) {
      let result = xlsx.utils.sheet_to_json(wbCon).map((v: any) => {
        let item = {};
        Object.keys(v).forEach(k => {
          item[options.result[k]] = v[k];
        });
        return item;
      });
      res({
        errno: 0,
        errmsg: '',
        result
      });
    }

    res({
      errno: 0,
      errmsg: '',
      result: null
    });
  };
  if (rABS) {
    reader.readAsArrayBuffer(f);
  } else {
    reader.readAsBinaryString(f);
  }
};

export default checkXlsxWorker;