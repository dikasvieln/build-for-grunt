import date from './module1'

const calendar = (() => {
  const data = () => {
    alert('thanks okay')
    console.log('dataa')
  }

  return {
    data
  }
})();

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    calendar.data();
    date();
  }
}

/*
documennt.addEventListener('DOMContentLoaded',() => {
  calendar
})*/
