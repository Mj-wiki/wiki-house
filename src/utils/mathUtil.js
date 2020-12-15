import { numToString } from './numberUtil';
/**
 * 对齐位数并且放回位数
 */
const format = params => {
  let numIntArr = [],
    decLengthArr = [];
  for (let i = 0; i < params.length; i++) {
    let item = params[i];
    numIntArr[i] = Number(numToString(item).replace('.', ''));
    try {
      decLengthArr[i] = numToString(item).split('.')[1].length;
    } catch (error) {
      decLengthArr[i] = 0;
    }
  }
  let decLengthMax = Math.max(...decLengthArr);
  let diffArr = decLengthArr.map(decLength => decLengthMax - decLength);
  return {
    numArr: numIntArr.map((v, index) => v * Math.pow(10, diffArr[index])),
    diffArr,
    decLengthArr,
    decLengthMax,
  };
};
/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 *
 * @param num1加数1 | num2加数2
 */
export const numAdd = (...params) => {
  let { numArr, decLengthMax } = format(params);
  return numArr.reduce((a, b) => a + b) / Math.pow(10, decLengthMax);
};

/**
 * 减法运算，避免数据相减小数点后产生多位数和计算精度损失。
 *
 * @param num1被减数 | num2减数
 */
export const numSub = (...params) => {
  let { numArr, decLengthMax } = format(params);
  return numArr.reduce((a, b) => a - b) / Math.pow(10, decLengthMax);
};
/**
 * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
 *
 * @param num1被乘数 | num2乘数
 */
export const numMulti = (...params) => {
  let { numArr, decLengthArr, diffArr } = format(params);
  return (
    numArr.reduce((a, b) => a * b) /
    Math.pow(
      10,
      [...diffArr, ...decLengthArr].reduce((a, b) => a + b),
    )
  );
};
/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 * @param num1被除数 | num2除数
 */
export const numDiv = (...params) => {
  if (params.length > 2) {
    console.error('除法运算在参数超过两个时会出现精度问题，请勿使用');
  }
  let { numArr } = format(params);
  return numArr.reduce((a, b) => a / b);
};
