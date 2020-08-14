import React from "react";
import { Connector } from "mqtt-react-hooks";
import Status from "./Status";

export default function Main() {
  return (
    <Connector brokerUrl="mqtt://test.mosquitto.org:8080">
      <Status />
    </Connector>
  );
}
