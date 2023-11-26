import React from "react";
import { Image, Shimmer } from 'react-shimmer'
//lazy loaded image
const CardImage = ({ thumbnails, keyName }) => {
  return (
    <Image
    src={thumbnails[keyName].url}
    fallback={<Shimmer width={800} height={600} />}
  />
  );
};

export default CardImage;
