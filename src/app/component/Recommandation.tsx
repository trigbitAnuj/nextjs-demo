import { Box } from "@mui/material";
import Image from "next/image";

const Recommandation = async ({ imgSrc }: { imgSrc: string }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <Box>
      <Image src={imgSrc} alt="recommanded img" width={100} height={100} />
    </Box>
  );
};

export default Recommandation;
