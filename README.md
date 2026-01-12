# Bucket List Tracker 🚀

A full-stack web application that helps users create, manage, and track their personal bucket list items — securely stored in the cloud.

This project uses **React** for the frontend and **AWS Amplify** for authentication, backend services, and hosting.

---

## 🌟 What this app does

With this app, users can:

- Sign up and log in securely  
- Add new bucket list goals  
- View their saved goals anytime  
- Delete goals when completed  
- Access their data from anywhere  
- Keep their data private and secure  

Each user can only see **their own bucket list items**.

---

## 🛠 Tech Stack

### Frontend
- React.js

### Backend & Cloud
- AWS Amplify  
- Amazon Cognito (Authentication)  
- AWS AppSync (GraphQL API)  
- DynamoDB (Database)

### Hosting
- AWS Amplify Hosting

---

## 🔐 Key Features

- Secure login & signup system  
- Cloud-based data storage  
- GraphQL API for fast communication  
- Per-user data isolation  
- Fully deployed production app  
- Clean and beginner-friendly UI  

---

## 🌍 Live Demo

👉 **Live App:**  
https://dev.d1a6n8mgw6lupw.amplifyapp.com

---

## ⚙️ How the project works (simple explanation)

1. User signs up or logs in using AWS Cognito  
2. React frontend sends requests to AWS AppSync  
3. AppSync communicates with DynamoDB  
4. AWS Amplify manages authentication, API, and hosting  
5. User sees their updated bucket list instantly  

---

## 🧑‍💻 Getting Started (for developers)

If you want to run this project locally:

### 1. Clone the repository
```bash
git clone https://github.com/dubarikalita/bucket-list-tracker.git
cd bucket-list-tracker

