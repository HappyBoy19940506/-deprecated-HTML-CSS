
// const picImport = require('postcss-import');
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
// const cssnext = require('postcss-cssnext');
const stylelint = require('stylelint');
const sprites = require('postcss-sprites');

/* autoprefixer 自动加浏览器前缀 */
/*  */
/*  */
/*  */
/*  */
/*  */


module.exports = {
    plugins : [
        // autoprefixer(
        //     {
        //         browsers : [ ' > 0% ']
        //     }
        // ),
        // picImport(),
        // // cssnano(),
        // cssnext,
        stylelint({
            'rules' :   {
                'color-no-invalid-hex'  :   true,
                "indentation": 4|"tab",
            }
        }),
        sprites({
            spritePath  :   './dist'
        }),



    ]
};