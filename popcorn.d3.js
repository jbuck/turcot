(function(Popcorn) {
  
  var legendlabels = [
    "Average property value ($)",
    "Average income ($)",
    "% Property owners",
    "% Single parent families",
    "% Unemployed",
    "% University educated"
  ];
  
  var regions = [
    "Sud-Ouest",
    "Lachine",
    "LaSalle",
    "Côte-des-Neiges",
    "Montreal West",
    "Westmount"
  ];

  Popcorn.plugin("d3", {

    _setup: function(options) {
      d3.json("chartarray.json", function(originalData) {
        if (!originalData) {
          console.error("Couldn't load data");
          return;
        }

        var target = document.getElementById( options.target );

        options._container = document.createElement( "div" );
        options._container.style.display = "none";
        
        target && target.appendChild( options._container );

        var data = originalData;
        var width = 800,
            height = 500;

        var x0 = d3.scale.ordinal().domain(data[0]).rangeBands([0, width], 0.1),
            x1 = d3.scale.ordinal().domain(data[1]).rangeBands([0, x0.rangeBand()]),
            x2 = d3.scale.ordinal().domain(data[2]).rangeBands([0, x1.rangeBand()]),
            x3 = d3.scale.ordinal().domain(data[3]).rangeBands([0, x2.rangeBand()]),
            x4 = d3.scale.ordinal().domain(data[4]).rangeBands([0, x3.rangeBand()]),
            x5 = d3.scale.ordinal().domain(data[5]).rangeBands([0, x4.rangeBand()]);
  
        var y0 = d3.scale.linear().domain([0, 1000000]).range([0, height]),
            y1 = d3.scale.linear().domain([0, 80000]).range([0, height]),
            y2 = d3.scale.linear().domain([0, 1]).range([0, height]),
            y3 = d3.scale.linear().domain([0, 1]).range([0, height]),
            y4 = d3.scale.linear().domain([0, 1]).range([0, height]),
            y5 = d3.scale.linear().domain([0, 1]).range([0, height]);
  
        var colour = d3.scale.category10();
  
        var svg = d3.select(options._container).append("svg")
            .attr("width", width)
            .attr("height", height);
  
        var g = svg.selectAll("g").data(data).enter()
            .append("g")
            .attr("fill", function(d, i) {return colour(i);})
            .attr("transform", function(d, i) {return "translate(" + x1(i) + ",-20)";});
  
        var rect = g.selectAll("rect").data(Object).enter()
            .append("rect")
            .attr("class", "graphed")
            .attr("transform", function(d, i) {return "translate(" + x0(i) + ",0)";})
            .attr("width", x1.rangeBand())
            .attr("height", function(d,i,j) {
              if (j==0) {return y0(d);}
              else if (j==1) {return y1(d);}
              else if (j==2) {return y2(d);}
              else if (j==3) {return y3(d);}
              else if (j==4) {return y4(d);}
              else if (j==5) {return y5(d);}
            })
            .attr("y", function(d,i,j) {
              if (j==0) {return height-y0(d);}
              else if (j==1) {return height-y1(d);}
              else if (j==2) {return height-y2(d);}
              else if (j==3) {return height-y3(d);}
              else if (j==4) {return height-y4(d);}
              else if (j==5) {return height-y5(d);}
            });
  
        var labels = svg.selectAll("text").data(regions).enter()
            .append("text")
            .attr("transform", function(d, i) {return "translate(" + x0(i) + ",0)";})
            .attr("x", width / 13.5)
            .attr("y", height)
            .attr("dy", -5)
            .attr("text-anchor", "middle")
            .text(String);
  
        var lyi = d3.scale.ordinal().domain(legendlabels).rangeBands([20, 240], 0.2);
  
        var legendboxes = svg.selectAll(".legend").data(legendlabels).enter()
            .append("rect")
            .attr("x", 20)
            .attr("y", lyi)
            .attr("width", 20)
            .attr("height", 20)
            .attr("fill", function(d, i) {return colour(i);});
  
        var legendtext = svg.selectAll(".legendtext").data(legendlabels).enter()
            .append("text")
            .attr("x", 50)
            .attr("y", lyi)
            .attr("dy", "1em")
            .text(String);
      });
    },
    
    start: function(event, options) {
      options._container.parentNode.style.display = "block";
      options._container.style.display = "block";
    },
    
    end: function(event, options) {
      options._container.parentNode.style.display = "none";
      options._container.style.display = "none";
    }

  });

})(Popcorn);