import app, { ensureDb } from './app.js';

const PORT = process.env.PORT || 3001;

ensureDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Fatal: could not initialize the database.', err);
    process.exit(1);
  });
