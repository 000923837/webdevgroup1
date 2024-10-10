// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        
        document.querySelectorAll('.tabContent').forEach(content => content.classList.add('hidden'));
        
        document.querySelectorAll('.tab').forEach(button => button.classList.remove('bg-blue-700'));
        
        tab.classList.add('bg-blue-700');
        
        const contentId = tab.id.replace('Tab', 'Content');
        document.getElementById(contentId).classList.remove('hidden');
    });
});

// Higher-order function for unit conversion
function conversionFactory(fromUnit, toUnit) {
    const conversions = {
        'lb_kg': (value) => value * 0.453592,   // Pounds to Kilograms
        'kg_lb': (value) => value / 0.453592,   // Kilograms to Pounds
        'mi_km': (value) => value * 1.60934,    // Miles to Kilometers
        'km_mi': (value) => value / 1.60934,    // Kilometers to Miles
        'C_F': (value) => (value * 9/5) + 32,   // Celsius to Fahrenheit
        'F_C': (value) => (value - 32) * 5/9    // Fahrenheit to Celsius
    };
    return conversions[`${fromUnit}_${toUnit}`];
}

// Weight Conversion
function convertWeight(fromUnit, toUnit) {
    const input = document.getElementById('weightInput').value.split(',').map(Number); 
    const converter = conversionFactory(fromUnit, toUnit); 
    const result = input.map(converter);  
    document.getElementById('weightResult').innerHTML = `Converted: ${result.join(', ')}`;  
}

// Distance Conversion
function convertDistance(fromUnit, toUnit) {
    const input = document.getElementById('distanceInput').value.split(',').map(Number);  
    const converter = conversionFactory(fromUnit, toUnit);  
    const result = input.map(converter);  
    document.getElementById('distanceResult').innerHTML = `Converted: ${result.join(', ')}`;  
}

// Temperature Conversion
function convertTemperature(fromUnit, toUnit) {
    const input = document.getElementById('temperatureInput').value.split(',').map(Number);  
    const converter = conversionFactory(fromUnit, toUnit);  
    const result = input.map(converter);  
    document.getElementById('temperatureResult').innerHTML = `Converted: ${result.join(', ')}`;  
}
