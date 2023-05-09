pipeline { 
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps {
                sh 'ls -a $WORKSPACE/'
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