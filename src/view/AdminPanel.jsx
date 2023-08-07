import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import mainStore from '../store/mainStore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react-lite';
import userStore from '../store/userStore';

const AdminPanel = () => {
  const [progress, setProgress] = React.useState(0);
  const { apartsList, unBookApartFn, getApartsData } = mainStore;
  const { unBookApartInUser } = userStore;

  const bookApartCount = () => {
    let res = 0;
    apartsList.forEach((item) => (item.isBook ? res++ : null));
    return res;
  };

  const buttonColors = {
    red: '#ff000073',
    green: '#00ff1c6e',
  };

  const [activeItemId, setActiveItemId] = useState(null);

  useEffect(() => {
    getApartsData();
  }, []);

  useEffect(() => {
    setProgress((bookApartCount() * 100) / apartsList.length);
  }, [apartsList]);

  return (
    <div className="admin-panel-container">
      <div className="admin-panel-graphics">
        <h2>Инфографика</h2>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            size="150px"
            value={progress}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" component="div" color="text.secondary">
              {bookApartCount()} / {apartsList.length}
            </Typography>
          </Box>
        </Box>
        <p>
          <b>Забронировано</b>
        </p>
      </div>
      <div className="admin-panel-bookaparts">
        <h2>Бронь номеров</h2>
        <div className="admin-panel-book-item-container">
          {apartsList.map((item) => (
            <div
              key={item.id}
              className="admin-panel-book-item"
              style={{
                border:
                  item.id === activeItemId
                    ? '2px solid black'
                    : '2px solid #0000002e',
                backgroundColor: item.isBook
                  ? buttonColors.red
                  : buttonColors.green,
              }}
              onClick={() => {
                setActiveItemId(item.id);
              }}
            ></div>
          ))}
        </div>
        <Button
          variant="contained"
          onClick={() => {
            unBookApartFn(activeItemId);
            unBookApartInUser(activeItemId);
          }}
        >
          <Typography variant="p" color="white">
            Разбронировать
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default observer(AdminPanel);
