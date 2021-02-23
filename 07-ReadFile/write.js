//COre node package for reading files
//require the filesystem

const fs= require("fs");


//This bock of code will create a file called movies.txt
//it will then print "inception, Die Hard" in the file
fs.writeFile("movies.txt", "Inception, Die Hard", function(err){
    if (err){
        return console.log(err);
    }
    console.log("movies.txt was updated!")
});

//2-3 arguments
//If code experiences errors it will log the error


// otherwise, it will print "movies.txt was updated"