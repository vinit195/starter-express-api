import axios from "axios";
import qs from "qs";
export default function slackLogsForServerError(msg, url, method, body, params, query) {
  body = qs.stringify(body);
  params = qs.stringify(params);
  query = qs.stringify(query);
  return new Promise((reslove, reject) => {
    let data = qs.stringify({
      payload: `{"channel": "#elysian_server_error", "username": "Elysian Server Error", "text": " error *${msg}* \n *url* ${url} \n *method* ${method} \n *body* ${body} \n *params* ${params} \n *query* ${query}", "icon_emoji": ":x:"}`,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://hooks.slack.com/services/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",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        reslove(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
