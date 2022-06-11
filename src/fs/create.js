
import {writeFile} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename  = fileURLToPath(import.meta.url);
const dirName = dirname(__filename )



export const create = async () => {
    const pathFile = dirName + '/files/fresh.txt';
    const message = 'Dog DOG dog';
    const errorMessage = 'fs error';
    try{
        await writeFile(pathFile, message, {flag: 'wx'});
    } catch (err){
        throw new Error(errorMessage)
    }
};
create();