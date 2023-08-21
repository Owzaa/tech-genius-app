var axios = require("axios");
var data = JSON.stringify({
  collection: "<employeeList>",
  database: "<employeeDB>",
  dataSource: "clusterTechGenius",
  projection: {
    _id: 1
  }
});

var config = {
  method: "post",
  url:
    "https://ap-south-1.aws.data.mongodb-api.com/app/data-xxiou/endpoint/data/v1/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "V1Kophw8b6IJ32aWDI7Kn9LJMvuYdu4xRod0dw16XdvuL0Z28VUbt1GmkEGAz53i"
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
