// function for get and return phone or cassing count field values 
function getCountFieldValue(countElement){
    const getCountField = document.getElementById(countElement);
    const getCountFieldStringValue = getCountField.value;
    const getCountFieldNumericValue = parseInt(getCountFieldStringValue);
    return getCountFieldNumericValue;
};

// function for get and return price section value 
function getTxtFieldValue(textElement){
    const getTextField = document.getElementById(textElement);
    const getTextFieldStringValue = getTextField.innerText;
    const getTextFieldNumericValue = parseInt(getTextFieldStringValue);
    return getTextFieldNumericValue;
};

// function for set  phone or cassing count field values
function setInputFieldValue(setInputElement, inputValue){
    const getInputField =document.getElementById(setInputElement);
    getInputField.value = inputValue;
};

// function for set price section value
function setTextFieldValue(setTextElement, textValue){
    const getTextField = document.getElementById(setTextElement);
    getTextField.innerText = textValue;
};