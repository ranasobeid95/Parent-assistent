const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, 'build.sql')).toString();
  return connection.query(sql);
};

const dbFakeData = () => {
  const fakedataSql = readFileSync(join(__dirname, 'fakedata.sql')).toString();
  return connection.query(fakedataSql);
};


module.exports = { dbBuild, dbFakeData };
