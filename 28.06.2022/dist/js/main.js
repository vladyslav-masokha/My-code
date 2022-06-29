const localTime = () => {
  setTimeout(() => {
    const newDate = new Date();
    const getLocalTime = newDate.toLocaleTimeString();
    document.getElementById('time').innerText = getLocalTime;
    localTime();
  }, 1000);
};

localTime();