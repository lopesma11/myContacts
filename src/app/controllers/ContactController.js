class ContactController {
    index(request, response) {
        response.send(`Send from Contact Controller`);
    }

    show() {
        // Obter UM registro
    }

    store() {
        // Criar um novo registro
    }

    update() {
        // Editar um novo registro
    }

    delete() {
        // Deletar um registro
    }
}

module.exports = new ContactController();
