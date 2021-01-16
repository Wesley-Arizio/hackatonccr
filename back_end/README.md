docker run \
 --name casuloDB \
 -e POSTGRES_USER=casulo.dev \
 -e POSTGRES_PASSWORD=casulo7694 \
 -e POSTGRES_DB=casulo-hackatonccr \
 -p 5432:5432 \
 -d \
 postgres

docker run \
 --name adminer \
 -p 8080:8080 \
 --link casuloDB:postgres \
 -d \
 adminer
