const Register = require("../models/registration");

const getDetails = (req, res) => {
    const { userID, fullName, address, status } = req.body;
    const register = new Register({
        userID: userID,
        fullName: fullName,
        address: address,
        status: status
    });
    
    register.save()
        .then((saveObject) => {
            // Redirect with data as URL parameters

                res.json(saveObject);

        })
};

module.exports = getDetails;
