const tape = require('tape');
const supertest = require('supertest');
const { dbBuild } = require('../../server/database/config/build');

const app = require('../../server/app');

dbBuild().then(
  tape('testing the signupParent insert quary', (t) => {
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
          // console.log(res);
          t.deepEqual(
            res.body,
            {
              email: 'mhmmade@gmail.com',
              password:
                '$2b$10$8iVjfMD/o9YBVauixyUvyuuSasNxVzgK958dTS8VdITbOAkLghZjK',
              user_name: 'Mohammed',
              parent_id: 12345679,
            },
            'should return sthe same data && the hased password',
          );
          t.end();
        }
      });
  }),
);
