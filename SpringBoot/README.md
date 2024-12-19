# Tactical-Report

Spring Boot (Backend)

    Step 1: Initiated the project using Spring Initializer
    
        Website link: https://start.spring.io/
        Added Dependencies:
            1- Spring Web
            2- Spring Data MongoDB
            3- Spring Boot DevTools
            4- Validation
    
    Step 2: Extracted the project and launched it in the IDE
    
    To execute the Spring Boot project, the following command was used: ./gradlew bootRun
    
    Step 3: Installed MongoDB
    Created various packages: Controller, Entity, Exception, Repository, and Service.
    
        1- The controller package includes the API for GET, POST, DELETE, PUT operations.
        2- The entity package houses the item class.
        3- The exception package includes the class that triggers the item not found exception and the missing argument.
        4- The repository package includes the interface that offers methods to execute CRUD operations (Create, Read, Update, Delete) on the Item entity in a MongoDB database.
        5- The Service package includes functions for creating an item, retrieving all items, fetching an item by its ID, updating an item, and deleting an item.
    
        After configuring the API (GET, PUT, DELETE, POST), I verified the functionalities using CURL.
    
        1- Post: curl -X POST http://localhost:8080/api/items -H "Content-Type: application/json" -d "{\"name\": \"New Item\", \"description\": \"Description of the new item\"}"
    
        2- GET (All Items): curl -X GET http://localhost:8080/api/items
    
        3- GET (A specific Item):curl -X GET http://localhost:8080/api/items/{id}
    
        4- PUT: curl -X PUT http://localhost:8080/api/items/{id} -H "Content-Type: application/json" -d "{\"name\": \"Updated Item\", \"description\": \"Updated description\"}"
    
        5- DELETE: curl -X DELETE http://localhost:8080/api/items/{id}
    
    Step 4: Constructing a Docker Container
    Initially, I installed Docker for Windows.
    
        1- Created a Docker File named 'Dockerfile' in the root directory of the Spring Boot Project.
    
        2- Inserted the content.
    
        3- Built the project using: ./gradlew build
    
        4- Constructed the Docker Image: docker build -t spring-boot-app .
    
        5- To launch the Application using Docker: docker run -p 8080:8080 spring-boot-app --spring.data.mongodb.uri=mongodb://host.docker.internal:27017/springBoot
    
        6- To verify the application the same CURL commands can be used.
