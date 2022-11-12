function CalendarDays(props) {
  let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  let weekdayOfFirstDay = firstDayOfMonth.getDay() - 1;
  let currentDays = [];


  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear()
    }

    currentDays.push(calendarDay);
  }

  const rows = [];
  let columns = [];
  currentDays.forEach((day, index) => {
    if (index % 7 === 0) {
      rows.push(<tr>{columns}</tr>);
      columns = [];
    }
    columns.push(<td className={(!day.currentMonth ? "ui-datepicker-other-month" : "") + (day.selected ? " ui-datepicker-today" : "")}>
      {day.number}
    </td>);
  });

  if (columns.length) {
    rows.push(<tr>{columns}</tr>);
  }

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

export default CalendarDays;