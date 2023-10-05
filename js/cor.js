//reference: https://gist.github.com/HarryStevens/302d078a089caf5aeb13e480b86fdaeb

d3.select("body").append("div").attr("class", "tip").style("display", "none");

var cols = "Calories  Trans Fat  Saturated Fat  Sodium  Carbs  Cholesterol  Fibre  Sugars  Protein".split("  ");

var corr1 =  d3.json("data/jscor.json", function(data) {
    console.log(data);
})

var corr = [{column_x: "Calories", column_y: "Calories", correlation: 1},
    {column_x: "Calories", column_y: "Trans Fat", correlation: 0.642817653},
    {column_x: "Calories", column_y: "Saturated Fat", correlation: 0.331046793},
    {column_x: "Calories", column_y: "Sodium", correlation: 0.387891515},
    {column_x: "Calories", column_y: "Carbs", correlation: 0.795037107},
    {column_x: "Calories", column_y: "Cholesterol", correlation: 0.940034424},
    {column_x: "Calories", column_y: "Fibre", correlation: 0.384292493},
    {column_x: "Calories", column_y: "Sugars", correlation: 0.909675427},
    {column_x: "Calories", column_y: "Protein", correlation: 0.909675427},

    {column_x: "Trans Fat", column_y: "Calories", correlation: 0.642817653},
    {column_x: "Trans Fat", column_y: "Trans Fat", correlation: 1},
    {column_x: "Trans Fat", column_y: "Saturated Fat", correlation: 0.69487106},
    {column_x: "Trans Fat", column_y: "Sodium", correlation: 0.707793928},
    {column_x: "Trans Fat", column_y: "Carbs", correlation: 0.524176334},
    {column_x: "Trans Fat", column_y: "Cholesterol", correlation: 0.439810766},
    {column_x: "Trans Fat", column_y: "Fibre", correlation: 0.131266825},
    {column_x: "Trans Fat", column_y: "Sugars", correlation: 0.419886892},
    {column_x: "Trans Fat", column_y: "Protein", correlation: 0.496317028},

    {column_x: "Saturated Fat", column_y: "Calories", correlation: 0.331046793},
    {column_x: "Saturated Fat", column_y: "Trans Fat", correlation: 0.69487106},
    {column_x: "Saturated Fat", column_y: "Saturated Fat", correlation: 1},
    {column_x: "Saturated Fat", column_y: "Sodium", correlation: 0.920076632},
    {column_x: "Saturated Fat", column_y: "Carbs", correlation: 0.238141977},
    {column_x: "Saturated Fat", column_y: "Cholesterol", correlation: 0.161791482},
    {column_x: "Saturated Fat", column_y: "Fibre", correlation: -0.093782745},
    {column_x: "Saturated Fat", column_y: "Sugars", correlation: 0.179255476},
    {column_x: "Saturated Fat", column_y: "Protein", correlation: 0.287531628},

    {column_x: "Sodium", column_y: "Calories", correlation: 0.387891515},
    {column_x: "Sodium", column_y: "Trans Fat", correlation: 0.707793928},
    {column_x: "Sodium", column_y: "Saturated Fat", correlation: 0.920076632},
    {column_x: "Sodium", column_y: "Sodium", correlation: 1},
    {column_x: "Sodium", column_y: "Carbs", correlation: 0.290294771},
    {column_x: "Sodium", column_y: "Cholesterol", correlation: 0.19947701},
    {column_x: "Sodium", column_y: "Fibre", correlation: -0.060154496},
    {column_x: "Sodium", column_y: "Sugars", correlation: 0.205968724},
    {column_x: "Sodium", column_y: "Protein", correlation: 0.496232809},

    {column_x: "Carbs", column_y: "Calories", correlation: 0.795037107},
    {column_x: "Carbs", column_y: "Trans Fat", correlation: 0.524176334},
    {column_x: "Carbs", column_y: "Saturated Fat", correlation: 0.238141977},
    {column_x: "Carbs", column_y: "Sodium", correlation: 0.290294771},
    {column_x: "Carbs", column_y: "Carbs", correlation: 1},
    {column_x: "Carbs", column_y: "Cholesterol", correlation: 0.766653609},
    {column_x: "Carbs", column_y: "Fibre", correlation: 0.173378312},
    {column_x: "Carbs", column_y: "Sugars", correlation: 0.771406521},
    {column_x: "Carbs", column_y: "Protein", correlation: 0.41062928},

    {column_x: "Cholesterol", column_y: "Calories", correlation: 0.940034424},
    {column_x: "Cholesterol", column_y: "Trans Fat", correlation: 0.439810766},
    {column_x: "Cholesterol", column_y: "Saturated Fat", correlation: 0.161791482},
    {column_x: "Cholesterol", column_y: "Sodium", correlation: 0.19947701},
    {column_x: "Cholesterol", column_y: "Carbs", correlation: 0.766653609},
    {column_x: "Cholesterol", column_y: "Cholesterol", correlation: 1},
    {column_x: "Cholesterol", column_y: "Fibre", correlation: 0.342040136},
    {column_x: "Cholesterol", column_y: "Sugars", correlation: 0.984195816},
    {column_x: "Cholesterol", column_y: "Protein", correlation: 0.360448762},

    {column_x: "Fibre", column_y: "Calories", correlation: 0.384292493},
    {column_x: "Fibre", column_y: "Trans Fat", correlation: 0.131266825},
    {column_x: "Fibre", column_y: "Saturated Fat", correlation: -0.093782745},
    {column_x: "Fibre", column_y: "Sodium", correlation: -0.060154496},
    {column_x: "Fibre", column_y: "Carbs", correlation: 0.173378312},
    {column_x: "Fibre", column_y: "Cholesterol", correlation: 0.342040136},
    {column_x: "Fibre", column_y: "Fibre", correlation: 1},
    {column_x: "Fibre", column_y: "Sugars", correlation: 0.184170514},
    {column_x: "Fibre", column_y: "Protein", correlation: 0.540273741},

    {column_x: "Sugars", column_y: "Calories", correlation: 0.909675427},
    {column_x: "Sugars", column_y: "Trans Fat", correlation: 0.419886892},
    {column_x: "Sugars", column_y: "Saturated Fat", correlation: 0.179255476},
    {column_x: "Sugars", column_y: "Sodium", correlation: 0.205968724},
    {column_x: "Sugars", column_y: "Carbs", correlation: 0.771406521},
    {column_x: "Sugars", column_y: "Cholesterol", correlation: 0.984195816},
    {column_x: "Sugars", column_y: "Fibre", correlation: 0.184170514},
    {column_x: "Sugars", column_y: "Sugars", correlation: 1},
    {column_x: "Sugars", column_y: "Protein", correlation: 0.263060793},

    {column_x: "Protein", column_y: "Calories", correlation: 0.909675427},
    {column_x: "Protein", column_y: "Trans Fat", correlation: 0.496317028},
    {column_x: "Protein", column_y: "Saturated Fat", correlation: 0.287531628},
    {column_x: "Protein", column_y: "Sodium", correlation: 0.496232809},
    {column_x: "Protein", column_y: "Carbs", correlation: 0.41062928},
    {column_x: "Protein", column_y: "Cholesterol", correlation: 0.360448762},
    {column_x: "Protein", column_y: "Fibre", correlation: 0.540273741},
    {column_x: "Protein", column_y: "Sugars", correlation: 0.263060793},
    {column_x: "Protein", column_y: "Protein", correlation: 1}]

