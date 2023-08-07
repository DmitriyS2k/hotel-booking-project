import React, { useEffect } from 'react';
import userStore from '../store/userStore';
import mainStore from '../store/mainStore';
import ApartItem from '../components/ApartItem';
import { observer } from 'mobx-react-lite';

const MyBooks = () => {
  const { signInUserData } = userStore;
  const { apartsList } = mainStore;

  const searchApartDataById = (id) => {
    const [result] = apartsList.filter((item) => id === item.id);
    return result;
  };

  useEffect(() => {}, [signInUserData]);

  return (
    <div>
      <h1>Мои брони</h1>
      <div className="apart-catalog">
        {signInUserData.bookApartByUser.map((item) => (
          <ApartItem apartData={searchApartDataById(item)} />
        ))}
      </div>
    </div>
  );
};

export default observer(MyBooks);
