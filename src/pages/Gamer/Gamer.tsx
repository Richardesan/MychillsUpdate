import { Box, Typography, Button } from "@mui/joy";
import Buttons from "../../UI/Button/Buttons";
import MemeVideo from "../../assets/360p.mp4"; // Path to your video file
import CardComp from "../../UI/Card/CardComp";
import l3e7 from "../../assets/l3e7.png";
import kartparty from "../../assets/kartparty.png";
import counterfire from "../../assets/counterfire.png";
import bladeofgod from "../../assets/bladeofgod.png";
import fundora from "../../assets/fundora.png";
import castile from "../../assets/castile.png";
import matrix from "../../assets/matrix.png";
import metacene from "../../assets/metacene.png";
import niftyisland from "../../assets/niftyisland.png";
import robokiden from "../../assets/robokiden.png";
import superchamp from "../../assets/superchamp.png";
import thebeacon from "../../assets/thebeacon.png";
import CardCreator from "../../UI/Card/CardCreator";

const playtest = [
  {
    pic: l3e7,
    head: "L3E7",
    subhead: "MMORPG",
    gametype: "PC",
  },
  {
    pic: kartparty,
    head: "KARTPARTY",
    subhead: "RACING",
    gametype: "PC",
  },
  {
    pic: counterfire,
    head: "COUNTERFIRE",
    subhead: "FPS",
    gametype: "MOBILE",
  },
  {
    pic: matrix,
    head: "MATRIX",
    subhead: "FPS",
    gametype: "MOBILE",
  },
  {
    pic: bladeofgod,
    head: "BLADE OF GOD",
    subhead: "RPG",
    gametype: "PC & MOBILE",
  },
  {
    pic: castile,
    head: "CASTILE",
    subhead: "RPG",
    gametype: "MOBILE",
  },
  {
    pic: superchamp,
    head: "SUPERCHAMP",
    subhead: "RPG",
    gametype: "PC",
  },
  {
    pic: niftyisland,
    head: "NIFTY ISLAND",
    subhead: "STRATEGY",
    gametype: "PC",
  },
  {
    pic: thebeacon,
    head: "THE BEACON",
    subhead: "RPG",
    gametype: "PC",
  },
  {
    pic: fundora,
    head: "FUNDORA",
    subhead: "RACING",
    gametype: "PC & MOBILE",
  },
  {
    pic: metacene,
    head: "METACENE",
    subhead: "MMORPG",
    gametype: "PC & MOBILE",
  },
  {
    pic: robokiden,
    head: "ROBOKIDEN",
    subhead: "RPG",
    gametype: "PC",
  },
];
const creators = [
  {
    head: "GM Web3 Fam, Sanmi here…",
    subhead:
      "Today we would be exploring a decentralized platform created for gamers by Confictionlabs (@confictionlabs). @xpsr_ is the alpha for today.",
  },
  {
    head: "KARTExploring @cardsahoygame",
    subhead:
      "Written in conjunction with the Gamers-Clique of @TheChillsRoom Backed by Metalist, CardAhoyGame is an thrilling gameplay with a first...",
  },
  {
    head: "𝐇𝐮𝐠𝐞 𝐨𝐩𝐩𝐨𝐫𝐭𝐮𝐧𝐢𝐭𝐲 𝐟𝐨𝐫 𝐚𝐥𝐥 𝐆𝐚𝐦𝐞𝐫𝐬  ➤",
    subhead:
      "@castileofficial 𝐁𝐞𝐭𝐚-𝐭𝐞𝐬𝐭 𝐢𝐬 𝐥𝐚𝐮𝐧𝐜𝐡𝐢𝐧𝐠 𝐬𝐨𝐨𝐧 If you don’t know about Castile, read this  Castile is an  AAA-quality roguelike...",
  },
  {
    head: "𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗮 𝘄𝗼𝗿𝗹𝗱 𝘁𝗵𝗮𝘁 𝗼𝗳𝗳𝗲𝗿𝘀 𝗿𝗲𝘄𝗮𝗿𝗱 𝗳𝗼𝗿 𝗮𝗰𝘁𝗶𝘃𝗲 𝗽𝗮𝗿𝘁𝗶𝗰𝗶𝗽𝗮𝘁𝗶𝗼𝗻 𝗶𝗻 𝗳𝘂𝗻 𝗮𝗰𝘁𝗶𝘃𝗶𝘁𝗶𝗲𝘀",
    subhead:
      "@MakeFrensxyz is a TG-based Web3 SocialFi quest mini-app, offering easy signup, invitations and access to lots...",
  },
  {
    head: "𝐓𝐡𝐞 𝐰𝐞𝐞𝐤𝐞𝐧𝐝 𝐢𝐬 𝐡𝐞𝐫𝐞 𝐈’𝐦 𝐭𝐫𝐲𝐢𝐧𝐠 𝐨𝐮𝐭 𝐚 𝐰𝐞𝐛𝟐 𝐠𝐚𝐦𝐞  𝐖𝐮𝐭𝐡𝐞𝐫𝐢𝐧𝐠 𝐰𝐚𝐯𝐞𝐬",
    subhead:
      "It’s is an upcoming open-world action RPG developed by Kuro Games with a very rich lore. An expansive world, dynamic... OF GOD",
  },
  {
    head: "Hello Web3 Fam, Sanmi here…",
    subhead:
      "Web3 games are at the forefront of revolutionizing the ecosystem and today we'd be looking at a free-to-play (F2P) third person shooter game that is about...",
  },
];

