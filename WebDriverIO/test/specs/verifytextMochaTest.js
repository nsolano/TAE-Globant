describe('Test Suite for VerifyText', () => {
    before('Open the Verify Text URL', async () => {
        console.log("Opening the url")
        await browser.url('http://uitestingplayground.com/verifytext')
    });  

    it('should return the correct URL and Title', async () => {
        await expect(browser).toHaveUrl('http://uitestingplayground.com/verifytext');
        await expect(browser).toHaveUrlContaining('verifytext');
        await expect(browser).toHaveTitle('Verify Text');
        await expect(browser).toHaveTitleContaining('Verify');
    })

    it('should load the correct H3', async()=>{      
        const expectedText = 'Verify Text'
        const element = $('.container > h3')
        const actualText = await element.getText()
        console.log(actualText)        
        expect(actualText).toEqual(expectedText)
    });

    it('shouldn\'t load an empty P', async()=>{             
        const elements = $$('.container > p')
        await elements.forEach(async(p) => 
        expect(await p.getText()).not.toEqual(''))
        
    });
    
    it('should load two Hello UserName! messages', async()=>{         
        const elements = $$('.badge-secondary')
        let count = 0
        await elements.forEach(async(text) =>   
        (await text.getText()).search(/Hello UserName/i)>=0?count+=1:count=count)
        expect(count).toEqual(2)
    });

    it.only('Welcome UserName! should be inside the blue span', async()=>{              
        const span = $('.bg-primary > span')    
        expect(await span.getText()).toEqual('Welcome UserName!')        
    });

    

})