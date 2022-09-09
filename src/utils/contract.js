const nearAPI = require("near-api-js");
const { connect, Contract, KeyPair, keyStores } = nearAPI;

global.Buffer = global.Buffer || require('buffer').Buffer

// const ACCOUNT_ID = "near-example.testnet";  // NEAR account tied to the keyPair
// const NETWORK_ID = "testnet";
// // path to your custom keyPair location (ex. function access key for example account)
// const KEY_PATH = '/.near-credentials/near-example-testnet/get_token_price.json';

// const credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));
const myKeyStore = new keyStores.InMemoryKeyStore();
// myKeyStore.setKey(NETWORK_ID, ACCOUNT_ID, KeyPair.fromString(credentials.private_key));

const connectionConfig = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
};

async function getAccount() {
    const near = await connect(connectionConfig);
    const account = await near.account("zvyazok.testnet");
    return account;
}


async function getContract() {
    const account = await getAccount();
    const contract = new Contract(
        account,
        "zvyazok.testnet",
        {
            viewMethods: ["register_account", "send_message"],
            changeMethods: [],
            sender: account,
        }
    );
    return contract;

}

let registerAccount = async (phoneNumber) => {
    const contract = await getContract();

    await contract.register_account(
        {
            phone_number: phoneNumber
        }
    );
};

let sendMessage = async (from, to, message) => {
    await (await getContract()).register_account(
        {
            message: message,
            sender_phone_number: from,
            receiver_phone_number: to
        }
    );
};

export {registerAccount, sendMessage};
// export default sendMessage;
// export default contract;
