# Here the code flow : 
## controller -> service -> repository -> db

### We need to install the packages first :

```
npm i @nestjs/config @nestjs/typeorm typeorm pg 
```
## Folder Structure : 
- src/
- │
- ├── modules/
- │ └── users/
- │     └── customer/
- │     ├── dto/
- │     │  └── customer.dto.ts
- │     │
- │     ├── entities/
- │     │  └── customer.entity.ts
- │     │
- │     ├── customer.controller.ts
- │     ├── customer.service.ts
- │     ├── customer.repository.ts
- │     └── customer.module.ts
- │
- ├── app.module.ts
- └── main.ts

## We are going to set up all necessary things:

### Step - 1 : 
  - Need to add configuration of my db in  `app.module.ts` class.
```.ts
@Module({
  imports: [CustomerModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'dbName',
      autoLoadEntities: true,
      synchronize: true
    }
  )]
})
export class AppModule { }
```

### Step - 2:
  - Create an Entity name `CustomerEntity`

```.ts
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Customers') // table name as ***Customers***
export class CustomerEntity {

    @PrimaryGeneratedColumn({ name: 'id', type: 'int' }) // auto increment by 1,Pk col
    id: number;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @Column({ name: 'password', type: 'varchar', length: 12 })
    password: string;
}

```
### Key facts : 
  - Untill using `@Entity()` decorator, this class won't consider as an DB Entity.
  - We can give table name via -> @Entity('Table name').
  - If We wont provide the table name into `@Entity()`, our table name will be based our class name. For `CustomerEntity` -> `customer_entity`(table name)
  - Untill using `@Colomn()` decorator , that properties won't consider as DB Column.
  - We can pass an object in @Column() decorator to provide additional information for that coloumn or properties.

### Step - 3 :
  - Register Entity to module class:

```.ts
@Module(
    {
        imports: [TypeOrmModule.forFeature([CustomerEntity])], // include all entity class into the array
        providers: [CustomerService, CustomerRepository],
        controllers: [CustomerController]
    }
)
export class CustomerModule { }
```
### Key facts : 
  - Import the `CustomerEntity`.
  - `TypeOrmModule.forFeature(`) -> this takes an array as parameter.
  - Array will be all entity class.

### Step - 4 : 
  - Create an Dedicated Repository class for each Entity and must make it `@Injectable()`
    
```.ts
@Injectable()
export class CustomerRepository {
    constructor(@InjectRepository(CustomerEntity) private readonly customerRepo: Repository<CustomerEntity>) { }

    async add(createCustomerDTO: CreateCustomerDTO): Promise<CustomerEntity> {
        const newCustomer = this.customerRepo.create(createCustomerDTO);
        return await this.customerRepo.save(newCustomer);
    }
}
```
### Key facts : 
  - must inject the in-built Repository tamplate class `Repository<CustomerEntity>` in constructor.
  - To Inject use `@InjectRepository(EntityName)`
  - `Repository<MyEntityClassName>` is a template.
  - Stored the repo instance to an variable name `customerRepo`.
  - Now we can do any db operation for that entity(table) using `customerRepo` class.

### We will call the repo from service.So must inject out Repo class in our service class constructor.That why our Repo class is `@Injectable`.

### Fule code : https://github.com/rahmanMunna/documentation-Nestjs/tree/main/setup-typeorm-pgsql/src

