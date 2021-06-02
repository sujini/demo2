const path = require('path');
module.exports = (env,argv)=>{
    console.log(argv)
    const { mode = 'development' } = argv;
    const isProduction = mode === 'production';
    return{
        mode: isProduction ? 'production' : 'development',
        entry: ['@babel/polyfill', './src/index.js','./src/list.js'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        target: isProduction ? ['web', 'es5'] : 'web',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
            ]
        },
        devtool: isProduction ? false : 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            liveReload: true,
            open:true,
            hot: true,
            port: 9000,
        }
    }
};
