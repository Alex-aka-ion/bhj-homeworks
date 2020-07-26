window.addEventListener('load',() => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText);

            const json = JSON.parse(xhr.responseText);
            console.log(json);

            const {title, answers} = json.data;

            document.getElementById('poll__title').innerText = title;

            const pollAnswers = document.getElementById('poll__answers');

            for (let [index,answer] of answers.entries()) {
                pollAnswers.insertAdjacentHTML('beforeend',`
                    <button class="poll__answer" data-id="${json.id}" data-answerId="${index}">
                      ${answer}
                    </button>
                `);
            }

            Array.from(document.getElementsByClassName('poll__answer')).forEach((answer) => {
               answer.addEventListener('click', (e) => {
                  const {id, answerId} = answer.dataset;

                  console.log(answer.dataset);

                  const xhrPost = new XMLHttpRequest();

                  xhrPost.open('POST','https://netology-slow-rest.herokuapp.com/poll.php');
                  xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                  xhrPost.send(`vote=${id}&answer=${answerId}`);

                  xhrPost.onreadystatechange = function() {
                      if (xhrPost.readyState === 4) {
                          console.log(xhrPost.responseText);

                          const json = JSON.parse(xhrPost.responseText);
                          const stat = json.stat;

                          const totalVotes = stat.reduce((acc, i) => acc + i.votes,0);

                          pollAnswers.innerHTML = '';

                          for (const {answer, votes} of stat) {
                              const percentVotes = (votes / totalVotes * 100).toFixed(2);

                              pollAnswers.insertAdjacentHTML('beforeend', `
                                <div>${answer}: <strong>${percentVotes}%</strong></div>
                              `);
                          }
                      }
                  }

                  alert("Спасибо, ваш голос засчитан!");
               });
            });
        }
    }
});
