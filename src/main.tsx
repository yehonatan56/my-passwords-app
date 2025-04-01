import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HexagonHover } from "hexagon-background";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HexagonHover>
    <MantineProvider>
      <App />
    </MantineProvider>
  </HexagonHover>,
);
