var calendar = new tui.Calendar('#home-calendar', {
	isReadOnly: true,
	defaultView: 'month',
	taskView: true,
	useCreationPopup: true,
    useDetailPopup: true,
	template: {
		monthDayname: function(dayname) {
			return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
		},
	  // ...
	},
  });

$('#nextMonth').click(() => {
	calendar.next();
	$('.dateYear')[0].innerHTML = getMonthYear();
});

$('#prevMonth').click(() => {
	calendar.prev();
	$('.dateYear')[0].innerHTML = getMonthYear();
});

const getMonthYear = () => {
	var d = new Date(calendar.getDate());
	var options = {month: 'long', year: 'numeric'};
	return d.toLocaleDateString("en-US", options);
}


$(document).ready(function() {
	$('.dateYear')[0].innerHTML = getMonthYear();
});

calendar.createSchedules([
    {
        id: '1',
        calendarId: '1',
        title: 'Biotech Speaker Series',
        category: 'time',
        dueDateClass: '',
        start: '2022-05-18T22:30:00+09:00',
        end: '2022-05-19T02:30:00+09:00',
		borderColor: '#ff4040',
		bgColor: '#ff4040' 
    },
    {
        id: '2',
        calendarId: '1',
        title: 'VC Networking Night',
        category: 'time',
        dueDateClass: '',
        start: '2022-05-18T17:30:00+09:00',
        end: '2022-05-19T17:31:00+09:00',
		color: '#ff4040',
		bgColor: '#fb969654',
		borderColor: '#ff4040'
	}

]);
