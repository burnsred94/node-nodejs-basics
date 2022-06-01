export const copy = async () => {
    const fs = await import('fs')
    fs.readdir('files', (err, files)=> {
        if(err){ throw new Error('FS operation filed') }
        fs.mkdir('files_copy',(err)=>{
            if(err){ throw new Error('FS operation filed') }
            for(let file of files) {
                fs.copyFile('files/' + file, 'files_copy/' + file, ()=>{})
            }
        })
    })
};

copy()