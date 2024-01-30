# React Frontend

## Description
This is the frontend of the PERN Stack application. It is built using React and communicates with the backend API to dynamically build sentences based on word types.

[![ci-cd](https://github.com/DouglasVDM/rh-backend/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/DouglasVDM/rh-backend/actions/workflows/ci-cd.yml)

## Installation
1. Clone the repository. `git clone ...`
2. Navigate to the frontend directory. `cd frontend`
3. Run the following command to install the dependencies: `npm i` or `npm install`
4. Update the backend API URL in the code if necessary.
5. Start the development server with the following command: `npm start`
6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage
- Select a word type from the dropdown to fetch words of that type from the backend.
- Click on a word to add it to the sentence.
- Once the sentence is complete, click the submit button to save it to the database.
- Previously submitted sentences are displayed below the form.
<br><br>
![image](https://github.com/DouglasVDM/rh-frontend/assets/74470226/40492a27-38c5-4607-8799-477f1dbd2258)
<br><br>
![image](https://github.com/DouglasVDM/rh-frontend/assets/74470226/d727c899-2887-4da1-85e5-fccbd1acc464)
<br><br>
![image](https://github.com/DouglasVDM/rh-frontend/assets/74470226/5b88e2d2-d79f-43d2-b5f7-1d9fc43c8010)
<br><br>
![image](https://github.com/DouglasVDM/rh-frontend/assets/74470226/9bab4b94-c72f-4cad-9bf6-12b38120554c)
<br><br>
![image](https://github.com/DouglasVDM/rh-frontend/assets/74470226/070c40fa-f60f-46b9-98a9-e8f88df982be)
<br><br>
![image](https://github.com/DouglasVDM/rh-frontend/assets/74470226/1173a3df-be22-4a90-92c5-85fd34c0bc6c)  

## Dependencies
- React
- React Bootstrap
- React Dom
- React Scripts
- React Select
- React Toastify

## Stretch Goals
- Update sentence PUT
- Delete sentence DELETE
- Remove word/s from sentence before submitting
- Get react-toastify working, to show toast message instead of alert 
- Where possible ,split App.js into components for maintainability and reusability.
---
---
## TDD with Jest

### Install Jest as development dependency

```bash
npm i -D jest
```

change the test script in package.json

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "jest",
    "eject": "react-scripts eject"
  },
```

for continuous feedback on changes made to the test file run

```
npm t -- --watch
```
