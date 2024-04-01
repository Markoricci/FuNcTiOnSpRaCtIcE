// task1
export function convertToLowerOrUpperCase(arr, caseType) {
  if (!arr || !caseType || !Array.isArray(arr)) {
    return undefined;
  }
  return arr.map((str) =>
    caseType === 'lower' ? str.toLowerCase() : str.toUpperCase(),
  );
}

// task2
export function convertToFilteredLowerOrUpperCase(arr, caseType) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  return arr
    .filter((item) => typeof item === 'string')
    .map((item) =>
      caseType === 'lower' ? item.toLowerCase() : item.toUpperCase(),
    );
}

// task3
export function filterUsersByAge(users) {
  if (!Array.isArray(users)) {
    return undefined;
  }
  return users.filter((user) => user.age >= 18);
}

// task4
export function filterUsersByParam(users, param, value, operator) {
  if (!users || !Array.isArray(users) || !param || value === undefined) {
    return undefined;
  }
  return users.filter((user) => {
    if (typeof value === 'number') {
      if (operator === '>') {
        return user[param] > value;
      } else if (operator === '<') {
        return user[param] < value;
      }
    } else {
      return user[param] === value;
    }
  });
}

// task5
export function divisibleAverage(arr, divisor) {
  if (!arr || !divisor) return undefined;

  const divisibleNumbers = arr.filter((num) => num % divisor === 0);

  if (divisibleNumbers.length === 0) return 0;

  const sum = divisibleNumbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / divisibleNumbers.length;

  return average;
}
