import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'Hello Clynic!' }),
);

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("⚡ Server's running");
});
