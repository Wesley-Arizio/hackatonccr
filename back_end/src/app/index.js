require("dotenv").config();

const app = require("./app");

const port = Symbol("port");

class App {
  constructor() {
    this[port] = process.env.PORT;
  }

  startApp() {
    return app.listen(this[port], () => {
      console.log(`🔥 Application is running at port ${this[port]}`);
    });
  }
}

module.exports = App;
