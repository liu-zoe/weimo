browser.menus.create({
    id: "weimo-tab",
    title: "Weimo it!",
    contexts: ["link"]
});

browser.menus.onClicked.addListener(async function(info, tab){
    if (info.menuItemId == "weimo-tab"){
        if (info.linkUrl){
            let x = info.linkUrl;
            if (x.includes('www.weibo.com')){
                x = x.replace('www.weibo.com','m.weibo.cn');
            }
            else if (x.includes('s.weibo.com')){
                
            }
            else if (x.includes('weibo.com')){
                x = x.replace('weibo.com', 'm.weibo.cn');
            };
            let newTab = await browser.tabs.create({'active': false, 'url':x, 'index': tab.index+1});
            browser.tabs.update(newTab.id);
        }
    }
}
);