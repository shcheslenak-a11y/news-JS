import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ParsedResponse } from '../interfaces';
import adjustNews from '../view/utils';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) =>
                this.controller.getNews(e, (data: ParsedResponse) => {this.view.drawNews(data);adjustNews()})
            );
        this.controller.getSources((data: ParsedResponse) => this.view.drawSources(data));
        window.addEventListener('resize', adjustNews)
    }
}

export default App;
