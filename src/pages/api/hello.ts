// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const postDAta = (datasss: any) => {
    let data = stringify(datasss);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://61a897c033e9df0017ea39cd.mockapi.io/api/ver1/ip",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.my-ip.io/ip.json",
    headers: {},
  };
  setInterval(() => {
    const now = dayjs();
    axios
      .request(config)
      .then((response) => {
        postDAta({
          ip: response.data.ip,
          date: now.format("YYYY-MM-DD HH:mm"),
          name: "server 4",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 10000);
  res.status(200).json({ name: "John Doe" });
}
