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
         karmaExecuteTests script: this,
            dockerImage: "node:8-stretch",
	        installCommand: "apt install npm",
            runCommand : "npm run karma"
     }
     stage('deploy') 
     {
         cloudFoundryDeploy script: this
     }
    
 }
