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
                withFileParameter(name: 'FILE', allowNoFile: true) {
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