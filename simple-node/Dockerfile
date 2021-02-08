# Imagen base
FROM node:13

# Crear un directorio para el app
WORKDIR /usr/src/app

# Copiar los archivos dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el codigo fuente
COPY . .

# Comando que se ejecutara
CMD ["node", "server.js"]
