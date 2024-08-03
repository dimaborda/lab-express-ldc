import algosdk from 'algosdk';
import * as algokit from '@algorandfoundation/algokit-utils'

    //! crear una cuenta, retornar el mnemonik
    //! copiar el nmonik
    //! Recuperar la cuenta a partir del mnemonik (de 25 palabreas)
    //! Verificar el saldo en testnet o localnet
    //! Fondear una cuenta por medio de la faucet de testnet
    //! Enviar un pago de una cuenta a otra por medio de código
// const algodClient = () => {
//     // const algodToken = 'a'.repeat(64)
//     // const algodServer = 'http://localhost'
//     // const algodPort = 4001;
//     // const algodClient = //! LOCAL --------->algosdk.Algodv2(algodToken, algodServer, algodPort);
//     return algodClient;
// }
const algodClient = new algokit.getAlgoClient(algokit.getAlgoNodeConfig("testnet","algod"));



const AccountAlgorand = async (require, response) => {
    const generatedAccount = algosdk.generateAccount();
    const passphrase = algosdk.secretKeyToMnemonic(generatedAccount.sk);
    response.status(200).json({ address: generatedAccount.addr, passphrase: passphrase });
}
const recoverAccount = (req, res) => {
    const { mnemonic } = req.body;
    try {
        const recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic);
        res.json({ address: recoveredAccount.addr });
    } catch (error) {
        res.status(400).json({ error: 'Invalid mnemonic' });
    }
}

const sendPayment = async (req, res) => {
    const {fromMnemonic, toAddress, amount } = req.body;
    try {
        console.log(Object.keys(algodClient));
        const fromAccount = algosdk.mnemonicToSecretKey(fromMnemonic);
        const suggestedParams = await algodClient.getTransactionParams().do();
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: 'LW2JHIN5XHNHVTCHTQ7FBHNR5J44G4B45LZIVF3BNZR37M6B5LDGCEIKS4',
            to: toAddress,
            suggestedParams,
            amount: amount,
            note: new Uint8Array(Buffer.from('hello world')),
        });

        const signedTxn = txn.signTxn(fromAccount.sk);
        const { txId } = await algodClient.sendRawTransaction(signedTxn).do();
        const result = await algosdk.waitForConfirmation(algodClient, txId, 4);
        res.json({ transactionId: txId, transactionInfo: result });
    } catch (error) {
        res.status(400).json({ error: 'Transaction failed', e: error.message });
    }
}


export default { AccountAlgorand, recoverAccount, sendPayment };












// const jwt = require('jsonwebtoken');
// const config = require('../config');

// // Importar los módulos necesarios

// // Controlador para generar un token de autenticación
// function generateToken(user) {
//     // Crear el token utilizando el módulo jwt
//     const token = jwt.sign(user, config.secret, { expiresIn: '1h' });
//     return token;
// }

// // Controlador para verificar un token de autenticación
// function verifyToken(token) {
//     try {
//         // Verificar el token utilizando el módulo jwt
//         const decoded = jwt.verify(token, config.secret);
//         return decoded;
//     } catch (error) {
//         throw new Error('Token inválido');
//     }
// }

// // Exportar los controladores
// module.exports = {
//     generateToken,
//     verifyToken
// };