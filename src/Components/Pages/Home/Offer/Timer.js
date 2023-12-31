import React from 'react';

class Timer extends React.Component {
    state = {
      minutes: 0,
      seconds: 0,
      hours: 0,
      days: 0
    };
  
    componentDidMount() {
      let date = new Date();
      date.setDate(date.getDate() + 10);
      let countDownDate = new Date(date).getTime();
      setInterval(() => {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({
          minutes: minutes,
          days: days,
          hours: hours,
          seconds: seconds
        });
      }, 1000);
    }
  
    render() {
      const { minutes, seconds, hours, days } = this.state;
      return (
        <div>
          <h1 className='text-center font-bold p-8 text-5xl bg-green-900 md:p-10 md:text-7xl md:mx-9 md:rounded-2xl mx-4 rounded-lg mt-10 text-white'>
            {days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
      );
    }
  }

export default Timer;