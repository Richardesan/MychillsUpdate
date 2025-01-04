import React, { useState } from "react";
import { Box, Avatar, Typography, Card } from "@mui/joy";
import ifeoluwa from "../../assets/ifeoluwa.png";
import heema from "../../assets/heema.png";
import tmama from "../../assets/tmama.png";
import sanctus from "../../assets/sanctus.png";
import basedbro from "../../assets/basedbro.png";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  details: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "IFEOLUWA",
    image: ifeoluwa,
    details: "Ifeoluwa is a frontend developer.",
  },
  {
    id: 2,
    name: "HEEMA",
    image: heema,
    details: "Heema is a backend developer.",
  },
  {
    id: 3,
    name: "TMAMA",
    image: tmama,
    details: "TMama is a UX designer.",
  },
  {
    id: 4,
    name: "SANCTUS",
    image: sanctus,
    details: "Sanctus is a project manager.",
  },
  {
    id: 5,
    name: "BASEDBRO",
    image: basedbro,
    details: "BasedBro is a QA engineer.",
  },
];

const SupportTeam: React.FC = () => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "100px", // Space between top and bottom members
        }}
      >
        {teamMembers.map((member, index) => (
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
    </Box>
  );
};

export default SupportTeam;
