const path = 'http://uitestingplayground.com/verifytext';
  

describe('Test Suite for VerifyText', ()=>{

    it('should load the correct URL', async()=>{
        await browser.url(path)
        const url = await browser.getUrl()  
        console.log(url)      
        expect(url).toEqual(path)
    });

    it('should load the correct page title', async()=>{
        await browser.url(path)
        const title = await browser.getTitle()
        console.log(title)        
        expect(title).toEqual('Verify Text')
    });

    it('should load the correct H3', async()=>{
        await browser.url(path)
        const expectedText = 'Verify Text'
        const element = $('.container > h3')
        const actualText = await element.getText()
        console.log(actualText)        
        expect(actualText).toEqual(expectedText)
    });

    it('shouldn\'t load an empty P', async()=>{
        await browser.url(path)        
        const elements = $$('.container > p')
        await elements.forEach(async(p) => 
        expect(await p.getText()).not.toEqual(''))
        
    });
    
    it('should load two Hello UserName! messages', async()=>{
        await browser.url(path)        
        const elements = $$('.badge-secondary')
        let count = 0
        await elements.forEach(async(text) =>   
        (await text.getText()).search(/Hello UserName/i)>=0?count+=1:count=count)
        expect(count).toEqual(2)
    });

    it.only('Welcome UserName! should be inside the blue span', async()=>{
        await browser.url(path)        
        const span = $('.bg-primary > span')    
        expect(await span.getText()).toEqual('Welcome UserName!')  
      
    });


});


