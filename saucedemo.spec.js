const {test, expect} = require('@playwright/test');

test('User Dapat login berhasil', async ({page})=>{
    //login
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    //validasi berhasil login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Menambah item ke keranjang', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //menambah item ke keranjang
    await page.click('#add-to-cart-sauce-labs-backpack');
    //validasi item berhasil ditambahkan ke keranjang
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('Berhasil menampilkan halaman keranjang', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('text=Add to Cart');

    //pergi ke keranjang
    await page.click('.shopping_cart_link');
    //validasi
    await expect(page).toHaveURL(/cart/);
});

test('Berhasil Melakukan checkout', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('text=Add to Cart');
    await page.click('.shopping_cart_link');

    //chekcout
    await page.click('#checkout');

    //validasi di halaman informasi checkout
    await expect(page).toHaveURL(/checkout-step-one/);
});


