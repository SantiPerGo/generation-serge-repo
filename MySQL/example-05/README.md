
<img align="right" width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF7BYCCZt5epw/company-logo_200_200/0?e=2159024400&v=beta&t=qUAFP9bUgBEEXGVQYpUXW1J_OiP8e0r4rFBpqp8OrxA">

# DB-MYSQL-4 - Advanced SQL (Joining Tables)

 <br/>
 <br/>
 
 
 ## Create your sample Database: 
 1. Open the SQL folder and run the SQL scripts in the following order:
 * StudentsCoursesGen.sql
 * Countries.sql
 * ID_Types.sql
 * Modules.sql
 * Courses.sql
 * Students.sql
 * Course_has_students.sql

## Part 1: JOINS
1. Run the following SQL Query to complete your first JOIN to see more information about the Students:
 ```sql
 SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;
 
  ```
2. Modify the previous SQL statment so it joins the Students table with the IDTypes table to know each students' type of ID.
3. Write an additional SQL statment to JOIN the Students table with the CourseHasStudent table to get the code of the courses that each students is enrolled in.
4. Write a SQL query to join the CourseHasStudent table with the Courses table to get the name of the course information with the student ID of students enrolled in the course.
5. Now that you have the two queries, use an INNER JOIN to combine the results of the queries (this is called nested queries, and will allow you to combine SQL queries to order the data the way you like).
 
## Part 2: Understanding your data
 1. Write a SQL query that allows you to find all the students in a given country.
 2. Write a SQL query that allows you to find all the Countries which name starts with 'Ca'.
 3. Count all the students that are enrolled in the course 'JAVA-1'.
 4. Calculate the *SUM* of the credits of all the courses that have the word 'JAVA' in the name. 

## Challenge yourself
 1. Write a Query that allows you to count all the students that are enrolled in a given module.
 *Hint*: You need to count all the students enrolled in all the courses of the module.
