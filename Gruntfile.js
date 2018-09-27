module.exports = grunt => {
   

   // Config
   grunt.initConfig({
     concat: {
         js:{
             src:['js/*.js'],
             dest:'build/scripts.js'
         } 
     }  
   });
   
   // load 
   grunt.loadNpmTasks('grunt-contrib-concat');




   // register task 
   grunt.registerTask('run' , () => {
       console.log('Running Task ')
   })
   grunt.registerTask('sleep', () => {
       console.log('sleeping')
   })

   
}