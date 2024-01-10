function main(jobTitle, yearsOfExperience) {
    let accessLevel;

    switch (jobTitle) {
        case "Manager":
            accessLevel = "Full Access";
            break;
        case "Supervisor":
            if (yearsOfExperience >= 5) {
                accessLevel = "Full Access";
            } else {
                accessLevel = "Partial Access";
            }
            break;
        case "Associate":
            if (yearsOfExperience >= 3) {
                accessLevel = "Partial Access";
            } else if (yearsOfExperience >= 2) {
                accessLevel = "Limited Access";
            } else {
                accessLevel = "Trainee Access";
            }
            break;
        default:
            if (yearsOfExperience >= 2) {
                accessLevel = "Limited Access";
            } else {
                accessLevel = "Trainee Access";
            }
    }

    return accessLevel;
}

console.log(main("Associate", 2));
