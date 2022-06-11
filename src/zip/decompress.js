import {createUnzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import { dirname } from 'node:path';


const __filename = fileURLToPath(import.meta.url);

export const decompress = async () => {
    const unzip = createUnzip();
    const read = createReadStream(`${dirname(__filename)}/files/archive.gz`);
    const write = createWriteStream(`${dirname(__filename)}/files/fileToDecompress.txt`);
    read.pipe(unzip).pipe(write);
};

decompress()