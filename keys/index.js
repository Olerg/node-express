if(process.env.NODE_ENV === 'production'){
    module.exports = require('./keys.prog')
}else{
    module.exports = require('./keys.dev')
}