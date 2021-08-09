// // #!/usr/bin/env node
// // const dictionary = require("./lib/dictionary-client");
// const axios = require("axios");
// const { APP_ID, API_KEY } = require("./config");
// const args = process.argv.slice(2);
// const wordID = args;
// const strictMatch = "false";

// async function dictionary() {
//   const myAPP_ID = APP_ID;
//   const myApp_Key= API_KEY
//   const headers = {
//     Accept: "application/json",
//     myAPP_ID: APP_ID,
//     myApp_Key: API_KEY,
//   };
//   try {
//     const { data } = await axios.get(
//       `https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/${wordID}?fields=definitions&strictMatch=false
//     `,
//       { headers }
//     );
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error.response.data);
//   }
// }
// dictionary();

// // const options = {
// //   host: "https://od-api.oxforddictionaries.com",
// //   port: "443",
// //   path: "/api/v2/entries/en-gb/" + wordID + "?strictMatch=" + strictMatch,
// //   headers: {
// //     Accept: "application/json",
// //     app_id: APP_ID,
// //     app_key: API_KEY,
// //   },
// // };

// // const printDefinitions = async () => {
// //   const definitions = await getDefinition();

// //   if (definitions.data.results) {
// //     console.log(
// //       definitions.data.results[0].lexicalEntries[0].entries[0].senses[0]
// //     );
// //   }
// // };

// // const connection = axios.create({
// //   baseURL: options.host,
// //   headers: options.headers,
// // });

// // const getDefinition = async () => {
// //   try {
// //     return await connection.get(options.path);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// // printDefinitions();

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
