const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');

test('Test /login route', (t) => {
  const userInfo = {
    email: 'Ola200@gmail.com',
    password: '123456',
  };
  dbBuild()
    .then(() => dbFakeData())
    .then(() => {
      supertest(app)
        .post('/login')
        .send(userInfo)
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(res.isSuccess, true, 'you are login successfully');
            t.end();
          }
        });
    })
    .catch(t.error);
});
