'use strict'


// // Getting elements

// const productsEl = document.querySelector('.products');
// const productEl = document.querySelectorAll('.product');
// const itemCount = document.getElementById('item-count');
// const subTotal = document.querySelector('.sub-total .amount span');
// const tax = document.querySelector('.tax .amount span');
// const total = document.querySelector('.total .total-amt span');
// const promo = document.getElementById('promo-code');

// console.log(subTotal);
// console.log(productEl);
// const products = [
//     {
//         id: 1,
//         name: "Illuminating face cream",
//         price: 12.99,
//         image: "product-image-1.jpg",
//         count: 1
//     },
//     {
//         id: 2,
//         name: "Illuminating face cream",
//         price: 9.99,
//         image: "product-image-2.jpg",
//         count: 1
//     },
//     {
//         id: 3,
//         name: "Intense lift up serum",
//         price: 29.99,
//         image: "product-image-3.jpg",
//         count: 0
//     },
//     {
//         id: 4,
//         name: "CBD Premium Oil",
//         price: 32.99,
//         image: "product-image-4.jpg",
//         count: 0
//     }
// ]

// const taxRate = 0.08;
// const promoCodes = new Map([
//     ["thanksgiving10", 0.1],
//     ["christmas20", 0.2],
// ])

// const getTax = amt => amt * taxRate;
// const calcPromo = (code, amt) => {
//     return promoCodes.get(code) * amt;
// };

// const addProduct = function (product, i) {
//     const html = `
//         <div class="product product-${i}">
//             <div class="product-img">
//                 <img src="${product.image}" alt="${product.name} image" />
//             </div>
//             <div class="desc">
//                 <div class="line-1">
//                     <h4>${product.name}</h4>
//                     <i class="fab fa-solid fa-xmark remove-product"></i>
//                 </div>
//                 <div class="line-2">
//                     <div class="count">
//                         <div class="minus-icon"><i class="fa fa-solid fa-minus"></i></div>
//                         <span>${product.count}</span>
//                         <div class="plus-icon"><i class="fa fa-solid fa-plus"></i></div>
//                     </div>
//                     <div class="price">
//                         $<span>${product.price}</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `

//     productsEl.insertAdjacentHTML('beforeend', html);
//     console.log('product inserted')
// };

// const getSubTotal = function () {
//     let res = 0;
//     products.forEach((product, i) => {
//         res += product.price * product.count;
//     })
    
//     return res;
// };

// const subTotalAmt = getSubTotal();
// subTotal.textContent = subTotalAmt;
// const taxAmt = getTax(subTotalAmt);
// tax.textContent = taxAmt.toFixed(2);
// let totalAmt = subTotalAmt + taxAmt;

// promo.addEventListener('keypress', function (e) {
//     console.log(e.key);
//     if (e.key === 'Enter') {
//         if ([...promoCodes.keys()].includes(promo.value)) {
//             console.log(promoCodes.get(promo.value))
//             totalAmt -= calcPromo(promo.value, totalAmt);
//             console.log(totalAmt);
//             total.textContent = totalAmt.toFixed(2);
//         }
//     }
// });

// total.textContent = totalAmt.toFixed(2);
// itemCount.textContent = products.length;

// productsEl.innerHTML = '';
// products.forEach((product, i) => addProduct(product, i));

// getSubTotal();


// const minus = document.querySelectorAll('.minus-icon');
// const plus = document.querySelectorAll('.plus-icon');
// console.log(minus);
// console.log(plus);
// console.log(document.querySelectorAll('.minus-icon, .plus-icon'));

// const itemCountHandler = function () {
//     productsEl.addEventListener('click', function (event) {
//         if (event.target.closest('.minus-icon')) {
//             const index = [...productsEl.querySelectorAll('.minus-icon')].indexOf(event.target.closest('.minus-icon'));
//             if (products[index].count > 0) {
//                 products[index].count--;
//             }
//         } else if (event.target.closest('.plus-icon')) {
//             const index = [...productsEl.querySelectorAll('.plus-icon')].indexOf(event.target.closest('.plus-icon'));
//             products[index].count++;
//         }
//         updateProductDisplay();
//         updateTotals();
//     });
// };

