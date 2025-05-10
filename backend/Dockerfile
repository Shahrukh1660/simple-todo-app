# Use OpenJDK 17 base image
FROM openjdk:17-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the target directory into the container
COPY target/*.jar app.jar

# Set the command to run the JAR file when the container starts
ENTRYPOINT ["java", "-jar", "app.jar"]
