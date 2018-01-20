import $ from 'jquery';
import Moment from 'moment';

Moment.locale("nb");

$(document).ready(function () {
    $('#expTable').DataTable({
        "columnDefs": [
            {
                "render": function (data, type, row) {
                    var datetimes = data.split("-");
                    var html = "";
                    $.each(datetimes, function (i, e) {
                        if (parseInt(e)) {
                            html += new Moment(parseInt(e.trim())).format("MMM YYYY "); 
                        }else{
                            html += e;
                        }
                    })
                    return html;
                },
                "targets": 0
            },
        ],
        "order": [
          ],
    })
});