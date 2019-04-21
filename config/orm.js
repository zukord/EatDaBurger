var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(tableInput, values) {
        var queryString = "INSERT INTO ?? VALUES ?? ";
        connection.query(queryString, [tableInput, values], function(err, result) {
          if (err) throw err;
          console.log(result);
        });
      },
    updateOne: function(tableInput, colToUpdate, valOfCol, conditionColumn, conditionValue) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ??";
    connection.query(queryString, [tableInput, colToUpdate, valOfCol, conditionColumn, conditionValue], function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    }
};

module.exports = orm;