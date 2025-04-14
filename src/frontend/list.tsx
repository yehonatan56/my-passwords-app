import { useEffect, useState } from "react";
import { remult } from "remult";
import { Button } from "@mantine/core";
import copy from "copy-to-clipboard";
import { Item } from "../shared/item.ts";

export default function List() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const itemRepo = remult.repo(Item);
    itemRepo.find({}).then((items) => {
      setItems(items);
    });
  }, []);
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {items.map((item) => (
        <Button key={item.id} onClick={() => copy(item.content)}>
          {item.label}
        </Button>
      ))}
    </div>
  );
}
