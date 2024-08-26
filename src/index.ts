import app from './express.app';

const PORT = Number(process.env.PORT) || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
