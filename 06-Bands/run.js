var bandList = require("./bands.js");
console.log(bandList);

for (var key in bandList) {
	console.log("my fave " + key + ' band is ' + bandList[key] + ".");
} 