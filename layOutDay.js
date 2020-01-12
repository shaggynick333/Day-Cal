let events = generateMockEvents(3);
layOutDay(events);

//function to generate mock events for testing
function generateMockEvents(n) {
  let events = [];
  let minutesInDay = 60 * 12;

  while (n > 0) {
    let start = Math.floor(Math.random() * minutesInDay);
    let end = start + Math.floor(Math.random() * (minutesInDay - start));
    events.push({ start: start, end: end });
    n--;
  }

  return events;
}
