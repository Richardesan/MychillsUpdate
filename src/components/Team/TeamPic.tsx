import React, { useState } from "react";
import { Box, Avatar, Typography, Card } from "@mui/joy";
import abefe from "../../assets/abefe.png";
import sanmi from "../../assets/sanmi.png";
import teebee from "../../assets/teebee.png";
import metoy from "../../assets/metoy.png";
import truman from "../../assets/truman.png";
import dayo from "../../assets/dayo.png";
import bigtee from "../../assets/bigtee.png";
import babyboy from "../../assets/babyboy.png";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  details: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "DAYO",
    image: dayo,
    details: "Dayo is a frontend developer.",
  },
  {
    id: 2,
    name: "ABEFE",
    image: abefe,
    details: "Abefe is a backend developer.",
  },
  {
    id: 3,
    name: "TEEBEE",
    image: teebee,
    details: "Teebee is a UX designer.",
  },
  {
    id: 4,
    name: "SANMI",
    image: sanmi,
    details: "Sanmi is a project manager.",
  },
  {
    id: 5,
    name: "TRUMAN",
    image: truman,
    details: "Truman is a QA engineer.",
  },
  {
    id: 6,
    name: "METOY",
    image: metoy,
    details: "Metoy is a DevOps engineer.",
  },
  {
    id: 7,
    name: "BIGTEE",
    image: bigtee,
    details: "BigTee is a full-stack developer.",
  },
  {
    id: 8,
    name: "BABYBOY",
    image: babyboy,
    details: "BabyBoy is a data scientist.",
  },
];

const TeamPics: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleClick = (member: TeamMember) => {
    setSelectedMember(member.id === selectedMember?.id ? null : member);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Top 5 Members */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "100px", // Space between top and bottom members
        }}
      >
        {teamMembers.slice(0, 5).map((member, index) => (
          <Card
            key={member.id}
            onClick={() => handleClick(member)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.3s ease, z-index 0.3s ease",
              position: "relative",
              transform:
                selectedMember?.id === member.id
                  ? "translateY(0) scale(1.5)"
                  : index % 2 === 0
                  ? "translateY(70px)"
                  : "translateY(-70px)",
              zIndex: selectedMember?.id === member.id ? 10 : 1,
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{
                width: "260px",
                height: "260px",
                marginBottom: "10px",
                border: "3px solid white",
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Syne",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "60.8px",
              }}
            >
              {member.name}
            </Typography>
            {selectedMember?.id === member.id && (
              <Box sx={{ marginTop: "10px", color: "white" }}>
                <Typography sx={{ color: "white" }}>
                  {member.details}
                </Typography>
              </Box>
            )}
          </Card>
        ))}
      </Box>

      {/* Bottom 3 Members */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
          gap: "0px", // Reduce the gap between bottom members
        }}
      >
        {teamMembers.slice(5).map((member, index) => (
          <Card
            key={member.id}
            onClick={() => handleClick(member)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.3s ease, z-index 0.3s ease",
              position: "relative",
              transform:
                selectedMember?.id === member.id
                  ? "translateY(0) scale(1.5)"
                  : index % 2 === 0
                  ? "translateY(-70px)"
                  : "translateY(70px)",
              zIndex: selectedMember?.id === member.id ? 10 : 1,
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <Avatar
              src={member.image}
              alt={member.name}
              sx={{
                width: "260px",
                height: "260px",
                marginBottom: "10px",
                border: "3px solid white",
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontFamily: "Syne",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "60.8px",
              }}
            >
              {member.name}
            </Typography>
            {selectedMember?.id === member.id && (
              <Box sx={{ marginTop: "10px", color: "white" }}>
                <Typography>{member.details}</Typography>
              </Box>
            )}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamPics;
