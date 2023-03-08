FROM eclipse-temurin:17-jdk-alpine

VOLUME [ "/data" ]

ARG JAR_FILE

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "jar","/app.jar"]