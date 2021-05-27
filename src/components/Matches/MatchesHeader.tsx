import React from "react";
import { MatchesDropdown } from "./MatchesDropdown";

interface MatchesDropdownProps {
  setSelectedGame: React.Dispatch<React.SetStateAction<String>>;
  selectedGame: String;
}
export const MatchesHeader = ({
  setSelectedGame,
  selectedGame,
}: MatchesDropdownProps) => {
  return (
    <div
      style={{ width: "100%", position: "relative", paddingBottom: "4vh" }}
    >
      <div style={{ float: "left", marginLeft: "1vw", marginTop: "0.5vh" }}>
        <MatchesDropdown setSelectedGame={setSelectedGame} />
      </div>
      {selectedGame === "League Of Legends" ? (
        <div style={{ left: "38%", position: "absolute" }}>
          <h2 style={{ marginTop: -5 }}>Showing: {selectedGame}</h2>
        </div>
      ) : (
        <div style={{ left: "42%", position: "absolute" }}>
          <h2 style={{ marginTop: -5 }}>Showing: {selectedGame}</h2>
        </div>
      )}
    </div>
  );
};
