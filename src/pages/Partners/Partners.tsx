import { Box, Typography } from "@mui/joy";
import Buttons from "../../UI/Button/Buttons";
import Ambassadors from "./Ambassadors";
import PartnerLogo from "./PartnerLogo";

// Import Partner Images
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import Ellipse3 from "../../assets/Ellipse3.png";
import Ellipse4 from "../../assets/Ellipse4.png";
import Ellipse5 from "../../assets/Ellipse5.png";
import Ellipse6 from "../../assets/Ellipse6.png";
import Ellipse7 from "../../assets/Ellipse7.png";
import Ellipse8 from "../../assets/Ellipse8.png";
import Ellipse9 from "../../assets/Ellipse9.png";
import OtherPartners from "./OtherPartners";
import FAQ from "../Home/FAQ/FAQ";

// Partner images array
const partnerImages = [
  Ellipse1,
  Ellipse2,
  Ellipse3,
  Ellipse4,
  Ellipse5,
  Ellipse6,
  Ellipse7,
  Ellipse8,
  Ellipse9,
];

// Reusable text styles
const textStyles = {
  color: "rgba(255, 255, 255, 1)",
  fontSize: { xs: "12px", sm: "14px", md: "20px" },
  lineHeight: { xs: "17.76px", sm: "30px", md: "36.2px" },
  fontWeight: "200",
  letterSpacing: "2px",
  fontFamily: "DM Sans",
  textAlign: "center",
};

const Partners = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "12px", md: 4 },
          py: { xs: "20px", sm: "100px" },
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: { xs: "24px", sm: "36px", md: "48px" },
            lineHeight: { xs: "42px", sm: "66px", md: "85.4px" },
            color: "rgba(255, 255, 255, 1)",
            letterSpacing: "10%",
            fontFamily: "Kumar One",
            textAlign: "center",
          }}
        >
          OUR NETWORK OF PARTNERS
        </Typography>

        {/* Content Section */}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "1500px",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: { md: 8 },
            marginBottom: { xs: "20px", sm: "0px" },
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              width: { xs: "80%", sm: "60%" },
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px" },
            }}
          >
            <Typography sx={textStyles}>
              Our partnerships are the foundation of our thriving community. By
              partnering with leading companies and ventures, we're fostering
              innovation, driving growth, and creating new opportunities for all
              parties.
            </Typography>
            <Typography sx={textStyles}>
              Together, we're building a more engaging and inclusive future for
              Web3. Our partners share our commitment to empowering creators,
              gamers, and other creatives. Through our partnerships, we're able
              to leverage each other's strengths and resources to achieve our
              shared goals.
            </Typography>
            <Typography sx={textStyles}>
              We're proud to be associated with such amazing companies and
              projects. By partnering with us, you're joining a dynamic and
              innovative community that is shaping the future of Web3.
            </Typography>
          </Box>

          {/* Partners Grid */}
          <Box
            sx={{
              width: { xs: "20%", sm: "40%" },
              // maxWidth: "400px",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              }, // 1 per row (xs), 2 per row (sm), 3 per row (md+)
              gap: { xs: "5px", sm: "25px", md: "60px" },
              justifyItems: "center",
            }}
          >
            {partnerImages.map((img, index) => (
              <PartnerLogo key={index} imgSrc={img} />
            ))}
          </Box>
        </Box>

        {/* Call to Action Button */}
        <Buttons
          text="Get in Touch"
          background="rgba(101, 175, 186, 1)"
          borderColor="transparent"
        />
      </Box>

      <OtherPartners />

      <Ambassadors />
      <FAQ />
    </Box>
  );
};

export default Partners;

// const Partners = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: "90%",
//           maxWidth: "1200px", // Prevents excessive scaling on large screens
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: { xs: "12px", md: 4 },
//           py: { xs: "20px", sm: "100px" },
//         }}
//       >
//         {/* Title */}
//         <Typography
//           sx={{
//             fontWeight: "400",
//             fontSize: { xs: "24px", sm: "36px", md: "48px", lg: "48px" }, // Doesn't increase after md
//             lineHeight: { xs: "42px", sm: "66px", md: "75px" }, // Prevents excessive growth
//             color: "rgba(255, 255, 255, 1)",
//             letterSpacing: "10%",
//             fontFamily: "Kumar One",
//             textAlign: "center",
//             maxWidth: "1000px", // Keeps title from getting too wide
//           }}
//         >
//           OUR NETWORK OF PARTNERS
//         </Typography>

//         {/* Content Section */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" }, // Stacks on small screens
//             width: "100%",
//             maxWidth: "1200px", // Prevents excessive stretching
//             alignItems: "center",
//             justifyContent: "center",
//             gap: { md: 8 },
//             marginBottom: { xs: "20px", sm: "0px" },
//           }}
//         >
//           {/* Text Section */}
//           <Box
//             sx={{
//               width: { xs: "90%", sm: "70%", md: "60%" }, // Prevents text from expanding too much
//               maxWidth: "800px", // Ensures content width does not exceed limits
//               display: "flex",
//               flexDirection: "column",
//               gap: { xs: "20px" },
//             }}
//           >
//             <Typography sx={textStyles}>
//               Our partnerships are the foundation of our thriving community. By
//               partnering with leading companies and ventures, we're fostering
//               innovation, driving growth, and creating new opportunities for all
//               parties.
//             </Typography>
//             <Typography sx={textStyles}>
//               Together, we're building a more engaging and inclusive future for
//               Web3. Our partners share our commitment to empowering creators,
//               gamers, and other creatives. Through our partnerships, we're able
//               to leverage each other's strengths and resources to achieve our
//               shared goals.
//             </Typography>
//             <Typography sx={textStyles}>
//               We're proud to be associated with such amazing companies and
//               projects. By partnering with us, you're joining a dynamic and
//               innovative community that is shaping the future of Web3.
//             </Typography>
//           </Box>

//           {/* Partners Grid */}
//           <Box
//             sx={{
//               width: { xs: "90%", sm: "60%", md: "40%" }, // Adjusts width for responsiveness
//               maxWidth: "400px", // Prevents excessive stretching
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "1fr 1fr",
//                 lg: "1fr 1fr 1fr",
//               },
//               gap: { xs: "10px", sm: "25px", md: "40px" },
//               justifyItems: "center",
//             }}
//           >
//             {partnerImages.map((img, index) => (
//               <PartnerLogo key={index} imgSrc={img} />
//             ))}
//           </Box>
//         </Box>

//         {/* Call to Action Button */}
//         <Buttons
//           text="Get in Touch"
//           background="rgba(101, 175, 186, 1)"
//           borderColor="transparent"
//         />
//       </Box>

//       <OtherPartners />

//       <Ambassadors />
//     </Box>
//   );
// };
