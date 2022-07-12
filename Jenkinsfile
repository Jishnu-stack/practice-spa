pipeline {
    agent any
    stages {
        stage('Docker Build') {
            steps {
                script {
                    
                    sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 411627707249.dkr.ecr.us-east-1.amazonaws.com"
                    
                    sh "docker build -t practice-spa:buildpipeline ."
                }
            }
        }
        stage('Push to ECR Repository') {
            steps {
                script {
                
                 sh "docker tag practice-spa:buildpipeline 411627707249.dkr.ecr.us-east-1.amazonaws.com/practice-spa:buildpipeline"
                 sh "docker push 411627707249.dkr.ecr.us-east-1.amazonaws.com/practice-spa:buildpipeline"
                    
                }
            }
        }

        stage('Update ECS Service') {
            steps {
                script {
                
                 sh "aws ecs update-service --cluster devops-training --service practice-spa --force-new-deployment --region us-east-1"
                 
                }
            }
        }
    }
    post {
        success {
            echo "Success...."
            slackSend(channel: "#jenkins-training-jj", message: "Notification from Jenkins: Success")
        }
        failure {
            echo "Failure"
            slackSend(channel: "#jenkins-training-jj", message: "Notification from Jenkins: Failed")
    }
}

}
