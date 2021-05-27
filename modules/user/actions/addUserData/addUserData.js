const { users } = require(__basedir + "/db/controllers");

/**
 * Method to add new user
 * @param {object} userObj User object.
 * */
const addUserData = async userObj => {
    const user = await users.getUser({ email: userObj.email });
    console.log('user----',user)

    if (user) {
        return {
            user
        };
    }
    console.log('userObj----',userObj)
    const result = await users.createUser(userObj);
    console.log('result----',result)

    return {
        user: result
    };
};

module.exports = {
    addUserData
};