type Pair = [a: string, b: any];
type Obj = {
  [key: string]: any;
};
// Перебираем массивы-параметры и преобразуем в ключ-значение.
// Если второй элемент тоже массив, вызываем функцию рекурсивно
// для создания вложенных объектов
function arrayToObject(arr: Pair[]): Obj {
  return arr.reduce<Obj>((obj, pair) => {
    if (Array.isArray(pair[1])) {
      obj[pair[0]] = arrayToObject(pair[1]);
    } else {
      obj[pair[0]] = pair[1];
    }

    return obj;
  }, {});
}

console.log(
  arrayToObject([
    ['name', 'developer'],
    ['age', 5],
    [
      'skills',
      [
        ['html', 4],
        ['css', 5],
				['js', 5],
				['frameworks', [['react', 4], ['node', 'good']]],
      ],
    ],
  ])
);
