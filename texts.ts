import { maxArrayLength } from './config';

let texts: string[] = [];
for(let i = 0; i < maxArrayLength; i++)
{
  texts.push(Math.random().toString(36).substring(2, 15));
}

export default texts;