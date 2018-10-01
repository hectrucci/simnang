// run webpack config through babel first
require('babel-register');

// set environment
process.env.NODE_ENV = 'test';
process.env.CHROME_BIN = require('puppeteer').executablePath();

// import and modify webpack config
const webpackConfig = require('./webpack.config.babel').default;

webpackConfig.entry = null;

webpackConfig.module.rules.unshift(
    // get coverage info from precompiled source code
    {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(test|node_modules)\//,
        use: 'babel-istanbul-loader',
    },
);

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: __dirname,

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'source-map-support'],

        // list of files / patterns to load in the browser
        files: ['./app/js/simnang_bootstrap.js', './test_context.js'],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.js': ['webpack', 'sourcemap'],
            'app/**/!(*Module|simnang_bootstrap).js': ['coverage', 'sourcemap'],
            './test_context.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'junit', 'coverage'],

        htmlReporter: {
            outputDir: 'test_results',
            templatePath: 'node_modules/karma-html-reporter/jasmine_template.html',
        },

        junitReporter: {
            outputDir: 'test_results',
            outputFile: 'karma.xml',
            useBrowserName: false,
        },

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'cobertura',
                    file: 'cobertura-coverage.xml',
                },
                {
                    type: 'html',
                    subdir: 'html',
                },
            ],
        },

        browserNoActivityTimeout: 60000,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
    });
};
