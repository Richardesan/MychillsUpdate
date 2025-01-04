import { Box, Typography } from "@mui/joy";
import Ellipse1 from "../../assets/Ellipse1.png";
import Ellipse2 from "../../assets/Ellipse2.png";
import Ellipse3 from "../../assets/Ellipse3.png";
import Ellipse4 from "../../assets/Ellipse4.png";
import Ellipse5 from "../../assets/Ellipse5.png";
import Ellipse6 from "../../assets/Ellipse6.png";
import Ellipse7 from "../../assets/Ellipse7.png";
import Ellipse8 from "../../assets/Ellipse8.png";
import Ellipse9 from "../../assets/Ellipse9.png";
import Buttons from "../../UI/Button/Buttons";
import OtherPartners from "./OtherPartners";
import Ambassadors from "./Ambassadors";

const PartnerLogo = (props: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        top: "295px",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={props.img1}
        alt=""
        style={{ width: "120px", height: "120px" }}
      />
      <img
        src={props.img2}
        alt=""
        style={{ width: "120px", height: "120px" }}
      />
      <img
        src={props.img3}
        alt=""
        style={{ width: "120px", height: "120px" }}
      />
    </Box>
  );
};

const Partners = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "start", sm: "center" },
        textAlign: { xs: "start", sm: "center" },
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: { xs: "start", sm: "center" },
          textAlign: { xs: "start", sm: "center" },
          gap: { xs: "12px", md: 4 },
          py: { xs: "20px", sm: "100px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "48px",
            },
            lineHeight: {
              xs: "17.76px",
              sm: "30px",
              md: "85.4px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "10%",
            fontFamily: "Kumar One",
          }}
        >
          OUR NETWORK OF PARTNERS
        </Typography>

        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              width: "50%",
              color: "rgba(255, 255, 255, 1)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "24px",
                },
                lineHeight: {
                  xs: "17.76px",
                  sm: "30px",
                  md: "44.2px",
                },
                fontWeight: "400",
                letterSpacing: "2px",
                fontFamily: "DM Sans",
              }}
            >
              Our partnerships are the foundation of our thriving community. By
              partnering with leading companies and ventures, we're fostering
              innovation, driving growth, and creating new opportunities for all
              parties.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "24px",
                },
                lineHeight: {
                  xs: "17.76px",
                  sm: "30px",
                  md: "44.2px",
                },
                fontWeight: "400",
                letterSpacing: "2px",
                fontFamily: "DM Sans",
              }}
            >
              Together, we're building a more engaging and inclusive future for
              Web3. Our partners share our commitment to empowering creators,
              gamers, and other creatives. Through our partnerships, we're able
              to leverage each other's strengths and resources to achieve our
              shared goals.
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "24px",
                },
                lineHeight: {
                  xs: "17.76px",
                  sm: "30px",
                  md: "44.2px",
                },
                fontWeight: "400",
                letterSpacing: "2px",
                fontFamily: "DM Sans",
              }}
            >
              We're proud to be associated with such amazing companies and
              projects. By partnering with us, you're joining a dynamic and
              innovative community that is shaping the future of Web3.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "50%",
              justifyContent: "space-evenly",
              display: "flex",
              flexDirection: "column",
              gap: "84px",
            }}
          >
            <PartnerLogo img1={Ellipse1} img2={Ellipse2} img3={Ellipse3} />
            <PartnerLogo img1={Ellipse4} img2={Ellipse5} img3={Ellipse6} />{" "}
            <PartnerLogo img1={Ellipse7} img2={Ellipse8} img3={Ellipse9} />
          </Box>
        </Box>
        <Buttons
          text="Get in Touch "
          background="rgba(101, 175, 186, 1)"
          borderColor="transparent"
        />
      </Box>

      <OtherPartners />
      <Ambassadors />
    </Box>
  );
};

export default Partners;
