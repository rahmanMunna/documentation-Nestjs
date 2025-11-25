# 🔗 Relationship Types in Databases (TypeORM Examples)

Here we have **4 types of relations**:

-   **One-to-One**
-   **One-to-Many**
-   **Many-to-One**
-   **Many-to-Many**

------------------------------------------------------------------------

## 🟢 1. ONE-TO-ONE

### Example: **User ↔ Profile**

-   One **User** has one **Profile**\
-   One **Profile** belongs to one **User**

### Diagram

    User (1) -------- (1) Profile

### Entities

``` ts
// User Entity
@OneToOne(() => Profile, profile => profile.user)
@JoinColumn()
profile: Profile;
```

``` ts
// Profile Entity
@OneToOne(() => User, user => user.profile)
user: User;
```

------------------------------------------------------------------------

## 🟢 2. ONE-TO-MANY

### Example: **Order ↔ OrderItem**

-   One **Order** contains many **OrderItems**
-   The Order entity holds a **list of items**

### Diagram

    Order (1) -----------< (many) OrderItem

### Entities

``` ts
// Order Entity
@OneToMany(() => OrderItem, item => item.order)
items: OrderItem[];
```

``` ts
// OrderItem Entity
@ManyToOne(() => Order, order => order.items)
order: Order;
```

------------------------------------------------------------------------

## 🟡 3. MANY-TO-ONE

This is literally the **inverse of One-to-Many**.

### Important Notes:

-   **One-to-Many** → Written on the *parent* side\
-   **Many-to-One** → Written on the *child* side\
-   A single `OrderItemEntity` row belongs to **one** Order.

### Entity Example

``` ts
@ManyToOne(() => Order, order => order.items)
order: Order;
```

### Meaning:

    OrderItem → belongs to ONE Order

------------------------------------------------------------------------

## 🔴 4. MANY-TO-MANY
```
Courses (many) >-----------< (many) Students
// need an intermediate table
Courses (1) --------------< (many) Enrollments (many) >--------------- (1) Students
```
In a **Many-to-Many** relationship, a **join table is always required**.

You can handle it in two ways:

-   ✅ TypeORM creates the intermediate table automatically\
-   ✅ OR you can manually create the join table (best practice)

------------------------------------------------------------------------

# ✔️ Option 1 --- AUTO Join Table (TypeORM creates it)

### Example: **Student ↔ Course**

``` ts
// Student Entity
@ManyToMany(() => Course, course => course.students)
@JoinTable()
courses: Course[];
```

``` ts
// Course Entity
@ManyToMany(() => Student, student => student.courses)
students: Student[];
```

### Auto-created Join Table (by TypeORM)

  studentId   courseId
  ----------- ----------

------------------------------------------------------------------------

# ✔️ Option 2 --- MANUAL Join Table (BEST PRACTICE)

### Structure:

    Student
    Course
    Enrollment  <-- join table

### `Enrollment` Entity

``` ts
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

### Student Entity

``` ts
@OneToMany(() => Enrollment, enrollment => enrollment.student)
enrollments: Enrollment[];
```

### Course Entity

``` ts
@OneToMany(() => Enrollment, enrollment => enrollment.course)
enrollments: Enrollment[];
```
