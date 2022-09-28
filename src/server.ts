import app from "./app";
import { configuration } from "./config";
import startConnection from "./loaders/DBConection";
const PORT = configuration.server.PORT || 3000;

const boot = async () => {
  await startConnection();

  app.listen(PORT, () => {
    console.log("we are run now on port q", PORT);
  });
};
boot();
