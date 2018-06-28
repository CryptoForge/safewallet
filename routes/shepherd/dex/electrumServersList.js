// TODO: merge with spv mode

const electrumServersList = {
  "SAFE": [{"local.support":10001},{"45.63.13.60":10001}],
  "BTCZ": [{"electrum1.cipig.net": 10056},{"electrum2.cipig.net": 10056}],
  "XSG": [{"electrumsvr.snowgem.org": 50001},{"electrumsvr2.snowgem.org": 50001},{"local.support": 50001}],
  "CMM": [{"elec01.commercium.net": 50001},{"elec02.commercium.net": 50001}],
  "ARG": [{"173.212.225.176": 50081},{"136.243.45.140": 50081}],
  "BET": [{"electrum2.ipv6admin.com":10012},{"electrum1.ipv6admin.com":10012}],
  "BTC": [{"electrum2.ipv6admin.com":10000},{"electrum1.ipv6admin.com":10000}],
  "BOTS": [{"electrum2.ipv6admin.com":10007},{"electrum1.ipv6admin.com":10007}],
  "CHIPS": [{"173.212.225.176": 50076},{"136.243.45.140": 50076}],
  "COQUI": [{"electrum2.ipv6admin.com":10011},{"electrum1.ipv6admin.com":10011}],
  "CRW": [{"173.212.225.176": 50041},{"136.243.45.140": 50041}],
  "CRYPTO": [{"electrum2.ipv6admin.com":10008},{"electrum1.ipv6admin.com":10008}],
  "DASH": [{"173.212.225.176": 50098},{"136.243.45.140": 50098}],
  "DEX": [{"electrum2.ipv6admin.com":10006},{"electrum1.ipv6admin.com":10006}],
  "DGB": [{"136.243.45.140": 50022},{"173.212.225.176": 50022}],
  "DOGE": [{"173.212.225.176": 50015},{"136.243.45.140": 50015}],
  "EMC2": [{"173.212.225.176": 50079},{"136.243.45.140": 50079}],
  "FAIR": [{"173.212.225.176": 50005},{"136.243.45.140": 50005}],
  "HODL": [{"electrum2.ipv6admin.com":10009},{"electrum1.ipv6admin.com":10009}],
  "HUSH": [{"173.212.225.176": 50013},{"136.243.45.140": 50013}],
  "JUMBLR": [{"electrum2.ipv6admin.com": 10004},{"electrum1.ipv6admin.com": 10004}],
  "LTC": [{"173.212.225.176": 50012},{"136.243.45.140": 50012}],
  "MNZ": [{"electrum2.ipv6admin.com":10002},{"electrum1.ipv6admin.com":10002}],
  "MONA": [{"173.212.225.176": 50002},{"136.243.45.140": 50002}],
  "MSHARK": [{"electrum2.ipv6admin.com": 10013},{"electrum1.ipv6admin.com": 10013}],
  "NMC": [{"173.212.225.176": 50036},{"136.243.45.140": 50036}],
  "PANGEA": [{"electrum2.ipv6admin.com": 10010},{"electrum1.ipv6admin.com": 10010}],
  "REVS": [{"electrum2.ipv6admin.com": 10003},{"electrum1.ipv6admin.com": 10003}],
  "SUPERNET": [{"electrum2.ipv6admin.com": 10005},{"electrum1.ipv6admin.com": 10005}],
  "VIA": [{"173.212.225.176": 50033},{"136.243.45.140": 50033}],
  "VTC": [{"173.212.225.176": 50088},{"136.243.45.140": 50088}],
  "WLC": [{"electrum2.ipv6admin.com": 10014},{"electrum1.ipv6admin.com": 10014}],
  "ZEC": [{"173.212.225.176": 50032},{"136.243.45.140": 50032}]
};

module.exports = (shepherd) => {
  shepherd.electrumServersList = electrumServersList;
  return shepherd;
};