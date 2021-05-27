import React, { useEffect, useState } from "react";
import { MatchesRow } from "./MatchesRow";
import axios from "axios";
interface MatchesBodyProps {
  setSelectedGame: React.Dispatch<React.SetStateAction<String>>;
  selectedGame: String;
}

interface TeamProps {
  tournamentTitle: string;
  matchID: number;
  teamOne: string;
  teamOneOdds: number;
  teamOneImageURL: string | undefined;
  teamTwo: string;
  teamTwoOdds: number;
  teamTwoImageURL: string | undefined;
  matchStart: number;
}

export const MatchesBody = ({
  setSelectedGame,
  selectedGame,
}: MatchesBodyProps) => {
  const [teamProps, setTeamProps] = useState<TeamProps | null>(null);
  const [displayMatches, setDisplayMatches] = useState<JSX.Element[]>();
  const [matchesJSON, setMatchesJSON] = useState<TeamProps[]>();

  useEffect(() => {
    const GetMatches = async () => {
      const matchesRes = await axios.get(
        "http://localhost:3333/getvalorantmatches",
        { headers: { "Content-Type": "application/json" } }
      );
      setMatchesJSON(matchesRes.data);
    };
    GetMatches();
    console.log("profiles re-rendered");
  }, []);

  useEffect(() => {
    try {
      console.log("here reredner profiles");

      // const matchesJSON: TeamProps[] = [
      //   {
      //     tournamentTitle: "Tournament",
      //     matchID: 3232322,
      //     teamOne: "Team One",
      //     teamOneOdds: 3.22,
      //     teamOneImageURL:
      //       "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      //     teamTwo: "Team Two",
      //     teamTwoOdds: 1.5,
      //     teamTwoImageURL:
      //       "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      //     matchStart: Date.now(),
      //   },
      //   {
      //     tournamentTitle: "Tournament",
      //     matchID: 3232322,
      //     teamOne: "Team One",
      //     teamOneOdds: 3.22,
      //     teamOneImageURL:
      //       "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      //     teamTwo: "Team Two",
      //     teamTwoOdds: 1.5,
      //     teamTwoImageURL:
      //       "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      //     matchStart: Date.now(),
      //   },
      // ];
      if (matchesJSON) {
        const res: JSX.Element[] = matchesJSON.map(
          (
            {
              tournamentTitle,
              matchID,
              teamOne,
              teamOneOdds,
              teamOneImageURL,
              teamTwo,
              teamTwoOdds,
              teamTwoImageURL,
              matchStart,
            }: TeamProps,
            index: number
          ) => {
            return (
              <MatchesRow
                tournamentTitle={tournamentTitle}
                matchID={matchID}
                teamOne={teamOne}
                teamOneOdds={teamOneOdds}
                teamOneImageURL={teamOneImageURL}
                teamTwo={teamTwo}
                teamTwoOdds={teamTwoOdds}
                teamTwoImageURL={teamTwoImageURL}
                matchStart={matchStart}
              />
            );
          }
        );
        setDisplayMatches(res);
      }
    } catch (error) {
      console.log("delete your tasks err", error);
    }
  }, [matchesJSON]);
  return <div style={{ marginTop: "5vh" }}>{displayMatches}</div>;
};
