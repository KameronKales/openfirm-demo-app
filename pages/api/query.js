// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transactions, status } from "../../providers/client";

export default async function handler(req, res) {
  const { query } = req;
  const { merchant } = query;
  const sendData = {
    merchant,
  };

  /* 
  Dont do this

  Showing how to queue a transaction being labeled if you don't need response right now

  Once labeled, system will post data to your configured webhook

   */

  status.ping((error, data, response) => {
    if (error) {
      console.error(error);
    }
    const { message } = data;
    console.log("status endpoint returned", message);
  });

  transactions.queueTransaction(sendData, function (error, data) {
    if (error) {
      console.error(error);
      return;
    }
    const { id } = data;
    console.log(
      `Transaction with id ${id} queued. Once labeled your configured webhook will be called`
    );
  });
  transactions.classifyMerchantByTransaction(merchant, function (error, data) {
    if (error) {
      console.error(error);
      res.status(500).json(error);
      return;
    }
    console.log("data", data);
    res.status(200).json(data);
  });
}
