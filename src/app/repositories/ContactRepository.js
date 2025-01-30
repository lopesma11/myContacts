const { v4 } = require("uuid");
const db = require("../../database");

let contacts = [
    {
        id: v4(),
        name: "Matheus Lopes",
        email: "matheuslopes@email.com",
        phone: "19987654321",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Maria Eduarda",
        email: "mariaeduarda@email.com",
        phone: "19987654321",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Vanessa Lopes",
        email: "vanlopes@email.com",
        phone: "19987654321",
        category_id: v4(),
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

    findByEmail(email) {
        return new Promise((resolve, reject) => {
            resolve(contacts.find((contact) => contact.email === email));
        });
    }

    async create({ name, email, phone, category_id }) {
        const [row] = await db.query(
            `INSERT INTO contacts (name, email, phone, category_id)
            VALUES ($1, $2, $3, $4)
            RETURNING *"
        `,
            [name, email, phone, category_id]
        );

        return row;
    }

    update(id, { name, email, phone, category_id }) {
        return new Promise((resolve, reject) => {
            const updatedContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id,
            };

            contacts = contacts.map((contact) => {
                contact.id === id ? updatedContact : contact;
            });

            resolve(updatedContact);
        });
    }
}

module.exports = new ContactRepository();
