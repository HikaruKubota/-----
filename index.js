(() => {
  const calender = document.getElementById('calender');
  const today = new Date();

  const createAndAppendCalendar = (calendarDate) => {
    calender.innerHTML = "";
    const table = document.createElement('table');
    const days = ['日', '月', '火' , '水', '木', '金', '土']
    const dates = [...Array(33).keys()].map(i => ++i)
    // テーブルのheaderに関する処理
    const tHeader = document.createElement('thead');
    const tHeaderTr = document.createElement('tr');
    days.forEach(day => {
      const tHeaderTd = document.createElement('td');
      const content = document.createTextNode(day);
      tHeaderTd.appendChild(content);
      tHeaderTr.appendChild(tHeaderTd);
    });
    tHeader.appendChild(tHeaderTr);
    table.appendChild(tHeader);

    // テーブルのbodyに関する処理
    const tBody = document.createElement('tbody');
    let tBodyTr;
    dates.some((date, i) => {
      calendarDate.setDate(date);
      if (calendarDate.getDate() != date) {
        tBody.appendChild(tBodyTr);
        return true;
      }
      const Day = calendarDate.getDay();
      if (Day == 0) {
        tBodyTr = document.createElement('tr');
      }
      if (i == 0) {
        tBodyTr = document.createElement('tr');
        for (let i = 0; i < Day; i++) {
          const tBodyTd = document.createElement('td');
          tBodyTr.appendChild(tBodyTd);
        }
        const tBodyTd = document.createElement('td');
        const content = document.createTextNode(date);
        tBodyTd.appendChild(content);
        tBodyTr.appendChild(tBodyTd);
      }else{
        const content = document.createTextNode(date);
        const tBodyTd = document.createElement('td');
        tBodyTd.appendChild(content);
        tBodyTr.appendChild(tBodyTd);
      }
      if (Day == 6) {
        tBody.appendChild(tBodyTr);
      }
    });
    const title = document.createElement('div');
    const fullYear = calendarDate.getMonth() == 0 ? calendarDate.getFullYear() - 1 : calendarDate.getFullYear();
    const month = calendarDate.getMonth() == 0 ? 12 : calendarDate.getMonth();
    const titleContent = document.createTextNode(`${fullYear} / ${month} `);
    title.appendChild(titleContent);
    calender.appendChild(title);

    table.appendChild(tBody);
    calender.appendChild(table);

  }

  createAndAppendCalendar(today);

  const leftFunction = () => {
    today.setMonth(today.getMonth() - 2);
    createAndAppendCalendar(today);
  }

  const rightFunction = () => {
    today.setMonth(today.getMonth());
    createAndAppendCalendar(today);
  }

  const left = document.getElementById('left');
  left.addEventListener("click", leftFunction);

  const right = document.getElementById('right');
  right.addEventListener("click", rightFunction);


  window.addEventListener("keydown", handleKeydown);
  function handleKeydown(event){
    const keyCode = event.keyCode;
    if (keyCode == 39) {
      rightFunction()
    }
    if (keyCode == 37) {
      leftFunction()
    }
  }
})();

