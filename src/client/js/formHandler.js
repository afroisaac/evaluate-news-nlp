function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('text-input').value;
    formText = formText.trim();

    let inputType = Client.urlChecker(formText) ? 'url' : 'txt';
    let parameter = {
        'text': formText,
        'type': inputType
    };

    if(!Client.blankInputChecker(formText)) {
        Client.postHandler('http://localhost:8081/analyze', parameter)
        .then(res => {
            console.log(res);
        });
    }
   // console.log("::: Form Submitted :::")

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
}

export { handleSubmit, postHandler }
