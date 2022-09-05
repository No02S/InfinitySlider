var path = require('path');

module.exports = {
    entry: './JS/EXAMPscript.js',
    output: {
        path: path.resolve(__dirname,'./JS'),
        filename:'product.js'
    },
    mode:'production',

    watch: true
};