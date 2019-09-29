
const test = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { dbFakeData } = require('../../server/database/config/build');

exports.test('Test /login route', (t) => {
  const userInfo = {
    email: 'Ola200@gmail.com',
    password: 'alaa123456789',
  };
  dbFakeData().then(() => {
    supertest(app)
      .post('/api/v1/login')
      .send(userInfo)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          t.error(err);
          t.end();
        } else {
          t.equals(res.rows[0].email,userInfo.email , 'must be the same');
          t.end();
        }
      });
  }).catch(t.error);
});