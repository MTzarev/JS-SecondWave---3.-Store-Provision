function storeProvision(stock, order) {

    for (let i = 0; i < order.length; i += 2) {
        let productName = order[i];
        let qty = Number(order[i + 1]);

        if (!stock.includes(productName)) {
            stock.push(productName);
            stock.push(qty);
        } else {
            let idx = stock.indexOf(productName) + 1;
            stock[idx] = Number(stock[idx]) + qty;

        }
    }
    //let stockObj = Object.assign({}, stock)
    //let stockObj = [stock].reduce((a,v)=>({...a, [v]: v}), {})
    //let stockObj = {...Object.values(stock)}
    let stockObj = {};
    for (let i = 0; i < stock.length; i += 2) {
        stockObj[stock[i]] = stock[i + 1];
    }


    for (let [productName, qty] of Object.entries(stockObj)) {
        console.log(`${productName} -> ${qty}`);

    }
    console.log();

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])