var extent = d3.extent(corr.map(function(d){ return d.correlation; }).filter(function(d){ return d !== 1; }));

var grid = data2grid.grid(corr);
var rows = d3.max(grid, function(d){ return d.row; });

var margin = {top: 20, bottom: 1, left: 20, right: 1};
var width1 = 650
var height1 = 650

var dim = d3.min([window.innerWidth * .9, window.innerHeight * .9]);

var width = width1 - margin.left - margin.right, height = height1 - margin.top - margin.bottom;

var svg = d3.select("#grid").append("svg")
    .attr("width", 1500)
    .attr("height", 700)
    .append("g")
    .attr("transform", "translate(" + 200 + ", " + 20 + ")");

var padding = .1;

var x = d3.scaleBand()
    .range([0, width])
    .paddingInner(padding)
    .domain(d3.range(1, rows + 1));

var y = d3.scaleBand()
    .range([0, height])
    .paddingInner(padding)
    .domain(d3.range(1, rows + 1));

//#604c4c
var c = chroma.scale(["#0b421a", "#eac784", "#362415"])
    .domain([extent[0], 0, extent[1]]);

var x_axis = d3.axisTop(y).tickFormat(function(d, i){ return cols[i]; });
var y_axis = d3.axisLeft(x).tickFormat(function(d, i){ return cols[i]; });

