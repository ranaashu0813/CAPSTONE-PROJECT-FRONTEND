FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy your JAR from your build context (local machine) to /app/app.jar inside container
COPY target/*.jar app.jar

EXPOSE 8088

ENTRYPOINT ["java", "-jar", "app.jar"]
