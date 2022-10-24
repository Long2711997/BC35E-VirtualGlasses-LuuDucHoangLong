import { appear, glassesInfo } from "../controllers/glasses.js";
import { Glasses } from "./Glasses.js";

export class GlassesList {
    constructor(list) {
        this.list = list;
    }

    renderGlassesList() {
        let arrGlasses = this.list.map(
            (item) => new Glasses(...Object.values(item))
        );

        let glassesList = arrGlasses.map((glasses) => {
            let divGlasses = document.createElement('div');
            divGlasses.classList.add('col-4');
            divGlasses.innerHTML = `<img src="${glasses.src}" alt="glasses ${glasses.id}" class="img-fluid">`;
            divGlasses.addEventListener('click', () => {
                glassesInfo(glasses);
                appear(glasses);
            });
            return divGlasses;
        });
        document.querySelector('#vglassesList').append(...glassesList);
    }
}