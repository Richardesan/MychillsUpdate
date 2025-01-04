import { Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";

export default function ValueCards(props: any) {
  return (
    <Card
      sx={{
        height: "350px",
        width: { xs: "90%", xl: "80%" },

        borderRadius: "12px",
        borderBottom: "none",
        border: "1px  solid ",
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
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "end",
          textAlign: "center",
          backgroundColor: "transparent",
          gap: "20px",
          position: "relative",
          //   paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "start",
            alignItems: "left",
            width: { xs: "100%", xl: "60%" },
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
        </Box>{" "}
        <Box
          sx={{
            width: "168px",
            height: "168px",
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-end",
            textAlign: "end",
          }}
        >
          <img
            src={`${props.image}`}
            alt={`${props.alt}`}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
