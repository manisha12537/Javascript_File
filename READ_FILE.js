const fs= require("fs")
fs.readFile("mynewfile2.txt",function(err,data){
    if(err){
        console.error(err)
        return;
    }
   
    console.log(data)

})