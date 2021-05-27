import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { MatchesBody } from "./MatchesBody";
import { MatchesHeader } from "./MatchesHeader";

export const MatchesWrapper = () => {
  const [selectedGame, setSelectedGame] = useState<String>("Valorant");

  return (
    <>
      <Col
        span={14}
        offset={5}
        style={{ backgroundColor: "gray", marginTop: "-30vh" }}
      >
        <MatchesHeader
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
        <MatchesBody
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      </Col>
    </>
  );
};
