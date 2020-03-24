// Reference data in variable
var tableData = data;

// Name basic HTML variables
var tbody = d3.select('tbody');

// Build default table with all entries in the data
tableData.forEach(function(entry) {
    var row = tbody.append('tr');
    Object.entries(entry).forEach(function([key, value]) {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Build function to handle clicking of button
var button = d3.select('#filter-btn');

button.on('click', function() {
     tbody.html('');
     var date = d3.select('#datetime');
     var inputDate = date.property('value');
     var filteredData = tableData.filter(entry => entry.datetime === inputDate);

     console.log(date);

     filteredData.forEach(function(newData) {
     var row = tbody.append('tr');
     Object.entries(newData).forEach(function([key, value]) {
        var cell = row.append('td');
        cell.text(value);
    });
});
});






