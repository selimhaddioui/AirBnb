FROM eclipse-temurin:22

WORKDIR /estateService

COPY .mvn/ /estateService/.mvn
COPY mvnw pom.xml /estateService/
RUN /estateService/mvnw dependency:go-offline

COPY src /estateService/src

CMD ["./mvnw", "spring-boot:run"]