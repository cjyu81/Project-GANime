# Setup notes

### To run on server:
Steps to run on server:
1. Run docker compose locally
2. Push images to docker hub
3. Pull the server docker compose
4. Run the docker compose on the server

### To run locally:
Requirements: [Docker](https://www.docker.com/products/docker-desktop)

Navigate to ./src/ from the project directory:
```
cd src
```
Then build and run the containers:
```
docker-compose up
```

Then go to:
```
127.0.0.1:3000
```
for the front-end
and check
```
127.0.0.1:8088
```
for the back-end