require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom process only venture stove dash sister clump grace bag army gauge'; 
let testAccounts = [
"0xb2b0620cd78770bbf0a37572fcee0da489cb4ebaa762b3a5ad3054f4e3395b2d",
"0x02b299d9deeb190b20aa43177865aed82a86609f15a60d8d1a3a046bf0a0eb34",
"0x2b1bb1e4ffbf192291de7762b49c06fba65a90a916c316950d8488c5a97f4ab7",
"0x209fdb53bec2e14373faae842c203faa7546fdb240df8bd07f5359ac6dcd2369",
"0xe115d95c13ef70a5c38b9223b183a542f2ebafa1a3f85a028401b40783d96c77",
"0xb027d3ae17b805f45d3d4274310d416ed6b3cb524761a6f63679661757650c8d",
"0x887a559e5d917480a8913b6bf43fb8a39b6a991455f3a3fda80183bf9da86c2f",
"0xea2a1385268d512a7ba0a4d7f6df69d9cc100c6c4abeae7500ef32cfdd12a361",
"0xf8ed027769f0a3b60d9abbd57e50e48f33fc6fd7f7de74ecc53390ce4e6c605e",
"0xec1e6d71b54151e8c8bf8cd3b0ca39dc9c4e7dce6562922c164081dc49936660"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


