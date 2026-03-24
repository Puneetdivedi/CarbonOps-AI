export const generateRealtimeEmissions = () => {
  const data = [];
  let currentCO2 = 120;
  for (let i = 0; i < 20; i++) {
    const time = new Date();
    time.setMinutes(time.getMinutes() - (20 - i) * 5);
    // Introduce a spike
    if (i === 15 || i === 16 || i === 17) {
      currentCO2 = currentCO2 + 40 + Math.random() * 20;
    } else {
      currentCO2 = 110 + Math.random() * 20;
    }
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      co2: currentCO2.toFixed(1),
      threshold: 150
    });
  }
  return data;
};
