// import date from './module1'

const calendar = (() => {
  const data = () => {
    alert('thanks okay')
    // console.log('dataa')
    alert('data')
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
