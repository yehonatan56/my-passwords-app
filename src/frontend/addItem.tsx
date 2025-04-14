import { useState } from "react";
import { Button, Box } from "@mantine/core";
import { remult } from "remult";
import { Item } from "../shared/item";
export function AddItem() {
  const [label, setLabel] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [opened, setOpened] = useState<boolean>(false);
  const open = () => setOpened(true);
  const close = () => setOpened(false);

  return (
    <>
      <Box
        style={{
          display: opened ? "block" : "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <input
          type="text"
          placeholder="Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          onClick={async () => {
            const itemRepo = remult.repo(Item);
            await itemRepo.save({ label, content });
            close();
          }}
        >
          Add
        </Button>
      </Box>

      <Button variant="default" onClick={open}>
        Add Item
      </Button>
    </>
  );
}