const Gamer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", sm: "center" },
        textAlign: { xs: "start", sm: "center" },
      }}
    >
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: { xs: "start", sm: "center" },
          textAlign: { xs: "start", sm: "center" },
          gap: { xs: "12px", md: 4 },
          paddingTop: { xs: "20px", md: "100px" },
          paddingBottom: { xs: "20px", md: "60px" },
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
          GAMERS CLIQUES
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          width: "80%",
          maxWidth: "1400px", // Ensuring max width
          mx: "auto", // Centering the container
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            color: "rgba(255, 255, 255, 1)",
            textAlign: { xs: "center", md: "start" },
            justifyContent: { xs: "center", md: "start" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "16px", sm: "24px", md: "32px" },
              justifyContent: "center",
              alignItems: "center", // Adjust gap size per screen
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontSize: { xs: "12px", sm: "14px", md: "24px" },
                lineHeight: { xs: "17.76px", sm: "30px", md: "44.2px" },
                fontWeight: "200",
                letterSpacing: "2px",
                fontFamily: "DM Sans",
              }}
            >
              Our community offers more than just a place to play games. You can
              connect with other gamers, share your passion, and grow; with
              variety of tournaments and playtests, there's always something new
              to experience.
            </Typography>

            {/* Video Meme (Mobile View) */}
            <Box
              component="video"
              src={MemeVideo}
              controls
              loop
              muted
              autoPlay
              sx={{
                display: { xs: "block", md: "none" },
                width: { xs: "100%", sm: "80%", md: "468px" },
                height: "auto",
                borderRadius: "8px",
                my: 2,
                justifyContent: "center",
                alignContent: "center",
              }}
            />

            <Typography
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontSize: { xs: "12px", sm: "14px", md: "24px" },
                lineHeight: { xs: "17.76px", sm: "30px", md: "44.2px" },
                fontWeight: "200",
                letterSpacing: "2px",
                fontFamily: "DM Sans",
              }}
            >
              Are you a competitive gamer looking to test your skills? Join
              tournaments, game nights, and playtest web3 games with us and
              compete against the best players in our community. Show off your
              gaming prowess and get rewarded.
            </Typography>
          </Box>
        </Box>

        {/* Video Meme (Shown on the right for larger screens) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide in mobile
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
            gap: "55px",
          }}
        >
          <Box
            component="video"
            src={MemeVideo}
            controls
            loop
            muted
            autoPlay
            sx={{
              width: { xs: "100px", sm: "150px", md: "468px" },
              height: "auto",
              borderRadius: "8px",
              mb: 2,
            }}
          />

          <Buttons
            text="Join our Community "
            background="rgba(101, 175, 186, 1)"
            borderColor="transparent"
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "80%", md: "100%" },
          paddingTop: { xs: "100px", md: "150px" },
          paddingBottom: { xs: "20px", md: "50px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "40px",
            },
            lineHeight: {
              xs: "26.76px",
              sm: "22px",
              md: "52.8px",
            },
            color: "rgba(255, 255, 255, 1)",
            textAlign: "center",
            letterSpacing: "5px",
            fontFamily: "Syne",
          }}
        >
          {" "}
          OUR RECENT PLAYTESTS & GAME NIGHTS
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          display: "grid",
          maxWidth: "1400px",
          gridTemplateColumns: {
            xs: "1fr", // 1 column for mobile view
            sm: "1fr 1fr", // 2 columns for tablet view
            lg: "1fr 1fr 1fr", // 3 columns for desktop view
          },
          gap: { xs: "24px", sm: "36px", md: "42px" }, // Space between cards
          justifyContent: "center",
          border: "none",
        }}
      >
        {/* Map through the playtest array to render each CardComp */}
        {playtest.map((game, index) => (
          <CardComp
            key={index}
            pic={game.pic}
            head={game.head}
            subhead={game.subhead}
            gametype={game.gametype}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "start", sm: "center" },
          textAlign: { xs: "start", sm: "center" },
          // gap: { xs: "12px", md: "48px" },
        }}
      >
        <Box
          sx={{
            paddingTop: { xs: "100px", md: "150px" },
            paddingBottom: { xs: "20px", md: "50px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "40px",
              },
              lineHeight: {
                xs: "17.76px",
                sm: "30px",
                md: "76px",
              },
              color: "rgba(255, 255, 255, 1)",
              textAlign: "center",
              letterSpacing: "5px",
              fontFamily: "Syne",
            }}
          >
            CREATORS
          </Typography>
          <Typography
            sx={{
              fontWeight: "300",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "32px",
              },
              lineHeight: {
                xs: "17.76px",
                md: "36px",
              },
              color: "rgba(255, 255, 255, 1)",
              textAlign: "center",
              // letterSpacing: "10%",
              fontFamily: "DM Sans",
            }}
          >
            Join Us on our amazing Storytelling journey!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              width: "45%",
              fontWeight: "400",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "24px",
              },
              lineHeight: {
                xs: "17.76px",
                sm: "30px",
                md: "36px",
              },

              color: "rgba(255, 255, 255, 1)",
              textAlign: "start",
              letterSpacing: "10%",
              fontFamily: "DM Sans",
            }}
          >
            Our Content creators are using their platforms to educate and engage
            the audience about Web3, NFTs, Web3 games and every other niche.
            They break down complex concepts, provide tutorials, and explain the
            benefits of these technologies. They also review and recommend NFT
            projects, analyze their value, and warn about scams.
          </Typography>
          <Typography
            sx={{
              width: "45%",
              fontWeight: "400",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "24px",
              },
              lineHeight: {
                xs: "17.36px",
                sm: "30px",
                md: "36px",
              },
              color: "rgba(255, 255, 255, 1)",
              textAlign: "start",
              letterSpacing: "10%",
              fontFamily: "DM Sans",
            }}
          >
            They share their experiences playing Web3 games, and discuss
            play-to-earn models. Our Creators foster community engagement, and
            collaborate with other creators to promote Web3 adoption. By
            leveraging their influence, they help to bridge the gap between
            technology and the general public, making Web3 more accessible and
            understandable.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: { xs: "100px", md: "150px" },
          paddingBottom: { xs: "20px", md: "50px" },
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            border: "1px solid",
            borderColor: "rgba(77, 79, 92, 1)",
            borderRadius: "90px",
            padding: "5px",
            marginBottom: "50px",
          }}
        >
          <Button
            sx={{
              width: "fit-content",
              color: "black",
              backgroundColor: "white",
              borderRadius: "100px",
              fontFamily: "DM Sans",
              fontWeight: "500",
              fontSize: { xs: "12px", md: "20px" },
              px: "10px",
              py: "0px",
            }}
          >
            EXPLORE SOME OF OUR CREATORS
          </Button>
        </Box>

        <Box
          sx={{
            width: "80%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on mobile
              sm: "1fr 1fr", // 2 columns on small screens
              lg: "1fr 1fr 1fr", // 3 columns on larger screens
            },
            gap: { xs: "16px", sm: "32px", md: "48px" }, // Spacing between cards
            maxWidth: "1200px",
            justifyContent: "center",
            paddingBottom: { xs: "20px", md: "50px" },
            // px: { xs: 2, sm: 4, md: 6 }, // Padding to avoid edge overlap
          }}
        >
          {/* Map through the playtest array to render each CardComp */}
          {creators.map((game, index) => (
            <CardCreator key={index} head={game.head} subhead={game.subhead} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Gamer;
