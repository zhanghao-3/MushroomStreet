module.exports = {
  devServer:{
    proxy:{
      '/api':{
        // target:'http://192.168.0.105:5000',
        target:' http://localhost:8080/',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}