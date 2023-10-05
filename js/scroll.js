var margin = {top: 10, right: 30, bottom: 40, left: 210},
    width = 250+20,
    height = 500 +50;

// append the svg object to the body of the page
var svg0 = d3.select("#lollipop")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom+10)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + (margin.top) + ")");

var legend_svg = d3.select("#legend1").append("svg")
    .attr("width", 700)
    .attr("height", 150)
    .append("g")
    .attr("transform", "translate(" + 500 + ", " + 10 + ")");


let grid1 = () =>{
    d3.select("svg0").remove()
}

//circle grid
let grid2 = () =>{
    d3.csv("https://gist.githubusercontent.com/bhumikasrc/df862b3cffcb833e5a80d9042286432a/raw/5bcf366ebdde4015eaf5143eff08ebf36aec6784/sizes.csv", function(data) {

// Add X axis
        var x = d3.scaleLinear()
            .domain([0, 500])
            .range([ 0, width+10])
        //.padding(1);
        svg0.append("g")
            .attr("transform", "translate(0," + (height) + ")")
            .call(d3.axisBottom(x).ticks(5))
            .selectAll("text")
            .attr("transform", "translate(7,0)")
            .style("text-anchor", "end");

// Y axis
        var y = d3.scaleBand()
            .range([ 0, height ])
            .domain(data.map(function(d) { return d.ProductName; }))
            .padding(1);
        svg0.append("g")
            .transition()
            .delay((d, i) => 10 * i)
            .duration(1000)
            .call(d3.axisLeft(y))

        //color scale
        var myColor = d3.scaleLinear()
            .range(["#4CBB17","#6E260E"])
            .domain([10,190])

        //size scale
        var size = d3.scaleLinear()
            .range([2, 8])
            .domain([0, 77]);



// Lines
        svg0.selectAll("myline")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", x(0))
            .attr("x2", x(0))
            .attr("y1", function(d) { return y(d.ProductName); })
            .attr("y2", function(d) { return y(d.ProductName); })
            .attr("stroke", "grey")

// Circles -> start at X=0
        svg0.selectAll("mycircle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", x(0) )
            .attr("cy", function(d) { return y(d.ProductName); })
            .attr("r", "8")
            .style("fill", "white")
            .attr("stroke", "black")

        svg0.selectAll("mycircle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", x(0) )
            .attr("cy", function(d) { return y(d.ProductName); })
            .attr("r", function(d) { return size(d.SugarT)})
            .style("fill", function (d) { return myColor(d.SodiumT)})
            .attr("stroke", "black")

// Change the X coordinates of line and circle
        svg0.selectAll("circle")
            .transition()
            .duration(2000)
            .attr("cx", function(d) { return x(d.CaffeineT); })

        svg0.selectAll("line")
            .transition()
            .duration(2000)
            .attr("x1", function(d) { return x(d.CaffeineT); })

        svg0.append("line")
            .attr("x1", x(400))
            .attr("y1", 0)
            .attr("x2", x(400))
            .attr("y2", 550)
            .attr("stroke-width", 1)
            .style("stroke-dasharray", ("3, 3"))
            .attr("stroke", "black");

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "-30em")
            .attr("dy", "22em")
            .attr("transform", "rotate(-90)")
            .text("DAILY MAX CAFFEINE BY FDA")
            .style("font-size", "10px")

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "13em")
            .attr("dy", "0em")
            .attr("transform", "translate(7,0)")
            .text("TALL")
            .style("font-size", "10px")
            .attr("font-weight", 700)

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "15em")
            .attr("dy", "58.5em")
            .attr("transform", "translate(7,0)")
            .text("Caffeine (g)")
            .style("font-size", "10px")


        legend_svg.append("g")
            .attr("class", "legendLinear")
            .attr("transform", "translate(7,0)")
            .attr("font-size", "20px");

        var legendLinear = d3.legendColor()
            .title("Sodium (g)")
            .shapeWidth(30)
            .orient('horizontal')
            .scale(myColor);

        legend_svg.select(".legendLinear")
            .call(legendLinear);

        //size - Sugar

        legend_svg.append("g")
            .attr("class", "legendSize")
            .attr("transform", "translate(7,75)")
            .attr("font-size", "11px");;

        var legendSize = d3.legendSize()
            .title("Sugar (g)")
            .scale(size)
            .shape('circle')
            .shapePadding(15)
            .labelOffset(20)
            .orient('horizontal')
            .shapePadding(30);

        legend_svg.select(".legendSize")
            .call(legendSize);


    })
}




