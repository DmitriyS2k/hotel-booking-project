import { makeAutoObservable } from 'mobx';
import instance from '../API/ConfigAxios';

class mainStore {
  constructor() {
    makeAutoObservable(this);
  }

  apartsList = [];

  imgDataHomePage = [];

  getApartsData = async () => {
    const response = await instance.get('apartsData');
    this.apartsList = response.data;
  };

  getImgDataHomePage = async () => {
    const response = await instance.get('imgDataHomePage');
    this.imgDataHomePage = response.data;
  };

  getApartDataById = async (id) => {
    const response = await instance.get(`apartsData/${id}`);
    return response.data;
  };

  bookApartFn = async (apartId, userId) => {
    await instance.patch(`apartsData/${apartId}`, { isBook: true , userIdWhoBook: userId});
    this.getApartsData();
  };

  unBookApartFn = async (apartId) => {
    await instance.patch(`apartsData/${apartId}`, { isBook: false });
    this.getApartsData();
  };
}
export default new mainStore();
