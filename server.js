/**
 * Created by VladHome on 2/26/2016.
 */
var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static((__dirname)));
app.get('/getproduct/:limit', function (req, res,next) {
    var limit = Number(req.params.limit)
   var out=[]
    for(var i=0,n=100;i<limit;i++){
       out.push({id:i,name:"Product "+(i+1),pos:Math.random()*1000});
    }
    res.send(out);
})
app.get('/getproduct', function (req, res,next) {
   /// var limit = Number(req.params.limit)
    var out=[]
    for(var i=0,n=100;i<3;i++){
        out.push({id:i,name:"Product "+(i+1),pos:Math.random()*1000});
    }
    res.send(out);
})


app.get('/getimages', function (req, res,next) {
    /// var limit = Number(req.params.limit)
    var out = [];
    makeArray('ChristmasCards',out);
    makeArray('NFLTeam',out);
    res.send(out);
})

var makeArray = function($folder,out){
    var ar = fs.readdirSync('media/imgs/'+$folder);
    for (var i = 0, n = ar.length; i < n; i++) {
        var item = ar[i];
        $img = {};
        $img.id=out.length+1;
        $img.price = Math.random();
        $img.sale = ($img.price < 0.1);
        var cat1 = Math.floor(Math.random() * 30)+1;
        var cat2 = Math.floor(Math.random() * 30)+1;
        $img.cats = (cat1 === cat2)?cat1 + '' : cat1 + ',' + cat2;
        $img.name = 'ChristmasCards  '+i;
        $img.thumb = 'media/imgs/' + $folder + '/'+item;
        $img.large = 'media/imgs/' + $folder + '/OriginalFiles/' + item;
        out.push($img);
    }
}


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

})