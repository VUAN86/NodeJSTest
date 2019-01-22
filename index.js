

let stacks={};
stackInc("asd",100);
console.log(stacks);
stackInc("asdw",200);
console.log(stacks);
stackInc("asd",100);
console.log(stacks);
stackInc("asd",100);
console.log(stacks);
// // console.log(Object.assign(o1,o2))
//
// function stackInc(stack,total){
//     stacks[stack]={total:total, done: stacks[stack] ? stacks[stack].done + 1 : 1}
// }

// var arg = '323';
// switch (true) {
//     case /2/.test(arg):
//         console.log( 'Два' );
//         break;
//     default:
//         console.log('Неизвестное значение: ' + arg)
// }
//
// const xlsxj = require("xlsx-to-json");
// var async = require('async');
// var _ = require('lodash');
// var fs = require('fs');
//
// const langList = ['de', 'en', 'el', 'ro', 'ru', 'pt'];
// const regionList = ['DE', 'AT', 'GB', 'IN', 'GR', 'RO', 'RU', 'PT', 'BR']
//
//
// let questions;
//
// async.series([
//     function (next) {
//         try {
//             xlsxj({
//                 input: '105_4Pic_AG_Flaggen_Kontinente.xlsx',
//                 output: 'output.json'
//             }, function (err, result) {
//                 if (err) {
//                     return next('ERR_FILE_CONVERTING');
//                 } else {
//                     questions = result.filter(item =>  item["Language"]);
//                     return next();
//                 }
//             });
//         } catch (e) {
//             return next('ERR_FILE_CONVERT');
//         }
//     },
//     function (next) {
//         let errors = "";
//         if (questions, questions.length < 1) {
//             next('ERR_NO_QUESTIONS');
//         }
//
//         questions.forEach(function (question) {
//             // console.log('currerent question '+ question['INT/NAT']);
//
//             // async.mapSeries(questions, function (question, next2) {
//
//             if ((question['INT/NAT'] !== "yes" && question['INT/NAT'] !== "no")) {
//                 errors += '\nInvalid INT/NAT, must be "yes" or "no"';
//             }
//
//             if (langList.indexOf(question["Language"].toLowerCase()) === -1) {
//                 errors += '\nInvalid Language ' + question["Language"] + ' is not by ISO';
//             }
//
//             const regions = question["Region"].split(";")
//             regions.forEach(function (region) {
//                 if (regionList.indexOf(region.toUpperCase()) === -1) {
//                     errors += '\nInvalid region ' + region + ' is not by ISO';
//                 }
//             });
//
//             const images = [];
//             if (question['Correct Pic']) {
//                 images.push(question['Correct Pic']);
//             }
//             if (question['Wrong Pic 1']) {
//                 images.push(question['Wrong Pic 1']);
//             }
//             if (question['Wrong Pic 2']) {
//                 images.push(question['Wrong Pic 2']);
//             }
//             if (question['Wrong Pic 3']) {
//                 images.push(question['Wrong Pic 3']);
//             }
//             if (question['Correct picture 1']) {
//                 images.push(question['Correct picture 1']);
//             }
//             if (question['Correct picture 2']) {
//                 images.push(question['Correct picture 2']);
//             }
//             if (question['Correct picture 3']) {
//                 images.push(question['Correct picture 3']);
//             }
//             if (question['Correct picture 4']) {
//                 images.push(question['Correct picture 4']);
//             }
//             if (question['Question Pic']) {
//                 images.push(question['Question Pic']);
//             }
//             if (images.length > 0) {
//                 images.forEach(function (image) {
//                     const filePath = getImagePath(image);
//                     if (!filePath) {
//                         errors += '\n' + image + ' is not exist';
//                     }
//                 });
//             }
//             console.log('images'+images)
//
//         });
//
//         next(errors);
//     },
//     function (next) {
//     console.log("lalala")
//         next();
//
//     }
// ], function (err) {
//
//     if (err) {
//         console.log('httpQuestionApi.loadImages global failure:', err);
//         return;
//         // return _apiError('question/loadImages', err, res, cb);
//     }
//     console.log('no error');
//
// });
//
// function getImagePath(filename) {
//     const nameArray = filename.split(".");
//     const hasExt = (nameArray[nameArray.length - 1] === "jpg") || (nameArray[nameArray.length - 1] === "png");
//
//     let path = `images/${filename}${hasExt ? "" : ".jpg"}`;
//     let finalPath;
//     if (fs.existsSync(path)) {
//         console.log('return true')
//         finalPath = path;
//     } else {
//         if (!hasExt) {
//             path = `images/${filename}${".png"}`;
//             if (fs.existsSync(path)) {
//                 finalPath = path;
//             }
//         }
//     }
//     return finalPath;
// }
//
//






