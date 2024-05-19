# AirBnb  

## Prerequisites  

Docker is a must to easily launch our database and services.  

<https://docs.docker.com/desktop/install/windows-install/>  

## Deploy and build  

```sh
docker compose up --build
```

Docker does not wait for the database to be ready before starting services.  
Services can't start without the database being ready.
It mean that you might need to launch the following command multiple time until it work.

```sh
docker compose up -d
```

### URLs  

#### User Service  

<http://localhost:8080/>  

#### Booking Service  

<http://localhost:8081/>  

#### Estate Service  

<http://localhost:8082/>  

## Shut down  

```sh
docker compose down
```

## Shut down and remove all data  

```sh
docker compose down --volumes  
```
