//webpac //webpack cli

var webpack= require('webpack');
var path =require('path');
module.exports={//--------------
//debugging easier
devtool:'inline-source-map',

entry:{
	//build garne file
		'index':'./src/index.js'
      },

output:{
	//path.resolve,path.join

	//__dirname->path dine file ko
	path:path.resolve(__dirname,'dist'),
	filename:'main.js' //'[name].'
},

//create react app create all this file 
//loader
module:{
	rules:[ 
	 //multiplr rules  //inside relate diff obj

			{
				//babel use garera es6,es5,browser compact
				//use babel on which file
				test:/\.js$/, //rejexbstart with //end -> 
				exclude:/node_modules/,
				use:'babel-loader'

			},
			//for ccss
			{
				test:/\.css$/,
				//exclude:/node_modules/,
				use:['style-loader','css-loader']//to convert css to js
			}

	]
},

//dev server to run the application only in devlopment, node can be used to serve in production

devServer:
{
	//thosec ontent that are not generated by webpack
	contentBase:path.join(__dirname,"public/"),
	port:3000,
	//HMR reloading
	hot:true,
	//hotOnly:true,
	//to serve webpack files
	publicPath:"http://localhost:3000/dist/"

}




}

//-------



//import ma export.