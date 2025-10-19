import * as fs from "fs";
import * as path from "path";

export default class FileMover {
    /**
     * Move a file from source to destination folder.
     * Creates destination folder if it doesn't exist.
     * 
     * @param sourcePath - Full path of the file to move
     * @param destinationDir - Destination directory path
     * @returns Promise<void>
     */
    static async moveFile(sourcePath: string, destinationDir: string): Promise<void> {
        try {
            // Check if source file exists
            if (!fs.existsSync(sourcePath)) {
                throw new Error(`Source file not found: ${sourcePath}`);
            }

            // Ensure destination directory exists
            if (!fs.existsSync(destinationDir)) {
                fs.mkdirSync(destinationDir, { recursive: true });
            }

            const fileName = path.basename(sourcePath);
            const destinationPath = path.join(destinationDir, fileName);

            // Move the file
            await fs.promises.rename(sourcePath, destinationPath);

            // console.log(`✅ File moved to: ${destinationPath}`);
        } catch (error) {
            // console.error(`❌ Error moving file: ${(error as Error).message}`);
            throw error;
        }
    }
}
