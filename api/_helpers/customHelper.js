
module.exports = {
    /**
     * 
     * @param {*} inputDate input date not mandatory , if not present then return current date
     * @param {*} isDateTime if return time then pass true
     */
    dbDateTime(inputDate='',isDateTime=false){ 
        if(inputDate!=''){
            var d = new Date(inputDate);
            //console.log(d);
        }else{
            var d = new Date();
        }          
        var year =  d.getFullYear();
        var month =  ("0" + (d.getMonth() + 1)).slice(-2);
        var date =  ("0" + d.getDate()).slice(-2);
        var hour =  ("0" + (d.getHours() + 1)).slice(-2);
        var minutes =  ("0" + d.getMinutes()).slice(-2);
        var seconds =  ("0" + d.getSeconds()).slice(-2);
        if(isDateTime==true){   
            return year+'-'+month+'-'+date+' '+hour+':'+minutes+':'+seconds;
        }else{
            return year+'-'+month+'-'+date;
        }

    }

}

/***
 * This helper file is created to write common function throughout the projects
 * Created By- ashwincoool
 */