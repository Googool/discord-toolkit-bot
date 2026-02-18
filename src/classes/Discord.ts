import { Client, Collection, GatewayIntentBits, Partials } from "discord.js";
import type { Command, Event } from "../types";

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

export class Discord extends Client {
  public readonly commands = new Collection<string, Command>();
  public readonly events = new Collection<string, Event>();

  constructor() {
    super({
      intents: [Guilds, GuildMembers, GuildMessages],
      partials: [User, Message, GuildMember, ThreadMember],
    });
  }

  public async start(token: string): Promise<void> {
    await this.login(token);
  }

  public stop(): void {
    this.destroy();
  }
}
