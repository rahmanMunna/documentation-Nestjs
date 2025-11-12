# Here the code flow : 
## controller -> service -> repository -> db

### We need to install the packages first :

```
npm i @nestjs/config @nestjs/typeorm typeorm pg 
```
src/
│
├── modules/
│ └── users/
│ └── customer/
│ ├── dto/
│ │ └── customer.dto.ts
│ │
│ ├── entities/
│ │ └── customer.entity.ts
│ │
│ ├── customer.controller.ts
│ ├── customer.service.ts
│ ├── customer.repository.ts
│ └── customer.module.ts
│
├── app.module.ts
└── main.ts
