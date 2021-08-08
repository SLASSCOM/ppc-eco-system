$.getJSON("https://spreadsheets.google.com/feeds/list/1ZjfB3uedM7CJVWtPg9h-1G6fWBLEYvxhDWpkWI3z1ZY/2/public/values?alt=json", function (data) {

  var sheetData = data.feed.entry;

  var i;
  var tblHtml = "";
  for (i = 0; i < sheetData.length; i++) {

    var company = data.feed.entry[i]['gsx$company']['$t'];
    var productName = data.feed.entry[i]['gsx$productname']['$t'];
    var desc = data.feed.entry[i]['gsx$description']['$t'];
    var bass = data.feed.entry[i]['gsx$businessactivityservicesector']['$t'];
    var website = data.feed.entry[i]['gsx$website']['$t'];
    var logo = data.feed.entry[i]['gsx$logo']['$t'];

    var logoHtml = "&nbsp";
    if(logo != "" && logo != null) {
      logoHtml = '<a href="' + website + '" TARGET="_blank"><img src="' + logo + '" width=40 height=40 /></a>';
    }

    tblHtml += ( '<tr>' + '<td>' + logoHtml + '</td>');
    tblHtml += ( '<td><a href="' + website + '" TARGET="_blank">' + company + '</a></td>'); 
    tblHtml += ( '<td>' + productName + '</td>'); 
    tblHtml += ( '<td>' + desc + '</td>'); 
    tblHtml += ( '<td>' + bass + '</td>' + '</tr>');

  }

  document.getElementById('tbodyData').innerHTML = tblHtml;

  $('#data-table').DataTable({
    'columnDefs': [ {
        'targets': [0,2,3], // column index (start from 0)
        'orderable': false, // set orderable false for selected columns
     }],
     order: [[1, 'asc']]
  });

});
