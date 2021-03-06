import {
  GETWALLETSERVICE_ATTEMPT, GETWALLETSERVICE_FAILED, GETWALLETSERVICE_SUCCESS,
  GETTICKETBUYERSERVICE_ATTEMPT, GETTICKETBUYERSERVICE_FAILED, GETTICKETBUYERSERVICE_SUCCESS,
  GETBALANCE_ATTEMPT, GETBALANCE_FAILED, GETBALANCE_SUCCESS,
  GETACCOUNTNUMBER_ATTEMPT, GETACCOUNTNUMBER_FAILED, GETACCOUNTNUMBER_SUCCESS,
  GETNETWORK_ATTEMPT, GETNETWORK_FAILED, GETNETWORK_SUCCESS,
  GETPING_ATTEMPT, GETPING_FAILED, GETPING_SUCCESS,
  GETSTAKEINFO_ATTEMPT, GETSTAKEINFO_FAILED, GETSTAKEINFO_SUCCESS,
  GETTICKETPRICE_ATTEMPT, GETTICKETPRICE_FAILED, GETTICKETPRICE_SUCCESS,
  GETACCOUNTS_ATTEMPT, GETACCOUNTS_FAILED, GETACCOUNTS_SUCCESS,
  GETTRANSACTIONS_ATTEMPT, GETTRANSACTIONS_FAILED,  GETTRANSACTIONS_COMPLETE,
  GETTRANSACTIONS_UNMINED_PROGRESS,
  GETTRANSACTIONS_PROGRESS_REGULAR, GETTRANSACTIONS_PROGRESS_COINBASE,
  GETTRANSACTIONS_PROGRESS_TICKET,
  GETTRANSACTIONS_PROGRESS_VOTE, GETTRANSACTIONS_PROGRESS_REVOKE,
  UPDATETIMESINCEBLOCK,

  GETAGENDASERVICE_ATTEMPT, GETAGENDASERVICE_FAILED, GETAGENDASERVICE_SUCCESS,
  GETVOTINGSERVICE_ATTEMPT, GETVOTINGSERVICE_FAILED, GETVOTINGSERVICE_SUCCESS,
  GETAGENDAS_ATTEMPT, GETAGENDAS_FAILED, GETAGENDAS_SUCCESS,
  GETVOTECHOICES_ATTEMPT, GETVOTECHOICES_FAILED, GETVOTECHOICES_SUCCESS,
  SETVOTECHOICES_ATTEMPT, SETVOTECHOICES_FAILED, SETVOTECHOICES_SUCCESS,
  UPDATEHIDDENACCOUNTS,
} from '../actions/ClientActions';

