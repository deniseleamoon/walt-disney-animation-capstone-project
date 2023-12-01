
//Countdown clock

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/22/",
      movieday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > movieday) {
    movieday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(movieday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Now Playing In Theaters";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

  //Input 
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const form = document.getElementById ('form')
  const errorElement = document.getElementById('error')

  form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
      messages.push('Name is required')
    }

    if (email.value === '' || email.value == null) {
      messages.push('Email is required')
    }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  })

  //drop down menu

  function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  //Modal and Video API

  // Get the modal element
  var modal = document.getElementById('videoModal');

  // Get the button that opens the modal
  var btn = document.getElementById("openModal");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    var video = document.getElementById("youtubeVideo");
    video.src = video.src + "&autoplay=1";
  }
  
  // When the user clicks on <span> (x), close the modal and stop the video
  span.onclick = function() {
    modal.style.display = "none";
    var video = document.getElementById("youtubeVideo");
    video.src = video.src.replace("&autoplay=1", "");
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
  
  // When the user clicks anywhere outside of the modal, close it and stop the video
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      var video = document.getElementById("youtubeVideo");
      video.src = video.src.replace("&autoplay=1", "");
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }
  
  