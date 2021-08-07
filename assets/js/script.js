$.getJSON("https://spreadsheets.google.com/feeds/list/1ZjfB3uedM7CJVWtPg9h-1G6fWBLEYvxhDWpkWI3z1ZY/2/public/values?alt=json", function (data) {

  var sheetData = data.feed.entry;

  var i;
  for (i = 0; i < sheetData.length; i++) {

    var company = data.feed.entry[i]['gsx$company']['$t'];
    var productName = data.feed.entry[i]['gsx$productname']['$t'];
    var desc = data.feed.entry[i]['gsx$description']['$t'];
    var bass = data.feed.entry[i]['gsx$businessactivityservicesector']['$t'];
    var website = data.feed.entry[i]['gsx$website']['$t'];

    document.getElementById('tbodyData').innerHTML += ('<tr>'+'<td><a href="' + website + '" TARGET="_blank">' + company + '</a></td>' + '<td>' + productName + '</td>' + '<td>' + desc + '</td>' + '<td>' + bass + '</td>' + '</tr>');

  }

  $('#data-table').DataTable();

});
