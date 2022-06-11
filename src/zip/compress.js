import {createGzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {fileURLToPath} from 'url';
import { dirname } from 'node:path';


const __filename = fileURLToPath(import.meta.url);

export const compress = async () => {
    const gz = createGzip()
    const read = createReadStream(`${dirname(__filename)}/files/fileToCompress.txt`)
    const write = createWriteStream(`${dirname(__filename)}/files/archive.gz`);
    read.pipe(gz).pipe(write);
};

compress()