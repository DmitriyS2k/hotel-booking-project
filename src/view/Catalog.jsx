import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import mainStore from '../store/mainStore';
import '../styles/style.css';
import ApartItem from '../components/ApartItem';

const Catalog = () => {
  const { apartsList, getApartsData } = mainStore;

  useEffect(() => {
    getApartsData();
  }, []);

  return (
    <>
      <h1>Каталог номеров</h1>
      <div className={'apart-catalog'}>
        {apartsList.map((item) => (
          <ApartItem key={item.id} apartData={item} />
        ))}
      </div>
    </>
  );
};

export default observer(Catalog);
