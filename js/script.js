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
    console.log(getPhoneCountDisplayValue)
    
    if(getPhoneCountDisplayValue > 0){
    const updatePhoneCountDisplayValue = getPhoneCountDisplayValue - 1;

    setInputFieldValue('phone-count-field', updatePhoneCountDisplayValue);

    const phoneTotalPrice = updatePhoneCountDisplayValue * 1219;
    setTextFieldValue('phone-price-display', phoneTotalPrice);

    const getCaseTotalPrice = getTxtFieldValue('case-price-display');

    const subTotalPrice = phoneTotalPrice + getCaseTotalPrice;
        setTextFieldValue('sub-total-display', subTotalPrice);
    }else{
        getPhoneCountDisplayValue.value = 0;
        return alert('Please select positive number.');
    };
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

    if(getCaseCountDisplayValue > 0){
        const updateCaseCountDisplayValue = getCaseCountDisplayValue - 1;

        setInputFieldValue('case-count-field', updateCaseCountDisplayValue);
    
        const caseTotalPrice = updateCaseCountDisplayValue * 59;
        setTextFieldValue('case-price-display', caseTotalPrice);
    
        const getPhoneTotalPrice = getTxtFieldValue('phone-price-display');
        const subTotalPrice = caseTotalPrice + getPhoneTotalPrice;
    
        setTextFieldValue('sub-total-display', subTotalPrice);
    }else{
        return alert('Please select positive number.');
    };
});

// check out button work section 
document.getElementById('check-out-btn').addEventListener('click', function(){
    const getSubTotalValue = getTxtFieldValue('sub-total-display');

    const taxValue = (getSubTotalValue * .3).toFixed(2);
    const taxFixedValue = parseFloat(taxValue);
    setTextFieldValue('tax-display', taxFixedValue);

    const totalValue = getSubTotalValue + taxFixedValue;
    setTextFieldValue('total-display', totalValue);
    
});

// reset phone quantity count
document.getElementById('remove-icon-phone').addEventListener('click', function(){
    const getPhoneCountDisplayValue = document.getElementById('phone-count-field');
    getPhoneCountDisplayValue.value = 0;
    setTextFieldValue('phone-price-display', 0);

    const getCasePriceDisplayValue = getTxtFieldValue('case-price-display');
    setTextFieldValue('sub-total-display', getCasePriceDisplayValue);
});

// reset case quantity count 
document.getElementById('remove-icon-case').addEventListener('click', function(){
    const getCaseCountDisplayValue = document.getElementById('case-count-field');
    getCaseCountDisplayValue.value = 0;
    setTextFieldValue('case-price-display', 0);

    const getPhonePriceDisplayValue = getTxtFieldValue('phone-price-display');
    setTextFieldValue('sub-total-display', getPhonePriceDisplayValue);
});