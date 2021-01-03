const fs = require('fs');
let file = require(__dirname + '/../package.json');

// empty fields
file.name = "";
file.description = "";
file.author = "Edward";

// remove fields
delete file.bugs;
delete file.repository;
delete file.homepage;

fs.writeFile('./package.json', JSON.stringify(file, null, 4), (err) => {
    err && console.error(err);
});



