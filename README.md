# Parent Assistent App Refactoring



## Summary
Parent Assistant is a mobile-first web application, which helps parents to follow up their children's progress, activities, homework and grades at their schools. 
Parents can communicate with teachers and be on touch with all things relates to their children's school life.


## Challenge 

Parents in Gaza face a real problem of misconnection with their children teachers, they have no idea about their children level and they sometimes be confused about what is the homework exactly and what their children are expected to learn from each school activity.


## Our Solution

Parent assistent Provide a full description about school classes this includes activities, homework, students assessment. Also, it help parents to make continous connection with teachers by online chat and giving feedback to the school.

## How ?

 - Ideation

 - Prototyping

 - User Testing

 ### *The outcome of our design sprint was a functioning prototype designed in Figma:*

![](client/src/assets/pro.png)

## [Prototype Link ](https://www.figma.com/file/Aqb9cdOtWWRIicrUI9u0m6/ParentAssistant?node-id=0%3A1)


## User Journey

The user (parent) open the app to see landing page that contain general information about the app and school vision, then he can sign up by pressing on signup button to redirect after that to login page to start dealing with the app , the user will enter his profile that contains his children names ,Grade and class , then he/she can see their children class subjects and teachers profiles, For every subject there is a page to display subject activities and homeworks , the user can also see teacher profile that contains teacher details , the user can contact with the teacher to ask about his/her children level and assessment .  


## User Story

- As a user I can have a connection with teachers.
- As a user I can get assessment about my child.
- As a user I can understand the homework requirements of my child correctly.
- As a user I can get a full description about my child class.
- As a user I can get a full description about the activities of my child school.
- As a user I can give my feedback about my child class.

## Database Schema 
![schema](https://user-images.githubusercontent.com/29041512/66233087-2133e000-e6f3-11e9-9b6f-a13399873371.png)

## Set up the app locally 

First clone this repo: 

```git clone https://github.com/ranasobeid95/Parent-assistent.git```

then run ```npm i``` to install the dependencies for the app.

### Database Setup

In terminal type psql or pgcli if installed. Within psql/pcli enter the following commands:

```CREATE DATABASE [db_name];  
CREATE USER [user_name] WITH superuser PASSWORD ['password'];
alter database [db_name] owner to [user_name];
```

Now you can set the database url in your config.env as follows (setting the values in square brackets to the values you defined in the steps above):

```postgres://[user_name]:[password]@localhost:5432/[db_name]```

Next run the build.js file in terminal:

```node server/database/config/build.js```

This will create the tables in your database.

### Environment Variables

Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.

First create a config.env file in the root of the project folder and add the following variables:

```
DEVELOPMENT_DB
TESTING_DB
SECRET_KEY
```
### Testing
To pass the tests you need to :

1- Create new database for testing by repeate the previous pgcli commands and declare it in the config file .

2- Change access value depending on the secret key that you use

## Start the Server
You can now start the server! In your terminal write:
```
npm run dev
```
then you should be able to go to localhost and view the app!


## Start the React App 
You can now start the client side  In your terminal write:
```
 cd client/
 npm start
```

## Technologies
- Database: [PostgreSQL](https://www.postgresql.org/)
- Styling: CSS
- [Express](https://expressjs.com/)  and  [React](https://reactjs.org/) .
