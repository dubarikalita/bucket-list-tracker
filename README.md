# Bucket List Tracker 🚀

A simple and powerful full-stack web application that lets users create, manage, and track their personal bucket list items — securely stored in the cloud.

This project is built using **React** for the frontend and **AWS Amplify** for authentication, backend, and hosting.

---

## 🌟 What this app does

With this app, users can:

- Sign up and log in securely  
- Add new bucket list goals  
- View their saved goals anytime  
- Delete goals when completed  
- Access their data from anywhere  
- Keep their data private and secure  

Each user can only see **their own bucket list**.

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
3. AppSync talks to DynamoDB to store/retrieve data  
4. Amplify handles authentication, API, and hosting  
5. User sees their updated bucket list instantly  

---

## 🧑‍💻 Getting Started (for developers)

If you want to run this project locally:

### 1. Clone the repository
```bash
git clone https://github.com/dubarikalita/bucket-list-tracker.git
cd bucket-list-tracker

### Project Structure
bucket-list-app/
│
├── amplify/           # AWS Amplify backend configuration
├── src/
│   ├── graphql/       # Auto-generated GraphQL queries & mutations
│   ├── App.js         # Main app logic
│   ├── index.js       # App entry point
│
├── package.json
└── README.md

