// Define the data as a two-dimensional array of numbers. If you had other
// data to associate with each number, replace each number with an object, e.g.,
// `{key: "value"}`.

var data = d3.csv("https://gist.githubusercontent.com/bhumikasrc/23d9de412c4a12bf0bd285b27d5c846d/raw/9770f21289e2a08b9d4111a404a623e7e8660ca5/teas.csv", function(data) {
    data.forEach(function(d) {
        var name = d["Product Name"]
    });
});

var product_name = ["Iced Black Tea","Iced Black Tea Lemonade","Chai Tea Latte","Earl Grey Brewed Tea","English Breakfast Black Tea Latte",
    "Green Tea Latte","Iced Green Tea Latte","Iced Green Tea","Iced Green Tea Lemonade","London Fog Tea Latte",
    "Iced Mango Black Tea","Iced Mango Black Tea Lemonade",
    "Oprah Cinnamon Chai Brewed Tea","Oprah Cinnamon Chai Latte","Iced Oprah Cinnamon Chai Latte",
    "Iced Passion Tango Tea","Iced Passion Tango Tea Lemonade","Peach Iced Green Tea Lemonade"]

var pie_title = ["0g Fats • 20g Carbs • 0g Fibres", "0g Fats • 32g Carbs • 0g Fibres", "20g Fats • 45g Carbs • 0g Fibres", "0g Fats • 0g Carbs • 0g Fibres",
    "0g Fats • 0g Carbs • 0g Fibres","35g Fats • 34g Carbs • 1g Fibres","30g Fats • 31g Carbs • 1g Fibres","0g Fats • 20g Carbs • 0g Fibres",
    "0g Fats • 32g Carbs • 0g Fibres","20g Fats • 30g Carbs • 0g Fibres","0g Fats • 19g Carbs • 0g Fibres","0g Fats • 31g Carbs • 0g Fibres",
    "0g Fats • 0g Carbs • 0g Fibres","20g Fats • 33g Carbs • 0g Fibres","20g Fats • 33g Carbs • 0g Fibres","0g Fats • 20g Carbs • 0g Fibres",
    "0g Fats • 32g Carbs • 0g Fibres","0g Fats • 33g Carbs • 0g Fibres"]

var test_data = [[0,10,27.5],[0,5,27.5],[20,105,95],[0,0,40],[20,95,20.5],[35,150,80],
    [30,130,80],[0,10,27.5],[0,5,27.5],[20,95,40],[0,10,27.5],[0,10,27.5],[0,0,20.5],
    [20,95,50],[20,95,50],[0,10,0],[0,5,0],[0,1,27.5]]

// Define the margin, radius, and color scale. The color scale will be
// assigned by index, but if you define your data using objects, you could pass
// in a named field from the data object instead, such as `d.name`. Colors
// are assigned lazily, so if you want deterministic behavior, define a domain
// for the color scale.
var m = 10,
    r = 100
z = d3.scaleOrdinal().range(["#FF7E00", "#FFDB58", "black"]);

var arcOver = d3.arc()
    .innerRadius(0)
    .outerRadius(80);

// Insert an svg element (with margin) for each row in our dataset. A child g
// element translates the origin to the pie center.
var svgp = d3.select("#pie").selectAll("svg")
    .data(test_data)
    .enter().append("svg")
    .attr("width", (r + m) * 1.8)
    .attr("height", (r + m) * 2.1)
    .append("g")
    .attr("transform", "translate(" + (r + m) + "," + (r + m) + ")")


svgp.append("text")
    .data(product_name)
    .attr("dx", "1em")
    .attr("dy", "0em")
    .attr("fill" , "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (r + m - 120) + "," + (r + m - 15) + ")")
    .text(function (d){
        return d
    })
    .style("font-size", "12px")

svgp.append("text")
    .data(pie_title)
    .attr("dx", "1em")
    .attr("dy", "0em")
    .attr("fill" , "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(" + (r + m - 120) + "," + (r + m - 2) + ")")
    .text(function (d){
        return d
    })
    .style("font-size", "12px")

// The data for each svg element is a row of numbers (an array). We pass that to
// d3.layout.pie to compute the angles for each arc. These start and end angles
// are passed to d3.svg.arc to draw arcs! Note that the arc radius is specified
//

svgp.selectAll("path")
    .data(d3.pie().sort(null))
    .enter().append("path")
    .attr("d", d3.arc().innerRadius(0).outerRadius(r-30))
    .style("fill", function(d, i) { return z(i); })
    .on("mouseover", function() {
        d3.select(this).transition().attr("d",arcOver).duration(200);
        tooltip1.style("display", null);
    })
    .on("mousemove", function(d) {
        tooltip1.transition().duration(200)
            .style("opacity", 0.9);
        tooltip1.select("div").html(function (){
            return(d.value + "g")
        }).style("left", (window.event.clientX) + "px")
            .style("top", (window.event.clientY) + "px")
            // .style("margin", 0) .style("padding", 0) .style("border", "none")
            // .style("position", "relative")
            // .style("text-align", "center")
            // .style("width", "50px")
            // .style("height", "15px")
            // .style("font", "12px sans-serif")
            // .style("background", "#B2BEB5")
            // .style("border-radius", "8px")
    })
    .on("mouseout", function() {
        tooltip1.style("display", "none")
        d3.select(this).transition()
            .attr("d",d3.arc().innerRadius(0).outerRadius(r-30))
            .duration(500);
    })


var tooltip1 = d3.select("#tooltip1").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0.5);
tooltip1.append("rect")
    .attr("width", 30)
    .attr("height", 20)
    .attr("fill", "#ffffff")
    .style("opacity", 0.5);
tooltip1.append("div")
    .attr("x", 15)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "1.5em")
    .attr("font-weight", "bold");
