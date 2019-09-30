const tape = require('tape');
const supertest = require('supertest');
const { dbBuild, dbFakeData } = require('../../server/database/config/build');

const app = require('../../server/app');

tape('testing the signupParent insert quary', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .post('/api/v1/signup/parent')
        .send({
          email: 'mhmmade@gmail.com',
          username: 'Mohammed',
          parentId: '12345679',
          password: '123456789',
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(
              { ...res.body },
              {
                email: 'mhmmade@gmail.com',
                user_name: 'Mohammed',
                parent_id: 12345679,
              },
              'should return sthe same data && the hased password',
            );
            t.end();
          }
        });
    })
    .catch(t.error);
});

tape('testing the signupParent validation error', (t) => {
  dbBuild()
    .then(() => {
      supertest(app)
        .post('/api/v1/signup/parent')
        .send({
          email: 'mhmmade',
          username: 'Mohammed',
          parentId: 'sss',
          password: '123456789',
        })
        .expect('Content-Type', /json/)
        .expect(409)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(
              { ...res.body },
              {
                error: 'validation error',
              },
              'should return correct error type',
            );
            t.end();
          }
        });
    })
    .catch(t.error);
});

tape('test for existing user name', (t) => {
  dbBuild()
    .then(dbFakeData)
    .then(() => {
      supertest(app)
        .post('/api/v1/signup/parent')
        .send({
          email: 'Ola200@gmail.com',
          username: 'asmaa',
          parentId: '12345679',
          password: '123456789',
        })
        .expect('Content-Type', /json/)
        .expect(406)
        .end((err, res) => {
          if (err) {
            t.error(err);
            t.end();
          } else {
            t.deepEqual(
              { ...res.body },
              {
                error: 'username exists',
              },
              'username exists',
            );
            t.end();
          }
        });
    })
    .catch(t.error);
});
