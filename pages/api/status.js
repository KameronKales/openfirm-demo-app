// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { status } from "../../providers/client";

export default async function handler(req, res) {
  /* 
  Dont do this

  Showing how to ping openfirm 


   */

  status.ping((error, data, response) => {
    if (error) {
      console.error(error);
      return res.status(500);
    }
    const { message } = data;
    console.log("status endpoint returned", message);
    res.status(200).json({ message });
    return;
  });
}
