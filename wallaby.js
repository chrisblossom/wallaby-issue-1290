'use strict';

/* eslint strict:off, global-require:off */

module.exports = wallaby => {
    return {
        files: [
            'src/**/*.js',
            'jest.config.js',
            'src/**/*.snap',
            '!src/**/*.test.js',
        ],
        tests: [
            'src/**/*.test.js',
        ],

        env: {
            type: 'node',
            runner: 'node',
        },

        testFramework: 'jest',

        setup: w => {
            process.env.NODE_ENV = 'test';
            const jestConfig = require('./jest.config');
            w.testFramework.configure(jestConfig);
        },
    };
};
