/**
 * Plugin to create repo instance and to register repo instance
 * @extends EkstepRenderer.Plugin
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 * ref: http://ify.io/lazy-loading-in-angularjs/
 */
Plugin.extend({
    myApp: undefined,
    templatePath : undefined,
    initialize: function() {
        console.info('Endpage plugin is doing initialize....');
        templatePath = org.ekstep.pluginframework.pluginManager.resolvePluginResource('org.ekstep.endpage', '1.0', "templates/end.html");
        var controllerPath = org.ekstep.pluginframework.pluginManager.resolvePluginResource('org.ekstep.endpage', '1.0', "js/endpageApp.js");
        org.ekstep.service.controller.loadNgModules(templatePath, controllerPath);
       /* setTimeout(function(){
            org.ekstep.service.controller.inject(templatePath);
        },3000);*/
        EkstepRendererAPI.addEventListener('renderer:init:endpage', this.showEndPage, this);
    },
    showEndPage:function(){
        console.info('Endpage display'); 
        this.configEndPage();
        org.ekstep.service.controller.inject(templatePath);
    },
    configEndPage:function(){
        console.info("Config end page");
        
    }

})