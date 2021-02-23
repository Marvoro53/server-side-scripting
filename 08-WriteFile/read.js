// fs ir a core node package for reading and writting files
const fs =require("fs");

//this block of code will read from the "movies.txt"
fs.readFile("read.txt", "utf8", function(error, data){
    //relatice path
    //utf8
    //function
    if (error) {
       return console.log(error);
    }

    //we will print contents of data
    console.log(data);

    //slpit by comas

    var dataArr = data.split(",");

    //re-display content
    console.log(dataArr);
});