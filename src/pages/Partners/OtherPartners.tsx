import { Box, List, ListItem, Typography } from "@mui/joy";
import { keyframes, styled } from "@mui/system";
import Logo1 from "../../assets/Ellipse1.png";
import Logo2 from "../../assets/Ellipse2.png";
import Logo3 from "../../assets/Ellipse3.png";
import Logo4 from "../../assets/Ellipse5.png";
import Logo5 from "../../assets/Ellipse4.png";
import Logo6 from "../../assets/Ellipse6.png";
import Logo7 from "../../assets/Ellipse7.png";

const logos = [
  { logo: Logo1, text: "Partner 1" },
  { logo: Logo2, text: "Partner 2" },
  { logo: Logo3, text: "Partner 3" },
  { logo: Logo4, text: "Partner 4" },
  { logo: Logo5, text: "Partner 5" },
  { logo: Logo6, text: "Partner 6" },
  { logo: Logo7, text: "Partner 7" },
];

const infiniteScroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const AnimatedList = styled(List)`
  animation: ${infiniteScroll} 20s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  ariahidden: true;
`;

const OtherPartners = () => {
  const renderLogos = () => {
    return [...logos, ...logos].map((logo, index) => (
      <ListItem
        key={index}
        sx={{
          width: {
            xs: "130px",
            sm: "130px",
            md: "140px",
            lg: "160px",
            xl: "200px",
          },
          display: "flex",
          flexDirection:'column',
          justifyContent: "center",
        }}
      >
        <img
          src={logo.logo}
          alt={`Logo ${index + 1}`}
          style={{
            height: "auto",
            maxWidth: "100%",
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
            color: "#FAFAFA",
            mt: 1, // Add some space between the logo and the text
          }}
        >
          {logo.text}
        </Typography>
      </ListItem>
    ));
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "start", sm: "center" },
          textAlign: { xs: "start", sm: "center" },
          gap: { xs: "12px", md: "48px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "40px",
            },
            lineHeight: {
              xs: "17.76px",
              sm: "30px",
              md: "28.8px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "5px",
            fontFamily: "Syne",
          }}
        >
          {" "}
          OTHER PROJECTS WE HAVE COLLABORATED WITH
        </Typography>

        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            display: "flex",
            my: { xs: 0, sm: 2, md: 2, lg: 3, xl: 3 },
          }}
        >
          <AnimatedList>
            {renderLogos()}
            {renderLogos()}
            {renderLogos()}
          </AnimatedList>
        </Box>
      </Box>
    </Box>
  );
};

export default OtherPartners;
