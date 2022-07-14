
const userRepo= require('../repository/userRepository');
module.exports = {
    async createUser (req, res) {
        try {
            // if (!req.body) return res.json("bad")
           
            // if (!email) res.status(200).json("bad")

            const { name, email } = req.body;
            const user = await userRepo.userCreate({ name, email })

            res.status(201).json(user)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: err
            })
         
        }           
    }
}