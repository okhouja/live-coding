const args = process.argv.slice(2);
const wordID = args;
const axios = require("axios");
const config = require("./config");
async function dictionary() {
  const myId = config.APP_ID;
  const myKey = config.API_KEY;
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
    console.log(
      data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
    );
  } catch (error) {
    console.log("Error:", error.response.data);
  }
}
dictionary(wordID);
