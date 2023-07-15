# UNIBIT API

Go to the project directory

```bash
  git clone git@github.com:git-anandjha/unibit-api.git
```

```bash
  cd UNIBIT-API
```

Install dependencies

```bash
  npm install
```

I have used an online database, and also pushed the environment file, to save of database setup and configuration

Start the server

```bash
  npm run start
```
## Sample curl requests


## Create a user
```bash
curl --location 'http://localhost:3001/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "first_name":"Anand",
    "last_name":"Jha",
    "email":"anand@anandjha.com",
    "password":"password"
}'
```

## Login
```bash
curl --location 'http://localhost:3001/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"anand@anandjha.com",
    "password":"password"
}'
```

## Buy tickets
```bash
curl --location 'http://localhost:3001/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"anand@anand.com",
    "password":"password"
}'
```

## Get bought tickets
```bash
curl --location 'http://localhost:3000/api/tambola/ticket-list?page=1&limit=1' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjJkZmY4YTI5ZTc5Y2NhNWIxZTZmMiIsImlhdCI6MTY4OTQ0NDQwMX0.JfydIwnijTuedEtEEu3JSJPM3P0T00n3HiP05ZWKID0' \
--data ''
```



## Tech Stack

**Server:** Node, Express, MongoDB
