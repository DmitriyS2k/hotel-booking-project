import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import userStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import mainStore from '../store/mainStore';

const ApartItem = ({ apartData }) => {
  const { isAuthenticated, userBookAdd, signInUserData } = userStore;

  const { bookApartFn } = mainStore;

  const navigate = useNavigate();

  const navigateToSingleApartPage = (item) => {
    navigate(`/singe-apart-page/${item.id}`);
  };

  const bookApartButton = (itemId) => {
    if (isAuthenticated) {
      bookApartFn(itemId, signInUserData.id);
      userBookAdd(itemId);
    } else {
      navigate('/signin');
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={apartData.id}>
      <CardActionArea onClick={() => navigateToSingleApartPage(apartData)}>
        <CardMedia
          sx={{ height: 140 }}
          image={apartData.pic}
          title="pic"
          classes={{ root: apartData.isBook ? 'isbook-true-img' : '' }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Номер аппартаментов: {apartData.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Число гостей: {apartData.capacity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Кондиционер: {apartData.isConditioner ? 'Есть' : 'Нет'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Балкон: {apartData.isBalcony ? 'Есть' : 'Нет'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div
              className={
                apartData.isBook ? 'apart-isbook-true' : 'apart-isbook-false'
              }
            >
              {apartData.isBook ? 'Номер забронирован' : 'Номер свободен'}
            </div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Цена: {apartData.price}/cутки
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigateToSingleApartPage(apartData)}
        >
          Подробнее
        </Button>
        <Button
          size="small"
          disabled={apartData.isBook}
          onClick={() => bookApartButton(apartData.id)}
        >
          Забронировать
        </Button>
      </CardActions>
    </Card>
  );
};

export default ApartItem;
