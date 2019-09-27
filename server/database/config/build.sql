BEGIN;

DROP TABLE IF EXISTS "user", parent, teacher, student, teacher_student, "subject", subject_teacher, activity, homework CASCADE;

CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE, 
    user_name VARCHAR(50),
    password VARCHAR(255)
);

CREATE TABLE parent(
    id SERIAL PRIMARY KEY,
    parent_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE teacher(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255),
    class INTEGER,
    parent_id INTEGER,
    FOREIGN KEY (parent_id) REFERENCES parent(id)
);

CREATE TABLE teacher_student(
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER, 
    student_id INTEGER,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

CREATE TABLE "subject"(
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(255)
);

CREATE TABLE subject_teacher(
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER, 
    subject_id INTEGER,
    FOREIGN KEY (teacher_id) REFERENCES teacher(id),
    FOREIGN KEY (subject_id) REFERENCES "subject"(id)
); 

CREATE TABLE activity(
    id SERIAL PRIMARY KEY,
    activity_date date,
    class INTEGER,
    description text,
    title text,
    subject_id INTEGER ,
    FOREIGN KEY (subject_id) REFERENCES "subject"(id)
);

CREATE TABLE homework (
    id SERIAL PRIMARY KEY,
    homework_date date, 
    class INTEGER, 
    urls json,
    subject_id INTEGER,
    FOREIGN KEY (subject_id) REFERENCES "subject"(id)
);

COMMIT;
