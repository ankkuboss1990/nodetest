
 
var helper = {

   res: {
       response_code:500,
       service_name:'',
       message:'',
       error:{},
       data:{},
       global_error:""     
    },
     array_column:function(array, columnName) {

        var temp = [];
        array.forEach(function(element) {
          temp.push(element[columnName]);
        })
        return temp
    },
}

module.exports = helper