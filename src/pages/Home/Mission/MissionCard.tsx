import { Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";

export default function MissionCard(props: any) {
  return (
    <Card
      sx={{
        height: "386px",
        // maxWidth: { xs: "90%", xl: "100%" },
        borderRadius: "12px",
        borderBottom: "none",
        border: " 1px solid",
        borderImageSlice: "1",
        borderImageSource:
          "linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%)",
        overflow: "hidden",
        background: "rgba(32, 35, 52, 1)",
        borderColor: "white",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "transparent",
          gap: "20px",
          position: "relative",
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "13px",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              textAlign: "start",
              //   alignItems: "left",
              width: { xs: "100%", xl: "90%" },
            }}
          >
            <Typography
              level="title-lg"
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "52px",
                color: "rgba(255, 255, 255, 1)",
                marginBottom: "16px",
                fontFamily: "Syne",
                paddingBottom: 2,
              }}
            >
              {props.title}
            </Typography>
            <Typography
              level="body-sm"
              sx={{
                width: { xs: "100%", md: "90%" },
                fontWeight: "400",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "18px",
                lineHeight: "34.2px",
                fontFamily: "DM Sans",
                letterSpacing: "3%",
              }}
            >
              {props.message}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
