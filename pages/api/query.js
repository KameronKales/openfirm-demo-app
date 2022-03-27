// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TransactionsApi, ApiClient } from "../../clients/openfirm/dist";

const api_key = new ApiClient();

api_key.authentications["api_key"].apiKey = process.env.X_API_KEY;

const data = new TransactionsApi(api_key);

export default function handler(req, res) {
  const { query } = req;
  const { merchant } = query;
  data.classifyMerchantByTransaction(merchant, function (error, data) {
    if (error) {
      console.error(error);
      res.status(500).json(error);
      return;
    }
    res.status(200).json(data);
  });
}
