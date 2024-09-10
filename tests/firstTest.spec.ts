import {test} from '@playwright/test'
// test method takes 2 parametrs

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

// defining test suite
test.describe('First test suite', () =>{

    test.beforeEach(async({page}) => {
        await page.getByText('Charts').click()
    })
   
   test('Navigate to forms layout', async({page}) => {
       await page.getByText('Form Layouts').click()
   })

   test('Navigate to date picker', async({page}) => {
    await page.getByText('Datepicker').click()
})

})

test.describe('Second test suite', () =>{

    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click()
    })
   
   test('Navigate to form layouts2', async({page}) => {
       await page.getByText('Form Layouts').click()
   })

   test('Navigate to date picker2', async({page}) => {
    await page.getByText('Datepicker').click()
})

})