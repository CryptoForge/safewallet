let electrumServers = {
  safecoin: { // !estimatefee
    address: 'local.support',
    port: 10001,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'SAFE',
    serverList: [
      'local.support:10001',
      '45.63.13.60:10001'
    ],
  },
  bitcoinz: { // !estimatefee
    address: 'electrum1.cipig.net',
    port: 10056,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'BTCZ',
    serverList: [
      'electrum1.cipig.net:10056',
      'electrum2.cipig.net:10056'
    ],
  },
  snowgem: { // !estimatefee 50002-ssl
    address: 'electrumsvr.snowgem.org',
    port: 50001,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'XSG',
    serverList: [
      'electrumsvr.snowgem.org:50001',
      'electrumsvr2.snowgem.org:50001',
      'local.support:50001'
    ],
  },
  cmm: { // !estimatefee 50002-ssl
    address: 'elec01.commercium.net',
    port: 50001,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'CMM',
    serverList: [
      'elec01.commercium.net:50001',
      'elec02.commercium.net:50001'
    ],
  },
/*
  supernet: { // !estimatefee
    address: 'electrum1.ipv6admin.com',
    port: 10005,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'SUPERNET',
    serverList: [
      'electrum1.ipv6admin.com:10005',
      'electrum2.ipv6admin.com:10005'
    ],
  },
  jumblr: { // !estimatefee
    address: 'electrum1.ipv6admin.com',
    port: 10004,
    proto: 'tcp',
    txfee: 10000,
    abbr: 'JUMBLR',
    serverList: [
      'electrum1.ipv6admin.com:10004',
      'electrum2.ipv6admin.com:10004'
    ],
  },
*/
  };

electrumServers.btcz = electrumServers.bitcoinz;
electrumServers.xsg = electrumServers.snowgem;

module.exports = electrumServers;