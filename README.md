# nodejs-mongodb
CRUD utilizando Commander em Node.JS com base no conteúdo asimilado durante o treinamento Imersão em desenvolvimento de APIs com Node.js By #NodeBR!

## Requisitos
- git 
- node
- npm
- docker
- docker-compose
- makefile

## Modo de uso
``` shell
git clone git@github.com:Alexandrerehder/nodejs-mongodb.git && cd nodejs-mongodb

npm init && npm install esm mongoose pm2 restify dotenv nodemon

#Subir containers a partir do Makefile
sudo make up

#Verificar logs da API/Banco
sudo make logs

#Finalizar containers
sudo make down

#Remova todos os containers, volumes, networks e images não utilizados
docker system prune -a --volumes



```
