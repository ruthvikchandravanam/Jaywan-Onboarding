import { readFileSync } from 'fs';
import { resolve } from 'path';

class JsonReaderHelper<T = unknown> {
  constructor(private filePath: string) {}

  public read(): T | null {
    try {
      const fullPath = resolve(this.filePath);
      const raw = readFileSync(fullPath, 'utf-8');
      return JSON.parse(raw) as T;
    } catch (error) {
      console.error(`Error reading JSON file: ${this.filePath}`, error);
      return null;
    }
  }
}

export default JsonReaderHelper;