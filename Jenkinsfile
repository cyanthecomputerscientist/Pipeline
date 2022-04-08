@Library('piper-lib-os') _
 node() {
     stage('prepare') {
         checkout scm 
         setupCommonPipelineEnvironment script: this
     }
     stage('build')
     {
	    
         mtaBuild script: this
     }
     stage('test')
     {
         steps:
            karmaExecuteScan: 
                dockerImage: 'node:8-strech'
     }
     stage('deploy') 
     {
         cloudFoundryDeploy script: this
     }
    
 }
