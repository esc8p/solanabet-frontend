import { Menu, Dropdown, Button } from "antd";
import React from "react";

interface MatchesDropdownProps {
  setSelectedGame: React.Dispatch<React.SetStateAction<String>>;
}
export const MatchesDropdown = ({ setSelectedGame }: MatchesDropdownProps) => {
  const SetGame = (chosenGame: string) => {
    setSelectedGame(chosenGame);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <h3
          style={{ textAlign: "center", margin: 0 }}
          onClick={() => SetGame(`Valorant`)}
        >
          Valorant
        </h3>
      </Menu.Item>
      <Menu.Item>
        <h3
          style={{ textAlign: "center", margin: 0 }}
          onClick={() => SetGame(`CSGO`)}
        >
          CSGO
        </h3>
      </Menu.Item>
      <Menu.Item>
        <h3
          style={{ textAlign: "center", margin: 0 }}
          onClick={() => SetGame(`League Of Legends`)}
        >
          LoL
        </h3>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} placement="bottomCenter" arrow>
        <Button style={{ color: "white", borderColor: "white" }}>
          Select Game
        </Button>
      </Dropdown>
    </>
  );
};
