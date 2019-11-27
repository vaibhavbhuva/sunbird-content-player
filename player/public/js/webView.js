org.ekstep.view.web = new (org.ekstep.view.mainView.extend({
    init: function(){
        this.setGlobalContext().then(function (appInfo) {
            if (typeof localPreview !== "undefined" && localPreview === "local") { return }
        }).catch(function (res) {
            console.log("Error Globalcontext.init:", res)
            EkstepRendererAPI.logErrorEvent(res, {
                "type": "system",
                "severity": "fatal",
                "action": "play"
            })
            alert(res.errors)
            exitApp()
        })
    }
}))();
org.ekstep.view.renderer = org.ekstep.view.web