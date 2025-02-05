$("#calculateBtn").click(function() {
                // Debugging: Check if the button is being clicked
                console.log("Button clicked!");
                
                // Get the number of hours entered
                var hours = $("#hours").val();
                // Get the hourly rate (fixed at $25)
                var rate = $("#rate").val();
                
                // Validate if the hours are a positive number
                if (hours === "" || isNaN(hours) || hours <= 0) {
                    alert("Please enter a valid positive number of hours.");
                    return;
                }
                
                // Calculate the total cost
                var total = hours * rate;
                
                // Display the total cost in the output box
                $("#total").val(total.toFixed(2)); // Fixed to 2 decimal places

                // Debugging: Check the calculated total
                console.log("Total calculated: " + total.toFixed(2));
            });