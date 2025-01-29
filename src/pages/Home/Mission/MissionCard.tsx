// import { Typography } from "@mui/joy";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import Box from "@mui/joy/Box";

// export default function MissionCard(props: any) {
//   return (
//     <Card
//       sx={{
//         flex: 1, // Ensures equal width in a row layout
//         minWidth: "200px", // Prevents shrinking too much on small screens
//         maxWidth: "500px", // Prevents excessive growth
//         minHeight: "280px", // Ensures both cards stay the same height
//         borderRadius: "12px",
//         borderBottom: "none",
//         border: " 1px solid transparent",
//         borderImageSlice: "1",
//         // borderImageSource:
//         //   "linear-gradient(91.44deg, #65AFBA -5.85%, #14151F 29.58%, #65AFBA 65.02%, #0D0E14 100.45%)",

//         overflow: "hidden",
//         background: "rgba(32, 35, 52, 1)",
//         // borderColor: "white",
//       }}
//     >
//       <CardContent
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           backgroundColor: "transparent",
//           gap: "20px",
//           position: "relative",
//           paddingTop: { xs: "15px", md: "50px" },
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             gap: "13px",
//             position: "relative",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Box
//             sx={{
//               position: "relative",
//               zIndex: 1,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "start",
//               textAlign: "start",
//               //   alignItems: "left",
//               width: { xs: "100%", xl: "90%" },
//             }}
//           >
//             <Typography
//               level="title-lg"
//               sx={{
//                 fontSize: { xs: "18px", sm: "20px", md: "30px", lg: "40px" },
//                 fontWeight: "700",
//                 lineHeight: { xs: "23px", sm: "52px " },
//                 color: "rgba(255, 255, 255, 1)",
//                 marginBottom: { xs: "10px", sm: "16px" },
//                 fontFamily: "Syne",
//                 paddingBottom: 1,
//               }}
//             >
//               {props.title}
//             </Typography>
//             <Typography
//               level="body-sm"
//               sx={{
//                 width: { xs: "100%", md: "90%" },
//                 fontWeight: "400",
//                 color: "rgba(255, 255, 255, 1)",
//                 fontSize: { xs: "12px", sm: "13px", md: "16px", lg: "18px" },
//                 lineHeight: { xs: "26.8px", sm: "34.2px" },
//                 fontFamily: "DM Sans",
//                 letterSpacing: "3%",
//               }}
//             >
//               {props.message}
//             </Typography>
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }

import { Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
// import Box from "@mui/joy/Box";

interface MissionCardProps {
  title: string;
  message: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ title, message }) => {
  return (
    <Card
      sx={{
        flex: 1, // Ensures equal width in a row layout
        minWidth: "200px", // Prevents shrinking too much on small screens
        maxWidth: "500px", // Prevents excessive growth
        minHeight: "200px", // Ensures both cards stay the same height
        borderRadius: "12px",
        border: "1px solid transparent",
        overflow: "hidden",
        background: "rgba(32, 35, 52, 1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Ensures content is centered
        // padding:'none'
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          textAlign: "start",
          backgroundColor: "transparent",
          gap: "20px",
          // paddingTop: { xs: "15px", md: "50px" },
        }}
      >
        {/* Card Title */}
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

        {/* Card Content */}
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
      </CardContent>
    </Card>
  );
};

export default MissionCard;
