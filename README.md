# Hackaton CCR 2°edição

## Sobre o projeto
📓 Casulo foi criado pensado nos jovens de rurais que possuem pouco acesso a educação e informação, com nossa plataforma iremos facilitar o acesso deles a informação e formação academia onde empresas também poderão ajudá-los



# :computer: Tecnologias
Esse projeto foi construido usando as seguintes tecnologias:
* [React](https://reactjs.org/)      
* [Express](https://expressjs.com/)      

# :rocket: Características

* Website para jovens rurais terem acesso a melhor educação e entrarem em contato com empresas

# :construction_worker: Como instalar o projeto
```bash
# Clonando Repositório
$ git clone https://github.com/Wesley-Arizio/hackatonccr.git

# Entrando na pasta 
$ cd front_end

# Instalando dependencias
$ yarn install ou npm install 

# Rodando a aplicação
$ yarn start ou npm start

# Rodando o backend
$ cd back_end

# Instalando dependencias
$ yarn install ou npm install 

# Rodando a aplicação
$  docker run \
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


```


Vá para http://localhost:3000/ para ver o resultado

### Time
Camilla, Lícia de Carvalho, Carlos, Paula Cardoso, Vitor Risso e Wesley Arizio
