function toFixed (num, digit) {
  return Math.round(num*Math.pow(10, digit))/Math.pow(10,digit);
}

export default toFixed;