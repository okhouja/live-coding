const axios = require("axios");
const url = require("url");
const config = require("../../config");

async function dictionary() {
  const myId = config.apiID;
  const myKey = config.apiKey;

  const headers = {
    app_id: myId,
    app_key: myKey,
  };
  try {
    const { data } = await axios.post(
      "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/ace?strictMatch=false",
      { headers }
    );

    console.log("Result data:", data);
  } catch (error) {
    console.log("Error:", error.response.data);
  }
}

// class Dictionary {
//   constructor(api) {
//     this.apiID = "apiID";
//     this.apiKey = "apiKey";
//     this.baseUrl = "https://od-api.oxforddictionaries.com/api/v2";
//   }
//   get(endpoint){
//       const URL= url.resolve(this.baseUrl,endpoint)+``
//   }
// }
