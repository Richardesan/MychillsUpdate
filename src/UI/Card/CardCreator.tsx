import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import ButtonCreator from "../Button/ButtonCreator";
import { Box } from "@mui/joy";

interface CardProps {
  head: string;
  subhead: string;
}

const CardCreator: React.FC<CardProps> = ({ head, subhead }) => {
  return (
    <Card
      sx={{
        width: "100%", // Allows responsiveness in grid
        maxWidth: { xs: "90%", sm: "320px", md: "350px", lg: "380px" }, // Consistent width
        height: "220px", // Fixed height for uniformity
        border: "0.5px solid",
        borderRadius: "16px",
        backgroundColor: "rgba(255, 255, 255, 0.32)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1, // Ensures content stretches evenly
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Keeps button at the bottom
          padding: "16px",
        }}
      >
        <Box>
          <Typography
            level="title-md"
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: "22px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap", // Prevent wrapping
            }}
          >
            {head}
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: { xs: "12px", sm: "14px" },
              lineHeight: "22px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2, // Restrict to 2 lines
              WebkitBoxOrient: "vertical",
            }}
          >
            {subhead}
          </Typography>
        </Box>

        {/* Button Section - Stays at Bottom */}
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <ButtonCreator
            text="Read More"
            background="transparent"
            borderColor="rgba(255, 255, 255, 1)"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardCreator;



// const CreatorsGrid = () => {
//   return (
//     <Box
//       sx={{
//         background: "url('/path-to-space-bg.jpg') center/cover no-repeat",
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "40px 20px",
//       }}
//     >

//       {/* Cards Grid */}
//       <Grid container spacing={2} sx={{ maxWidth: "1200px" }}>
//         {cardsData.map((card, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card
//               sx={{
//                 height: "180px",
//                 background: "rgba(255, 255, 255, 0.15)",
//                 border: "1px solid rgba(255, 255, 255, 0.3)",
//                 borderRadius: "12px",
//                 color: "white",
//                 transition: "0.3s",
//                 '&:hover': {
//                   borderColor: "white",
//                   boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.6)",
//                 },
//               }}
//             >
//               <CardContent>
//                 <Typography level="title-md" fontWeight="bold">
//                   {card.title}
//                 </Typography>
//                 <Typography level="body-sm" sx={{ mt: 1, opacity: 0.8 }}>
//                   {card.description}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   sx={{ mt: 2, color: "white", borderColor: "white" }}
//                 >
//                   Read More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default CreatorsGrid;
