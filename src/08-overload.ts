// Ruben => [R,u,b,e,n] => string => string[]
// [R,u,b,e,n] => Ruben => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Ruben');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Ruben =>', rtaArray);

const rtaStr = parseStr(['R', 'u', 'b', 'e', 'n']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['R,'u','b','e','n'] =>", rtaStr);
