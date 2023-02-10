$.ajax({
    type: "GET",
    url: '/api/meteomatics/2023-02-10T00:00:00Z--2023-02-13T00:00:00Z:PT3H/t_2m:C,relative_humidity_2m:p/47.423336,9.377225/csv',
    success: function (data) {
        $('#hc1').highcharts({
            chart: {
                type: 'column' //or spline
            },
            data: {
                csv: data,
                itemDelimiter: ';',
                lineDelimiter: '\n'
            },
            title: {
                text: 'Meteomatics CSV Data to Highcharts'
            },
            subtitle: {
                text: 'From csv file must be on a server'
            }
        });
    },
    error: function () {
        console.log('error');
    }
});

//For testing local without Server Side
var csvString = `validdate;t_2m:C;relative_humidity_2m:p
    2017-06-07T13:35:00Z;13.6;56.5
    2017-06-07T16:35:00Z;13.4;60.2
    2017-06-07T19:35:00Z;11;68.4
    2017-06-07T22:35:00Z;8.9;77
    2017-06-08T01:35:00Z;7.4;84.2
    2017-06-08T04:35:00Z;9.1;70.3
    2017-06-08T07:35:00Z;14.3;57.5
    2017-06-08T10:35:00Z;18;56.4
    2017-06-08T13:35:00Z;19.8;53.9
    `
$('#hc2').highcharts({
    chart: {
        type: 'column' //or spline
    },
    data: {
        csv: csvString,
        itemDelimiter: ';',
        lineDelimiter: '\n'
    },
    title: {
        text: 'Meteomatics CSV Data to Highcharts'
    },
    subtitle: {
        text: 'From csv in a string'
    }
});
