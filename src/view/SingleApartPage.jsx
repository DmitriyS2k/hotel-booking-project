import React, { useEffect, useState } from 'react';
import mainStore from '../store/mainStore';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import userStore from '../store/userStore';
const SingleApartPage = () => {
  const navigate = useNavigate();
  const { getApartDataById, bookApartFn, apartsList } = mainStore;
  const params = useParams();
  const [apartData, setApartData] = useState({});
  const { isAuthenticated, userBookAdd, signInUserData } = userStore;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getApartDataById(params.id);
      setApartData(response);
    };
    fetchData();
  }, [apartsList]);

  const bookApartButton = (itemId) => {
    if (isAuthenticated) {
      bookApartFn(itemId, signInUserData.id);
      userBookAdd(itemId);
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className={'single-apart-page'}>
      <h1>Карта апартаментов</h1>
      <div className={'single-apart-page-card'}>
        <div className={'single-apart-img'}>
          <img src={apartData.pic} alt="pic" width={'500px'} height={'500px'} />
        </div>
        <div className={'single-apart-text'}>
          <h2>Описание</h2>
          <Typography variant="h5" color="text.secondary">
            Номер: {apartData.id}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Число гостей: {apartData.capacity}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Кондиционер: {apartData.isConditioner ? 'Есть' : 'Нет'}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Балкон: {apartData.isBalcony ? 'Есть' : 'Нет'}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <div
              className={
                apartData.isBook ? 'apart-isbook-true' : 'apart-isbook-false'
              }
            >
              {apartData.isBook ? 'Номер забронирован' : 'Номер свободен'}
            </div>
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Цена: {apartData.price}/cутки
          </Typography>
          <Button
            variant="contained"
            size="large"
            disabled={apartData.isBook}
            style={{ marginTop: '20px' }}
          >
            <Typography
              variant="p"
              color="white"
              onClick={() => bookApartButton(apartData.id)}
            >
              Забронировать
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default observer(SingleApartPage);
