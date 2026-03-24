// dataGenerators.js

// Utility to add random noise to a value
const addNoise = (value, variance) => value + (Math.random() - 0.5) * variance;

// Simulator for realistic sensor values with specific fault injection
export const generateTelemetryStream = (faultType = 'NORMAL', length = 30) => {
  const data = [];
  
  // Baselines
  let t = 650; // Temperature C
  let p = 85;  // Pressure PSI
  let v = 1.2; // Vibration mm/s
  let flow = 400; // Flow rate L/m
  let energy = 120; // kWh
  let co2 = 110; // ppm

  for (let i = 0; i < length; i++) {
    const time = new Date();
    time.setMinutes(time.getMinutes() - (length - i) * 5);

    // Apply specific fault behaviors conditionally
    if (faultType === 'BEARING_WEAR' && i > 15) {
      v = addNoise(v + 0.15, 0.5); // Vibration climbs steadily
      t = addNoise(t + 2, 4); // Temperature rises slightly from friction
    } else if (faultType === 'PRESSURE_SPIKE' && i > 25) {
      p = addNoise(p + 15, 5); // Sudden pressure jump
      flow = addNoise(flow - 50, 20); // Flow drops
    } else if (faultType === 'EMISSION_LEAK' && i > 10) {
      co2 = addNoise(co2 + 10, 8); // CO2 steadily increases
      energy = addNoise(energy + 5, 2); // Efficiency drops, energy usage climbs
    } else {
      // Normal operation with natural variance
      t = addNoise(650, 10);
      p = addNoise(85, 2);
      v = addNoise(1.2, 0.2);
      flow = addNoise(400, 15);
      energy = addNoise(120, 5);
      co2 = addNoise(110, 5);
    }

    // Simulate occasional missing data (sensor dropout)
    const isMissing = Math.random() > 0.98;

    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temp: isMissing ? null : t.toFixed(1),
      pressure: isMissing ? null : p.toFixed(1),
      vibration: isMissing ? null : v.toFixed(2),
      flow: isMissing ? null : flow.toFixed(1),
      energy: isMissing ? null : energy.toFixed(1),
      co2: isMissing ? null : co2.toFixed(1),
      // Thresholds
      tempThreshold: 720,
      pressureThreshold: 100,
      vibrationThreshold: 4.5,
      co2Threshold: 150
    });
  }
  return data;
};

// Generate high-level OEE (Overall Equipment Effectiveness) metrics
export const generateOEEMetrics = () => ({
  availability: 94.2, // %
  performance: 88.5,  // %
  quality: 99.1,      // %
  oeeScore: 82.6,     // Availability * Performance * Quality
  mtbf: 840, // Mean time between failures in hours
  mttr: 4.2  // Mean time to repair in hours
});

// Generate Financial Impact metrics
export const generateFinancialImpact = () => ({
  totalSavingsYTD: 142500,
  energySavings: 45200,
  avoidedDowntimeLoss: 85000,
  esgFinesAvoided: 12300,
  roi: 3.4 // Multiplier
});
