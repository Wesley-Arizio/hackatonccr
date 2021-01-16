const app = require("./app");

const port = Symbol("port");

class App {
  constructor() {
    this[port] = 3001;
  }

  startApp() {
    return app.listen(this[port], () => {
      console.log(`🔥 Application is running at port ${this[port]}`);
    });
  }
}

module.exports = App;
