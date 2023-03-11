let fs = require('fs');

// let fileRead = fs.readFileSync('file.txt', 'utf-8');
// console.log(fileRead);
// fileRead = fileRead.replace('Nothing', 'No one')
// let fileWrite = fs.writeFileSync('file2.txt', fileRead);

fs.readFile('file.txt', 'utf-8', (err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data);
})
console.log('this is after readfile');
