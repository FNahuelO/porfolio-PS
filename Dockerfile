# Etapa de construcción
FROM node:14 as build
WORKDIR /app

# Copia los archivos de package.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos y ejecuta la construcción
COPY . .
RUN npm run build

# Verifica que los archivos han sido creados
RUN ls -la /app

# Etapa final
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
