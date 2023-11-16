const newBtn = document.querySelector('#js-new-quote').addEventListener('click',getQuote);
    const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
    const answerBtn = document.querySelector('#js-tweet').addEventListener('click', getAnswer);


    async function getQuote() {

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            // console.log(json);
            displayQuote(json['question'])
        }
        
        catch(err) {
            console.log(err);
            alert('Failed to fetch new quote');
        }
    }

    function displayQuote(question) {
        const questionTxt = document.querySelector
        ('#js-quote-text');
        questionTxt.textContent = question;
    }