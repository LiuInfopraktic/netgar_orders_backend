const unixToDate = (unixdate) => {
    const date = new Date(unixdate * 1000);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

module.exports = { unixToDate }