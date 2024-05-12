document.addEventListener('DOMContentLoaded', () => {
    const dateTimeElement = document.getElementById('date-time');
    const calendarElement = document.getElementById('calendar');

    function updateDateTime() {
        const now = new Date();

        // Date and Time
        const date = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        dateTimeElement.textContent = `${date} at ${time}`;

        // Calendar
        const calendarHTML = `
            <table id="calendar">
                <thead>
                    <tr>
                        <th colspan="7">${now.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</th>
                    </tr>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    ${getCalendarCells(now)}
                </tbody>
            </table>
        `;
        calendarElement.innerHTML = calendarHTML;
    }

    function getCalendarCells(date) {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const startingDay = firstDayOfMonth.getDay();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        let cells = '';
        let day = 1;

        for (let i = 0; i < 6; i++) {
            cells += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startingDay) {
                    cells += '<td></td>';
                } else if (day > daysInMonth) {
                    break;
                } else {
                    cells += `<td>${day}</td>`;
                    day++;
                }
            }
            cells += '</tr>';
            if (day > daysInMonth) {
                break;
            }
        }

        return cells;
    }

    // Update the date and time initially and every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
