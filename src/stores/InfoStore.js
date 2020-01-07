import { action, observable } from 'mobx';
import autobind from 'autobind-decorator';

@autobind
class InfoStore {
    @observable show: boolean;

    constructor() {
        this.show = false;
    }
    // show modal
    @action
    openModal() {
        this.show = true;
    }

    @action
    closeModal() {
        this.show = false;
    }
}

export default InfoStore;