
# MERN app

## To start the app

### npm install for backend modules

Run the git root directory to load node modules

'npm install'

### npm install for frontend modules and build folders

'cd reactdir/'

'npm install'

'cd src/'

'npmrun build'

### configure mongodb

Install it

'wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -'
'echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt sources.list.d/mongodb-org-4.2.list'
'sudo apt-get update'
'sudo apt-get install -y mongodb-org'

Start MongoDB service

'sudo service mongod start'

Create Database

'mongo'
'use MERN_BDD'

Create collection

'db.collection('quotes')'

### Create the file env.js in the config/

It must look like that :

module.exports = {

    'dbUrl' : 'mongodb://YourIP:27017',
    'port' : '8080',
    'appRootUrl' : '/app'

};



### Put PUBLIC_URL in the .env file in /react_dir/

PUBLIC_URL=/app/
