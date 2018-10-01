import CleanPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const extractStyles = new ExtractTextPlugin({
    filename: 'bundle.[name].[contenthash].css',
});

export default {
    devtool: 'cheap-module-source-map',
    context: path.resolve('.'),
    entry: ['bootstrap-loader/extractStyles', './app/js/simnang_bootstrap.js'],
    output: {
        path: path.join(path.resolve('.'), path.join('build/')),
        publicPath: '/',
        filename: 'bundle.[name].[hash].js',
    },
    resolve: {
        alias: {
            modernizr: path.resolve(__dirname, '.modernizrrc.js'),
            styles: path.resolve(__dirname, 'app', 'styles'),
            test_helpers: path.resolve(__dirname, 'lib', 'test_helpers.js'),
        },
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ng-annotate-loader',
                        options: {
                            add: true,
                            map: false,
                        },
                    },
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                include: path.resolve(__dirname, 'app'),
                use: [
                    {
                        loader: 'eslint-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: extractStyles.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
            // by default, treat SCSS files as component styles
            {
                test: /\.component\.scss$/,
                use: ['ng-cache-loader?module=simnang.styles&name=[name].css', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.global\.scss$/,
                use: extractStyles.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: /(\.html)$/,
                use: 'ng-cache-loader?module=simnang.templates',
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            mimetype: 'application/font-woff',
                            name: 'fonts/[name].[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /angular\/angular\.js$/,
                use: 'exports-loader?angular',
            },
            {
                test: /\.modernizrrc\.js$/,
                use: [
                    {
                        loader: 'modernizr-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanPlugin([path.resolve(__dirname, 'build')]),
        new webpack.IgnorePlugin(/caniuse-lite\/data\/regions/),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jQuery"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'index.html',
            template: './app/templates/index.ejs',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
            isProduction() {
                return process.env.NODE_ENV === 'production';
            },
        }),
        extractStyles,
    ],
};