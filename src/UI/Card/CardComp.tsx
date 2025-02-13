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
    <Card
      sx={{
        width: "90%", // Allow it to stretch based on grid
        maxWidth: { xs: "100%", sm: "350px", md: "380px", lg: "400px" }, // Prevent excessive width
        height: "auto", // Auto height based on content
        aspectRatio: "16/10", // Maintains proportionality
        border: "none",
      }}
    >
      <CardCover>
        <img
          src={pic}
          srcSet={pic}
          loading="lazy"
          alt={head}
          // style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </CardCover>

      <CardContent sx={{ justifyContent: "flex-end", px: { xs: 0, md: 3 } }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box>
            <Typography
              level="title-lg"
              textColor="#fff"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "24px", md: "32px" }, // Responsive font
                lineHeight: { xs: "28px", sm: "36px", md: "48px" },
              }}
            >
              {head}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", md: "50px" },
                textAlign: "end",
                alignItems: "end",
              }}
            >
              <Typography
                textColor="neutral.300"
                sx={{
                  fontFamily: "Poppins 500",
                  fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  fontWeight: "500",
                  lineHeight: "21px",
                }}
              >
                {subhead}
              </Typography>
              <Typography
                textColor="neutral.300"
                sx={{
                  fontFamily: "Poppins 500",
                  fontSize: { xs: "12px", sm: "16px", md: "18px" },
                  fontWeight: "500",
                  lineHeight: "21px",
                }}
              >
                {gametype}
              </Typography>
            </Box>

            <Link href={X}>
              <Box
                sx={{
                  width: { xs: "10.5px", md: "14px" }, // Increased size to fit padding
                  height: { xs: "10.5px", md: "14px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid rgba(255, 255, 255, 1)",
                  borderRadius: "50%",
                  padding: "10px", // Padding applied to Box, not img
                }}
              >
                <img
                  src={X}
                  alt="Clickable Image Link"
                  style={{
                    width: "100%", // Fits within Box without extra space
                    height: "100%",
                    objectFit: "contain", // Ensures image is fully visible
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComp;
