import type { ClientEvents } from "discord.js";

export interface Event {
  name: keyof ClientEvents;
  once?: boolean;
  execute: (...args: ClientEvents[keyof ClientEvents]) => Promise<void>;
}
