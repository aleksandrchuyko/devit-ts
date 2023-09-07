type UnknownFunction = (a?: any, b?: UnknownFunction) => any;
type FuncAndParams = [UnknownFunction, any[]];

const cb = (a: any) => a;

const f1 = (cb: UnknownFunction) => {
  return cb(1);
};
const f2 = (a: any, cb: UnknownFunction) => {
  return cb(a);
};
const f3 = (a: any, b: any, cb: UnknownFunction) => {
  setTimeout(() => cb([a, b]), 1000);
};

function bulkRun(arr: any[]): any {
  console.log(cb);
  // const promises = arr.map(set => {
  // 	let f = set[0];
  // 	let args = set[1];
  // 	return new Promise((resolve) => {
  // 		resolve(f(...args, cb));
  // 	});
  // })
  // console.log(promises)
  // return Promise.all(promises);

  const funcs = arr.map((set:any) => {
    let f: UnknownFunction = set[0];
    let args = set[1];
    console.log(set[0]);
    console.log(set[1]);
    // return f(...args, cb);
		return f(...args, cb);
  });
  console.log(funcs);
}

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]]
]); //.then(console.log)
// Output: [1, 2, [3, 4]]
