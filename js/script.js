// phone count plus button working section 
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    const getPhoneCountDisplayValue = getCountFieldValue('phone-count-field');
    const updatePhoneCountDisplayValue = getPhoneCountDisplayValue + 1;

    setInputFieldValue('phone-count-field', updatePhoneCountDisplayValue);

    const phoneTotalPrice = updatePhoneCountDisplayValue * 1219;
    setTextFieldValue('phone-price-display', phoneTotalPrice);

    const getCaseTotalPrice = getTxtFieldValue('case-price-display');
    const subTotalPrice = phoneTotalPrice + getCaseTotalPrice;

    setTextFieldValue('sub-total-display', subTotalPrice);
});

// phone count minu button working section 
document.getElementById('phone-minus-btn').addEventListener('click', function(){
    const getPhoneCountDisplayValue = getCountFieldValue('phone-count-field');
    const updatePhoneCountDisplayValue = getPhoneCountDisplayValue - 1;

    setInputFieldValue('phone-count-field', updatePhoneCountDisplayValue);

    const phoneTotalPrice = updatePhoneCountDisplayValue * 1219;
    setTextFieldValue('phone-price-display', phoneTotalPrice);

    const getCaseTotalPrice = getTxtFieldValue('case-price-display');
    const subTotalPrice = phoneTotalPrice + getCaseTotalPrice;

    setTextFieldValue('sub-total-display', subTotalPrice);
});

// case count plus button working section
document.getElementById('case-plus-btn').addEventListener('click', function(){
    const getCaseCountDisplayValue = getCountFieldValue('case-count-field');
    const updateCaseCountDisplayValue = getCaseCountDisplayValue + 1;

    setInputFieldValue('case-count-field', updateCaseCountDisplayValue);

    const caseTotalPrice = updateCaseCountDisplayValue * 59;
    setTextFieldValue('case-price-display', caseTotalPrice);

    const getPhoneTotalPrice = getTxtFieldValue('phone-price-display');
    const subTotalPrice = caseTotalPrice + getPhoneTotalPrice;

    setTextFieldValue('sub-total-display', subTotalPrice);
});

// case count minus button working section
document.getElementById('case-minus-btn').addEventListener('click', function(){
    const getCaseCountDisplayValue = getCountFieldValue('case-count-field');
    const updateCaseCountDisplayValue = getCaseCountDisplayValue - 1;

    setInputFieldValue('case-count-field', updateCaseCountDisplayValue);

    const caseTotalPrice = updateCaseCountDisplayValue * 59;
    setTextFieldValue('case-price-display', caseTotalPrice);

    const getPhoneTotalPrice = getTxtFieldValue('phone-price-display');
    const subTotalPrice = caseTotalPrice + getPhoneTotalPrice;

    setTextFieldValue('sub-total-display', subTotalPrice);
});

// check out button work section 
document.getElementById('check-out-btn').addEventListener('click', function(){
    const getSubTotalValue = getTxtFieldValue('sub-total-display');
    const getTaxDisplay = getTxtFieldValue('tax-display');

    const taxValue = (getSubTotalValue * .3).toFixed(2);
    const taxFixedValue = parseFloat(taxValue);
    setTextFieldValue('tax-display', taxFixedValue);

    const totalValue = getSubTotalValue + taxFixedValue;
    setTextFieldValue('total-display', totalValue);
    
});