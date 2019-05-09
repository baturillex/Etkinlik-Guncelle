const sql = require('mssql');

var webconfig = {
  user: 'batuhan  ',
  password: 'batuhan28',
  server: '192.168.1.115',
  database: 'MEDIPILIMDB'
};

module.exports.userLogin = function(req, res) {
  sql.connect(webconfig, function(err) {
    if (err) console.log(err);
    var request1 = new sql.Request();
    request1.query('', function(err, verisonucu) {
      if (err) {
        console.log(err);
      }
      console.log(verisonucu.recordsets);
      sql.close();
      res.render('home', { veri: verisonucu.recordsets });
    });
  });
};
