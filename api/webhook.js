export default function handler(req, res) {
  const VERIFY_TOKEN = "shourov123";

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }

  if (req.method === "POST") {
    console.log("Webhook received:", req.body);
    res.status(200).send("EVENT_RECEIVED");
  }
                         }
