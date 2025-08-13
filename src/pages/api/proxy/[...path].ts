import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path = [] } = req.query;
  const targetUrl = `http://api.shaishasleisurehub.com/api/${(path as string[]).join("/")}`;

  try {
    let body: string | undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      body = await new Promise<string>((resolve, reject) => {
        let data = "";
        req.on("data", chunk => {
          data += chunk;
        });
        req.on("end", () => resolve(data));
        req.on("error", reject);
      });
    }

    const backendResponse = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers,
        host: undefined,
      } as any,
      body,
    });

    // Forward status
    res.status(backendResponse.status);

    // Forward headers
    backendResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Forward body
    const responseText = await backendResponse.text();
    res.send(responseText);
  } catch (error: any) {
    console.error("Proxy error:", error);
    res.status(500).json({ message: "Proxy request failed", error: error.message });
  }
}
