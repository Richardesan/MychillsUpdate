// import { AccordionGroup, Box, accordionSummaryClasses } from "@mui/joy";
// import AccordionIndicator from "../../../UI/Accordion/Accordion";
// import Typography from "@mui/joy/Typography";
// import logo from "../../../assets/bgIogo.png";

// const faq = [
//   {
//     question: "What is The Chills Room about ?",
//     answer:
//       "The Chills Room is a member-driven community with a strong focus on education and personal growth. Our members come from various sectors within the Web3 space, with an emphasis on NFTs, Web3 gaming, and other niche. Our mission is to expand the awareness of these emerging fields within our geographical region while enhancing the financial success of our members by helping them turn their skills into profitable ventures.",
//   },
//   {
//     question: "⁠How to become a member of the community ?",
//     answer:
//       " Joining our community is by invite only. Look out for the application link on the Admin account on X; apply, and if you are accepted, you will get an invite link from Abefe or Sanmi only.",
//   },

//   {
//     question: "What benefits do I get from being part of this community ?",
//     answer:
//       " Being a member of The Chills Room gives you access to a spectrum of benefits designed to help you grow, create, and connect. You'll have the opportunity to network with like-minded creators, gamers, and Web3 enthusiasts, collaborate on innovative projects. Also, members enjoy exclusive access to resources, educational content, and events such as workshops, NFT whitelists, and other exclusive partner communities. Being part of our community also means you're contributing to and shaping the future of web3 in a supportive, inclusive environment.",
//   },

//   {
//     question: "How to Partner/Collaborate with Us ?",
//     answer:
//       "We welcome partnerships and collaborations with project founders, community leaders, and collaboration managers who are interested in working with The Chills Room. To initiate a discussion, please reach out via mail, or directly message our community page or the Founder’s X account.",
//   },

//   {
//     question: "⁠How to join our Gamers & Content Creator Clique ? ",
//     answer:
//       " Currently, the only way to become a part of our Gamers Clique is by applying “here(link)”. Upon submission, candidates will undergo a one-on-one interview with both the Gamers Captain and Content Head before receiving the role.",
//   },

//   {
//     question: "What is The Chills Room Soul-bound Token (SBT) ?",
//     answer:
//       "The Chills Room Soul-Bound Token (SBT) serves as a unique membership badge, rewarding loyal and engaged members within our community. This non-transferable token grants exclusive access to the perks and benefits associated with the Chills Room, symbolizing a member's dedication and involvement.",
//   },
// ];

// const FAQ = () => {
//   return (
//     <Box
//       id="faq"
//       sx={{
//         display: "flex",
//         width: "100%",
//         my: { xs: "10px", sm: "80px" },
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         position: "relative",
//       }}
//     >
//       {/* Overlay Image */}
//       <Box
//         component="img"
//         src={logo}
//         alt="Overlay"
//         sx={{
//           position: "absolute", // Position the image absolutely within the parent
//           top: "50%", // Adjust positioning as needed
//           left: "50%",
//           transform: "translate(-50%, -50%)", // Center the image
//           zIndex: 1, // Ensure it's above the background but below the text
//           width: { xs: "80%", md: "60%" }, // Responsive sizing
//           opacity: 0.2, // Optional: Adjust the opacity for a subtle effect
//           // paddingTop: "10px",
//         }}
//       />

//       <Box
//         sx={{
//           width: { xs: "90%", md: "70%" },
//           display: "flex",
//           flexDirection: "column",
//           gap: {xs:'30px', md:"60px"},
//           zIndex: 2,
//           position: "relative",
//         }}
//       >
//         <Box
//           sx={{
//             // color: "white",

//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "8px",
//           }}
//         >
//           <Typography
//             sx={{
//               color: "rgba(250, 250, 250, 1)",
//               fontFamily: "DM Sans",
//               fontWeight: "700",
//               fontSize: {
//                 xs: "28px",
//                 sm: "40px",
//                 md: "50px",
//               },
//               lineHeight: {
//                 xs: "37px",
//                 md: "65.1px",
//               },
//               letterSpacing: "0.2rem",
//             }}
//           >
//             FAQ
//           </Typography>
//           <Typography
//             sx={{
//               color: "rgba(255, 255, 255, 1)",
//               fontFamily: "DM Sans",
//               fontWeight: {
//                 xs: "300",
//                 sm: "400",
//                 md: "500",
//               },
//               fontSize: {
//                 xs: "12px",
//                 sm: "14px",
//                 md: "24px",
//               },
//               lineHeight: {
//                 xs: "26px",
//                 sm: "22px",
//                 md: "26px",
//               },
//               letterSpacing: "0.2rem",
//             }}
//           >
//             Got Questions? We’ve got answers
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             marginBottom: "20px",
//           }}
//         >
//           <AccordionGroup
//             disableDivider
//             sx={{
//               gap: {md:"24px"},
//               [`& .${accordionSummaryClasses.indicator}`]: {
//                 transition: "0.2s",
//                 border: "1px solid",
//                 borderRadius: "24px",
//                 backgroundColor: "rgba(101, 175, 186, 1)",
//               },

