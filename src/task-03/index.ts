const f1 = (cb:any) => {cb(1)}
const f2 = (a:any, cb:any) => {cb(a)}
const f3 = (a:any, b:any, cb:any) => {setTimeout(() => cb([a, b]), 1000)}

async function bulkRun(arr: any[]): Promise<any> {
  //Проходим по всем парам аргументов функций и массивов их параметров 
  const promises = arr.map((set) => {
    let f = set[0];
    let args = set[1];
    // Создаем промис, передаем resolve как колбєк аргумент функции
    return new Promise((resolve) => {
      f(...args, resolve);
    });
  });
  // Возвращаем Promise.all c переданным массивом всех промисов
  return Promise.all(promises);
}

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]
