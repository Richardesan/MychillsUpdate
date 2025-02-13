import { Box } from "@mui/joy";

interface PartnerLogoProps {
  imgSrc: string;
  width?: string;
  height?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ imgSrc }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { xs: "40px", sm: "80px", lg: "120px" },
        height: { xs: "40px", sm: "80px", lg: "120px" },
      }}
    >
      <img src={imgSrc} alt="Partner Logo" style={{ width: "100%" }} />
    </Box>
  );
};

export default PartnerLogo;
