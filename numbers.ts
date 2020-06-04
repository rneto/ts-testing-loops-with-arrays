import { maxArrayLength } from './config';

let numbers: number[] = [];
for(let i = 0; i < maxArrayLength; i++)
{
  numbers.push(Math.floor(Math.random() * 1000000) + 1);
}

export default numbers;