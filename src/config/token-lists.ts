const BA_LIST = 'https://raw.githubusercontent.com/The-Blockchain-Association/sec-notice-list/master/ba-sec-list.json'

const HGLIST =
  'https://raw.githubusercontent.com/holygrailone/holygrail-dfk-amm-interface/main/src/constants/token-lists/holygrail.tokenlist.json'

// used to mark unsupported tokens, these are hosted lists of unsupported tokens
/**
 * @TODO add list from blockchain association
 */
export const UNSUPPORTED_LIST_URLS: string[] = [BA_LIST]

const DFK =
  'https://raw.githubusercontent.com/DefiKingdoms/community-token-list/main/src/defikingdoms-default.tokenlist.json'
const DFKC =
  'https://raw.githubusercontent.com/DefiKingdoms/community-token-list/main/build/defikingdoms-community.tokenlist.json'

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  // COMPOUND_LIST,
  // AAVE_LIST,
  // CMC_ALL_LIST,
  // CMC_STABLECOIN,
  // UMA_LIST,
  // YEARN_LIST,
  // SYNTHETIX_LIST,
  // WRAPPED_LIST,
  // SET_LIST,
  // ROLL_LIST,
  // COINGECKO_LIST,
  // KLEROS_LIST,
  // OPYN_LIST,
  // NFTX_LIST,
  // OPTIMISM_LIST,
  // GEMINI_LIST,
  // DHEDGE_LIST,
  HGLIST,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [HGLIST]
