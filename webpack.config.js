const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    
    entry: {
        main: './src/index.js',
    },

    mode: 'production',

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[contenthash].bundle.js',
        assetModuleFilename: 'images/[name][ext]',
        asyncChunks: true,
        clean: true
    },

    
    module: {

        rules: [
            {
                test: /\.(png|svg)$/,
                type: 'asset/resource'
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve("./build-config/babel.config.js")
                        }
                    }
                ]
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "./build/assets/",
                        }
                    },
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build-config/postcss.config.js")
                            },
                        }
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build-config/postcss.config.js")
                            },
                        }
                    },
                ],
            },


        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    plugins: [

        new MiniCssExtractPlugin({
            linkType: "text/css",
            filename: "css/[name].css",
            chunkFilename: "[id].css",
        }),


        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],

}
