function objectToArray(obj: Obj): any {
  let keys = Object.keys(obj);
  return keys.reduce<Pair[]>((arr, key) => {
    if (obj[key] !== null && typeof obj[key] === 'object') {
      let temp: Pair = [key, objectToArray(obj[key])];
      arr.push(temp);
      return arr;
    } else {
      let temp: Pair = [key, obj[key]];
      arr.push(temp);
      return arr;
    }
  }, []);
}

console.log(
  objectToArray({
    name: 'developer',
    age: 5,
    skills: {
      html: 4,
      css: 5,
      js: 5,
    },
  })
);
