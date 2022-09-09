const nearAPI = require("near-api-js");
const { connect, Contract } = nearAPI;

const nearConnection = await connect(connectionConfig);
const account = await nearConnection.account("zvyazok.testnet");

const contract = new Contract(
    account,
    "zvyazok.testnet",
    {
        viewMethods: ["register_account", "send_message"],
        sender: account,
    }
);

let registerAccount = async (phoneNumber) => {
    await contract.register_account(
        {
            args: {
                phone_number: phoneNumber
            },
        }
    );
};

let sendMessage = async (from, to, message) => {
    await contract.register_account(
        {
            args: {
                message: message,
                sender_phone_number: from,
                receiver_phone_number: to
            },
        }
    );
};

export default registerAccount;
export default sendMessage;
export default contract;
