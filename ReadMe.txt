Set up
Prerequisites:
Node.js and npm package manager must be installed

1. Create a project folder
2. Create a project scaffold package.json inside the project folder.
    npm init
3. install express Js and Mongoose
    npm install --save express
    npm install --save Mongoose
4. Install mongoDB locally or get an instance in MongoDB Atlas or MLab
5. If locally, then create a database and user. Switch to db
    for example :  db.createUser({user:"test",pwd:"test", roles: ["readWrite","dbAdmin"]})
6. To start server use npm server.js
7. If you want to run server in watch mode, install nodemon
    npm install --save-dev nodemon
    inside the package json add the task "start": "nodemon server.js" in the scripts section
    Now you can run server using "npm run start". This will run your
    development server in watch mode.
8. install body parser for parsing data from the body of the request
    npm install --save body-parser
9. To save password securely inside the database we use bcrypt js for hashing the password
    npm install --save bcryptjs
10. Install JsonWebToken for session token management.
    npm install --save jsonwebtoken
This project uses postman app for testing REST Api's. 


