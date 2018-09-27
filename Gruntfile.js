module.exports = grunt => {
   // Config
   grunt.initConfig({
     concat: {
         js:{
             src:['js/*.js'],
             dest:'build/scripts.js'
         },
         css: {
             src: ['css/reset.css' , 'css/bootstrap.css', 'css/styles.css'],
             dest:'build/styles.css'
         } 
     },
     sass: {
         build: {
             files: [{
                 src: 'css/sass/styles.scss',
                 dest: 'xcc/styles.css'
             }]
         }
     }  
   });
   
   // load 
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-sass');
   
   // register task 
   grunt.registerTask('concat-css' , ['concat:css'])
   grunt.registerTask('concat-js' , ['concat:js'])
   

   
}