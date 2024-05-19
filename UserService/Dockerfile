FROM eclipse-temurin:22

WORKDIR /userService

COPY .mvn/ /userService/.mvn
COPY mvnw pom.xml /userService/
RUN /userService/mvnw dependency:go-offline

COPY src /userService/src

CMD ["./mvnw", "spring-boot:run"]