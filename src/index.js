const paired = (customKey = 'key', customVal = 'val') => {
  const objToArr = obj => Object.keys(obj).map(key => ({
    [customKey]: key,
    [customVal]: obj[key]
  }));

  const checkObject = obj => {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('The argument must be an Object')
    }

    return objToArr(obj);
  }

  const arrToObj = arr => arr.reduce((
    prev,
    { [customKey]: key, [customVal]: val }
  ) => ({ ...prev, [key]: val }), {});

  const checkArray = arr => {
    if (!Array.isArray(arr)) {
      throw new TypeError('The argument must be an Array instance');
    }

    return arrToObj(arr);
  }

  return {
    objToArr: checkObject,
    arrToObj: checkArray,
  };
}

// export default paired;
module.exports = paired;
