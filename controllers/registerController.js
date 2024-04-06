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
        .then(() => {
            // Redirect with data as URL parameters
                const data = {
                  name: 'John Doe',
                  age: 25,
                  city: 'New York'
                };
                res.json(data);

        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error saving data');
        });
};

module.exports = getDetails;
