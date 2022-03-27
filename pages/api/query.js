// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TransactionsApi, ApiClient } from "../../clients/openfirm/dist";

const api_key = new ApiClient();

api_key.authentications["api_key"].apiKey = process.env.X_API_KEY;

const data = new TransactionsApi(api_key);

export default async function handler(req, res) {
  const { query } = req;
  const { merchant } = query;

  data.classifyMerchantByTransaction(merchant, function (error, response) {
    if (error) {
      console.error(error);
      res.status(500).json(error);
      return;
    }
    console.log("response", response);
    res.status(200).json(response);
  });
}

/* 
  
  });
*/
