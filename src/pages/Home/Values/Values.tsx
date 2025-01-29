// import { Box, Typography } from "@mui/joy";
// import ValueCards from "./ValuesCard";
// import inclusive from "../../../assets/inclusive.png";
// import creative from "../../../assets/creative.png";
// import innovate from "../../../assets/innovate.png";
// import collab from "../../../assets/collab.png";

// export function Values() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "19px",
//         my: "35px",
//       }}
//     >
//       <Box
//         sx={{
//           width: { xs: "85%", sm: "80%" },
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "19px",
//           marginBottom: { xs: "40px", sm: "150px" },
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             textAlign: "center",
//             gap: { xs: "12px", md: "48px" },
//           }}
//         >
//           <Typography
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               fontWeight: "700",
//               fontSize: {
//                 xs: "20px",
//                 md: "30px",
//                 lg: "40px",
//               },
//               lineHeight: {
//                 xs: "26px",
//                 sm: "34px",
//                 md: "52px",
//               },
//               color: "rgba(255, 255, 255, 1)",
//               textAlign: "center",
//               letterSpacing: "10%",
//               fontFamily: "Syne",
//             }}
//           >
//             CORE VALUES
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "19px",
//             filter: "drop-shadow(-1px 10px 150px rgba(101, 171, 162, 1))",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               display: "flex",
//               flexDirection: {
//                 xs: "column",
//                 sm: "row",
//                 md: "row",
//                 lg: "row",
//                 xl: "row",
//               },
//               justifyContent: "center",
//               alignItems: "center",
//               gap: { xs: "19px", sm: "29px", md: "60px", lg: "100px" },
//             }}
//           >
//             <ValueCards
//               title="Inclusivity"
//               message="We embrace every voice, perspective, experience, and background; ensuring that we are not just adapting to the changes in web3 and the blockchain; we are actively shaping them impactfully."
//               image={inclusive}
//             />
//             <ValueCards
//               title="Collaboration"
//               message="We believe that the greatest innovations and solutions come from working together, pooling ideas and talents, sharing knowledge, and leveraging the diverse strengths of our members."
//               image={collab}
//             />
//           </Box>
//           <Box
//             sx={{
//               width: "100%",
//               display: "flex",
//               flexDirection: {
//                 xs: "column",
//                 sm: "row",
//                 md: "row",
//                 lg: "row",
//                 xl: "row",
//               },
//               justifyContent: "center",
//               alignItems: "center",
//               gap: { xs: "19px", sm: "29px", md: "60px", lg: "100px" },
//             }}
//           >
//             <ValueCards
//               title="Innovation"
//               message="Innovation is the driving force behind our community. We embrace new ideas, technologies and creative problem-solving, knowing that the future belongs to those who think and act differently."
//               image={innovate}
//             />
//             <ValueCards
//               title="Creativity"
//               message="Our community is a haven for those who dare to think outside the box, and express themselves uniquely. Regardless of the niche, we encourage you to explore the full extent of your imagination."
//               image={creative}
//             />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// {
//   /* border: 1px solid;

// border-image-source: linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%); */
// }
import { Box, Typography } from "@mui/joy";
import ValueCard from "./ValuesCard"; // Corrected name for clarity
import inclusive from "../../../assets/inclusive.png";
import creative from "../../../assets/creative.png";
import innovate from "../../../assets/innovate.png";
import collab from "../../../assets/collab.png";

const valuesData = [
  {
    title: "Inclusivity",
    message:
      "We embrace every voice, perspective, experience, and background; ensuring that we are not just adapting to the changes in web3 and the blockchain; we are actively shaping them impactfully.",
    image: inclusive,
  },
  {
    title: "Collaboration",
    message:
      "We believe that the greatest innovations and solutions come from working together, pooling ideas and talents, sharing knowledge, and leveraging the diverse strengths of our members.",
    image: collab,
  },
  {
    title: "Innovation",
    message:
      "Innovation is the driving force behind our community. We embrace new ideas, technologies, and creative problem-solving, knowing that the future belongs to those who think and act differently.",
    image: innovate,
  },
  {
    title: "Creativity",
    message:
      "Our community is a haven for those who dare to think outside the box and express themselves uniquely. Regardless of the niche, we encourage you to explore the full extent of your imagination.",
    image: creative,
  },
];

export function Values() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "19px",
        my: { xs: "45px", md: "100px" },
      }}
    >
      {/* Title Section */}
      <Box
        sx={{
          width: { xs: "85%", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: { xs: "12px", md: "48px" },
          // marginBottom: { xs: "10px", sm: "40px" },
          // marginTop: { xs: "40px", sm: "40px", lg: "70px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: "20px", md: "30px", lg: "40px" },
            lineHeight: { xs: "26px", sm: "34px", md: "52px" },
            color: "rgba(255, 255, 255, 1)",
            letterSpacing: "10%",
            fontFamily: "Syne",
          }}
        >
          CORE VALUES
        </Typography>
      </Box>

      {/* Cards Container */}
      <Box
        sx={{
          display: "grid",
          width: { xs: "85%", sm: "80%" },
          maxWidth: "1200px",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // 1 card per row on mobile, 2 per row on bigger screens
          gap: { xs: "19px", sm: "29px", md: "60px", lg: "100px" },
          justifyContent: "center",
        }}
      >
        {valuesData.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            message={value.message}
            image={value.image}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Values;
