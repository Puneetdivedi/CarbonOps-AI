export const generateRealtimeMultiMetrics = () => {
  const data = [];
  let currentCO2 = 120;
  let currentTemp = 650;
  let currentPressure = 85;
  let currentVibration = 1.2;

  for (let i = 0; i < 30; i++) {
    const time = new Date();
    time.setMinutes(time.getMinutes() - (30 - i) * 5);
    
    // Complex Cascade Failure Anomaly
    if (i >= 22 && i <= 28) {
      currentTemp += 15 + Math.random() * 10;
      currentPressure += 5 + Math.random() * 5;
      currentCO2 += 25 + Math.random() * 15;
      currentVibration += 0.8 + Math.random() * 0.4;
    } else {
      currentTemp = 650 + (Math.random() - 0.5) * 10;
      currentPressure = 85 + (Math.random() - 0.5) * 2;
      currentCO2 = 110 + (Math.random() - 0.5) * 10;
      currentVibration = 1.2 + (Math.random() - 0.5) * 0.2;
    }

    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      co2: currentCO2.toFixed(1),
      temp: currentTemp.toFixed(1),
      pressure: currentPressure.toFixed(1),
      vibration: currentVibration.toFixed(2),
      co2Threshold: 150,
      tempThreshold: 720
    });
  }
  return data;
};
