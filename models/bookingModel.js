
var util = require('util');
var conn = require('../db_config') 
var query = util.promisify(conn.query).bind(conn);
const bookingModel = {
    get_available_seats:async function (number_of_seats) {
         var sql_query=`SELECT * FROM seats where status = 'A' order by row,rank_order limit ${number_of_seats}`;

          try {
                 rows = await query(sql_query);
               }
               catch (e) {
                
                console.log(e);
                
              }
        	 return rows;
    },
  sold_seats: async function (seatToSold) {
    let seat_str = seatToSold.join("','");
    var sql_query = `UPDATE seats SET status = 'S' WHERE status = 'R' AND seat_id IN('${seat_str}');`;
    try {
      rows = await query(sql_query);
    }
    catch (e) {

      console.log(e);

    }
    return rows;
  },
  back_to_avail: async function (seatToAvail) {
    let seat_str = seatToAvail.join("','");
    var sql_query = `UPDATE seats SET status = 'A' WHERE status = 'R' AND seat_id IN('${seat_str}');`;
    try {
      rows = await query(sql_query);
    }
    catch (e) {

      console.log(e);

    }
    return rows;
  }
}


module.exports = bookingModel;  