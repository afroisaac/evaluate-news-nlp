function handleSubmit(event) {
    event.preventDefault();

    const resultsElement = document.getElementById('results');
    const errorElem = document.querySelector('.error-msg');
    // check what text was put into the form field
    let formText = document.getElementById('text-input').value;
    formText = formText.trim();

    let inputType = Client.urlChecker(formText) ? 'url' : 'txt';
    let parameter = {
        'text': formText,
        'type': inputType
    };

    if(!Client.blankInputChecker(formText)) {
        errorElem.style.display = 'none';
        Client.postHandler('http://localhost:8081/analyze', parameter)
        .then(data => {
            Client.updateUI(data, formText, resultsElement);
        });
    } else {
        errorElem.textContent = 'Error: invalid input, enter a text or url';
        errorElem.style.display = 'block';
    }
};


const postHandler = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
     });
 
    try {
        const result = await response.json();
        return result; 
    } catch(error) {
        console.log(error);
    }
};

function interpretPolarity(scoreTag) {
    let polarity;
    switch(scoreTag){
        case 'P+':
        case 'P':
            polarity = 'POSITIVE';
            break;
        case 'NEU':
            polarity = 'NEUTRAL';
            break;
        case 'N':
        case 'N+':
            polarity = 'NEGATIVE';
            break;
        case 'NONE':
            polarity = 'NO POLARITY';
            break;
        default:
            polarity = 'N/A';
    }
    return polarity;
};

function updateUI(data, formText, elem) {
    if(data.status.code === '0') {
        console.log(data);
        const { 
            agreement,
            confidence,
            irony,
            score_tag: scoreTag,
            subjectivity,
            sentence_list: [{ text }]
        } = data;

        elem.innerHTML = `
        <div class="result-row">
            <div class="label">Searched term:</div>
            <div class="value">${formText}</div>
        </div>
        <div class="result-row">
            <div class="label">Polarity:</div>
            <div class="value">${Client.interpretPolarity(scoreTag)}</div>
        </div>
        <div class="result-row">
            <div class="label">Subjectivity:</div>
            <div class="value">${subjectivity}</div>
        </div>
        <div class="result-row">
            <div class="label">Text snippet:</div>
            <div class="value">${text}</div>
        </div>
        <div class="result-row">
            <div class="label">Confidence:</div>
            <div class="value">${confidence}</div>
        </div>
        <div class="result-row">
            <div class="label">Agreement:</div>
            <div class="value">${agreement}</div>
        </div>
        <div class="result-row">
            <div class="label">Irony:</div>
            <div class="value">${irony}</div>
        </div>`;
    } else {
        const {status: {code, msg, }} = data;
        elem.innerHTML = `
            <div class="result-row">
                <div class="label">Searched term:</div>
                <div class="value">${formText}</div>
            </div>
            <div class="result-row">
                <div class="label">Status code:</div>
                <div class="value">${code}</div>
            </div>
            <div class="result-row">
                <div class="label">Message:</div>
                <div class="value">${msg}</div>
            </div>`;
    }
}

export { handleSubmit, postHandler, interpretPolarity, updateUI }
