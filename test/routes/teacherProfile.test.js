const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { access } = require('./cookie.test');

const { dbFakeData, dbBuild } = require('../../server/database/config/build');

test('Test /teacher/profile route', (t) => {
  dbBuild()
    .then(() => dbFakeData())
    .then(() => {
      supertest(app)
        .get('/api/v1/profile/teacher/5')
        .set('Cookie', [`access=${access}`])
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(res.body[0].first_name, 'Ahmed', 'should be the same');
            t.deepEqual(res.body[0].last_name, 'Ghareb', 'should be the same');

            t.end();
          }
        });
    })
    .catch(t.error);
});
