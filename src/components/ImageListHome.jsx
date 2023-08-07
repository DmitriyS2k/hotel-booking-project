import React, { useEffect } from 'react';
import mainStore from '../store/mainStore';
import { ImageList, ImageListItem } from '@mui/material';
import { observer } from 'mobx-react-lite';

const ImageListHome = () => {
  const { imgDataHomePage, getImgDataHomePage } = mainStore;

  useEffect(() => {
    getImgDataHomePage();
  }, []);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <div>
      <ImageList
        sx={{ width: 500, height: 750 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {imgDataHomePage.map((item) => (
          <ImageListItem
            key={item.id}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.pic, 121, item.rows, item.cols)}
              alt={'HomeImageList'}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Svobody Street 250, Яремче
      </h2>
    </div>
  );
};

export default observer(ImageListHome);
