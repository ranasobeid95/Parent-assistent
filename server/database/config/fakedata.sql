INSERT INTO "user"
    ( email,user_name, password)
VALUES
    ('ola200@gmail.com', 'Ola', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('samah1990@gmail.com', 'Samah', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('asmaa@gmail.com', 'Asmaa', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('kamal2120@gmail.com', 'Kamal', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('ahmed123@gmail.com', 'Ahmed', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('ali123@gmail.com', 'Ali', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('arwa123@gmail.com', 'Arwa', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm'),
    ('hala2019@gmail.com', 'Hala', '$2b$12$/u9SrIHbjUKFTD2wlEU2heoyvHEImp7yvDknO6OV.qoLBNgiykCKm');

INSERT INTO parent 
    (parent_id,user_id)  
VALUES 
    (0123456789, 1),
    (0481012140, 2),
    (0167892345, 3),
    (0127893456, 4);

INSERT INTO teacher
    (first_name,last_name,user_id, bio, image_url, mobile, email, interest)
VALUES 
    ('Ahmed','Ghareb',5, 'Hi Iam Ahmed Ghareb Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png',0599542154,'Reading novels'),
    ('Ali','Taha',6, 'Hi Iam Ali Taha Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png',0599542154,'Reading novels'),
    ('Arwa','Omar',7, 'Hi Iam Arwa Omar Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png',0599542154,'Reading novels'),
    ('Hala','salah',8, 'Hi Iam Hala Salah Iam a teacher in Gaza Primary School you can contact me', 'https://cdn4.iconfinder.com/data/icons/BRILLIANT/accounting/png/400/executive.png',0599542154,'Reading novels');

INSERT INTO student   
    (student_name,class,parent_id) 
VALUES 
    ('Sami',1,1),
    ('Salma',2,1),
    ('sohad',1,2),
    ('Alaa',2,2),
    ('Asem',3,3),
    ('Mohammed',3,3),
    ('yousef',4,3),
    ('Esam',4,4);
    
INSERT INTO teacher_student
    (teacher_id,student_id)
VALUES 
    (1,1),
    (1,3),
    (1,5),
    (2,1),
    (2,2),
    (2,3),
    (2,4),
    (3,6),
    (3,7),
    (3,8),
    (4,1),
    (4,2);
    
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
    ('2019-7-15',2,'The student knew Letters by playing Letters game. Lorem Ipsum has been','Letters activity',2),
    ('2019-9-2',1,'The student knew Numbers by playing Numbers game. Lorem Ipsum has been','Numbers activity',3),
    ('2019-8-30',1,'The student knew a lot of information about the sun. Lorem Ipsum has been','Sun activity',3),
    ('2019-9-8',1,'The student knew a lot of information about the sun. Lorem Ipsum has been','Sun activity',3),
    ('2019-9-15',1,'The student knew a lot of information about the sun. Lorem Ipsum has been','Sun activity',4),
    ('2019-9-1',1,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',4),
    ('2019-9-16',2,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',1),
    ('2019-9-17',2,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',2),
    ('2019-9-12',2,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',3),
    ('2019-9-15',2,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',4),
    ('2019-10-3',3,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',1),
    ('2019-10-2',3,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',2),
    ('2019-10-2',3,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',3),
    ('2019-10-2',3,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',4),
    ('2019-10-4',4,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',1),
    ('2019-10-5',4,'The student knew a lot of information about the sun . Lorem Ipsum has been','Sun activity',2);

INSERT INTO homework 
    (homework_date,homework_description, class, urls, subject_id)  
VALUES 
    ('2019-08-03','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',1),
    ('2019-08-05','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',2),
    ('2019-08-06','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',3),
    ('2019-08-07','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4),
    ('2019-08-04','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',2,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',1),
    ('2019-08-03','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',2,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',2),
    ('2019-08-12','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',2,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',3),
    ('2019-08-16','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',2,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4),
    ('2019-08-18','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',3,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',1),
    ('2019-08-19','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',3,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',2),
    ('2019-08-20','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',3,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',3),
    ('2019-08-12','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',3,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4),
    ('2019-09-1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',1),
    ('2019-09-2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',2),
    ('2019-09-4','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',3),
    ('2019-08-12','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4),
    ('2019-09-18','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',1),
    ('2019-08-10','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',2,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',2),
    ('2019-09-14','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',3,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',3),
    ('2019-08-11','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',4,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4),
    ('2019-09-15','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',1,'{"resource1": "https://www.github.com","resource2": "https://www.github.com"}',4);
