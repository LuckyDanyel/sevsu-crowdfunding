pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'sudo docker-compose -f docker-compose-prod.yml --build' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'sudo docker-compose -f docker-compose-prod.yml up -d'
            }
        }
    }
}