const BASE_URL = "http://localhost:3000";
function errorHandler(err) {
    console.log(err);
}

async function autocomplete(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function businessSearch(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function phoneSearch(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function transactionSearch(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function businessDetails(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function businessMatch(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function reviews(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function eventEndPoints(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}

async function categoryEndPoints(text) {
    try {
        const response = await fetch(`${BASE_URL}/autocomplete?text=${text}`);
        const data = await response.json();
        return data;
    } catch(ex) {
        errorHandler(ex);
    }
}