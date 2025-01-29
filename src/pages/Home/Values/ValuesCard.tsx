// import { Typography } from "@mui/joy";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Box from "@mui/joy/Box";

// export default function ValueCards(props: any) {
//   return (
//     <Card
//       sx={{
//         // // height: "350px",
//         // width: "100%",

//         borderRadius: "12px",
//         borderBottom: "none",
//         border: "1px  solid  transparent",
//         borderImageSlice: "1",
//         // borderImageSource:
//         //   "linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%)",
//         overflow: "hidden",
//         background: "rgba(32, 35, 52, 1)",
//       }}
//     >
//       <CardContent
//         sx={{
//           // width: "100%",
//           height: "auto",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//           alignItems: "end",
//           textAlign: "center",
//           backgroundColor: "transparent",
//           gap: "20px",
//           position: "relative",
//           //   paddingTop: "50px",
//         }}
//       >
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 1,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             textAlign: "start",
//             alignItems: "left",
//             width: { xs: "80%", xl: "60%" },
//           }}
//         >
//           <Typography
//             level="title-lg"
//             sx={{
//               fontSize: { xs: "18px", sm: "24px", md: "40px" },
//               fontWeight: "700",
//               lineHeight: { xs: "23px", sm: "52px" },
//               color: "rgba(255, 255, 255, 1)",
//               marginBottom: { xs: "10px", sm: "16px" },
//               fontFamily: "Syne",
//               paddingBottom: 1,
//             }}
//           >
//             {props.title}
//           </Typography>

//           <Typography
//             level="body-sm"
//             sx={{
//               fontWeight: "400",
//               color: "rgba(255, 255, 255, 1)",
//               fontSize: { xs: "12px", sm: "15px", md: "18px" },
//               lineHeight: { xs: "26.8px", sm: "34.2px" },
//               fontFamily: "DM Sans",
//               letterSpacing: "3%",
//             }}
//           >
//             {props.message}
//           </Typography>
//         </Box>{" "}
//         <Box
//           sx={{
//             width: { xs: "69.94px", sm:'96px', md:"168px" },
//             height: { xs: "69.94px", sm:'96px', md:"168px" },
//             display: "flex",
//             justifyContent: "right",
//             alignItems: "flex-end",
//             textAlign: "end",
//           }}
//         >
//           <img
//             src={`${props.image}`}
//             alt={`${props.alt}`}
//             style={{ width: "100%", height: "100%" }}
//           />
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }

import { Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";

interface ValueCardProps {
  title: string;
  message: string;
  image: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, message, image }) => {
  return (
    <Card
      sx={{
        flex: 1,
        minWidth: "200px",
        maxWidth: "500px",
        minHeight: "200px", // Ensures all cards have equal height
        borderRadius: "12px",
        border: "1px solid transparent",
        overflow: "hidden",
        background: "rgba(32, 35, 52, 1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "end",
          textAlign: "center",
          backgroundColor: "transparent",
          // position: "relative",
          // padding: { xs: "0px", md: "50px" },
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            width: { xs: "80%", md: "60%" },
            gap: "15px",
          }}
        >
          <Typography
            level="title-lg"
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "30px", lg: "40px" },
              fontWeight: "700",
              lineHeight: { xs: "23px", sm: "52px " },
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Syne",
              // paddingBottom: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            level="body-sm"
            sx={{
              width: { xs: "100%", md: "90%" },
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
              fontSize: { xs: "12px", sm: "13px", md: "16px", lg: "18px" },
              lineHeight: {
                xs: "22.8px",
                sm: "24.2px",
                md: "28.2px",
                lg: "34.2px",
              },
              fontFamily: "DM Sans",
              letterSpacing: "3%",
            }}
          >
            {message}
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "69.94px", sm: "96px", lg: "168px" },
            height: { xs: "69.94px", sm: "96px", lg: "168px" },
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-end",
            textAlign: "end",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ValueCard;
