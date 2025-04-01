import { Entity, Fields } from "remult";
@Entity<Item>("items", { allowApiCrud: true })
export class Item {
  @Fields.autoIncrement()
  id = 0;
  @Fields.string()
  label = "";
  @Fields.string()
  content = "";
}
