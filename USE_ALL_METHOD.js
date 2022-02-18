var fs=require("fs")
fs.open("creat_file","w",function(arr){
  if(arr)throw error;
})
fs.rename("creat_file","new_file",function(arr){
  if(arr)throw error;
})
fs.writeFile("new_file","hi my name is manisha",function(arr){
  if(arr)throw error;
})
fs.appendFile("new_file","\ni am from india",function(arr){
  if(arr)throw error;
})
fs.readFile("new_file","utf-8",function(arr,data){
  if(arr)throw error;
  console.log(data)
})
fs.unlink("new_file",function(arr){
  if(arr)throw error;
})
