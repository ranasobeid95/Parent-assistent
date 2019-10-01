const tape = require('tape');
const supertest = require('supertest');
const { access } = require('./cookie.test');
const { dbBuild, dbFakeData } = require('../../server/database/config/build');

const app = require('../../server/app');

tape('Testing for subject Homework Route', (t) => {
  dbBuild()
    .then(dbFakeData)
    .then(() => {
      supertest(app)
        .get('/api/v1/subject/1/homeworks/1')
        .expect(200)
        .expect('content-type', /json/)
        .set('Cookie', [`access=${access}`])
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            console.log(res.body[0]);
            const actual = res.body[0];
            const expected = ['homework_description', 'urls'];
            t.deepEqual(actual, expected, 'Test pass: All values must be the same');
            t.end();
          }
        });
    });
});
