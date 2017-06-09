var application = require("application");
application.setCssFileName("./app.css");
application.start({ moduleName: "main-page" });

application.on(application.resumeEvent, function(args) {
    if (args.android) {
        var act = args.android;
        var intent = act.getIntent();
        var extras = intent.getExtras();
        if (extras) {
            var myKeyValue = extras.get('myKey');
            console.log('myKey: ' + myKeyValue);
            intent.removeExtra('myKey');
        }
    }
});
