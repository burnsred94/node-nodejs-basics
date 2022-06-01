import fs from 'fs'

export const read = async () => {
    fs.readFile('files/fileToRead.txt', (err, data)=>{
        if(err){
            throw new Error('FS operation filed')
        }else{
            console.log(data.toString())
        }
    })
};

read()