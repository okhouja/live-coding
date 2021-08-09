// #!/usr/bin/env node
// const dictionary = require("./lib/dictionary-client");
const args = process.argv.slice(2);
const wordID = args;

require("dotenv").config();
const http = require("http");

const PORT = process.env.PORT || 5000;
const axios = require("axios");
const config = require("./config");

async function dictionary() {
  const myId = config.apiID;
  const myKey = config.apiKey;

  const headers = {
    Accept: "application/json",
    app_id: myId,
    app_key: myKey,
  };
  try {
    const { data } = await axios.get(
      `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${wordID}?fields=definitions&strictMatch=false`,
      { headers }
    );

    console.log(data.results.lexicalEntries);
  } catch (error) {
    console.log("Error:", error.response.data);
  }
}

dictionary(wordID);
