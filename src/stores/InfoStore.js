import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { mockList } from '../data/data';

class InfoStore {
    @observable cafeList = [
        ...mockList
    ];
    @observable focusedCafe = {};

    @action
    focusCafe(cafe) {
        this.focusedCafe = { ...cafe };
    }

}

export default InfoStore;