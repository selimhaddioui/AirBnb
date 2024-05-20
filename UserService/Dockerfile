# Étape 1 : Construction de l'application
FROM maven:3.9.6-eclipse-temurin-22 AS build

# Définit le répertoire de travail
WORKDIR /app

# Copier les fichiers pom.xml et les fichiers de dépendances dans le conteneur
COPY pom.xml .

# Télécharger les dépendances sans construire le projet
RUN mvn dependency:go-offline

# Copier le reste des fichiers de l'application dans le conteneur
COPY src ./src

# Construire l'application Spring Boot
RUN mvn clean package -DskipTests

# Étape 2 : Création de l'image de l'application
FROM eclipse-temurin:22

# Définit le répertoire de travail
WORKDIR /app

# Copier le jar de l'étape de construction
COPY --from=build /app/target/*.jar app.jar

# Expose le port sur lequel l'application tourne
EXPOSE 8080

# Commande pour lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]