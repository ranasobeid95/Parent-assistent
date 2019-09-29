const tape = require('tape');
const supertest = require('supertest');
const app = require('../../server/app');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');

tape('Test /login route', (t) => {
  const userInfo = {
    email: 'Ola200@gmail.com',
    password: 'alaa123456789',
  };
  dbBuild()
    .then(dbFakeData)
    .then(() => {
      supertest(app)
        .post('/api/v1/login')
        .send()
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.equals(res.rows[0].email, userInfo.email, 'must be the same');
            t.end();
          }
        });
    })
    .catch(t.error);
});
