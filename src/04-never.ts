const withoutEnd = () => {
  while (true) {
    console.log('Never stop learning!');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Is an string';
  } else if (Array.isArray(input)) {
    return 'Is an array';
  }

  return fail('not matched');
};

console.log(example('Hi'));
console.log(example([1, 2, 3, 4, 5]));
console.log(example(12345));
console.log(example('Hi after fail!'));
console.log(example('Hi after fail!'));
console.log(example('Hi after fail!'));
