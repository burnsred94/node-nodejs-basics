import fs from 'fs';

export const remove = async () => {
    fs.rm('files/fileToRemove.txt',(err)=>{
        if(err){
            throw new Error('FS operation filed')
        }
    })
};

remove()