@Library('piper-lib-os') _
// node() {
//     stage('prepare') {
//         checkout scm 
//         setupCommonPipelineEnvironment script: this
//     }
//     stage('build')
//     {
	    
//         mtaBuild script: this
//     }
//     stage('test')
//     {
//        karmaExecuteTests script: this, modules: ['./nodejs'],
//         installCommand: "npm config set @sap:registry https://npm.sap.com && npm install --quiet", 
// 	  runCommand: 'npm test'
//     }
//     stage('deploy') 
//     {
//         cloudFoundryDeploy script: this
//     }
    
// }
pipeline {
    agent none 
    stages {
        stage('prepare') {
            steps {
		    agent { docker 'mbtci-alpine:latest' }
        checkout scm 
        setupCommonPipelineEnvironment script: this
            }
        }
        stage('build') {
            agent { docker 'mbtci-alpine:latest' } 
            steps {
		    mtaBuild script: this
            }
        }
    	stage('test') {
            agent { docker 'openjdk:8-jre' } 
            steps {
		           karmaExecuteTests script: this, modules: ['./nodejs'],
        installCommand: "npm config set @sap:registry https://npm.sap.com && npm install --quiet", 
	  runCommand: 'npm test'
            }
        }
    }
}
