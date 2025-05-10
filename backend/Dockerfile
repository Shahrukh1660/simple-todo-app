#FROM openjdk:11-jre-slim
#WORKDIR /app
#COPY target/*.jar app.jar
#ENTRYPOINT ["java","-jar","app.jar"]

# Use an official Java 17 runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application jar (built from your build tool like Maven or Gradle)
COPY target/todo-backend.jar /app/todo-backend.jar

# Expose the port that your application will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "todo-backend.jar"]
