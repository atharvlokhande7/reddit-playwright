pipeline {
  agent any

  environment {
    DISPLAY = ':99'
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh '''
          npm ci || npm install
          npx playwright install
        '''
      }
    }

    stage('Run Tests (Headed Mode via xvfb)') {
      steps {
        sh '''
          xvfb-run --auto-servernum -- npx playwright test --headed
        '''
      }
    }

    stage('Archive Playwright Report') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      }
    }
  }

  post {
    always {
      echo 'Cleaning up...'
      cleanWs()
    }
  }
}
