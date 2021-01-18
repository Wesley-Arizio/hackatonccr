# Casulo - Backend

Para usar esse projeto local é necessario:

### Clonar ou baixar o codigo

    git clone https://github.com/Wesley-Arizio/hackatonccr.git

### Navegar até o diretório

    cd hackatonccr

<br />

## É necessário ter instalado na sua máquina:

- node v12
- docker

<br />

### Instalar as dependencias

    yarn install ou npm install

<br />

### Criar um arquivo .dotenv na raiz do projeto e preencher as seguintes variaveis

    PORT

    DB_NAME
    DB_HOST
    DB_USER
    DB_PASSWORD

    TOKEN_KEY

<br />

### Agora é necessario criar container no docker para o rodar o banco postgres e uma plataforma para gerenciar o banco, rodar esse comando no terminal

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

<br />

## Atenção: É necessário que as variaveis de ambiente no arquivo .env sejam iguais aos respectivos campos desse comando.

<br />
<br />

### Após configurar programas necessarios e setar variaveis de ambiente, só executar o comando abaixo para rodar o programa

    yarn dev

O server roda na porta que estiver na variavel de ambiente PORT

# Tecnologias usadas

- Node v12
- Docker
- Postgres
- Express
- Jsonwebtoken
