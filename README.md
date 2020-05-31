
# MERN app

## To start the app

### npm install for backend modules

Run 'npm install' in the git root directory to load node modules

```npm install```

### npm install for frontend modules and build folder

```cd reactdir/```

```npm install```

```cd src/```

```npm run build```

### Configure mongodb

Install it

```wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -```

```echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt sources.list.d/mongodb-org-4.2.list```

```sudo apt-get update```

```sudo apt-get install -y mongodb-org```


Start MongoDB service

```sudo service mongod start```

Create Database

```mongo```

```use MERN_BDD```

Create collection

```db.createCollection('quotes')```

### Create the file env.js in the config/

It must look like that :

```
module.exports = {

    'dbUrl' : 'mongodb://YourIP:27017',
    'port' : '8080',
    'appRootUrl' : '/app'

};
```


### Put PUBLIC_URL in the .env file in /react_dir/ directory

```PUBLIC_URL=/app/```
```REACT_APP_API_URL=http://localhost:8080```


# Routes

## API REST routes

GET /quotes/:id

POST /quotes

PUT /quotes/:id

DELETE /quotes/:id


POST and PUT body format :

```
--request POST 'localhost:8080/quote'
--header 'Content-Type: application/json'
--data-raw
  '{
    "quote": "ahahah",
    "author": "me"

   }'
```

## Other Routes

/home
