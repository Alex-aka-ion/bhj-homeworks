const chat = document.getElementsByClassName('chat-widget')[0];

chat.addEventListener('click', (e) => {
    chat.classList.add('chat-widget_active');
});

const messages = document.querySelector( '.chat-widget__messages' );

const chatWidgetInput = document.getElementById('chat-widget__input');

const answers = [
    'Ответ 1',
    'Ответ 2',
    'Ответ 3',
    'Ответ 4',
    'Ответ 5'
]

chatWidgetInput.addEventListener('keypress', (e) => {
   if (e.key === 'Enter' && chatWidgetInput.value) {
       const currentTime = new Date();
       const timeString = currentTime.getHours() + ':' + currentTime.getMinutes();

       messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${timeString}</div>
            <div class="message__text">
              ${chatWidgetInput.value}
            </div>
          </div>
        `;

       chatWidgetInput.value = '';

       const randomIndex = Math.round(Math.random()*(answers.length - 1));
       const answer = answers[randomIndex];

       messages.innerHTML += `
          <div class="message">
            <div class="message__time">${timeString}</div>
            <div class="message__text">
              ${answer}
            </div>
          </div>
        `;

       messages.scrollIntoView(false);
   }
});