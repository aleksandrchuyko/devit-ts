function combos(n: number): number[][] {
  let results: number[][] = [];
  function cycle(n: number, arr: number[] = []) {
    if (n === 0) {
      results.push([...arr]);
    } else {
      // Зпускаем цикл, где i - слогаемые, которые вычитаем из исходного числа
      for (let i = 1; i <= n; i++) {
        // В цикле рекурсивно вызываем функцию, чтоб пройти по всем комбинациям слогаемых
        // Если i меньше последнего сохраненного слогаемого, пропускаем вызов для
        // избежания дублирования комбинаций
        if (arr.length === 0 || arr[arr.length - 1] <= i) {
          cycle(n - i, [...arr, i]);
        }
      }
    }
  }
  cycle(n);
  return results;
}

console.log(combos(10));
