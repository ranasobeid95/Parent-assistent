const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { dbBuild, dbFakeData } = require('../../server/database/config/build');

const { access } = require('./cookie.test');

test('Test subject Page', (t) => {
  const expected = {
    teacher_id: 3,
    last_name: 'Omar',
    first_name: 'Arwa',
    subject_id: 3,
    subject_name: 'Math',
  };
  dbBuild()
    .then(() => dbFakeData())
    .then(() => {
      supertest(app)
        .get('/api/v1/student/subject/1')
        .set('Cookie', [`access=${access}`])
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(
              res.body[0],
              expected,
              'Sami',
              'test for seccess response',
            );

            t.end();
          }
        });
    });
});
