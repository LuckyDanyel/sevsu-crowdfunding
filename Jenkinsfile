pipeline { 
    agent any
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps {
                sh 'echo ${ENVS} > .env'
                sh 'cat .env'
                sh 'docker-compose -f docker-compose-prod.yml build' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose -f docker-compose-prod.yml down' 
                sh 'docker-compose -f docker-compose-prod.yml up -d'
            }
        }
    }
}