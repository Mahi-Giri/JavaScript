function main() {
    const userProfile = {
        name: "John Doe",
        email: "john.doe@example.com",
        address: {
            city: "New York",
            street: "123 Main St",
            zipCode: "10001"
        }
    };
    const userProfile2 = {
        name: "Marry Jane",
        email: "marry.jane@example.com",
        address: {
            city: "L.A",
            street: "154, washington road",
            block: '0101',
            zipCode: "10011"
        }
    };

    function getUserDetail(profile, data) {
        for (const element of data) {
            profile = profile[element];
            if (profile === undefined) {
                return "Not available";
            }
        }
        return profile;
    }

    console.log(getUserDetail(userProfile, ["address","block"]));
    return getUserDetail;
}


main();