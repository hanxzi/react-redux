/**
 * Created by hanxzi on 17/4/20.
 */
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var app = express();
var path = require('path')
var port = 3011;


var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
        noInfo:true,
        publicPath:config.output.publicPath,
        stats: {
            colors: true
        }
    }
));

app.use(webpackHotMiddleware(compiler));

app.get("/",function (req,res) {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port,function (error) {
    if(error){
        console.error(error)
    }else {
        console.info("==> Listening on port %s. Open up http://localhost:%s/ in your borwser" ,port,port)
    }
})