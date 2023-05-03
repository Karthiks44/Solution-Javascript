function Solution(D) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const output = {};

  // Initialize output with 0 for all days
  for (let i = 0; i < daysOfWeek.length; i++) {
    output[daysOfWeek[i]] = 0;
  }

  // Iterate over input and add values to corresponding day in output
  const sortedDates = Object.keys(D).sort(); 
  for (let i = 0; i < sortedDates.length; i++) {
    const date = new Date(sortedDates[i]);
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    output[dayOfWeek] += D[sortedDates[i]];
  }

  // Fill missing days with average of previous and next day
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    if (output[day] === 0) {
      const prevDay = i === 0 ? daysOfWeek[6] : daysOfWeek[i - 1];
      const nextDay = i === 6 ? daysOfWeek[0] : daysOfWeek[i + 1];
      output[day] = Math.round((output[prevDay] + output[nextDay]) / 2);
    }
  }

  return output;
}
// This is the code 