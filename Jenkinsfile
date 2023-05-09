pipeline { 
    agent any
    parameters {
        base64File 'FILE'
    }
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps {
                withFileParameter('FILE') {
                    sh 'cat $FILE'
                }
                sh 'ls -a'
                sh 'docker-compose -f docker-compose-prod.yml build' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose -f docker-compose-prod.yml up -d'
            }
        }
    }
}