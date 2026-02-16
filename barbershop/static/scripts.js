document.addEventListener('DOMContentLoaded', function() {

    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'en-us',
        height: 'auto',
        fixedWeekCount: false,
        showNonCurrentDates: true
    });

    calendar.render();
});