//divide
let divide = () =>{
// Parse the Data
    d3.csv("https://gist.githubusercontent.com/bhumikasrc/df862b3cffcb833e5a80d9042286432a/raw/5bcf366ebdde4015eaf5143eff08ebf36aec6784/sizes.csv", function(data) {

// Add X axis
        var x = d3.scaleLinear()
            .domain([0, 500])
            .range([ 0, width+10])
        //.padding(1);
        svg0.append("g")
            .attr("transform", "translate(0," + (height) + ")")
            .call(d3.axisBottom(x).ticks(5))
            .selectAll("text")
            .attr("transform", "translate(7,0)")
            .style("text-anchor", "end");

// Y axis
        var y = d3.scaleBand()
            .range([ 0, height ])
            .domain(data.map(function(d) { return d.ProductName; }))
            .padding(1);
        svg0.append("g")
            .transition()
            .delay((d, i) => 10 * i)
            .duration(1000)
            .call(d3.axisLeft(y))

        //color scale
        var myColor = d3.scaleLinear()
            .range(["#4CBB17","#6E260E"])
            .domain([10,190])

        //size scale
        var size = d3.scaleLinear()
            .range([2, 8])
            .domain([0, 77]);


// Lines
        svg0.selectAll("myline")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", x(0))
            .attr("x2", x(0))
            .attr("y1", function(d) { return y(d.ProductName); })
            .attr("y2", function(d) { return y(d.ProductName); })
            .attr("stroke", "grey")

        svg0.selectAll("mycircle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", x(0) )
            .attr("cy", function(d) { return y(d.ProductName); })
            .attr("r", "8")
            .style("fill", "white")
            .attr("stroke", "black")

        svg0.selectAll("mycircle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", x(0) )
            .attr("cy", function(d) { return y(d.ProductName); })
            .attr("r", function(d) { return size(d.SugarG)})
            .style("fill", function (d) { return myColor(d.SodiumG)})
            .attr("stroke", "black")

// Change the X coordinates of line and circle
        svg0.selectAll("circle")
            .transition()
            .duration(2000)
            .attr("cx", function(d) { return x(d.CaffeineG); })

        svg0.selectAll("line")
            .transition()
            .duration(2000)
            .attr("x1", function(d) { return x(d.CaffeineG); })

        svg0.append("line")
            .attr("x1", x(400))
            .attr("y1", 0)
            .attr("x2", x(400))
            .attr("y2", 550)
            .attr("stroke-width", 1)
            .style("stroke-dasharray", ("3, 3"))
            .attr("stroke", "black");

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "-30em")
            .attr("dy", "22em")
            .attr("transform", "rotate(-90)")
            .text("DAILY MAX CAFFEINE BY FDA")
            .style("font-size", "10px")

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "13em")
            .attr("dy", "0em")
            .attr("transform", "translate(7,0)")
            .text("GRANDE")
            .style("font-size", "10px")
            .attr("font-weight", 700)

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "15em")
            .attr("dy", "58.5em")
            .attr("transform", "translate(7,0)")
            .text("Caffeine (g)")
            .style("font-size", "10px")
    })
}