// var request = require('request');
// var fs = require('fs');
//
//
// filename = '0dDGOvZx5O4.jpg';
// var formData = {
//     namespace: 'answer',
//     token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTEzNTg5MDA4NTIzNTBjNzA1OWEtMDljZi00MjRiLTk1NzUtZDM3MDViNDUxNDA2Iiwicm9sZXMiOlsiUkVHSVNURVJFRCIsIlRFTkFOVF8zX0lOVEVSTkFMIiwiVEVOQU5UXzNfQURNSU4iLCJURU5BTlRfM19DT01NVU5JVFkiLCJGVUxMWV9SRUdJU1RFUkVEIiwiRlVMTFlfUkVHSVNURVJFRF9CQU5LIiwiVEVOQU5UXzUxX0lOVEVSTkFMIiwiVEVOQU5UXzUxX0FETUlOIl0sImlhdCI6MTU0NTAzOTg0OCwiZXhwIjoxODU2MDc5ODQ4LCJpc3MiOiJGNE0gRGV2ZWxvcG1lbnQgYW5kIFRlc3RpbmcifQ.Px_yn0VKPWVvPWkgfVmLx2_xKcWsv_UtWSk3eeWIKDDoxdfItw180oiHjPghsDb_LW2gyLtlZFq1GoT3Z32mWHFBfo-wE8Uj3p3BhroE172Ybakc66RVQP3Xo0rsPxWPn6rKbBwmcRP_Lr6ypWFNekE7MDDhFZUkS6VwwVfZmbtlE5eqLcUeOL6Fk0yO0gc3M_bdWybJCtt7TorlIac1QY5yvXSyWKgvOnlRIyyIevgSZ9Q7N7rl5WqPQjZvruVizOa7v1m6YHASch5mwbhQweSAMRInwpNPg7ZHfaV38fJQrhDUBLn3yIGSkzR6Pr6P241h_WfefGe6Sld1BI92Eg',
//     content_type: 'image',
//     media_file: {
//         value: fs.createReadStream('images\\'+filename),
//         options: {
//             filename: filename,
//             contentType: 'image/jpeg'
//         }
//     }
// };
//
//
// request.post({
//     url: 'https://media-nightly.dev4m.com/addMedia',
//     // agentOptions: {
//     //     ca: fs.readFileSync('dev4m.com.ca.pem','utf8'),
//     //     key: fs.readFileSync('dev4m.com.key.pem','utf8'),
//     //     cert: fs.readFileSync('dev4m.com.crt.pem','utf8'),
//     // },
//     rejectUnauthorized: false,
//     requestCert: false,
//     agent: false,
//
//     formData: formData
// }, function optionalCallback(err, response, body) {
//     if (err) {
//         console.log('Error : ', err)
//     } else if (response.statusCode == 200) {
//         let qqq={data: JSON.parse(body)};
//
//         console.log(qqq.data)
//         console.log(qqq.data.content)
//         console.log(qqq.data['content'])
//         console.log(qqq.data["content"])
//     } else {
//         console.log('bad ', response.statusMessage)
//     }
// });






