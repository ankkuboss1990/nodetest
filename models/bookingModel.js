
var util = require('util');
var conn = require('../db_config') 
var query = util.promisify(conn.query).bind(conn);
const bookingModel = {
    get_available_seats:async function (number_of_seats) {

      var sql =`select a.seat_unique_id,a.seat_id,a.rank_order,a.row,a.status
   from seats a
      left join seats b on 
         a.seat_unique_id < b.seat_unique_id and
         b.seat_unique_id < a.seat_unique_id + ${number_of_seats} and
         b.status = 'A'
   where a.status = 'A'
   group by a.seat_unique_id
   having COUNT(IFNULL(b.seat_unique_id,0))+1 = ${number_of_seats}
   limit ${number_of_seats}`;

          try {
            rows = await query(sql);
               }
               catch (e) {
                
                console.log(e);
                
              }
        	 return rows;
    },
    reserve_seats: async function (seatToReserve) {
    let seat_str = seatToReserve.join("','");
    var sql_query = `UPDATE seats SET status = 'R' WHERE status = 'A' AND seat_id IN('${seat_str}');`;
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