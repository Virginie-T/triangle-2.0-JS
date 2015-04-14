// function triangulator (num1, num2, num3) {


    // var nums = [num1, num2, num3];
    // nums.sort(function(a, b){return b-a});
    //
    // var triangleType = "";
    //
    //  if (nums[0] <= nums[1] + nums[2]) {
    //
    //     if ((nums[0] === nums[1]) && (nums[1] === nums[2])) {
    //     triangleType = "equilateral";
    //     }
    //
    //     if ((nums[1] === nums[2]) && (nums[0] != nums[1])) {
    //         triangleType = "isosceles";
    //     }
    //
    //     if ((nums[0] != nums[1]) && (nums[0] != nums[2]) && (nums[1] != nums[2])) {
    //         triangleType = "scalene";
    //     }
    // }
    //
    // else if (nums[0] > nums[1] + nums[2]) {
    //     triangleType = "not a triangle";
    // }
    //
    // return triangleType;

// }
//
// function triangleCheck(x, y, z) {
//
//     var triangleType = '';
//
//     if ((x + y) <= z || (y + z) <= x || (z + x) <= y) {
//         triangleType = 'noTriangle';
//     }
//     else if ((x === y) && (y === z)) {
//         triangleType = 'equilateral';
//     }
//     else if ((x === y) || (y === z) || (z === x)) {
//         triangleType = 'isosceles';
//     }
//     else if ((x !== y) && (y !== z) && (z !== x)) {
//         triangleType = 'scalene';
//     }
//
//     return triangleType;
//
// };


$(document).ready(function() {

    $("form#add").submit(function(event) {

        event.preventDefault();

        // var x = $("input#side1").val();
        // var y = $("input#side2").val();
        // var z = $("input#side3").val();

        // var result = triangleCheck(x, y, z);

        var triangle = {
                x: $("input#side1").val(),
                y: $("input#side2").val(),
                z: $("input#side3").val(),
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
            $("ul#equilateral").append("<li>" + this.x + ", " + this.y + ", " + this.z + "</li>");
        }
        else if (triangle.type() === "isosceles") {
            $("ul#isosceles").append("<li>" + this.x + ", " + this.y + ", " + this.z + "</li>");
        }
        else if (triangle.type() === "scalene") {
            $("ul#scalene").append("<li>" + this.x + ", " + this.y + ", " + this.z + "</li>");
        };


    });

});
