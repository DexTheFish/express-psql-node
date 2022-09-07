## About
template for building a backend api using NodeJS, Express, and PostgreSQL. Includes a `users` table with queries and routes as an example.


## Instructions

1. `cd` into the directory and `npm i` to install dependencies.
2. `touch .env` and copy the text from .env.example, modifying the values if needed.
3. `npm run db:reset` to reset the database. You might need to use `psql` to create a database whose name matches the .env file.
4. `node app.js` to run the server on port 3000, or another port specified in .env.
4. Alternatively, install nodemon with `npm i nodemon --save-dev` and run the server with `npm start`.
