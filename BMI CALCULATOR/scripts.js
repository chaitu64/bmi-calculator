// Function to calculate BMI
function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Please enter valid positive weight and height.";
    } else {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);

        let classification = "";
        let recommendation = "";
        let weightToGainOrLose = 0;
        const minHealthyBMI = 18.5;
        const maxHealthyBMI = 24.9;

        // Minimum and maximum healthy weight range
        const minHealthyWeight = minHealthyBMI * (heightInMeters * heightInMeters);
        const maxHealthyWeight = maxHealthyBMI * (heightInMeters * heightInMeters);

        if (bmi < minHealthyBMI) {
            classification = "Underweight";
            weightToGainOrLose = minHealthyWeight - weight;
            recommendation = `You need to gain approximately ${weightToGainOrLose.toFixed(1)} kg to reach a healthy weight.`;
        } else if (bmi >= minHealthyBMI && bmi <= maxHealthyBMI) {
            classification = "Healthy weight";
            recommendation = "Your weight is within the healthy range. Maintain your current weight for optimal health!";
        } else if (bmi > maxHealthyBMI) {
            classification = "Overweight";
            weightToGainOrLose = weight - maxHealthyWeight;
            recommendation = `You need to lose approximately ${weightToGainOrLose.toFixed(1)} kg to reach a healthy weight.`;
        }

        document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>Classification: ${classification}<br>${recommendation}`;
    }
}




// Function to convert Feet and Inches to Centimeters
function convert() {
    const feet = parseInt(document.getElementById("feet").value) || 0;
    const inches = parseInt(document.getElementById("inches").value) || 0;

    const totalInches = (feet * 12) + inches;
    const centimeters = totalInches * 2.54;

    document.getElementById("result1").textContent = `${feet} feet ${inches} inches is equal to ${centimeters.toFixed(2)} centimeters.`;
}




// Function to convert Pounds to Kilograms
function convertToKilograms() {
    const pounds = parseFloat(document.getElementById("pounds-input").value);
    const kilograms = pounds * 0.453592;

    document.getElementById("result2").textContent = `${pounds} pounds is equal to ${kilograms.toFixed(2)} kilograms.`;
}



// Function to toggle visibility of converters
function toggleConverter(type) {
    const feetToCm = document.getElementById("feetToCmConverter");
    const poundToKg = document.getElementById("poundToKgConverter");

    // Toggle the visibility of the selected converter
    if (type === 'feetToCm') {
        feetToCm.style.display = (feetToCm.style.display === 'none' || feetToCm.style.display === '') ? 'block' : 'none';
        poundToKg.style.display = 'none'; // Ensure the other converter is hidden
    } else if (type === 'poundToKg') {
        poundToKg.style.display = (poundToKg.style.display === 'none' || poundToKg.style.display === '') ? 'block' : 'none';
        feetToCm.style.display = 'none'; // Ensure the other converter is hidden
    }
}
