require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember smile hidden clog off tackle'; 
let testAccounts = [
"0x4d484814ca1053127fdcddebc20d635bb95e5a17fe9f33f4112101002ce43e48",
"0xdf0dffc0c0c9c7c3b62da74747f9d496d4a27003708a6eb3830d814c3659ade1",
"0xa8198d1b39a73a954846fcd7c82b0fc345b0078f877d4d40fd60f3eb6421b2e2",
"0xab702912256ff9a5f59ddef079785195a354c00a8ca07679f33442af2bc56ccc",
"0x9b424824896626c89544336a260c674a85547230ba95007ec4f979f71da32adc",
"0x3b1f7c7d576667f63ca68c85ac424e91cf6e375d0c636b42d898c92fde93efcc",
"0x9e3f50027f31df74d2413b9acc0b94c85361430e04757be5834a8b373262a31c",
"0x88f41ad0b00033563d50451e1f470908845f0e32efed0b9ad6802fd8e2ece623",
"0x6f1d6dd6b327e002a14a5db2a3388c67784d6488decac1ce6c60f709d1a8791b",
"0xf4a83c134b83f753ad4c0a7cd0e1cc10d7a50f628c6ecd014a3f78e966a026b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

