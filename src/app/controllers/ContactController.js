const ContactRepository = require("../repositories/ContactRepository");

class ContactController {
    async index(request, response) {
        const contacts = await ContactRepository.findAll();

        response.json(contacts);
    }

    async show(request, response) {
        const { id } = request.params;
        const contact = await ContactRepository.findById(id);

        if (!contact) {
            // 404: Not Found
            return response.status(404).json({ error: `User ${id} not found` });
        }

        response.json(contact);
    }

    store() {
        // Criar um novo registro
    }

    update() {
        // Editar um novo registro
    }

    async delete(request, response) {
        const { id } = request.params;
        const contact = await ContactRepository.findById(id);

        if (!contact) {
            return response.status(404).json({ erro: `User ${id} not found` });
        }

        await ContactRepository.delete(id);
        // 204: No Content
        response.sendStatus(204);
    }
}

module.exports = new ContactController();
