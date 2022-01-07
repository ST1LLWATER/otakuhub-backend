const { User } = require("../models");

module.exports = {
    createUser: async function ({ userInput }, req) {
        const existingUser = await User.findOne({
            where: { username: userInput.username },
        });
        if (existingUser) {
            const error = new Error("User Already Exists");
            throw error;
        }

        // const hashedPw = await bcrypt.hash(userInput.password, 13);

        console.log("Creating");

        const user = await User.create({
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            username: userInput.username,
            password: userInput.password, //HASH PASSWORD
        });

        // const createdUser = await user.save();
        return user;
    },



    hello() {
        return {
            hello: "hello There",
            data: "baka",
        };
    },

};
