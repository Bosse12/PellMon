
var baroptions = {
     series: {
         bars: {
             show: true,
             //barWidth: 3000000*24*30, 
             align: 'center'
         },
     },
     yaxes: {
         min: 0
     },
     xaxis: {
         mode: 'time',
         //timeformat: "%y",
         //tickSize: [1, "year"],
         //autoscaleMargin: .10 // allow space left and right
     }
 };

var drawConsumption = function(url, graph, width) {
    $.get(
        url,
        function(jsondata) {
            data = JSON.parse(jsondata);
            options = baroptions;
            options.series.bars.barWidth = width * 1000;
            plot = $.plot($(graph), [data], options);
        })
}

$(function() {
    drawConsumption('flotconsumption24h', '#consumption24h', 3000);
    drawConsumption('flotconsumption7d', '#consumption7d', 3000*24);
    drawConsumption('flotconsumption1m', '#consumption1m', 3000*24*7);
    drawConsumption('flotconsumption1y', '#consumption1y', 3000*24*30);
});

