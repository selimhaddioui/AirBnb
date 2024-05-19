FROM eclipse-temurin:22

WORKDIR /bookingService

COPY .mvn/ /bookingService/.mvn
COPY mvnw pom.xml /bookingService/
RUN /bookingService/mvnw dependency:go-offline

COPY src /bookingService/src

CMD ["./mvnw", "spring-boot:run"]