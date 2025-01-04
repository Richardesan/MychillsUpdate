import React, { useState } from "react";
import { Box, Avatar, Typography, Card, Button } from "@mui/joy";
import abefe from "../../assets/abefe.png";
import sanmi from "../../assets/sanmi.png";
import teebee from "../../assets/teebee.png";
import metoy from "../../assets/metoy.png";
import truman from "../../assets/truman.png";
import dayo from "../../assets/dayo.png";

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
];

const Ambassadors: React.FC = () => {
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
        marginTop: "100px", // Space between top and bottom members
      }}
    >
      <Box
        sx={{
          border: "1px solid",
          borderColor: "rgba(77, 79, 92, 1)",
          borderRadius: "90px",
          padding: "10px",
          gap: "8px",
          marginBottom: "100px",
        }}
      >
        <Button
          sx={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "100px",
            fontFamily: "DM Sans",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          OUR AMBASSADORS{" "}
        </Button>
      </Box>

      {/* Top 3 Members */}
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
            marginBottom: "100px", // Space between top and bottom members
          }}
        >
          {teamMembers.slice(0, 3).map((member, index) => (
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
          {teamMembers.slice(3).map((member, index) => (
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
                    ? "translateY(-40px)"
                    : "translateY(40px)",
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
    </Box>
  );
};

export default Ambassadors;
