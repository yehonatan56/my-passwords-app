import { remultExpress } from "remult/remult-express";
import { Item } from "../shared/item.ts";

export const api = remultExpress({
  entities: [Item],
});
