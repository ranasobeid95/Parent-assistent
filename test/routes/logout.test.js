const tape = require('tape');
const supertest = require('supertest');

const app = require('../../server/app');

tape('testing the logout Route', (t) => {
  supertest(app)
    .get('/api/v1/logout')
    .expect(200)
    .expect('content-type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.body.message, 'logged out successfully', 'Logout test passed');
        t.end();
      }
    });
});
