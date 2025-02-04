import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement);

root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
);
