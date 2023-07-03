import { readFile } from 'fs/promises';
import path from 'path';
console.log('hi');

async function getText(path: string): Promise<string> {
  const readText = await readFile(path, { encoding: 'utf-8' });
  return readText;
}

const text = getText(path.join(__dirname, '..', 'hello.txt')).then((text) => console.log(text))
