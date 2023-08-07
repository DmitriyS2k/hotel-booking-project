import { makeAutoObservable } from 'mobx';
import instance from '../API/ConfigAxios';
import mainStore from './mainStore';

class userStore {
  constructor() {
    makeAutoObservable(this);
  }

  usersList = [];

  isAuthenticated = false;

  signInUserData = {};

  registerNewUser = (user) => {
    instance.post('usersData', user);
  };

  getUsersData = async () => {
    const response = await instance.get('usersData');
    this.usersList = response.data;
  };

  signInMethod = async (login, password) => {
    await this.getUsersData();
    const checkLogPass = this.usersList.find(
      (item) => item.name === login && item.password === password,
    );
    if (!checkLogPass) {
      return false;
    }
    this.signInUserData = checkLogPass;
    this.isAuthenticated = true;
    return true;
  };

  signOut = () => {
    this.signInUserData = {};
    this.isAuthenticated = false;
  };

  userBookAdd = async (apartId) => {
    const result = this.signInUserData;
    result.bookApartByUser.push(apartId);
    this.signInUserData = result;
    await instance.patch(`usersData/${this.signInUserData.id}`, result);
  };

  unBookApartInUser = async (apartId) => {
    const [responseApart] = mainStore.apartsList.filter(
      (item) => item.id === apartId,
    );
    const responseUser = await instance.get(
      `usersData/${responseApart.userIdWhoBook}`,
    );
    let result = responseUser.data.bookApartByUser.filter(
      (item) => item !== apartId,
    );
    await instance.patch(`usersData/${responseApart.userIdWhoBook}`, {
      bookApartByUser: result,
    });
    if (responseApart.userIdWhoBook === this.signInUserData.id) {
      this.signInUserData.bookApartByUser = result;
    }
  };
}
export default new userStore();
