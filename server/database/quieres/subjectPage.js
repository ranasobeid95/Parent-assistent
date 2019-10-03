const connection = require('../config/connection');

const subject = (id) => {
  const sql = {
    text: ` select
    subject_teacher.teacher_id ,
    teacher.last_name ,
    teacher.first_name ,
    subject_teacher.subject_id ,
    subject.subject_name,
    student.class
  from
    teacher_student
  inner join subject_teacher on
    subject_teacher .teacher_id = teacher_student.teacher_id
  inner join teacher on
    teacher.id = teacher_student.teacher_id
  inner join subject on
    subject_teacher.subject_id = subject.id
  inner join student on
  teacher_student.student_id = student.id
  where
    student_id = $1
  `,
    values: [id],
  };
  return connection.query(sql);
};

module.exports = { subject };
