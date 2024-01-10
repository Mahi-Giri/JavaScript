function introduce(city, country) {
    console.log(this.name + " is from " + city + ", " + country);
}

const person = {
    name: "Alice",
};

introduce.call(person, 'New York', 'USA');
introduce.apply(person, ['New York', 'USA']);