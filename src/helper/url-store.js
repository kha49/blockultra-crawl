const API_URL = {
    funds                   : "https://api.cryptorank.io/v0/funds?limit=10000&offset=0",
    global                  : "https://api.cryptorank.io/v0/global",
    tag                     : "https://api.cryptorank.io/v0/coin-tags?withSummary=true",
    volumeIdo               : "https://api.cryptorank.io/v0/ido-platforms?isFull=false",
    volumeForCoinGroup      : "https://api.cryptorank.io/v0/analytics/volume-for-coins-group",
    exchange                : "https://api.cryptorank.io/v0/exchanges?group=main,other,dex",
    getExchangeChart        : "https://api.cryptorank.io/v0/charts/volumes-by-exchange",
    category                : "https://api.cryptorank.io/v0/coin-categories?withSummary=true",
    coin                    : "https://api.cryptorank.io/v0/coins",
    fundraising             : "https://api.cryptorank.io/v0/funding-rounds-v2",
    ieoido_project_ended    : "https://api.cryptorank.io/v0/round/past",
    ieoido_project_upcoming : "https://api.cryptorank.io/v0/round/upcoming",
    ieoido_top_launchpad    : "https://api.cryptorank.io/v0/ido-platforms?isFull=true",
    token_unlock            : "https://api.cryptorank.io/v0/consolidated-vesting",
};

module.exports = {API_URL};
