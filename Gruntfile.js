/*
 * grunt-flaticon
 * Example usage
 */

module.exports = function(grunt) {
    'use strict';

    var assetsPath = 'web/assets/';

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js'],
            options: {
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        flaticon: {
            dist: {
                options: {
                    url_package: 'http://www.flaticon.com/download-collection',
                    config: 'flaticon.json',
                    fonts: assetsPath + 'fonts/',
                    font_url: assetsPath + 'fonts/',
                    styles: assetsPath + 'css/flaticon.less',
                    cache_dir: assetsPath + 'cache',
                    use_less: false,
                    use_package_css: false,
                    template: assetsPath + 'css'
                }
            }
        },
        clean: {
            all: assetsPath
        },
        mkdir: {
            all: {
                options: {
                    create: [
                        assetsPath+'cache',
                        assetsPath+'css',
                        assetsPath+'fonts'

                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-flaticon');

    grunt.registerTask('default',['jshint','clean:all','mkdir:all','flaticon']);

};
