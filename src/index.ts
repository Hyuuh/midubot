import "dotenv/config";
import { Client, type ParseClient } from "seyfert";

const client = new Client();

// This will start the connection with the gateway and load commands, events, components and langs
client.start().then(() => client.uploadCommands());

declare module "seyfert" {
	interface UsingClient extends ParseClient<Client<true>> {}
}
