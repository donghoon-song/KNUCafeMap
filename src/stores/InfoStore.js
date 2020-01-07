import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { mockList } from '../data/data';

class InfoStore {
    @observable cafeList = [...mockList];
    @observable focusedCafe = {};
    @observable cafeListShown = [...mockList];

    @action
    setFocusedCafe(cafe) {
        this.focusedCafe = { ...cafe };
    }

}

export default InfoStore;