document.addEventListener('DOMContentLoaded', () => {
    const car1Select = document.getElementById('car1');
    const car2Select = document.getElementById('car2');
    const carComparisonTable = document.getElementById('carComparisonTable');
  
    // Function to create option element
    function createOption(text) {
      const option = document.createElement('option');
      option.text = text;
      return option;
    }
  
    // Populate the dropdowns with car options
    carDatabase.forEach((car) => {
      car1Select.add(createOption(`${car.make} ${car.model} (${car.year})`));
      car2Select.add(createOption(`${car.make} ${car.model} (${car.year})`));
    });
  
    // Event listener for car selection change
    car1Select.addEventListener('change', () => compareCars(car1Select.value, car2Select.value));
    car2Select.addEventListener('change', () => compareCars(car1Select.value, car2Select.value));
  
    // Function to compare cars and update the table
    function compareCars(car1Value, car2Value) {
      const car1 = carDatabase.find((car) => `${car.make} ${car.model} (${car.year})` === car1Value);
      const car2 = carDatabase.find((car) => `${car.make} ${car.model} (${car.year})` === car2Value);
  
      if (car1 && car2) {
        const tableHTML = `
          <table>
            <tr>
              <th>Specification</th>
              <th>${car1.make} ${car1.model} (${car1.year})</th>
              <th>${car2.make} ${car2.model} (${car2.year})</th>
            </tr>
            <tr>
              <td>Price</td>
              <td>$${car1.price}</td>
              <td>$${car2.price}</td>
            </tr>
            <tr>
              <td>Fuel Efficiency</td>
              <td>${car1.fuelEfficiency}</td>
              <td>${car2.fuelEfficiency}</td>
            </tr>
            <!-- Add more specifications here -->
          </table>
        `;
  
        carComparisonTable.innerHTML = tableHTML;
      }
    }
  });
  