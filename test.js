const fs = require('fs');

//Reading a file

// fs.readFile('./docs/node.txt',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//Writing a File

// fs.writeFile('./docs/Node1.txt', "hello i am write function",() => {
//     console.log("File Was written")
// })


//Creating and Deleting Directory
// if(!fs.existsSync('./assests')){
// fs.mkdir('./assests', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("Directory Was Created")
// })
// }else {
//     fs.rmdir('./assests', () => {
//         console.log("Folder Deleted");
//     })
// }


//Deleting Files

fs.unlink('./docs/Node.txt', () => {
    console.log("File Deleted");
})