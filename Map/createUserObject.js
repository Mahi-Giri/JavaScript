const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];

function createUserObjects(ids, names, images) {
    const userObjects = ids.map((id, index) => {
        return {
            id: id,
            name: names[index],
            image: images[index]
        };
    });
    return userObjects;
}

const users = createUserObjects(ids, names, images);
console.log(users);