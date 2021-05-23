let example = {
    product: '',
    date: '',
    detail: '',
    data_in: {
        units: '',
        units_price: '',
        total: ''
    },
    data_out: {
        units: '',
        units_price: '',
        total: ''
    },
    balance: {
        units: '',
        units_price: '',
        total: ''
    }
}

let movements = [];
let current_id = 0;

module.exports = {
    movements,
    current_id
};
