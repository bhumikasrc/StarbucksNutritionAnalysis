// set the dimensions and margins of the graph

var margin = {top: 30, right: 30, bottom: 60, left: 280},
    width = 250,
    height = 500+50;

// append the svg object to the body of the page
var svga = d3.select("#bar")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + (margin.top) + ")");

// Parse the Data
d3.csv("https://gist.githubusercontent.com/bhumikasrc/5fdac138adf01692d27c75e78d806102/raw/470f0f27338425d02cd41cefeee48b19b988e82c/food.csv", function(data) {

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 650])
        .range([ 0, width]);
    svga.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .attr("transform", "translate(7,0)")
        .style("text-anchor", "end");

// Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.Food; }))
        .padding(.1);
    svga.append("g")
        .call(d3.axisLeft(y))

//Bars
    svga.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0) )
        .attr("y", function(d) { return y(d.Food); })
        .attr("width", function(d) { return x(d.Calories); })
        .attr("height", y.bandwidth()-10 )
        .attr("fill", "#006400")
        .on('mouseover', function(data, index_){
            d3.select(this).transition().duration(50).attr("fill", "#eac784")
            svgb.selectAll("rect")
                .filter(function(d, i) {
                    return i === index_;
                })
                .attr("stroke", "#eac784")
                .attr("fill", "#eac784")

            svgc.selectAll("rect")
                .filter(function(d, i) {
                    return i === index_;
                })
                .attr("stroke", "#eac784")
                .attr("fill", "#eac784")
        })
        .on("mouseout", function() {
            d3.selectAll("rect").transition().duration(50).attr("stroke", "#006400").attr("fill", "#006400");
        })

    svga.append("text")
        .style("text-anchor", "end")
        .attr("dx", "15em")
        .attr("dy", "52.5em")
        .attr("transform", "translate(7,0)")
        .text("Calories (g)")
        .style("font-size", "10px")

})




var margin = {top: 10, right: 30, bottom: 90, left: 10},
    width = 250
height = 500 +20;
var svgb = d3.select("#bar")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.csv("https://gist.githubusercontent.com/bhumikasrc/5fdac138adf01692d27c75e78d806102/raw/470f0f27338425d02cd41cefeee48b19b988e82c/food.csv", function(data) {

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 30])
        .range([0, width]);
    svgb.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .attr("transform", "translate(5,0)")
        .style("text-anchor", "end");

// Y axis
    var y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(function (d) {
            return d.Food;
        }))
        .padding(.1);
    // svgb.append("g")
    //     .call(d3.axisLeft(y))

//Bars
    svgb.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0))
        .attr("y", function (d) {
            return y(d.Food);
        })
        .attr("width", function (d) {
            return x(d.Fat);
        })
        .attr("height", y.bandwidth() - 10)
        .attr("fill", "#006400")
        .on('mouseover', function(data, index_){
            d3.select(this).transition().duration(50).attr("fill", "#eac784")
            svga.selectAll("rect")
                .filter(function(d, i) {
                    return i === index_;
                })
                .attr("stroke", "#eac784")
                .attr("fill", "#eac784")

            svgc.selectAll("rect")
                .filter(function(d, i) {
                    return i === index_;
                })
                .attr("stroke", "#eac784")
                .attr("fill", "#eac784")
        })
        .on("mouseout", function() {
            d3.selectAll("rect").transition().duration(50).attr("stroke", "#006400").attr("fill", "#006400");
        })

    svgb.append("line")
        .attr("x1", x(0))
        .attr("y1", 0)
        .attr("x2", x(0))
        .attr("y2", 480)
        .attr("stroke-width", 0.7)
        //.style("stroke", ("3, 3"))
        .attr("stroke", "black");

    svgb.append("text")
        .style("text-anchor", "end")
        .attr("dx", "15em")
        .attr("dy", "52.5em")
        .attr("transform", "translate(7,0)")
        .text("Fat (g)")
        .style("font-size", "10px")

})



var margin = {top: 20, right: 30, bottom: 80, left: 10},
    width = 250
height = 500-30;
var svgc = d3.select("#bar")
    .append("svg")
    .attr("width", 290)
    .attr("height", 700)
    .append("g")
    .attr("transform",
        "translate(" + 0 + "," + 90 + ")");

d3.csv("https://gist.githubusercontent.com/bhumikasrc/5fdac138adf01692d27c75e78d806102/raw/470f0f27338425d02cd41cefeee48b19b988e82c/food.csv", function(data) {

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 80])
        .range([0, width]);
    svgc.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .attr("transform", "translate(5,0)")
        .style("text-anchor", "end");

// Y axis
    var y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(function (d) {
            return d.Food;
        }))
        .padding(.1);

//Bars
    svgc.selectAll("myRect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", x(0))
        .attr("y", function (d) {
            return y(d.Food);
        })
        .attr("width", function (d) {
            return x(d.Carb);
        })
        .attr("height", y.bandwidth() - 10)
        .attr("fill", "#006400")
        .on('mouseover', function(data, index_){
            d3.select(this).transition().duration(50).attr("fill", "#eac784")
            svga.selectAll("rect")
                .filter(function(d, i) {
                    return i === index_;
                })
                .attr("stroke", "#eac784")
                .attr("fill", "#eac784")

            svgb.selectAll("rect")
                .filter(function(d, i) {
                    return i === index_;
                })
                .attr("stroke", "#eac784")
                .attr("fill", "#eac784")
        })
        .on("mouseout", function() {
            d3.selectAll("rect").transition().duration(50).attr("stroke", "#006400").attr("fill", "#006400");
        })

    svgc.append("line")
        .attr("x1", x(0))
        .attr("y1", 0)
        .attr("x2", x(0))
        .attr("y2", 480)
        .attr("stroke-width", 0.7)
        //.style("stroke", ("3, 3"))
        .attr("stroke", "black");

    svgc.append("text")
        .style("text-anchor", "end")
        .attr("dx", "15em")
        .attr("dy", "52.5em")
        .attr("transform", "translate(7,0)")
        .text("Carbs (g)")
        .style("font-size", "10px")

})


