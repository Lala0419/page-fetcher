const fs = require("fs");
const request = require("request");
const argument = process.argv.splice(2);

/**
 * 1, get two arguments
 * 2, first argument url will dl the content of using the request library
 * 3, once the dl happen need to write the content to the second argument which is index.html
 */
const mypromise = new Promise((resolve, reject) => {
	request(argument[0], (error, response, body) => {
		if (error) {
			return reject();
		}
		return resolve(body);
	});
});

mypromise.then((data) => {
	fs.writeFile(argument[1], data, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log(
				`Downloaded and saved ${data.length} bytes to ${argument[1]}`
			);
		}
	});
});

// Edge case 1

// const prompt = require("prompt-sync")({ sigint: true });
// const fs = require("fs");
// const request = require("request");
// const argument = process.argv.splice(2);

// /**
//  * 1, get two arguments
//  * 2, first argument url will dl the content of using the request library
//  * 3, once the dl happen need to write the content to the second argument which is index.html
//  */
// const mypromise = new Promise((resolve, reject) => {
// 	request(argument[0], (error, response, body) => {
// 		if (error) {
// 			return reject();
// 		}
// 		return resolve(body);
// 	});
// });

// mypromise.then((data) => {
// 	fs.readFile(argument[1], (error, data2) => {
// 		if (error) {
// 			fs.writeFile(argument[1], data2, (err) => {
// 				if (err) {
// 					console.error(err);
// 				} else {
// 					console.log(
// 						`Downloaded and saved ${data.length} bytes to ${argument[1]}`
// 					);
// 				}
// 			});
// 			//this means index.html exist
// 		} else if (data2) {
// 			const answer = prompt(
// 				`would you like to overwrite ${argument[1]}? if so, enter y: `
// 			);
// 			if (answer === "y") {
// 				console.log("user selected y");
// 				fs.writeFile(argument[1], data, (err) => {
// 					if (err) {
// 						console.error(err);
// 					} else {
// 						console.log(
// 							`Downloaded and saved ${data.length} bytes to ${argument[1]}`
// 						);
// 					}
// 				});
// 			} else {
// 				return;
// 			}
// 		}
// 	});
// });
