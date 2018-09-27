module.exports = grunt => {
   

   // Config
   grunt.initConfig({
     concat: {
         js:{
             src:['js/*.js'],
             dest:'build/scripts.js'
         },
         css: {
             src: ['css/*.css'],
             dest:'build/styles.css'
         } 
     }  
   });
   
   // load 
   
   grunt.loadNpmTasks('grunt-contrib-concat');

   // register task 
   grunt.registerTask('concat-css' , ['concat:css'])
   grunt.registerTask('concat-js' , ['concat:js'])
   

   
}