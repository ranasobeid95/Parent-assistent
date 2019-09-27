BEGIN;

DROP TABLE IF EXISTS users,parent,teacher,student,teacher-student,subjects,subjects-teacher,
activities,homework CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE, 
    user_name VARCHAR(50),
    password VARCHAR(255),
);

CREATE TABLE parent(
    id SERIAL PRIMARY KEY,
    parent_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE teacher(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE student(
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255),
    class INTEGER,
    parent_id INTEGER,
    FOREIGN KEY (parent_id) REFERENCES parent(parent_id)
);

CREATE TABLE teacher-student(
    id SERIAL PRIMARY KEY,
    teacher_id INTEGER, 
    student_id INTEGER,
    FOREIGN KEY (teacher_id,student_id) REFERENCES (teacher(id),student(id)),
);

CREATE TABLE subjects(
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(255)
);

CREATE TABLE subjects-teacher(
     id SERIAL PRIMARY KEY,
     teacher_id INTEGER, 
     subject_id INTEGER,
     FOREIGN KEY (teacher_id,subject_id) REFERENCES (teacher(id),subjects(id)),
);

CREATE TABLE activities(
    id SERIAL PRIMARY KEY,
    data VARCHAR(255),
    class INTEGER,
    description text,
    title text,
    subject_id INTEGER ,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

CREATE TABLE homework {
    id SERIAL PRIMARY KEY,
    data text, 
    class INTEGER, 
    urls json,
    subject_id INTEGER,
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
}

COMMIT;
