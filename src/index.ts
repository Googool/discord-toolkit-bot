import { Discord } from "./classes/Discord";
import "dotenv/config";

const client = new Discord();

const token = process.env.DISCORD_TOKEN;
if (!token) throw new Error("DISCORD_TOKEN is missing");
await client.start(token);