//bar cart
let barChart = () => {
    d3.csv("https://gist.githubusercontent.com/bhumikasrc/df862b3cffcb833e5a80d9042286432a/raw/5bcf366ebdde4015eaf5143eff08ebf36aec6784/sizes.csv", function(data) {

// Add X axis
        var x = d3.scaleLinear()
            .domain([0, 500])
            .range([ 0, width+10])
        //.padding(1);
        svg0.append("g")
            .attr("transform", "translate(0," + (height) + ")")
            .call(d3.axisBottom(x).ticks(5))
            .selectAll("text")
            .attr("transform", "translate(7,0)")
            .style("text-anchor", "end");

// Y axis
        var y = d3.scaleBand()
            .range([ 0, height ])
            .domain(data.map(function(d) { return d.ProductName; }))
            .padding(1);
        svg0.append("g")
            .transition()
            .delay((d, i) => 10 * i)
            .duration(1000)
            .call(d3.axisLeft(y))

        //color scale
        var myColor = d3.scaleLinear()
            .range(["#4CBB17","#6E260E"])
            .domain([10,190])

        //size scale
        var size = d3.scaleLinear()
            .range([2, 8])
            .domain([0, 77]);


// Lines
        svg0.selectAll("myline")
            .data(data)
            .enter()
            .append("line")
            .attr("x1", x(0))
            .attr("x2", x(0))
            .attr("y1", function(d) { return y(d.ProductName); })
            .attr("y2", function(d) { return y(d.ProductName); })
            .attr("stroke", "grey")

        svg0.selectAll("mycircle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", x(0) )
            .attr("cy", function(d) { return y(d.ProductName); })
            .attr("r", "8")
            .style("fill", "white")
            .attr("stroke", "black")

        svg0.selectAll("mycircle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", x(0) )
            .attr("cy", function(d) { return y(d.ProductName); })
            .attr("r", function(d) { return size(d.SugarV)})
            .style("fill", function (d) { return myColor(d.SodiumV)})
            .attr("stroke", "black")

// Change the X coordinates of line and circle
        svg0.selectAll("circle")
            .transition()
            .duration(2000)
            .attr("cx", function(d) { return x(d.CaffeineV); })

        svg0.selectAll("line")
            .transition()
            .duration(2000)
            .attr("x1", function(d) { return x(d.CaffeineV); })

        svg0.append("line")
            .attr("x1", x(400))
            .attr("y1", 0)
            .attr("x2", x(400))
            .attr("y2", 550)
            .attr("stroke-width", 1)
            .style("stroke-dasharray", ("3, 3"))
            .attr("stroke", "black");

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "-30em")
            .attr("dy", "22em")
            .attr("transform", "rotate(-90)")
            .text("DAILY MAX CAFFEINE BY FDA")
            .style("font-size", "10px")

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "13em")
            .attr("dy", "0em")
            .attr("transform", "translate(7,0)")
            .text("VENTI")
            .style("font-size", "10px")
            .attr("font-weight", 700)

        svg0.append("text")
            .style("text-anchor", "end")
            .attr("dx", "15em")
            .attr("dy", "58.5em")
            .attr("transform", "translate(7,0)")
            .text("Caffeine (g)")
            .style("font-size", "10px")
    })

}



//waypoints scroll constructor
function scroll(n, offset, func1, func2){
    return new Waypoint({
        element: document.getElementById(n),
        handler: function(direction) {
            if(direction == 'down'){
                func1()
                svg0.selectAll("*").remove();
                //legend_svg.selectAll("*").remove();
            }
            else{
                func2()
                svg0.selectAll("*").remove();
                legend_svg.selectAll("*").remove();

            }
            //direction == 'down' ? func1() : ;
        },
        //start 75% from the top of the div
        offset: offset
    });
};


//triger these functions on page scroll
new scroll('div2', '500', divide, grid2);
// new scroll('div4', '500', divide, grid2);
new scroll('div6', '500', barChart, divide);



//start grid on page load
grid2();