export default function grpc(state = {}, action) {
  switch (action.type) {
  case GETWALLETSERVICE_ATTEMPT:
    return {
      ...state,
      getWalletServiceError: null,
      getWalletServiceRequestAttempt: true,
    };
  case GETWALLETSERVICE_FAILED:
    return {
      ...state,
      getWalletServiceError: String(action.error),
      getWalletServiceRequestAttempt: false,
    };
  case GETWALLETSERVICE_SUCCESS:
    return {
      ...state,
      getWalletServiceError: null,
      getWalletServiceRequestAttempt: false,
      walletService: action.walletService,
    };
  case GETTICKETBUYERSERVICE_ATTEMPT:
    return {
      ...state,
      getTicketBuyerServiceError: null,
      getTicketBuyerServiceRequestAttempt: true,
    };
  case GETTICKETBUYERSERVICE_FAILED:
    return {
      ...state,
      getTicketBuyerServiceError: String(action.error),
      getTicketBuyerServiceRequestAttempt: false,
    };
  case GETTICKETBUYERSERVICE_SUCCESS:
    return {
      ...state,
      getTicketBuyerError: null,
      getTicketBuyerServiceRequestAttempt: false,
      ticketBuyerService: action.ticketBuyerService,
    };
  case GETBALANCE_ATTEMPT:
    return {
      ...state,
      getBalanceError: null,
      getBalanceRequestAttempt: true,
    };
  case GETBALANCE_FAILED:
    return {
      ...state,
      getBalanceError: String(action.error),
      getBalanceRequestAttempt: false,
    };
  case GETBALANCE_SUCCESS:
    return {
      ...state,
      getBalanceError: '',
      getBalanceRequestAttempt: false,
      balances: action.balances,
    };
  case GETACCOUNTNUMBER_ATTEMPT:
    return {
      ...state,
      getAccountNumberError: '',
      getAccountNumberRequestAttempt: true,
    };
  case GETACCOUNTNUMBER_FAILED:
    return {
      ...state,
      getAccountNumberError: String(action.error),
      getAccountNumberRequestAttempt: false,
    };
  case GETACCOUNTNUMBER_SUCCESS:
    return {
      ...state,
      getAccountNumberError: '',
      getAccountNumberRequestAttempt: false,
      getAccountNumberResponse: action.getAccountNumberResponse,
    };
  case GETNETWORK_ATTEMPT:
    return {
      ...state,
      getNetworkError: null,
      getNetworkRequestAttempt: true,
    };
  case GETNETWORK_FAILED:
    return {
      ...state,
      getNetworkError: String(action.error),
      getNetworkRequestAttempt: false,
    };
  case GETNETWORK_SUCCESS:
    return {
      ...state,
      getNetworkError: null,
      getNetworkRequestAttempt: false,
      getNetworkResponse: action.getNetworkResponse,
    };
  case GETPING_ATTEMPT:
    return {
      ...state,
      getPingError: '',
      getPingRequestAttempt: true,
    };
  case GETPING_FAILED:
    return {
      ...state,
      getPingError: String(action.error),
      getPingRequestAttempt: false,
    };
  case GETPING_SUCCESS:
    return {
      ...state,
      getPingError: '',
      getPingRequestAttempt: false,
      getPingResponse: action.getPingResponse,
    };
  case GETSTAKEINFO_ATTEMPT:
    return {
      ...state,
      getStakeInfoError: '',
      getStakeInfoRequestAttempt: true,
    };
  case GETSTAKEINFO_FAILED:
    return {
      ...state,
      getStakeInfoError: String(action.error),
      getStakeInfoRequestAttempt: false,
    };
  case GETSTAKEINFO_SUCCESS:
    return {
      ...state,
      getStakeInfoError: '',
      getStakeInfoRequestAttempt: false,
      getStakeInfoResponse: action.getStakeInfoResponse,
    };
  case GETTICKETPRICE_ATTEMPT:
    return {
      ...state,
      getTicketPriceError: '',
      getTicketPriceRequestAttempt: true,
    };
  case GETTICKETPRICE_FAILED:
    return {
      ...state,
      getTicketPriceError: String(action.error),
      getTicketPriceRequestAttempt: false,
    };
  case GETTICKETPRICE_SUCCESS:
    return {
      ...state,
      getTicketPriceError: '',
      getTicketPriceRequestAttempt: false,
      getTicketPriceResponse: action.getTicketPriceResponse,
    };
  case GETACCOUNTS_ATTEMPT:
    return {
      ...state,
      getAccountsError: '',
      getAccountsRequestAttempt: true,
    };
  case GETACCOUNTS_FAILED:
    return {
      ...state,
      getAccountsError: String(action.error),
      getAccountsRequestAttempt: false,
    };
  case GETACCOUNTS_SUCCESS:
    return {
      ...state,
      getAccountsError: '',
      getAccountsRequestAttempt: false,
      getAccountsResponse: action.response,
    };
  case UPDATEHIDDENACCOUNTS:
    return {
      ...state,
      hiddenAccounts: action.hiddenAccounts,
    };
  case GETTRANSACTIONS_ATTEMPT:
    return {
      ...state,
      regularTransactionsInfo: Array(),
      coinbaseTransactionsInfo: Array(),
      ticketTransactionsInfo: Array(),
      voteTransactionsInfo: Array(),
      revokeTransactionsInfo: Array(),
      getTransactionsRequestAttempt: true,
    };
  case GETTRANSACTIONS_FAILED:
    return {
      ...state,
      getTransactionsRequestError: String(action.error),
      getTransactionsRequestAttempt: false,
    };
  case GETTRANSACTIONS_COMPLETE:
    return {
      ...state,
      getTransactionsRequestError: '',
      getTransactionsRequestAttempt: false,
    };
  case GETTRANSACTIONS_PROGRESS_REGULAR:
    return {
      ...state,
      regularTransactionsInfo: action.regularTransactionsInfo,
    };
  case GETTRANSACTIONS_PROGRESS_COINBASE:
    return {
      ...state,
      coinbaseTransactionsInfo: action.coinbaseTransactionsInfo,
    };
  case GETTRANSACTIONS_PROGRESS_TICKET:
    return {
      ...state,
      ticketTransactionsInfo: action.ticketTransactionsInfo,
    };
  case GETTRANSACTIONS_PROGRESS_VOTE:
    return {
      ...state,
      voteTransactionsInfo: action.voteTransactionsInfo,
    };
  case GETTRANSACTIONS_PROGRESS_REVOKE:
    return {
      ...state,
      revokeTransactionsInfo: action.revokeTransactionsInfo,
    };
  case GETTRANSACTIONS_UNMINED_PROGRESS:
    return {
      ...state,
      unminedTransactions: action.unmined,
    };
  case UPDATETIMESINCEBLOCK:
    return {
      ...state,
      timeSinceString: action.timeSinceString,
    };
  case GETAGENDASERVICE_ATTEMPT:
    return {
      ...state,
      getAgendaServiceError: null,
      getAgendaServiceRequestAttempt: true,
    };
  case GETAGENDASERVICE_FAILED:
    return {
      ...state,
      getAgendaServiceError: String(action.error),
      getAgendaServiceRequestAttempt: false,
    };
  case GETAGENDASERVICE_SUCCESS:
    return {
      ...state,
      getAgendaServiceRequestAttempt: false,
      agendaService: action.agendaService,
    };
  case GETVOTINGSERVICE_ATTEMPT:
    return {
      ...state,
      getVotingServiceError: null,
      getVotingServiceRequestAttempt: true,
    };
  case GETVOTINGSERVICE_FAILED:
    return {
      ...state,
      getVotingServiceError: String(action.error),
      getVotingServiceRequestAttempt: false,
    };
  case GETVOTINGSERVICE_SUCCESS:
    return {
      ...state,
      getVotingServiceRequestAttempt: false,
      votingService: action.votingService,
    };
  case GETAGENDAS_ATTEMPT:
    return {
      ...state,
      getAgendasError: null,
      getAgendasRequestAttempt: true,
    };
  case GETAGENDAS_FAILED:
    return {
      ...state,
      getAgendasError: String(action.error),
      getAgendasRequestAttempt: false,
    };
  case GETAGENDAS_SUCCESS:
    return {
      ...state,
      getAgendasRequestAttempt: false,
      getAgendasResponse: action.agendas,
    };
  case GETVOTECHOICES_ATTEMPT:
    return {
      ...state,
      getVoteChoicesError: null,
      getVoteChoicesRequestAttempt: true,
    };
  case GETVOTECHOICES_FAILED:
    return {
      ...state,
      getVoteChoicesError: String(action.error),
      getVoteChoicesRequestAttempt: false,
    };
  case GETVOTECHOICES_SUCCESS:
    return {
      ...state,
      getVoteChoicesRequestAttempt: false,
      getVoteChoicesResponse: action.voteChoices,
    };
  case SETVOTECHOICES_ATTEMPT:
    return {
      ...state,
      setVoteChoicesError: null,
      setVoteChoicesRequestAttempt: true,
    };
  case SETVOTECHOICES_FAILED:
    return {
      ...state,
      setVoteChoicesError: String(action.error),
      setVoteChoicesRequestAttempt: false,
    };
  case SETVOTECHOICES_SUCCESS:
    return {
      ...state,
      setVoteChoicesRequestAttempt: false,
      setVoteChoicesResponse: action.voteChoices,
    };
  default:
    return state;
  }
}
