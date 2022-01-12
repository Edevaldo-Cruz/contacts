import React from "react";

import Routes from "./src/router";

import { LogBox } from "react-native";

// Ignore log notification by message:
LogBox.ignoreLogs(["Warning: ..."]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export default function App() {
  return <Routes />;
}
