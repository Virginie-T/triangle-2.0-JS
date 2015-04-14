$(document).ready(function() {

    $("form#add").submit(function(event) {

        event.preventDefault();

        // debugger;
        var triangle = {
                x: parseInt($("input#side1").val()),
                y: parseInt($("input#side2").val()),
                z: parseInt($("input#side3").val()),
                type: function(x, y, z) {
                    if ((this.x + this.y) <= this.z || (this.y + this.z) <= this.x || (this.z + this.x) <= this.y) {
                        return 'noTriangle';
                    }
                    else if ((this.x === this.y) && (this.y === this.z)) {
                        return 'equilateral';
                    }
                    else if ((this.x === this.y) || (this.y === this.z) || (this.z === this.x)) {
                        return 'isosceles';
                    }
                    else if ((this.x !== this.y) && (this.y !== this.z) && (this.z !== this.x)) {
                        return 'scalene';
                    }
                }
            };

        if (triangle.type() === "noTriangle") {
            alert("Not a valid triangle. Try again?");
        }
        else if (triangle.type() === "equilateral") {
            $("ul#equilateral").append("<li>" + triangle.x + ", " + triangle.y + ", " + triangle.z + "</li>");
        }
        else if (triangle.type() === "isosceles") {
            $("ul#isosceles").append("<li>" + triangle.x + ", " + triangle.y + ", " + triangle.z + "</li>");
        }
        else if (triangle.type() === "scalene") {
            $("ul#scalene").append("<li>" + triangle.x + ", " + triangle.y + ", " + triangle.z + "</li>");
        };


    });

});
