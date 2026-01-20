const fs = require('fs');

fs.writeFile("hey.txt","app kaisa ha",function(err){
    if(err) console.error(err);
    else console.log("done");
})

fs.appendFile("hey.txt"," mai to acha hu",function(err){
    if(err) console.error(err);
    else console.log("done");
})

fs.rename("hey.txt","yo.txt",function(err){
if(err) console.error(err);
else console.log("done");
})
fs.copyFile("yo.txt","./copy/copy.txt" ,function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.unlink("yo.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");
})


fs.rm("./copy",{recursive:true},function(err){
    if(err) console.error(err)
        else console.log("removed")
})




