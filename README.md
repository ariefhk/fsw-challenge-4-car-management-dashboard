# Challenge Chapter 4 - Car Management Dasboard

This project is about implemetation of Database, Orm and Restful API.

## Database Diagram

![DB Diagram](db_diagram.png)

## Library

1. cloudinary
2. cookie-parser
3. cors
4. dotenv
5. ejs
6. express
7. multer
8. nodemon
9. pg
10. sequelize
11. uuid

## How To Run

1. Install Library

```bash
npm i
```

2. Create an .env file on root folder

```bash
DB_USERNAME = ''
DB_PASSWORD = ''
DB_NAME = ''
DB_HOST = ''
DB_PORT =
DB_DIALECT = ''

CLOUD_NAME = ''
API_KEY = ''
API_SECRET = ''
CLODINARY_SECURE = true
```

3. Create Database

```bash
npm run db:create
```

4. Migrating the model

```bash
npm run db:migrate
```

5. Using seeder

```bash
npm run db:seed
```

6. Running Project

```bash
npm run dev
```
