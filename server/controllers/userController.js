// logic to resolve request

const users = require('../Model/userSchema')
const history = require('../Model/historySchema')

exports.register = async (req, res) => {

    const { username, email, password } = req.body

    try {
        const existUser = await users.findOne({ email })
        if (existUser) {
            res.status(406).json('account already exist....please login')
        } else {
            const NewUser = new users({
                username,
                email,
                password
            })
            await NewUser.save()

            res.status(200).json(NewUser)
        }
    }
    catch (err) {
        res.status(401).json(`register request failed due to ${err}`)
    }
}

// login
exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUsers = await users.findOne({ email, password })
        console.log(existingUsers);

        if (existingUsers) {

            res.status(200).json(existingUsers)
        }
        else {
            res.status(404).json("invalid email or password")
        }
    } catch (err) {
        res.status(401).json(`login request failed due to ${err}`);
    }
}

//add search history
exports.historyAdd = async (req, res) => {
    const { userId, searchKeyword } = req.body;

    if (!userId || !searchKeyword) {
        return res.status(400).json({ error: "Missing userId or searchKeyword" });
    }

    try {
        const newHistory = new history({
            userId,
            searchKeyword,
        });

        await newHistory.save();
        console.log(`New search history entry added: ${userId}, ${searchKeyword}`);
        return res.status(201).json({ newHistory });

    } catch (err) {
        console.error("Error saving search history:", err.message);
        return res.status(500).json({ error: "Failed to save search history" });
    }
};

//get all search history
exports.historyFetch = async (req, res) => {
    console.log(req.params);
    const { userId } = req.params
    try {
        const userHistory = await history.find({ userId })
        res.status(200).json(userHistory)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

//delete history
exports.historyDelete = async (req, res) => {
    const { id } = req.body
    try {
        const deleteHistory = await history.findOneAndDelete({ _id: id })
        if (!deleteHistory) {
            return res.status(404).json({ message: 'History not found' });
        }
        res.status(200).json({ deleteHistory, message: 'History deleted' })
    }
    catch (err) {
        res.status(401).json(err)
    }

}