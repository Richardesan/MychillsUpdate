// import React, { useState } from "react";
// import { Box, Avatar, Typography, Card, Button } from "@mui/joy";
// import abefe from "../../assets/abefe.png";
// import sanmi from "../../assets/sanmi.png";
// import teebee from "../../assets/teebee.png";
// import metoy from "../../assets/metoy.png";
// import truman from "../../assets/truman.png";
// import dayo from "../../assets/dayo.png";

// const Ambassadors: React.FC = () => {
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

//   const handleClick = (member: TeamMember) => {
//     setSelectedMember(member.id === selectedMember?.id ? null : member);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//         position: "relative",
//         marginTop: "100px", // Space between top and bottom members
//       }}
//     >
//       <Box
//         sx={{
//           border: "1px solid",
//           borderColor: "rgba(77, 79, 92, 1)",
//           borderRadius: "90px",
//           padding: "10px",
//           gap: "8px",
//           marginBottom: "100px",
//         }}
//       >
//         <Button
//           sx={{
//             color: "black",
//             backgroundColor: "white",
//             borderRadius: "100px",
//             fontFamily: "DM Sans",
//             fontWeight: "500",
//             fontSize: "20px",
//           }}
//         >
//           OUR AMBASSADORS{" "}
//         </Button>
//       </Box>

//       {/* Top 3 Members */}
//       <Box sx={{ width: "100%" }}>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             width: "60%",
//             marginBottom: "100px", // Space between top and bottom members
//           }}
//         >
//           {teamMembers.slice(0, 3).map((member, index) => (
//             <Card
//               key={member.id}
//               onClick={() => handleClick(member)}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 transition: "transform 0.3s ease, z-index 0.3s ease",
//                 position: "relative",
//                 transform:
//                   selectedMember?.id === member.id
//                     ? "translateY(0) scale(1.5)"
//                     : index % 2 === 0
//                     ? "translateY(-70px)"
//                     : "translateY(70px)",
//                 zIndex: selectedMember?.id === member.id ? 10 : 1,
//                 backgroundColor: "transparent",
//                 border: "none",
//               }}
//             >
//               <Avatar
//                 src={member.image}
//                 alt={member.name}
//                 sx={{
//                   width: "260px",
//                   height: "260px",
//                   marginBottom: "10px",
//                   border: "3px solid white",
//                 }}
//               />
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontFamily: "Syne",
//                   fontSize: "32px",
//                   fontWeight: "700",
//                   lineHeight: "60.8px",
//                 }}
//               >
//                 {member.name}
//               </Typography>
//               {selectedMember?.id === member.id && (
//                 <Box sx={{ marginTop: "10px", color: "white" }}>
//                   <Typography sx={{ color: "white" }}>
//                     {member.details}
//                   </Typography>
//                 </Box>
//               )}
//             </Card>
//           ))}
//         </Box>

//         {/* Bottom 3 Members */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-around",
//             width: "60%",
//             gap: "0px", // Reduce the gap between bottom members
//           }}
//         >
//           {teamMembers.slice(3).map((member, index) => (
//             <Card
//               key={member.id}
//               onClick={() => handleClick(member)}
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 cursor: "pointer",
//                 textAlign: "center",
//                 transition: "transform 0.3s ease, z-index 0.3s ease",
//                 position: "relative",
//                 transform:
//                   selectedMember?.id === member.id
//                     ? "translateY(0) scale(1.5)"
//                     : index % 2 === 0
//                     ? "translateY(-40px)"
//                     : "translateY(40px)",
//                 zIndex: selectedMember?.id === member.id ? 10 : 1,
//                 backgroundColor: "transparent",
//                 border: "none",
//               }}
//             >
//               <Avatar
//                 src={member.image}
//                 alt={member.name}
//                 sx={{
//                   width: "260px",
//                   height: "260px",
//                   marginBottom: "10px",
//                   border: "3px solid white",
//                 }}
//               />
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontFamily: "Syne",
//                   fontSize: "32px",
//                   fontWeight: "700",
//                   lineHeight: "60.8px",
//                 }}
//               >
//                 {member.name}
//               </Typography>
//               {selectedMember?.id === member.id && (
//                 <Box sx={{ marginTop: "10px", color: "white" }}>
//                   <Typography sx={{ color: "white" }}>
//                     {member.details}
//                   </Typography>
//                 </Box>
//               )}
//             </Card>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Ambassadors;

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
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            border: "1px solid",
            borderColor: "rgba(77, 79, 92, 1)",
            borderRadius: "90px",
            padding: "5px",
            marginBottom: "50px",
          }}
        >
          <Button
            sx={{
              width: "fit-content",
              color: "black",
              backgroundColor: "white",
              borderRadius: "100px",
              fontFamily: "DM Sans",
              fontWeight: "500",
              fontSize: { xs: "12px", md: "20px" },
              px: "10px",
              py: "0px",
            }}
          >
            OUR AMBASSADORS{" "}
          </Button>
        </Box>
      </Box>

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
          { members: teamMembers.slice(3) }, // Bottom row
        ].map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              // width: "100%",
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
          display: { xs: "none", md: "flex", lg: "none", gap: "90px" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "20px",
        }}
      >
        {[
          { members: teamMembers.slice(0, 3) }, // Top row
          { members: teamMembers.slice(3) }, // Bottom row
        ].map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: groupIndex === 0 ? "60%" : "60%",
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
          { members: teamMembers.slice(0, 3) }, // Top row
          { members: teamMembers.slice(3) }, // Bottom row
        ].map((group, groupIndex) => (
          <Box
            key={groupIndex}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: groupIndex === 0 ? "60%" : "60%",
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