//               [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]:
//                 {
//                   transform: "rotate(180deg)",
//                   border: "1px solid",
//                   borderRadius: "24px",
//                   backgroundColor: "rgba(101, 175, 186, 1)",
//                 },
//               [`& .${accordionSummaryClasses.button}`]: {
//                 paddingBlock: "0.5rem",

//                 "&:hover": {
//                   backgroundColor: "transparent !important",
//                   textDecoration: "none",
//                 },
//               },
//             }}
//           >
//             {faq.map((item) => (
//               <AccordionIndicator
//                 key={item.question}
//                 question={item.question}
//                 answer={item.answer}
//               />
//             ))}
//           </AccordionGroup>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default FAQ;

import { AccordionGroup, Box, accordionSummaryClasses } from "@mui/joy";
import AccordionIndicator from "../../../UI/Accordion/Accordion";
import Typography from "@mui/joy/Typography";
import logo from "../../../assets/bgIogo.png";

const faq = [
  {
    question: "What is The Chills Room about ?",
    answer:
      "The Chills Room is a member-driven community with a strong focus on education and personal growth. Our members come from various sectors within the Web3 space, with an emphasis on NFTs, Web3 gaming, and other niche. Our mission is to expand the awareness of these emerging fields within our geographical region while enhancing the financial success of our members by helping them turn their skills into profitable ventures.",
  },
  {
    question: "⁠How to become a member of the community ?",
    answer:
      "Joining our community is by invite only. Look out for the application link on the Admin account on X; apply, and if you are accepted, you will get an invite link from Abefe or Sanmi only.",
  },
  {
    question: "What benefits do I get from being part of this community ?",
    answer:
      "Being a member of The Chills Room gives you access to a spectrum of benefits designed to help you grow, create, and connect. You'll have the opportunity to network with like-minded creators, gamers, and Web3 enthusiasts, collaborate on innovative projects. Also, members enjoy exclusive access to resources, educational content, and events such as workshops, NFT whitelists, and other exclusive partner communities. Being part of our community also means you're contributing to and shaping the future of web3 in a supportive, inclusive environment.",
  },
  {
    question: "How to Partner/Collaborate with Us ?",
    answer:
      "We welcome partnerships and collaborations with project founders, community leaders, and collaboration managers who are interested in working with The Chills Room. To initiate a discussion, please reach out via mail, or directly message our community page or the Founder’s X account.",
  },
  {
    question: "⁠How to join our Gamers & Content Creator Clique ?",
    answer:
      "Currently, the only way to become a part of our Gamers Clique is by applying “here(link)”. Upon submission, candidates will undergo a one-on-one interview with both the Gamers Captain and Content Head before receiving the role.",
  },
  {
    question: "What is The Chills Room Soul-bound Token (SBT) ?",
    answer:
      "The Chills Room Soul-Bound Token (SBT) serves as a unique membership badge, rewarding loyal and engaged members within our community. This non-transferable token grants exclusive access to the perks and benefits associated with the Chills Room, symbolizing a member's dedication and involvement.",
  },
];

// Reusable styles
const titleStyles = {
  color: "rgba(250, 250, 250, 1)",
  fontFamily: "DM Sans",
  fontWeight: "700",
  fontSize: { xs: "28px", sm: "40px", md: "50px" },
  lineHeight: { xs: "37px", md: "65.1px" },
  letterSpacing: "0.2rem",
};

const subtitleStyles = {
  color: "rgba(255, 255, 255, 1)",
  fontFamily: "DM Sans",
  fontWeight: { xs: "300", sm: "400", md: "500" },
  fontSize: { xs: "12px", sm: "14px", md: "24px" },
  lineHeight: { xs: "26px", sm: "22px", md: "26px" },
  letterSpacing: "0.2rem",
};

const faqContainerStyles = {
  width: { xs: "90%", md: "70%" },
  minWidth: "320px",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  gap: { xs: "30px", md: "60px" },
  zIndex: 2,
  position: "relative",
};

const FAQ = () => {
  return (
    <Box
      id="faq"
      sx={{
        display: "flex",
        width: "100%",
        my: { xs: "10px", sm: "80px" },
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Overlay Image */}
      <Box
        component="img"
        src={logo}
        alt="Overlay"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          width: { xs: "80%", md: "60%" },
          opacity: 0.2,
        }}
      />

      <Box sx={faqContainerStyles}>
        {/* Title Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography sx={titleStyles}>FAQ</Typography>
          <Typography sx={subtitleStyles}>
            Got Questions? We’ve got answers
          </Typography>
        </Box>

        {/* Accordion Section */}
        <Box sx={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
          <AccordionGroup
            disableDivider
            sx={{
              gap: { md: "24px" },
              [`& .${accordionSummaryClasses.indicator}`]: {
                transition: "0.2s",
                border: "1px solid",
                borderRadius: "24px",
                backgroundColor: "rgba(101, 175, 186, 1)",
              },
              [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                transform: "rotate(180deg)",
                border: "1px solid",
                borderRadius: "24px",
                backgroundColor: "rgba(101, 175, 186, 1)",
              },
              [`& .${accordionSummaryClasses.button}`]: {
                paddingBlock: "0.5rem",
                "&:hover": {
                  backgroundColor: "transparent !important",
                  textDecoration: "none",
                },
              },
            }}
          >
            {faq.map((item) => (
              <AccordionIndicator
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </AccordionGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
