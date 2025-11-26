import React from "react";
import styles from "./MemeThumbnail.module.css";
import {
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
interface IMemeThumbnailProps {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}

const MemeThumbnail: React.FC<IMemeThumbnailProps> = ({ memes, images }) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      {memes.map((meme) => {
        return (
          <div className={styles.memeContainer}>
            <MemeSVGViewer
              meme={meme}
              image={images.find((img) => img.id === meme.imageId)}
              basePath=""
            />
            <div className={styles.memeTitre}>
              {meme.titre.length > 0 ? meme.titre : "Sans titre"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MemeThumbnail;
