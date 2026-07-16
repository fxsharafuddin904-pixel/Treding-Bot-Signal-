const axios = require("axios");
const { API_URL } = require("../config");

module.exports = async () => {
  try {
    const res = await axios.get(API_URL);

    return res.data;
  } catch (err) {
    return null;
  }
};
