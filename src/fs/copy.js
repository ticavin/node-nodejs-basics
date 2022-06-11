import {copyFile, mkdir, readdir} from 'node:fs/promises'
import {fileURLToPath} from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);

export const copy = async () => {
    try {
        await mkdir(`${dirname(__filename)}/files_copy`);
        const arrayOfFilesInDir = await readdir(`${dirname(__filename)}/files`);
        await arrayOfFilesInDir.map(item => {
            copyFile(`${dirname(__filename)}/files/${item}`, `${dirname(__filename)}/files_copy/${item}`)
        })
    }
    catch {
        throw new Error('error fail folder arledy exist');
    }
};

copy();