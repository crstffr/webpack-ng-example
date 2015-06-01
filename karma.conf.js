// Karma configuration
// Generated on Thu May 21 2015 16:11:18 GMT-0500 (CDT)

var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js', // PhantomJS doesn't have Function.bind()
            'src/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

        preprocessors: {
            // add webpack as preprocessor
            'src/**/*.spec.js': ['webpack']
        },

        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-common-js'),
            require('karma-mocha-reporter'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher')
        ],

        // Code coverage
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'html',
                    subdir: 'report-html',
                    watermarks: {
                        statements: [90, 100],
                        functions: [90, 100],
                        branches: [90, 100],
                        lines: [90, 100]
                    }
                }
            ]
        },
        webpack: {
            module: {
                loaders: [],
                postLoaders: [{
                    test: /\.js$/,
                    exclude: /((node_modules|bower_components)\/)|\.spec\.js/,
                    loader: 'istanbul-instrumenter'
                }]
            },
            resolve: webpackConfig.resolve
        },
        common_js: {
            transforms: {},
            // Array of globs to auto require when the tests run. You can use
            // this to control the entry point for your tests.
            autoRequire: [
                'src/**/*.spec.js'
            ]
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
