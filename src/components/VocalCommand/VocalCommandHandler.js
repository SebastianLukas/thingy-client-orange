class VocalCommandHandler {

  constructor(client) {
    this.client = client;
    this.commandWords = ["temperature", "humidity"];
  }

  //@todo add promise
  handle(command) {
    if (this.valid(command)) {
      return this.client.get(command);
    }
    return null;
  }

  valid(command) {
    if (this.commandWords.includes(command.toLocaleLowerCase())) {
      return true;
    } else {
      console.log("error, said: " + command.toLocaleString())
      return false;
    }
  }

}