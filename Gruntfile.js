module.exports = grunt => {
   

   // Config
   grunt.initConfig({

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