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
            karmaExecuteTests script: this,
	            installCommand: "apt install npm",
                runCommand : "npm run karma"
     }
     stage('deploy') 
     {
         cloudFoundryDeploy script: this
     }
    
 }
