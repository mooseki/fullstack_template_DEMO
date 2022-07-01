# fullstack_template :dizzy:

The goal of this project is to learn how to get started with building something that is truly fullstack from the ground up. How do I get started? What steps do I follow? What steps am I missing? Why am I getting this error? Why can't I get connected to MongoDB? 

<p align="center">
  <img width="600" height="310" src="./autocompleteApp.gif">
</p>

## How to set up and push to Heroku:

1. `git init`
2. heroku login
3. echo `web:node server.js` > Procfile
4. git add .
5. git commit -m 'changes'
6. git push heroku main

## How It's Made:

**Tech used:** HTML, CSS, EJS, JavaScript, Express, MongoDB, Heroku

This app is deployed on Heroku and delivers some HTML (which ≤ is  also connected to a MongoDB database which is not displaying anything so that it can be used on any project as bare bones.

## Optimizations:

**Connection to MongoDB database** which is not displaying anything to provide the bare bones for a project. 

## Lessons Learned:

**Step by step:** 
1. Initialize npm and install dependencies
   // express, dotenv, cors, mongodb, ejs, nodemon (`--save-dev`)

2. Require dependencies in server.js

3. Declare variables

4. Connect to MongoDB — and connection string to .env file

5. Create Port

   // ----Test Mongo and Port connection

6. Set middleware

7. Create `. gitignore` file

8. Create Public and Views folders - add main.js and style.css to public and index.js to Views

9. From root, init local git repo and commit

10. Create heroku repo

      `// heroku login`   `// heroku create simple-rap-api`   `// echo "web: node server.js" > Procfile`   `// git add .`   `// git commit -m 'changes'`

**`npm install dotenv`** lets us create environment variables and obscure them out of our main code eg DB password.

**`npm install cors`** lets us bypass cross origin request blocks that can come up in our browser. It sets the cross origin request policy.

**`npm install ejs`** helps us do templating; basically to dynamically generate HTML on the fly based on the data that we are passing from a server. 
We use because it is close in syntax to JS.

**`npm install nodemon --save-dev`** stops you from manually having to restart the server. We do not want nodemon in production so we say `--save-dev`

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Random Quote Generator:** https://mooseki.github.io/JS-Random-Quote-Generator-Project/

**Picture-in-Picture:** https://github.com/mooseki/JS-Picture-In-Picture-Project.git

**Joke Teller:** #

## Acknowledgment:
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/mayanwolfe.svg?style=social&label=Follow%20%40mayanwolfe)](https://twitter.com/mayanwolfe) - [Let's Make a Fullstack Template!](https://www.twitch.tv/videos/1511339035) :superhero_woman:
