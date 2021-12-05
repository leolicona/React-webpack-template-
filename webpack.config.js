const { resolve } = require('path');
const path = require('path');
// module.exports es un objeto donde viven nuestras configuraciones
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3006,
      },
    },
   
}