class Controller {
    constructor(view, service) {
        this.view  = view;
        this.service = service;

        this.view.bindButton(this.handler);
    }

    handler = value => this.service.getAlert(value);
}