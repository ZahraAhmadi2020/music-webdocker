# Stage 1: Build (بدون تغییر)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn dependency:go-offline -B
RUN mvn clean package -DskipTests --no-transfer-progress

# Stage 2: Runtime – بدون extract لایه‌ای (برای رفع مشکل launcher)
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
COPY --from=build /app/target/music-service-1.0-SNAPSHOT.jar app.jar

EXPOSE 8080

# CMD مستقیم روی jar (کلاس اصلی Spring Boot رو پیدا می‌کنه)
CMD ["java", "-jar", "app.jar"]
