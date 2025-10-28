     const output = document.querySelector(".out");
        function clearDisplay() {
            output.value = "";
        }

        function appendValue(value) {
            output.value += value;
        }

        function clearLast() {
            output.value = output.value.slice(0, -1);
        }

        function calculate() {
            try {
                output.value = eval(output.value);
            } catch (error) {
                alert('Invalid Expression');
            }
        }