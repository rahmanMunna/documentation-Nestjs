# Here the code flow : 
## controller -> service -> repository -> db

### We need to install the packages first :

```
npm i @nestjs/config @nestjs/typeorm typeorm pg 
```
| Folder / File | Description |
|----------------|-------------|
| **dto/** | Contains all Data Transfer Objects (input validation & request body types). |
| **entities/** | Defines TypeORM entity classes mapping to database tables. |
| **customer.controller.ts** | Handles HTTP routes and request/response handling. |
| **customer.service.ts** | Contains business logic for the customer feature. |
| **customer.repository.ts** | Responsible for database access and TypeORM operations. |
| **customer.module.ts** | Declares and wires up controller, service, and repository for this feature. |
| **app.module.ts** | Root application module — imports all feature modules. |
| **main.ts** | Entry point of the NestJS application. |