svg.append("g")
    .attr("class", "x axis")
    .call(x_axis);

svg.append("g")
    .attr("class", "y axis")
    .call(y_axis);

svg.selectAll("rect")
    .data(grid, function(d){ return d.column_a + d.column_b; })
    .enter().append("rect")
    .attr("x", function(d){ return x(d.column); })
    .attr("y", function(d){ return y(d.row); })
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .style("fill", function(d){ return c(d.correlation); })
    .style("opacity", 1e-6)
    .transition()
    .style("opacity", 1);

svg.selectAll("text")
    .data(grid, function(d){ return d.column_x + d.column_y})
    .enter().append("text")
    .attr("x", function(d){ return x(d.column)+20; })
    .attr("y", function(d){ return y(d.row)+35; })
    .text(function(d){
        if(d.correlation !== 1) {
            return (d.correlation.toFixed(2));
        }
    })
    .attr("font-family" , "sans-serif")
    .attr("font-size" , "11px")
    .attr("fill" , "white");

svg.selectAll("rect")

d3.selectAll("rect")
    .on("mouseover", function(d){


        d3.select(".x.axis .tick:nth-of-type(" + d.column + ") text").classed("selected", true);
        d3.select(".y.axis .tick:nth-of-type(" + d.row + ") text").classed("selected", true);
        d3.select(".x.axis .tick:nth-of-type(" + d.column + ") line").classed("selected", true);
        d3.select(".y.axis .tick:nth-of-type(" + d.row + ") line").classed("selected", true);

    })
    .on("mouseout", function(){
        d3.selectAll("rect").classed("selected", false);
        d3.select(".tip").style("display", "none");
        d3.selectAll(".axis .tick text").classed("selected", false);
        d3.selectAll(".axis .tick line").classed("selected", false);
    });

// legend scale
var legend_top = 15;
var legend_height = 15;

var legend_svg = d3.select("#legend").append("svg")
    .attr("width", 900)
    .attr("height", legend_height + legend_top)
    .append("g")
    .attr("transform", "translate(" + 100 + ", " + 20 + ")");

var defs = legend_svg.append("defs");

var gradient = defs.append("linearGradient")
    .attr("id", "linear-gradient");

var stops = [{offset: 0, color: "#0b421a", value: extent[0]}, {offset: .5, color: "#eac784", value: 0}, {offset: 1, color: "#362415", value: extent[1]}];

gradient.selectAll("stop")
    .data(stops)
    .enter().append("stop")
    .attr("offset", function(d){ return (100 * d.offset) + "%"; })
    .attr("stop-color", function(d){ return d.color; });

svg.append("rect")
    .attr("width", width)
    .attr("height",20)
    .attr("x", 0)
    .attr("y", 640)
    .style("fill", "url(#linear-gradient)");

svg.append("text")
    .text("-0.09")
    .attr("x", 0)
    .attr("y", 680)
    .attr("font-size" , "13px")

svg.append("text")
    .text("0.00")
    .attr("x", 300)
    .attr("y", 680)
    .attr("font-size" , "13px")

svg.append("text")
    .text("0.98>")
    .attr("x", 585)
    .attr("y", 680)
    .attr("font-size" , "13px")