// function updateProductDisplay() {
//     products.forEach((product, i) => {
//         const productEl = document.querySelector(`.product-${i}`);
//         if (productEl) {
//             const countEl = productEl.querySelector('.product-count');
//             if (countEl) {
//                 countEl.textContent = product.count;
//             }
//         }
//     });
// }

// itemCountHandler();



// Getting elements
const productsEl = document.querySelector('.products');
const itemCount = document.getElementById('item-count');
const subTotal = document.querySelector('.sub-total .amount span');
const tax = document.querySelector('.tax .amount span');
const total = document.querySelector('.total .total-amt span');
const promo = document.getElementById('promo-code');

const products = [
    {
        id: 1,
        name: "Illuminating face cream",
        price: 12.99,
        image: "product-image-1.jpg",
        count: 1
    },
    {
        id: 2,
        name: "Illuminating face cream",
        price: 9.99,
        image: "product-image-2.jpg",
        count: 1
    },
    {
        id: 3,
        name: "Intense lift up serum",
        price: 29.99,
        image: "product-image-3.jpg",
        count: 0
    },
    {
        id: 4,
        name: "CBD Premium Oil",
        price: 32.99,
        image: "product-image-4.jpg",
        count: 0
    }
];

let subTotalAmt;
let taxAmt;
let totalAmt;
const taxRate = 0.08;
const promoCodes = new Map([
    ["thanksgiving10", 0.1],
    ["christmas20", 0.2],
]);

const getTax = amt => amt * taxRate;
const calcPromo = (code, amt) => {
    return promoCodes.get(code) * amt;
};

const addProduct = function (product, i) {
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
                    <div class="price">
                        $<span>${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    productsEl.insertAdjacentHTML('beforeend', html);
};

const getSubTotal = function () {
    let res = 0;
    products.forEach((product, i) => {
        res += product.price * product.count;
    });
    
    return res;
};

const updateTotals = function () {
    subTotalAmt = getSubTotal();
    subTotal.textContent = subTotalAmt.toFixed(2);
    taxAmt = getTax(subTotalAmt);
    tax.textContent = taxAmt.toFixed(2);
    totalAmt = subTotalAmt + taxAmt;
    total.textContent = totalAmt.toFixed(2);
};

productsEl.innerHTML = '';
products.forEach((product, i) => addProduct(product, i));

updateTotals();

promo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if ([...promoCodes.keys()].includes(promo.value) && totalAmt !== subTotalAmt + taxAmt) {
            const discount = calcPromo(promo.value, parseFloat(total.textContent));
            total.textContent = (parseFloat(total.textContent) - discount).toFixed(2);
            const html = `
                <div class="promo-sum">
                    <p>Promo</p>
                    <div class="amount">-$<span>${discount.toFixed(2)}</span></div>
                </div>
            `
            document.querySelector('.promo-sum') ? document.querySelector('.promo-sum').remove : console.log(`Applying discount of ${discount}`);
            document.querySelector('.shipping').insertAdjacentHTML('afterend', html)
        }
    }
});

const itemCountHandler = function () {
    productsEl.addEventListener('click', function (event) {
        if (event.target.closest('.minus-icon')) {
            const index = [...productsEl.querySelectorAll('.minus-icon')].indexOf(event.target.closest('.minus-icon'));
            if (products[index].count > 0) {
                products[index].count--;
            }
        } else if (event.target.closest('.plus-icon')) {
            const index = [...productsEl.querySelectorAll('.plus-icon')].indexOf(event.target.closest('.plus-icon'));
            products[index].count++;
        }
        updateProductDisplay();
        updateTotals();
    });
};

function updateProductDisplay() {
    products.forEach((product, i) => {
        const productEl = document.querySelector(`.product-${i}`);
        if (productEl) {
            const countEl = productEl.querySelector('.product-count');
            if (countEl) {
                countEl.textContent = product.count;
            }
        }
    });
}

itemCountHandler();