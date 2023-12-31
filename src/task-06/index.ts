class NotificationException {}
class ErrorException {}
function primitiveMultiply(a: number, b: number) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a: number, b: number): number | void {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    // Проверяем инстанс исключения
    if (e instanceof NotificationException) {
      console.log('NotificationException');
      // Исключение не критичное, вызываем повторно функцию
      return reliableMultiply(a, b);
    } else if (e instanceof ErrorException) {
      // Исключение критичное, пробрасываем исключение и прерываем работу
      throw e;
    } else {
      throw new Error('Unknown exception');
    }
  }
}

console.log(reliableMultiply(8, 8));
