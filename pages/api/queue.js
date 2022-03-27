// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transactions } from "../../providers/client";

export default async function handler(req, res) {
  const { query } = req;
  const { merchant } = query;
  if (!query || !merchant) {
    return res.status(400).json({ error: "Merchant must be provided" });
  }
  const sendData = {
    merchant,
  };

  /* 

  Showing how to queue a transaction being labeled if you don't need response right now

  Once labeled, system will post data to your configured webhook

   */

  transactions.queueTransaction(sendData, function (error, data) {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    const { id } = data;
    console.log(
      `Transaction with id ${id} queued. Once labeled your configured webhook will be called`
    );
    res.status(200).json({ id });
    return;
  });
}
