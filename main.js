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
      movieDay = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > movieDay) {
    movieDay = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(movieDay).getTime(),
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
  

//Modal Window and API Video

let player;

// Function to open the modal and load the video
function openModal() {
  document.getElementById('myModal').style.display = 'block';

  const videoId = 'oyRxxpD3yNw';

  // Create a new YouTube player
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    showinfo: '0',
    rel: '0',
    fs: '1',
    videoId: videoId
    
  });
}

// Function to close the modal and stop the video
function closeModal() {
  document.getElementById('myModal').style.display = 'none';

  // Pause the video when the modal is closed
  if (player && player.pauseVideo) {
    player.pauseVideo();
  }
}

  