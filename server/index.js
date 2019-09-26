
const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`The app run on http://localhost:${port}`);
});
