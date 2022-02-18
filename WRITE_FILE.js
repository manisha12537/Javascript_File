var fs=require("fs")
fs.writeFile("WRITE_FILE.txt","helow", function(err,file){
    if(err)throw err;
})