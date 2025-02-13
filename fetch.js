// var http = require("http");
// var url = require("url");
// let fs= require("fs");

// let server = http.createServer(async(req, res) => {

//     let data = fs.readFile("data.js","utf-8",(err,data)=>{
//         if(err){
//             console.log("err")

//         }else{
//             console.log(data)
//         }

//     let parsedUrl = url.parse(req.url, true);
//     console.log(parsedUrl);
    
//     let cate = parsedUrl.query.cat;

//     if (cate === "m") {
//         var mens = data.filter((val) => {
//             return val.category === "men's clothing";
//         });
//         res.write(JSON.stringify(mens));
//         res.end();
//     } 
//     else if (cate === "w") {
//         var womens = data.filter((val) => {
//             return val.category === "women's clothing";
//         });
//         res.write(JSON.stringify(womens));
//         res.end();
//     } 
//     else {
//         res.write(JSON.stringify(newdata));
//         res.end();
//     }
// });

//     })
    
    
    

// server.listen(3000, () => {
//     console.log("Your server is running on port 3000");
// });

// let express = require("express")
// let fs = require("fs")

// let app = express();
// app.get("/",(req,res)=>{
//     fs.readFile("data.js","utf-8",(err,data)=>{
//         if(err){
//             res.send({
//                 status:400,
//                 msg:"file not found"
//             })
//         }
//         else{
//             var data1 = JSON.parse(data)
//             console.log(data1)
//             // var filterd = data1.Tolly.filter((val)=>{
//             //     return val.title == Title
//             // })
//             // res.send({
//             //     status:200,
//             //     msg:"data fetched successfully",
//             //     data:data1
//             // })
//         }
//     })
// })


let express = require("express");
let fs = require("fs");
let app = express();

app.get("/Tolly/:Title",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        console.log(req.params)
        if(err){
            res.send({
                status:404,
                msg:"no data found in file"
            })
        }
        else if(data){
            var data1 = JSON.parse(data)
            var filtered = data1["Tolly"].filter((val)=>{
                return val.Title.toLowerCase() ==req.params.Title 
                || val.Title.toLowerCase() ==req.params.Title;


            })
    
            res.send(filtered)
        }
    })
})
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
