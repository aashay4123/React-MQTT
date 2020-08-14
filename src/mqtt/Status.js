import React from "react";
import { useSubscription } from "mqtt-react-hooks";

const Status = () => {
  /*
   * Status list
   * - offline
   * - connected
   * - reconnecting
   * - closed
   */
  const {
    msgs,
    status,
    mqtt,
    lastMessageOnTopic,
    lastMessage,
    topic,
  } = useSubscription("light/+/rele2");

  const handleClick = (message) => {
    mqtt.publish("light/esp33/rele2", message);
  };
  return (
    <>
      <span>
        {`last message on mqtt: `}
        <strong>{JSON.stringify(lastMessage?.message)}</strong> topic:
        <strong> {lastMessage?.topic}</strong>
      </span>
      <h1>{`Status: ${status}; Host: ${mqtt?.options.host}; Protocol: ${mqtt?.options.protocol}; Topic: ${topic} `}</h1>
      <h2>{`last message on topic ${topic}: ${JSON.stringify(
        lastMessageOnTopic?.message
      )}`}</h2>
      <div style={{ display: "flex" }}>
        <button type="button" onClick={() => handleClick("enable")}>
          Disable led
        </button>
        <button type="button" onClick={() => handleClick("disable")}>
          Enable led
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {msgs?.map((message) => (
          <span key={message.id}>
            {`topic:${message.topic} - message: ${JSON.stringify(
              message.message
            )}`}
          </span>
        ))}
      </div>
    </>
  );
};
export default Status;
