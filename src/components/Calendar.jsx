import CalendarDays from './Calendar-days';
// import './calendar.css';

const Calendar = ({ date }) => {

  let now = date;

  const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const weekdaysShortcuts = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  const monthsInParent = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];


  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekdays[now.getDay() - 1]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{now.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthsInParent[now.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{now.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[now.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{now.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <thead className="table-header">
          <tr>
          {
            weekdaysShortcuts.map((weekday) => {
              return <th className="weekday" key={weekday.toString()}>{weekday}</th>
            })
          }
          </tr>
        </thead>
        <CalendarDays 
          day={now} 
          />
      </table>
    </div>
  )
}


export default Calendar;