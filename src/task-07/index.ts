function mapObject(obj: Obj): any {
  const flatObj: Obj = {};

  function func(obj: Obj, mappedName: string) {
    Object.keys(obj).forEach((key) => {
      let branch = mappedName ? mappedName + '/' + key : key;
      if (
        obj[key] !== null &&
        typeof obj[key] === 'object' &&
        !Array.isArray(obj[key])
      ) {
        func(obj[key], branch);
      } else {
        flatObj[branch] = obj[key];
      }
    });
  }
  func(obj, '');
  
  return flatObj;
}

const obj = {
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: [1, 2, 3],
  },
};

console.log(mapObject(obj));
