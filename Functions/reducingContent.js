const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
];

function mapContactsToCompanies(contacts) {
    const companiesMap = contacts.reduce((accumulator, contact) => {
        const { name, company } = contact;

        if (!accumulator[company]) {
            accumulator[company] = [];
        }

        accumulator[company].push(name);
        return accumulator;
    }, {});

    return companiesMap;
}

const mappedContacts = mapContactsToCompanies(contacts);
console.log(mappedContacts);
