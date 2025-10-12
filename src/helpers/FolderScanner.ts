import { readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

class FolderScannerHelper {
  constructor(private folderPath: string) { }

  public getAllFiles(prefix?: string): string[] {
    try {
      const entries = readdirSync(this.folderPath);
      return entries
        .filter((entry: string) => {
          const fullPath = resolve(this.folderPath, entry);
          return statSync(fullPath).isFile() && (!prefix || entry.startsWith(prefix));
        })
        .map((entry: string) => resolve(this.folderPath, entry)); // absolute path
    } catch (error) {
      console.error(`Error reading folder: ${this.folderPath}`, error);
      return [];
    }
  }
}

export default FolderScannerHelper;