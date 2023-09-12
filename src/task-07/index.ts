function mapObject(obj: Obj): any {
  const flatObj: Obj = {};

  function func(obj: Obj, mappedName: string) {
    // Проходим по ключам объекта
    Object.keys(obj).forEach((key) => {
      // Добавляем ключ в цепочку ключей
      let branch = mappedName ? mappedName + '/' + key : key;
      // Если значение свойства - объект, вызываем функцию рекурсивно,
      // перадаем этот объект и сохраненную цепочку
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
