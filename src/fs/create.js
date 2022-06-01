import fs from 'fs'

export const create = async () => {
        fs.access('files/fresh.txt', fs.F_OK,(err)=>{
            if(err){
                return fs.appendFile('files/fresh.txt', 'I am fresh and young', ()=>{})
            }else{
                throw new Error('FS operation filed')
            }
        })
};

create()