-- ---------------------------------------------------------------------------------
-- Part 1
-- ---------------------------------------------------------------------------------

-- 1) Original query
 SELECT Students.*, Countries.name country FROM Students
	INNER JOIN Countries ON Students.nationality = Countries.idCountries;
    
-- 2) Know each student type of ID
SELECT Students.name, idtypes.name as id_type FROM Students
	INNER JOIN idtypes ON Students.IdType_id = idtypes.id_idTypes;
    
-- 3) Get the code of the courses that each student is enrolled in
SELECT Students.idStudent, Students.name, courses_has_students.course_code
	FROM Students INNER JOIN courses_has_students
    ON Students.idStudent = courses_has_students.students_id_student;

-- 4) Get the course name with the student ID of students enrolled in the course
SELECT courses_has_students.course_code, courses.name as course_name,
	courses_has_students.students_id_student as student_id
	FROM courses INNER JOIN courses_has_students
    ON courses.code = courses_has_students.course_code;

-- 5) Use an INNER JOIN to combine the results of the queries
SELECT
	DISTINCT students_codes.course_code,
    students_codes.name,
    courses_codes.course_name
	FROM
	(
		SELECT Students.idStudent, Students.name, courses_has_students.course_code
			FROM Students INNER JOIN courses_has_students
			ON Students.idStudent = courses_has_students.students_id_student
    ) students_codes
    INNER JOIN
    (
		SELECT courses_has_students.course_code, courses.name as course_name,
			courses_has_students.students_id_student as student_id
			FROM courses INNER JOIN courses_has_students
			ON courses.code = courses_has_students.course_code
    ) courses_codes
    ON students_codes.course_code = courses_codes.course_code;
    
-- ---------------------------------------------------------------------------------
-- Part 2
-- ---------------------------------------------------------------------------------

-- 1) Write a query to find all the students in a given country
SELECT Students.name, Students.last_name, countries.Name as country
	FROM Students INNER JOIN countries
    ON Students.nationality = countries.idCountries
    HAVING country LIKE "%colombia%";
    
-- 2) Write a query to find all the Countries which name starts with 'Ca'
SELECT * FROM countries WHERE Name LIKE "Ca%";

-- 3) Count all the students enrolled in the course 'JAVA-1'
SELECT courses_has_students.course_code as course_code,
	COUNT(courses_has_students.students_id_student) as enrolled_students
	FROM courses INNER JOIN courses_has_students
    ON courses.code = courses_has_students.course_code
    GROUP BY course_code
    HAVING course_code = "JAVA-1";

-- 4) Calculate *SUM* of all the courses credits that contains 'JAVA' in the name
SELECT SUM(credits) as total_credits
	FROM courses WHERE name LIKE "%java%";
    
-- ---------------------------------------------------------------------------------
-- Challenge Yourself
-- ---------------------------------------------------------------------------------

-- Write a Query to count all the students enrolled in a given module.
SELECT modules.name as module_name,
	COUNT(courses_has_students.students_id_student) as enrolled_students
	FROM courses
    INNER JOIN courses_has_students
    ON courses.code = courses_has_students.course_code
    INNER JOIN modules
    ON courses.module_code = modules.code
    GROUP BY module_name
    HAVING module_name = "JavaScript for Web Development";
