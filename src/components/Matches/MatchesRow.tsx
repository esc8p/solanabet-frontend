import React, { useEffect, useState } from "react";
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from "antd";

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

export const MatchesRow = ({
  tournamentTitle,
  matchID,
  teamOne,
  teamOneOdds,
  teamOneImageURL,
  teamTwo,
  teamTwoOdds,
  teamTwoImageURL,
  matchStart,
}: TeamProps) => {
  const [matchStartTime, setMatchStartTime] = useState<string | null>(null);
  const GetTimeUntilMatch = (): void => {
    setMatchStartTime(matchStart.toString());
  };
  useEffect(GetTimeUntilMatch, []);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        marginTop: "1vh",
        height: "25vh",
        paddingTop: 0,
        borderRadius: 10,
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .ant-page-header-heading-sub-title {
                color: white;
                margin-top: 0.35vh;
                float: right;
            }
            `,
        }}
      />
      <PageHeader
        className="site-page-header"
        // onBack={() => window.history.back()}
        title={tournamentTitle}
        style={{
          fontSize: 10,
          maxHeight: 20,
          paddingTop: "0.5vh",
        }}
      >
        <h2 style={{ marginTop: "-2.5vh", paddingTop: 0 }}>
          Time Until Match: {matchStartTime}
        </h2>
        <Descriptions size="small" column={2} style={{ marginTop: "-1vh" }}>
          <Descriptions.Item>
            <h1 style={{ fontSize: 18, marginBottom: "1vh" }}>{teamOne}</h1>
            <img
              src={teamOneImageURL}
              alt={teamOne}
              style={{ maxWidth: 52, maxHeight: 52 }}
            />
            <h1 style={{ fontSize: 18, marginTop: "1vh" }}>
              Current Odds: {teamOneOdds}
            </h1>
            <Button key="3">Bet {teamOne}</Button>
          </Descriptions.Item>
          <Descriptions.Item>
            <h1 style={{ fontSize: 18, marginBottom: "1vh" }}>{teamTwo}</h1>
            <img
              src={teamTwoImageURL}
              alt={teamOne}
              style={{ maxWidth: 52, maxHeight: 52 }}
            />
            <h1 style={{ fontSize: 18, marginTop: "1vh" }}>
              Current Odds: {teamTwoOdds}
            </h1>
            <Button key="3">Bet {teamTwo}</Button>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
};
