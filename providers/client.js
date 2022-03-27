import { TransactionsApi, ApiClient, StatusApi } from "../clients/openfirm";

const api_key = new ApiClient();

api_key.authentications["api_key"].apiKey = process.env.X_API_KEY;

export const transactions = new TransactionsApi(api_key);
export const status = new StatusApi();
