const HTMLWebpackPlugin = require('html-webpack-plugin')

// Especificando archivo para que convierta codigo javascript
module.exports = {
    entry: './src/main.js',
    output: { //__dirname, especifica la ruta actual
        path: __dirname + '/dist', //La carpeta dist es el codigo para el navegador(producción) para que lo ejecute, en src, es donde se va desarrollar para luego convertirlo en dist
        filename: 'bundle.js' //Archivo donde contendrá el contenido convertido
    },
    module: {
        rules: [
            {
                test: /\.css$/i, //Todos los archivos que terminen en .css
                use: ['style-loader', 'css-loader'] //Para convertir los css a javascript
            },
            {
                test: /\.s[ac]ss$/i, // Que termine en .sass o scss
                use: [
                    'style-loader', // Crea 'style' nodes desde js strings
                    'css-loader', // Traduce css en commonjs
                    'sass-loader' // Compila sass a css
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}