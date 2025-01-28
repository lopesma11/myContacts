const { uuid } = require("uuidv4");

let contacts = [
    {
        id: uuid(),
        name: "Matheus Lopes",
        email: "matheuslopes@email.com",
        phone: "19987654321",
        category_id: uuid(),
    },
    {
        id: uuid(),
        name: "Maria Eduarda",
        email: "mariaeduarda@email.com",
        phone: "19987654321",
        category_id: uuid(),
    },
    {
        id: uuid(),
        name: "Vanessa Lopes",
        email: "vanlopes@email.com",
        phone: "19987654321",
        category_id: uuid(),
    },
];

class ContactRepository {
    findAll() {
        return new Promise((resolve, reject) => resolve(contacts));
    }

    findById(id) {
        return new Promise((resolve, reject) =>
            resolve(contacts.find((contact) => contact.id === id))
        );
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactRepository();
