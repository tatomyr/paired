const paired = (customKey = 'key', customVal = 'val') => {
  const objToArr = obj => Object.keys(obj).map(key => ({
    [customKey]: key,
    [customVal]: obj[key]
  }));

  const arrToObj = arr => arr.reduce((
    prev,
    { [customKey]: key, [customVal]: val }
  ) => ({ ...prev, [key]: val }), {});

  const checkArray = arr => {
    if (!Array.isArray(arr)) {
      throw new TypeError('Argument must be an Array instance');
    }

    return arrToObj(arr);
  }

  return {
    objToArr,
    arrToObj: checkArray,
  };
}

// export default paired;
module.exports = paired;
