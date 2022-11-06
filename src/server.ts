import app from "./app";
import { configuration } from "./config";
import setContainer from "./loaders/Container";
import startConnection from "./loaders/DBConection";
const PORT = configuration.server.PORT || 3000;

const boot = async () => {
  try {
    await setContainer();
    await startConnection();
    app.listen(PORT, () => {
      console.log("we are run now on port ", PORT);
    });
    
  } catch (error) {
    console.log("error", error);
}
};
boot();
