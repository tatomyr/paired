const paired = (customKey = 'key', customVal = 'val') => {
  const arrToObj = arr => arr.reduce((
    prev,
    { [customKey]: key, [customVal]: val }
  ) => ({ ...prev, [key]: val }), {});

  const objToArr = obj => Object.keys(obj).map(key => ({
    [customKey]: key,
    [customVal]: obj[key]
  }));

  return {
    arrToObj,
    objToArr,
  };
}
