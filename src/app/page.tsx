"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Recommandation from "./component/Recommandation";
import { Suspense } from "react";

const Home: React.FC = () => {
  return (
    /*<Box sx={{ marginTop: "16px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box>
          <Image
            src="/logo.png"
            alt="logo img"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Box>
          <Typography component="h1" variant="body1">
            logo
          </Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            possimus animi optio facilis id voluptatem vero, nesciunt molestiae.
            Facere harum aspernatur consequatur omnis repellat voluptatibus
            dolor porro illo? Cum, rem.
          </Typography>
        </Box>
      </Box>

      <Typography sx={{ marginTop: "16px" }}>Recommended</Typography>*/
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum possimus
        animi optio facilis id voluptatem vero, nesciunt molestiae. Facere harum
        aspernatur consequatur omnis repellat voluptatibus dolor porro illo?
        Cum, rem.
      </p>
      <div style={{ display: "flex", gap: "8px" }}>
        {[...new Array(4)].map((item, i) => {
          const images = ["image1", "image2", "image3", "image4"];
          return (
            <>
              <Suspense fallback={<p>Loading...</p>}>
                {/* @ts-expect-error Server Component */}
                <Recommandation key={i} imgSrc={`/${images[i]}.png`} />
              </Suspense>
            </>
          );
        })}
      </div>
    </>

    // </Box>
  );
};

export default Home;
