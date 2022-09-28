import app from "./app";
import { configuration } from "./config";
import startConnection from "./loaders/DBConection";
const port: number = configuration.server.port || 3000;

const boot = async () => {
  await startConnection();

  app.listen(port, () => {
    console.log("we are run now on port q", port);
  });
};
boot();
