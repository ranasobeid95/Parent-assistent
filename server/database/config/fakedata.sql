INSERT INTO "user"
    ( email,user_name, password)
VALUES
    ('Ola200@gmail.com', 'Ola', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('Samah1990@gmail.com', 'Samah', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('Ahmed54@gmail.com', 'Ahmed', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('Kamal2120@gmail.com', 'Kamal', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm');

INSERT INTO parent 
    (parent_id,user_id)  
VALUES 
    (0123456789, 1),
    (0123456789, 2),
    (0123456789, 3),
    (0123456789, 4);  
INSERT INTO teacher   
    (first_name,last_name,user_id, bio, image_url) 
VALUES 
    ('Ahmed','Ghareb',1, 'Hi Iam Ahmed Ghareb Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png'),
    ('Ali','Taha',2, 'Hi Iam Ali Taha Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png'),
    ('Arwa','Omar',3, 'Hi Iam Arwa Omar Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png'),
    ('Hala','salah',4, 'Hi Iam Hala Salah Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png');

INSERT INTO student   
    (student_name,class,parent_id) 
VALUES 
    ('Sami',5,1),
    ('Salma',4,2),
    ('sohad',3,3),
    ('Esam',1,4);
    
INSERT INTO teacher_student
    (teacher_id,student_id)
VALUES 
    (1,2),
    (2,2),
    (3,1),
    (4,3);
    
INSERT INTO "subject"
    (subject_name)
VALUES 
    ('English'),
    ('Arabic'),
    ('Math'),
    ('Science');

INSERT INTO subject_teacher
    (teacher_id,subject_id) 
VALUES 
    (1,1),
    (2,2),
    (3,3),
    (4,4);

INSERT INTO activity 
    (activity_date,class, description,title,subject_id)
VALUES 
    ('2018-11-11',1,'The student knew countries by playing countries game','Countries activity',1),
    ('2018-11-12',1,'The student palying with eachother football','Fun Activity',1),
    ('2018-11-15',1,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been','Lorem Ipsum',1),
    ('2018-11-17',1,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been','typesetting industry',1),
    ('2018-11-20',1,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been','printing and typesetting',1),
    ('2018-11-20',1,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been','printing and typesetting',1),
    ('2018-11-20',1,'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been','printing and typesetting',1),
    ('2019-7-15',2,'The student knew Letters by playing Letters game','Letters activity',2),
    ('2019-9-2',1,'The student knew Numbers by playing Numbers game','Numbers activity',3),
    ('2019-10-1',1,'The student knew a lot of information about the sun','Sun activity',4);

INSERT INTO homework 
    (homework_date,homework_description, class, urls, subject_id)  
VALUES 
    ('10/1/2019','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',1),
    ('10/2/2019','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',2,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',2),
    ('10/3/2019','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',3),
    ('10/4/2019','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4);
