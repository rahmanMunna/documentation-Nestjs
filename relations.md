## Here we have 4 type relations : 
  - One to One
  - One to Many
  - Many to One
  - Many to Many

## Example :
  ## 🟢 1. ONE-TO-ONE : 
  - User (1) -------- (1) Profile
  - In User entity , One user has One Profile
  - In Profile entity, One Profile conatins One user

```.ts
// User Entity
@OneToOne(() => Profile, profile => profile.user)
profile: Profile;

// Profile Entity
@OneToOne(() => User, user => user.profile)
user: User;

```
  ## 🟢 2. ONE-TO-MANY :
  - Order (1) -----------< (many) OrderItem
  - In Order Entity, Order can have multiple orderItem
  - An Order object can hold a  list of order Item.
     
```.ts
// Order Entity
@OneToMany(() => OrderItem, item => item.order)
items: OrderItem[];

// OrderItem Entity
@ManyToOne(() => Order, order => order.items)
order: Order;
```
  ## 🟢 2. MANY-TO-ONE :
  - This is literally the inverse of One-to-Many.
  ## ⚠️ Important:
  - One-to-Many is written on the parent sid
  - Many-to-One is written on the child side
  - In OrderItemEntity , an OrderItemEntity object (one single row) can have Only one Order Object.

```.ts
@ManyToOne(() => Order, order => order.items)
order: Order;
```
## OrderItem → belongs to ONE Order

  ## 🔴 4. MANY-TO-MANY : 
  `In a Many-to-Many relationship, a join (intermediate) table is ALWAYS required.`
  - ✅ TypeORM can create the intermediate table automatically.
  - ✅ We can create the intermediate table manually (recommended for real projects).

# ✔️ Option 1 — AUTO Join Table (TypeORM creates it) : 
- Student ↔ Course
```
// Student Entity
@ManyToMany(() => Course, course => course.students)
@JoinTable()
courses: Course[];

// Course Entity
@ManyToMany(() => Student, student => student.courses)
students: Student[];

```

## TypeORM automatically creates this table:
------------------------
|student_courses_course |
|studentId              |
|courseId               |
------------------------
-----------------------
✔️ Option 2 — MANUAL Intermediate Table (BEST PRACTICE) : 
```
Student
Course
Enrollment  <-- join table
```
- `Enrollment Entity (JOIN TABLE) : `
```
@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, student => student.enrollments)
  student: Student;

  @ManyToOne(() => Course, course => course.enrollments)
  course: Course;

  @Column()
  enrolledAt: Date;
}
```

- `Student Entity : `
```
@OneToMany(() => Enrollment, enrollment => enrollment.student)
enrollments: Enrollment[];
```

- `Course Entity : `
```
// Course Entity
@OneToMany(() => Enrollment, enrollment => enrollment.course)
enrollments: Enrollment[];
```

  


  
  
      
