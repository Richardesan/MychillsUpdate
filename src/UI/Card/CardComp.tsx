import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Box, Link } from "@mui/joy";
import X from "../../assets/x.png";

interface CardProps {
  pic: string;
  head: string;
  subhead: string;
  gametype: string;
}

const CardComp: React.FC<CardProps> = ({ pic, head, subhead, gametype }) => {
  return (
    <Card sx={{ height: "259px", width: "396px" }}>
      <CardCover>
        <img src={pic} srcSet={pic} loading="lazy" alt="" />
      </CardCover>
      {/* <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      /> */}
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography
            level="title-lg"
            textColor="#fff"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              fontFamily: "Poppins",
              fontSize: "32px",
              lineHeight: "48px",
            }}
          >
            {head}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "45%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                textColor="neutral.300"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontFamily: "Poppins 500",
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "27px",
                }}
              >
                {subhead}
              </Typography>
              <Typography
                textColor="neutral.300"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontFamily: "Poppins 500",
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "27px",
                }}
              >
                {gametype}
              </Typography>
            </Box>
            <Box sx={{ width: "55%", justifyContent: "flex-end" }}></Box>
            <Link href={X}>
              <img
                src={X}
                alt="Clickable Image Link"
                style={{
                  width: "24px", // Set the desired image width
                  height: "24px", // Set the desired image height
                  display: "block", // Optional: removes extra spacing
                  cursor: "pointer", // Changes cursor to pointer on hover
                  border: "2px solid rgba(255, 255, 255, 1)",
                  borderRadius: "50px",
                }}
              />
            </Link>
          </Box>
        </Box>

        {/* <Typography level="title-lg" textColor="#fff">
          {gametype}
        </Typography>
        <Typography
          startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {xlink}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default CardComp;
