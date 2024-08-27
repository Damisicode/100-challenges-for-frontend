'use strict'


// Getting elements
const productsEl = document.querySelector('.products');
const itemCount = document.getElementById('item-count');
const subTotal = document.querySelector('.sub-total .amount span');
const tax = document.querySelector('.tax .amount span');
const total = document.querySelector('.total .total-amt span');
const promo = document.getElementById('promo-code');


// Setting starting and default values
const taxRate = 0.08;
const promoCodes = new Map([["thanksgiving10", 0.1], ["christmas20", 0.2]]);

const products = [
    { id: 1, name: "Illuminating face cream", price: 12.99, image: "product-image-1.jpg", count: 0 },
    { id: 2, name: "Illuminating face cream", price: 9.99, image: "product-image-2.jpg", count: 0 },
    { id: 3, name: "Intense lift up serum", price: 29.99, image: "product-image-3.jpg", count: 0 },
    { id: 4, name: "CBD Premium Oil", price: 32.99, image: "product-image-4.jpg", count: 0 }
];

// Declaring variables
let subTotalAmt, taxAmt, totalAmt;

// Function to get the tax amount
const getTax = amt => amt * taxRate;

// Function to calculate promo amount
const calcPromo = (code, amt) => promoCodes.get(code) * amt;

// Function to add product to the UI
const addProduct = (product, i) => {
    const html = `
        <div class="product product-${i}">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name} image" />
            </div>
            <div class="desc">
                <div class="line-1">
                    <h4>${product.name}</h4>
                    <i class="fab fa-solid fa-xmark remove-product"></i>
                </div>
                <div class="line-2">
                    <div class="count">
                        <div class="minus-icon"><i class="fa fa-solid fa-minus"></i></div>
                        <span class="product-count">${product.count}</span>
                        <div class="plus-icon"><i class="fa fa-solid fa-plus"></i></div>
                    </div>
                    <div class="price">$<span>${product.price}</span></div>
                </div>
            </div>
        </div>
    `;
    productsEl.insertAdjacentHTML('beforeend', html);
};

// function to get sub total
const getSubTotal = () => products.reduce((res, p) => res + p.price * p.count, 0);

// function to update the summary elements
const updateTotals = () => {
    subTotalAmt = getSubTotal();
    taxAmt = getTax(subTotalAmt);
    totalAmt = subTotalAmt + taxAmt;
    subTotal.textContent = subTotalAmt.toFixed(2);
    tax.textContent = taxAmt.toFixed(2);
    total.textContent = totalAmt.toFixed(2);
};

// function to update the product display for the product counts
const updateProductDisplay = () => products.forEach((p, i) => {
    const countEl = document.querySelector(`.product-${i} .product-count`);
    if (countEl) countEl.textContent = p.count;
});

// function to update the whole page
const updatePage = () => {
    updateProductDisplay();
    updateTotals();
    document.querySelector('.promo-sum')?.remove();
};

itemCount.textContent = products.length;
productsEl.innerHTML = '';
products.forEach(addProduct);
updateTotals();

// Event listener to handle adding discounts using promo codes
promo.addEventListener('keypress', e => {
    if (e.key === 'Enter' && promoCodes.has(promo.value) && !document.querySelector('.promo-sum')) {
        const discount = calcPromo(promo.value, parseFloat(total.textContent));
        total.textContent = (parseFloat(total.textContent) - discount).toFixed(2);
        const html = `<div class="promo-sum"><p>Promo</p><div class="amount">-$<span>${discount.toFixed(2)}</span></div></div>`;
        document.querySelector('.shipping').insertAdjacentHTML('afterend', html);
    }
});

// Event listener to handle increasing and decreasing number of products
productsEl.addEventListener('click', e => {
    const icon = e.target.closest('.minus-icon, .plus-icon');
    if (!icon) return;
    const index = [...productsEl.querySelectorAll(icon.classList.contains('minus-icon') ? '.minus-icon' : '.plus-icon')].indexOf(icon);
    products[index].count += icon.classList.contains('minus-icon') && products[index].count > 0 ? -1 : 1;
    updatePage();
});

// Resetting the page and 
document.querySelector('.pay-btn').addEventListener('click', () => {
    alert(`You will be charged ${totalAmt.toFixed(2)}...`);
    products.forEach(p => p.count = 0);
    updatePage();
});
