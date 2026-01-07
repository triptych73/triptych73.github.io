export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export const getDiffDays = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((new Date(d1) - new Date(d2)) / oneDay);
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
};