// request.post(
//     'https://media-nightly.dev4m.com/addMedia',
//     {
//         formData: formData
//         // json: {
//         //     token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxNTEzNTg5MDA4NTIzNTBjNzA1OWEtMDljZi00MjRiLTk1NzUtZDM3MDViNDUxNDA2Iiwicm9sZXMiOlsiUkVHSVNURVJFRCIsIlRFTkFOVF8zX0lOVEVSTkFMIiwiVEVOQU5UXzNfQURNSU4iLCJURU5BTlRfM19DT01NVU5JVFkiLCJGVUxMWV9SRUdJU1RFUkVEIiwiRlVMTFlfUkVHSVNURVJFRF9CQU5LIiwiVEVOQU5UXzUxX0lOVEVSTkFMIiwiVEVOQU5UXzUxX0FETUlOIl0sImlhdCI6MTU0NTAzOTg0OCwiZXhwIjoxODU2MDc5ODQ4LCJpc3MiOiJGNE0gRGV2ZWxvcG1lbnQgYW5kIFRlc3RpbmcifQ.Px_yn0VKPWVvPWkgfVmLx2_xKcWsv_UtWSk3eeWIKDDoxdfItw180oiHjPghsDb_LW2gyLtlZFq1GoT3Z32mWHFBfo-wE8Uj3p3BhroE172Ybakc66RVQP3Xo0rsPxWPn6rKbBwmcRP_Lr6ypWFNekE7MDDhFZUkS6VwwVfZmbtlE5eqLcUeOL6Fk0yO0gc3M_bdWybJCtt7TorlIac1QY5yvXSyWKgvOnlRIyyIevgSZ9Q7N7rl5WqPQjZvruVizOa7v1m6YHASch5mwbhQweSAMRInwpNPg7ZHfaV38fJQrhDUBLn3yIGSkzR6Pr6P241h_WfefGe6Sld1BI92Eg",
//         //     content_type: "image",
//         //     meta_data: {},
//         //     namespace: "gameType"
//         // }
//     },
//     function (error, response, body) {
//
//         if (error) {
//             console.log(error)
//         } else if (response.statusCode == 500) {
//             console.log('Error: ',body)
//         } else if (response.statusCode == 200) {
//             console.log(body)
//         } else {
//             console.log(response)
//
//         }
//     }
// );


// var Zip = require('machinepack-zip');
//
//
//
// Zip.unzip({
//     source: '321.zip',
//     destination: 'images',
// }).exec({
//     error: function (err){
//         console.log(err)
//     },
//     success: function (res){
//
//         var files = fs.readdirSync('images');
//         console.log(files);
//         for (var i in files) {
//             console.log(files[i]);
//         }

        // fs.readdirSync('images', function (err, files) {
        //     //handling error
        //     if (err) {
        //         return console.log('Unable to scan directory: ' + err);
        //     }
        //     //listing all files using forEach
        //     files.forEach(function (file) {
        //         // Do whatever you want to do with the file
        //         console.log(file);
        //     });
        // });

//         console.log(res)
//         //delete temp folder content after finish uncompress
//     },
// });

// function say(word){
//     console.log(word);
// }
//
// let userSessions={};
// let user1 = "1";
// let clientId1 = "fsdf";
//
// checkAndAdd(user1, clientId1);
//  user1 = "2";
//  clientId1 = "fsdf";
// checkAndAdd(user1, clientId1);
// delete userSessions["1"];
//
//  function checkAndAdd(user, clientId) {
//      if (userSessions[user]){
//          if (userSessions[user]===clientId){
//              return;
//          }
//          console.log("Already exist old! disconnect him");
//      }
//      userSessions[user] = clientId;
//      return;
//  }

// const filter="ukolov"
//
// let arr=[{lastName:"vukolov", firstName:"Andrey", emails:[{email:"test@test.te"}]},{lastName:"Vukolova", firstName:"Alena", emails:[{email:"tes2@test.te"}]}];
//
// console.log(arr.length)
// arr.forEach((cur,i) => {
//     if ( cur.firstName && cur.lastName) {
//         cur.fullName=cur.firstName+" "+cur.lastName;
//     }else{
//         cur.fullName=cur.emails[0].email}
// });
//
// const arr2 = arr.filter(item =>  item.lastName && item.lastName.match(filter))

// arr.forEach((cur,i) => {
//
//     if(!cur.fullName || !cur.fullName.match(filter))  ;
//     arr.splice(i,1)
// });

// console.log(arr2)
// let ind= arr.indexOf({id:2});
// if (ind>=0) arr.splice(ind,1);

//
//
// for(let i=0; i<arr.length; i++ ){
//     if (arr[i] === 2)  {
//         arr.splice(i,1);
//         break;
//     }
// }
// console.log("ANSWER:",userSessions);



// const vouchers=[1,2,3,4];
// for (let j in vouchers){
//     console.log(j)
//     vouchers.pop(obj[j]);
// }
// logger.debug("AerospikeVoucherTombolaReserve.findAll decode = ",new TextDecoder("utf-8").decode(res.value))
// console.log("AerospikeVoucherTombolaReserve.findAll vouchers = ",vouchers);

