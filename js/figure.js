
function the_figure(scenarioYieldObject, scenarioCDNRObject) {

	var dependentVariable,
		margin = {top: 20, right: 35, bottom: 30, left: 35},
		padding = {left: 20},
		scenarioObject = false,
	    width = ($('body').width() < 960) ? $('body').width() - margin.left - padding.left - margin.right : 960 - margin.left - padding.left - margin.right,
			height = width*.506,
		years = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

	if ( $('input[name=figuredisplay]:checked').val() == 'yield' ) {
		scenarioObject = scenarioYieldObject;
		dependentVariable = 'Yield (Tons / Acre)';
	} else if ( $('input[name=figuredisplay]:checked').val() == 'netreturns' ) {
		scenarioObject = scenarioCDNRObject;
		dependentVariable = 'Cumulative Discounted Net Returns (2013 dollars)';
	}

	if (scenarioObject) {
		var parameterValue = $('input[name=yearfig]:checked').val();
		var healthyData = [],
			scenarioName = [],
			untreatedData = [];

		switch (parameterValue) {
			case 'Year3':
				scenarioName = ['healthy', 'untreated', '25y3', '50y3', '75y3'];
				break;
			case 'Year5':
				scenarioName = ['healthy', 'untreated', '25y5', '50y5', '75y5'];
				break;
			case 'Year10':
				scenarioName = ['healthy', 'untreated', '25y10', '50y10', '75y10'];
				break;
		}

		var x = d3.scale.linear()
		    .range([0, width]);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .ticks(5)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");

		var line = d3.svg.line()
		    .x(function(d) { return x(d.x); })
	 		.y(function(d) { return y(d.y); })
	 		.interpolate("linear");

		var svg = d3.select(".figure-area").append("svg")
			.attr("width", width + margin.left + padding.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + parseInt(margin.left + padding.left) + "," + margin.top + ")");

		console.log(scenarioObject.healthy);
		console.log(scenarioObject);
		/*for (var i in healthyYields) {
			healthyData[i] = { "x" : i, "y" : scenarioObject.healthy[i] };
		}*/

		x.domain(d3.extent(years));
		y.domain(d3.extent(scenarioObject.healthy, function(d) { return d.y; }));

		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text(dependentVariable);

		/*for (var i in healthyYields) {
			untreatedData[i] = { "x" : i, "y" : scenarioObject.untreated[i] };
		}*/

		if (parameterValue) {
			var scenarioColors = ["yellowgreen", "darkorchid", "lightskyblue"];

			for (var i in scenarioColors) {
				svg.append("path")
					.attr("d", line(scenarioObject[scenarioName[parseInt(i)+2]]))
					.attr("class", "line")
					.attr("stroke", scenarioColors[i])
					.attr("stroke-width", 2)
					.attr("fill", "none");

				svg.selectAll("dot")
					.data(scenarioObject[scenarioName[parseInt(i)+2]])
					.enter().append("circle")
					.attr("r", 3.5)
					.attr("fill",scenarioColors[i])
					.attr("cx", function(d) { return x(d.x); })
					.attr("cy", function(d) { return y(d.y); });
			}
		}

		svg.append("path")
			.attr("d", line(scenarioObject.untreated))
			.attr("class", "line")
			.attr("stroke", "red")
			.attr("stroke-width", 2)
			.attr("fill", "none");

		svg.selectAll("dot")
			.data(scenarioObject.untreated)
			.enter().append("circle")
			.attr("r", 3.5)
			.attr("fill","red")
			.attr("cx", function(d) { return x(d.x); })
			.attr("cy", function(d) { return y(d.y); });

		svg.append("path")
			.attr("d", line(scenarioObject.healthy))
			.attr("class", "line")
			.attr("stroke", "blue")
			.attr("stroke-width", 2)
			.attr("fill", "none");

		svg.selectAll("dot")
			.data(scenarioObject.healthy)
			.enter().append("circle")
			.attr("r", 3.5)
			.attr("fill","blue")
			.attr("cx", function(d) { return x(d.x); })
			.attr("cy", function(d) { return y(d.y); });

	}

}

function type(d) {
	  d.x = +d.x;
	  d.y = +d.y;
	  //d.healthyYields = +d.healthyYields;
	  return d;
	}