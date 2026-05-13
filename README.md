# 🛒 KyungJunShop (React Shopping Mall)
React와 Vite를 활용하여 구축한 간단한 쇼핑몰 프로젝트입니다.  
AWS의 다양한 서비스를 활용하여 CI/CD 파이프라인을 구축하고 배포를 완료했습니다.

## 🔗 배포 주소 (Live Demo)
프로젝트는 두 가지 환경으로 배포되었습니다. 아래 링크를 통해 확인하실 수 있습니다.

### 1. AWS S3 + GitHub Actions (과제 1)
- **주소:** [S3 웹사이트 엔드포인트](http://mybucket-20263608.s3-website-us-east-1.amazonaws.com)
- **특징:** GitHub Actions를 통한 자동 빌드 및 S3 정적 호스팅 배포

### 2. AWS Amplify (과제 2)
- **주소:** [Amplify 호스팅 주소](https://main.d220mte3uif8yh.amplifyapp.com)
- **특징:** GitHub 레포지토리 연동을 통한 HTTPS 보안 호스팅

---

## ✨ 주요 기능
- **상품 목록 조회:** `products.js` 데이터를 기반으로 한 상품 카드 렌더링
- **장바구니 시스템:** `Context API`를 활용한 전역 상태 관리 (추가/삭제)
- **총 금액 계산:** 장바구니에 담긴 상품의 합계를 실시간으로 계산
- **페이지 라우팅:** `React Router DOM`을 활용한 홈과 장바구니 페이지 간 이동

---

## 🛠 기술 스택
- **Frontend:** React, Vite, Context API, React Router DOM
- **Deployment:** AWS S3, AWS Amplify
- **CI/CD:** GitHub Actions

---

## ⚙️ CI/CD 설정 (GitHub Actions)
`.github/workflows/deploy.yml` 파일을 통해 `main` 브랜치에 코드가 `push`될 때마다 자동으로 배포되도록 설정하였습니다.

```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Set permissions for Vite
        run: chmod +x node_modules/.bin/vite

      - name: Build project
        run: npm run build

      - name: Deploy to S3
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_SESSION_TOKEN: ${{ secrets.AWS_SESSION_TOKEN }}
          AWS_REGION: 'us-east-1'
        run: |
          aws s3 sync dist/ s3://mybucket-20263608 --delete
