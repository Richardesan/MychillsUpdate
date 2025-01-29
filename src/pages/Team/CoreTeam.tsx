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
    name: "SANMI",
    image: sanmi,
    details: "Sanmi is a project manager.",
  },
  {
    id: 2,
    name: "ABEFE",
    image: abefe,
    details: "Abefe is a backend developer.",
  },
  { id: 3, name: "TEEBEE", image: teebee, details: "Teebee is a UX designer." },
  {
    id: 4,
    name: "DAYO",
    image: dayo,
    details: "Dayo is a frontend developer.",
  },
  { id: 5, name: "TRUMAN", image: truman, details: "Truman is a QA engineer." },
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

const CoreTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleClick = (member: TeamMember) => {
    setSelectedMember(selectedMember?.id === member.id ? null : member);
  };

  // Reusable styles
  const avatarSize = { xs: "92px", md: "160px", lg: "260px" };
  const nameFontSize = { xs: "12px", md: "22px", lg: "32px" };
  const detailFontSize = { xs: "12px", md: "16px" };
  const transformScale = "scale(1.5)";

  // Function to apply alternating offsets for all members in a row

  // for sm
  const getOffset = (index: number, totalMembers: number) => {
    if (totalMembers === 1 || totalMembers === 2) return "0px"; // No offset for 1 or 2 members
    return index % 2 === 0 ? "-30px" : "30px"; // Alternating offsets for 3+ members
  };

  // for md
  const getOffsetMid = (index: number, totalMembers: number) => {
    if (totalMembers === 1 || totalMembers === 2) return "0px"; // No offset for 1 or 2 members
    return index % 2 === 0 ? "50px" : "-50px"; // Alternating offsets for 3+ members
  };

  // for lg
  const getOffsetLarge = (index: number, totalMembers: number) => {
    if (totalMembers === 1 || totalMembers === 2) return "0px"; // No offset for 1 or 2 members
    return index % 2 === 0 ? "70px" : "-70px"; // Alternating offsets for 3+ members
  };

  return (
    <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      {/* XS & SM Layout */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {[
          { members: teamMembers.slice(0, 3) }, // Top row
          { members: teamMembers.slice(3, 5) }, // Middle row
          { members: teamMembers.slice(5) }, // Bottom row
        ].map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              mb: "30px",
            }}
          >
            {group.members.map((member, index) => (
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
                  transform:
                    selectedMember?.id === member.id
                      ? `translateY(0) ${transformScale}`
                      : `translateY(${getOffset(index, group.members.length)})`,
                  zIndex: selectedMember?.id === member.id ? 10 : 1,
                  backgroundColor: "transparent",
                  border: "none",
                  px: "1rem",
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: avatarSize.xs, height: avatarSize.xs }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Syne",
                    fontSize: nameFontSize.xs,
                    fontWeight: "700",
                    mt: 1,
                  }}
                >
                  {member.name}
                </Typography>
                {selectedMember?.id === member.id && (
                  <Box sx={{ mt: "10px", color: "white" }}>
                    <Typography
                      sx={{ color: "white", fontSize: detailFontSize.xs }}
                    >
                      {member.details}
                    </Typography>
                  </Box>
                )}
              </Card>
            ))}
          </Box>
        ))}
      </Box>

      {/* MD+ Layout */}
      <Box
        sx={{
          display: { xs: "none", md: "flex", lg:"none", gap: "90px" },
          flexDirection: "column",
          alignItems: "center",
          p: "20px",
        }}
      >
        {[
          { members: teamMembers.slice(0, 5) }, // Top row
          { members: teamMembers.slice(5) }, // Bottom row
        ].map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: groupIndex === 0 ? "100%" : "60%",
            }}
          >
            {group.members.map((member, index) => (
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
                  transform:
                    selectedMember?.id === member.id
                      ? `translateY(0) ${transformScale}`
                      : `translateY(${getOffsetMid(
                          index,
                          group.members.length
                        )})`,
                  zIndex: selectedMember?.id === member.id ? 10 : 1,
                  backgroundColor: "transparent",
                  border: "none",
                  px: 0,
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: avatarSize.md,
                    height: avatarSize.md,
                    mb: "10px",
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Syne",
                    fontSize: nameFontSize.md,
                    fontWeight: "700",
                    lineHeight: "60.8px",
                  }}
                >
                  {member.name}
                </Typography>
                {selectedMember?.id === member.id && (
                  <Box sx={{ mt: "10px", color: "white" }}>
                    <Typography
                      sx={{ color: "white", fontSize: detailFontSize.md }}
                    >
                      {member.details}
                    </Typography>
                  </Box>
                )}
              </Card>
            ))}
          </Box>
        ))}
      </Box>

       {/* LG+ Layout */}
       <Box
        sx={{
          display: { xs: "none", lg: "flex", gap: "90px" },
          flexDirection: "column",
          alignItems: "center",
          p: "20px",
        }}
      >
        {[
          { members: teamMembers.slice(0, 5) }, // Top row
          { members: teamMembers.slice(5) }, // Bottom row
        ].map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: groupIndex === 0 ? "100%" : "60%",
              mb: "100px",
            }}
          >
            {group.members.map((member, index) => (
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
                  transform:
                    selectedMember?.id === member.id
                      ? `translateY(0) ${transformScale}`
                      : `translateY(${getOffsetLarge(
                          index,
                          group.members.length
                        )})`,
                  zIndex: selectedMember?.id === member.id ? 10 : 1,
                  backgroundColor: "transparent",
                  border: "none",
                  px: 0,
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: avatarSize.lg,
                    height: avatarSize.lg,
                    mb: "10px",
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Syne",
                    fontSize: nameFontSize.lg,
                    fontWeight: "700",
                    lineHeight: "60.8px",
                  }}
                >
                  {member.name}
                </Typography>
                {selectedMember?.id === member.id && (
                  <Box sx={{ mt: "10px", color: "white" }}>
                    <Typography
                      sx={{ color: "white", fontSize: detailFontSize.md }}
                    >
                      {member.details}
                    </Typography>
                  </Box>
                )}
              </Card>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CoreTeam;
