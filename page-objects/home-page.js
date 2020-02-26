import { Selector } from 'testcafe';

export default class HomePage {
    constructor() {
        this.jobInput = Selector(".searchBoxField")
        this.selectArea = Selector("#select2-3_147_3-container")
        this.selectOptions = Selector("#li6169887")
        this.findButton = Selector(".saveButton")
    }
};