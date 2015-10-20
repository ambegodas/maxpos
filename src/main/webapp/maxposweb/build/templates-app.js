angular.module('templates-app', ['about/about.tpl.html', 'account/account.tpl.html', 'account/createAccount.tpl.html', 'account/login.tpl.html', 'history/history.tpl.html', 'home/home.tpl.html', 'inventory/inventory.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("account/account.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/account.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <form action=\"\" class=\"form-inline\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"element-1\">Search</label>\n" +
    "            <input type=\"text\" id=\"element-1\" class=\"form-control\">\n" +
    "        </div>\n" +
    "\n" +
    "        <button class=\"btn btn-info btn-md\" ng-click=\"getAccounts()\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "\n" +
    "        <button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#add-user-modal\" >Add Account</button>\n" +
    "\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "\n" +
    "            <div class=\"panel-heading\">Accounts</div>\n" +
    "\n" +
    "            <table st-table=\"displayedAccounts\" st-safe-src=\"accounts\" class=\"table table-condensed\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Username</th>\n" +
    "                    <th>First name</th>\n" +
    "                    <th>Last name</th>\n" +
    "                    <th>Email</th>\n" +
    "                    <th>Mobile</th>\n" +
    "                    <th>Data of Join</th>\n" +
    "                    <th>Data of birth</th>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <th colspan=\"7\"><input st-search=\"\" class=\"form-control\" placeholder=\"Search...\" type=\"text\"/></th>\n" +
    "                </tr>\n" +
    "\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"account in displayedAccounts\">\n" +
    "                    <td>{{account.username | uppercase}}</td>\n" +
    "                    <td>{{account.firstName}}</td>\n" +
    "                    <td>{{account.lastName}}</td>\n" +
    "                    <td>\n" +
    "                    <button class=\"btn btn-sm\" popover-placement=\"top\" popover=\"{{account.email}}\" type=\"button\">\n" +
    "                        <i class=\"glyphicon glyphicon-eye-open\"></i>\n" +
    "                    </button>\n" +
    "                    <a ng-href=\"mailto:{{account.email}}\">email</a></td>\n" +
    "                    <td>{{account.mobile}}</td>\n" +
    "                    <td>{{account.dateOfJoin | date}}</td>\n" +
    "                    <td>{{account.dateOfBirth | date}}</td>\n" +
    "                    <td>\n" +
    "                        <button type=\"button\" ng-click=\"openUpdateAgentModal(account)\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#modify-user-modal\" >\n" +
    "                            <i class=\"glyphicon glyphicon-edit\">\n" +
    "                            </i>\n" +
    "                        </button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "                <tfoot>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"8\" class=\"text-center\">\n" +
    "                        <div st-pagination=\"\" st-items-by-page=\"4\" st-displayed-pages=\"7\"></div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tfoot>\n" +
    "            </table>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"add-user-modal\">\n" +
    "    <div class=\"modal-dialog modal-lg\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button class=\"close\" type=\"button\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h3 class=\"modal-title\">Create Account</h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <form  ng-submit=\"register()\" class=\"form-horizontal\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"username\" class=\"col-xs-3 control-label\">Username</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" ng-model=\"account.username\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"firstName\" class=\"col-xs-3 control-label\">First Name</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First Name\" ng-model=\"account.firstName\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"lastName\" class=\"col-xs-3 control-label\">Last Name</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" ng-model=\"account.lastName\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"dateOfJoin\" class=\"col-xs-3 control-label\">Date of join</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"dateOfJoin\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"account.dateOfJoin\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"dateOfBirth\" class=\"col-xs-3 control-label\">Date of birth</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"dateOfBirth\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"account.dateOfBirth\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"email\" class=\"col-xs-3 control-label\">Email</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"account.email\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"mobile\" class=\"col-xs-3 control-label\">Mobile</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"mobile\" class=\"form-control\" placeholder=\"Mobile\" ng-model=\"account.mobile\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--div class=\"form-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"account.dateOfBirth\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\">\n" +
    "                                 <i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                             </span>\n" +
    "                        </div -->\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"password\" class=\"col-xs-3 control-label\">Password</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"account.password\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-xs-5 col-xs-offset-3\">\n" +
    "                                <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"modify-user-modal\">\n" +
    "    <div class=\"modal-dialog modal-lg\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button class=\"close\" type=\"button\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h3 class=\"modal-title\">Update Account</h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <form  ng-submit=\"modifyAccount(account)\" class=\"form-horizontal\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"username\" class=\"col-xs-3 control-label\">Username</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" ng-model=\"account.username\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"firstName\" class=\"col-xs-3 control-label\">First Name</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"First Name\" ng-model=\"account.firstName\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"lastName\" class=\"col-xs-3 control-label\">Last Name</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" ng-model=\"account.lastName\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"dateOfJoin\" class=\"col-xs-3 control-label\">Date of join</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"dateOfJoin\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"account.dateOfJoin\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"dateOfBirth\" class=\"col-xs-3 control-label\">Date of birth</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"dateOfBirth\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"account.dateOfBirth\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"email\" class=\"col-xs-3 control-label\">Email</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"account.email\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"mobile\" class=\"col-xs-3 control-label\">Mobile</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"mobile\" class=\"form-control\" placeholder=\"Mobile\" ng-model=\"account.mobile\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--div class=\"form-group\">\n" +
    "                            <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"account.dateOfBirth\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            <span class=\"input-group-btn\">\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\">\n" +
    "                                 <i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "                             </span>\n" +
    "                        </div -->\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"password\" class=\"col-xs-3 control-label\">Password</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"account.password\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-xs-5 col-xs-offset-3\">\n" +
    "                                <button class=\"btn btn-primary\" type=\"submit\">Update</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("account/createAccount.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/createAccount.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <form ng-submit=\"register()\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>Username:</label>\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"account.userName\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>Password:</label>\n" +
    "            <input type=\"password\" class=\"form-control\" ng-model=\"account.password\">\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-sucssess\" type=\"submit\">Create</button>\n" +
    "    </form>\n" +
    "\n" +
    "</div>");
}]);

angular.module("account/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/login.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <h1 class=\"page-header\">\n" +
    "        Login\n" +
    "    </h1>\n" +
    "\n" +
    "    <form ng-submit=\"login()\">\n" +
    "\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>Username:</label>\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"account.userName\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>Password:</label>\n" +
    "            <input type=\"password\" class=\"form-control\" ng-model=\"account.password\">\n" +
    "        </div>\n" +
    "        <button class=\"btn btn-sucssess\" type=\"submit\">Login</button>\n" +
    "    </form>\n" +
    "\n" +
    "</div>");
}]);

angular.module("history/history.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("history/history.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "\n" +
    "            <div class=\"panel-heading\">Transaction History</div>\n" +
    "\n" +
    "            <table st-table=\"displayedTransactions\" st-safe-src=\"transactions\" class=\"table table-condensed\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Date</th>\n" +
    "                    <th>Username</th>\n" +
    "                    <th>Action</th>\n" +
    "                    <th>Total</th>\n" +
    "                    <th>Content</th>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th colspan=\"6\"><input st-search=\"\" class=\"form-control\" placeholder=\"Search...\" type=\"text\"/></th>\n" +
    "                </tr>\n" +
    "\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"transaction in displayedTransactions\">\n" +
    "                    <td>{{transaction.tnxTimestamp | date}}</td>\n" +
    "                    <td>{{transaction.userId}}</td>\n" +
    "                    <td>{{transaction.action}}</td>\n" +
    "                    <td>{{transaction.total}}</td>\n" +
    "                    <td>{{transaction.content}}</td>\n" +
    "                    <td>\n" +
    "                        <button type=\"button\" ng-click=\"openUpdateAgentModal(account)\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#modify-user-modal\" >\n" +
    "                            <i class=\"glyphicon glyphicon-edit\">\n" +
    "                            </i>\n" +
    "                        </button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "                <tfoot>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"8\" class=\"text-center\">\n" +
    "                        <div st-pagination=\"\" st-items-by-page=\"4\" st-displayed-pages=\"7\"></div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tfoot>\n" +
    "            </table>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row\" style=\"height: 100% ; overflow: hidden\">\n" +
    "    <div class=\"col-sm-4\" style=\"height: 100% ; overflow: hidden\">\n" +
    "            <div class=\"panel panel-default panel-info\">\n" +
    "\n" +
    "                <div class=\"panel-body\">\n" +
    "                <form action=\"\" class=\"form-horizontal\">\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"barCode\" class=\"control-label col-sm-5\">Bar Code</label>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <input type=\"text\" id=\"barCode\" class=\"form-control\" ng-model=\"shared.barCode\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"productId\" class=\"control-label col-sm-5\">Product ID</label>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <input type=\"text\" id=\"productId\" class=\"form-control\" ng-model=\"unitSale.product.productId\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"productName\" class=\"control-label col-sm-5\">Product Name</label>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <input type=\"text\" id=\"productName\" class=\"form-control\" ng-model=\"unitSale.product.productName\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"measuredIn\" class=\"control-label col-sm-5\">Measured In</label>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <input type=\"text\" id=\"measuredIn\" class=\"form-control\" ng-model=\"unitSale.product.measuredIn\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"qty\" class=\"control-label col-sm-5\">Qty</label>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <input type=\"text\" id=\"qty\" class=\"form-control\" ng-model=\"unitSale.qty\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <div class=\"col-sm-8 col-sm-offset-3\">\n" +
    "                            <button class=\"btn btn-primary\" ng-click=\"loadProductData(unitSale)\">Load</button>\n" +
    "                            <button class=\"btn btn-primary\" ng-click=\"addUnitSale(unitSale)\">Add</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default\">Cancel</button>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-8\" style=\"height:100%; overflow-y: hidden\">\n" +
    "\n" +
    "        <div class=\"row\" style=\"height:70%; overflow-y: hidden\">\n" +
    "            <div class=\"panel panel-default panel-info\" style=\"height:100%; overflow-y: auto\">\n" +
    "\n" +
    "                <table st-table=\"displayedUnitSales\" st-safe-src=\"unitSales\"  class=\"table table-condensed\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Product ID</th>\n" +
    "                        <th>Product Name</th>\n" +
    "                        <th>Description</th>\n" +
    "                        <th>Price</th>\n" +
    "                        <th>Measured In</th>\n" +
    "                        <th>Qty</th>\n" +
    "                        <th>Sub Total</th>\n" +
    "\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"unitSale in displayedUnitSales track by $index\">\n" +
    "                        <td>{{unitSale.product.productId}}</td>\n" +
    "                        <td>{{unitSale.product.productName | uppercase}}</td>\n" +
    "                        <td>{{unitSale.product.description}}</td>\n" +
    "                        <td>{{unitSale.product.price}}</td>\n" +
    "                        <td>{{unitSale.product.measuredIn}}</td>\n" +
    "                        <th>{{unitSale.qty}}</th>\n" +
    "                        <th>{{unitSale.unitTotal}}</th>\n" +
    "                        <td>\n" +
    "                            <button type=\"button\" ng-click=\"removeUnitSale(unitSale)\" class=\"btn btn-sm btn-danger\">\n" +
    "                                <i class=\"glyphicon glyphicon-remove\">\n" +
    "                                </i>\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                    <tfoot>\n" +
    "                    <!--tr>\n" +
    "                        <td colspan=\"9\" class=\"text-center\">\n" +
    "                            <div st-pagination=\"\" st-items-by-page=\"4\" st-displayed-pages=\"7\"></div>\n" +
    "                        </td>\n" +
    "                    </tr -->\n" +
    "                    </tfoot>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"row\" style=\"height:30%; overflow: hidden\">\n" +
    "\n" +
    "            <div class=\"container col-sm-6 col-sm-offset-5\">\n" +
    "                <table class=\"table table-striped\">\n" +
    "                    <tr>\n" +
    "                        <td width=\"20%\">Total</td>\n" +
    "                        <td width=\"20%\">{{sale.finalTotal}}</td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                        <td width=\"20%\">Tax</td>\n" +
    "                        <td width=\"20%\">0</td>\n" +
    "\n" +
    "                    </tr>\n" +
    "                    <tr style=\"width:100%\">\n" +
    "                        <td width=\"25%\">To Pay</td>\n" +
    "                        <td width=\"25%\">{{sale.finalTotal}}</td>\n" +
    "                        <td width=\"25%\">\n" +
    "                            <button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"pay()\">Pay\n" +
    "                            </button>\n" +
    "                        </td>\n" +
    "                        <td width=\"25%\"><button type=\"button\" class=\"btn btn-sm btn-info\">Void\n" +
    "                        </button></td>\n" +
    "                    </tr>\n" +
    "                </table>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("inventory/inventory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("inventory/inventory.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <form action=\"\" class=\"form-inline\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"element-1\">Search</label>\n" +
    "            <input type=\"text\" id=\"element-1\" class=\"form-control\">\n" +
    "        </div>\n" +
    "\n" +
    "        <button class=\"btn btn-info btn-md\" ng-click=\"getProducts()\"><span class=\"glyphicon glyphicon-search\"></span></button>\n" +
    "\n" +
    "        <button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#add-product-modal\" >Add Product</button>\n" +
    "\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "<hr>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"panel panel-default\">\n" +
    "\n" +
    "            <div class=\"panel-heading\">Products</div>\n" +
    "\n" +
    "            <table st-table=\"displayedProducts\" st-safe-src=\"products\" class=\"table table-condensed\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>Product ID</th>\n" +
    "                    <th>Product Name</th>\n" +
    "                    <th>Description</th>\n" +
    "                    <th>Measured In</th>\n" +
    "                    <th>Available Qty</th>\n" +
    "                    <th>Sold Qty</th>\n" +
    "                    <th>Price</th>\n" +
    "                    <th>Cost</th>\n" +
    "                    <th>Added date</th>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <th colspan=\"9\"><input st-search=\"\" class=\"form-control\" placeholder=\"Search...\" type=\"text\"/></th>\n" +
    "                </tr>\n" +
    "\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr ng-repeat=\"product in displayedProducts\">\n" +
    "                    <td>{{product.productId}}</td>\n" +
    "                    <td>{{product.productName | uppercase}}</td>\n" +
    "                    <td>{{product.description}}</td>\n" +
    "                    <td>{{product.measuredIn}}</td>\n" +
    "                    <td>{{product.availableQty}}</td>\n" +
    "                    <td>{{product.soldQty}}</td>\n" +
    "                    <td>{{product.price}}</td>\n" +
    "                    <td>{{product.cost}}</td>\n" +
    "                    <td>{{product.addedDate | date}}</td>\n" +
    "                    <td>\n" +
    "                        <button type=\"button\" ng-click=\"openUpdateProductModal(product)\" class=\"btn btn-sm btn-info\" data-toggle=\"modal\" data-target=\"#update-product-modal\" >\n" +
    "                            <i class=\"glyphicon glyphicon-edit\">\n" +
    "                            </i>\n" +
    "                        </button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "                <tfoot>\n" +
    "                <tr>\n" +
    "                    <td colspan=\"9\" class=\"text-center\">\n" +
    "                        <div st-pagination=\"\" st-items-by-page=\"4\" st-displayed-pages=\"7\"></div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tfoot>\n" +
    "            </table>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- modal for adding products-->\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"add-product-modal\">\n" +
    "    <div class=\"modal-dialog modal-lg\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button class=\"close\" type=\"button\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h3 class=\"modal-title\">Create Product</h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <form  ng-submit=\"addProduct()\" class=\"form-horizontal\">\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"productName\" class=\"col-xs-3 control-label\">Product Name</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"productName\" class=\"form-control\" placeholder=\"Product Name\" ng-model=\"product.productName\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"description\" class=\"col-xs-3 control-label\">Description</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"description\" class=\"form-control\" placeholder=\"Description\" ng-model=\"product.description\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"measuredIn\" class=\"col-xs-3 control-label\">Measured In</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"measuredIn\" class=\"form-control\" placeholder=\"Measured In\" ng-model=\"product.measuredIn\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"addedDate\" class=\"col-xs-3 control-label\">Added Date</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"addedDate\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"product.addedDate\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"price\" class=\"col-xs-3 control-label\">Price</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"price\" class=\"form-control\" placeholder=\"Price\" ng-model=\"product.price\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"availableQty\" class=\"col-xs-3 control-label\">Available Qty</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"availableQty\" class=\"form-control\" placeholder=\"Available Qty\" ng-model=\"product.availableQty\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"cost\" class=\"col-xs-3 control-label\">Cost</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"cost\" class=\"form-control\" placeholder=\"Cost\" ng-model=\"product.cost\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "c\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-xs-5 col-xs-offset-3\">\n" +
    "                                <button class=\"btn btn-primary\" type=\"submit\" >Add</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- modal for modifying products-->\n" +
    "\n" +
    "<div class=\"modal fade\" id=\"update-product-modal\">\n" +
    "    <div class=\"modal-dialog modal-lg\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button class=\"close\" type=\"button\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h3 class=\"modal-title\">Update Product</h3>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"modal-body\">\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <form  ng-submit=\"updateProduct()\" class=\"form-horizontal\">\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"productId\" class=\"col-xs-3 control-label\">Product ID</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"productId\" class=\"form-control\" placeholder=\"Product ID\" ng-model=\"product.productId\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"productName\" class=\"col-xs-3 control-label\">Product Name</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"productName\" class=\"form-control\" placeholder=\"Product Name\" ng-model=\"product.productName\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"description\" class=\"col-xs-3 control-label\">Description</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"description\" class=\"form-control\" placeholder=\"Description\" ng-model=\"product.description\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"measuredIn\" class=\"col-xs-3 control-label\">Measured In</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"measuredIn\" class=\"form-control\" placeholder=\"Measured In\" ng-model=\"product.measuredIn\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"addedDate\" class=\"col-xs-3 control-label\">Added Date</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"addedDate\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"product.addedDate\" is-open=\"true\" min-date=\"minDate\" max-date=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"price\" class=\"col-xs-3 control-label\">Price</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"price\" class=\"form-control\" placeholder=\"Price\" ng-model=\"product.price\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"availableQty\" class=\"col-xs-3 control-label\">Available Qty</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"availableQty\" class=\"form-control\" placeholder=\"Available Qty\" ng-model=\"product.availableQty\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"soldQty\" class=\"col-xs-3 control-label\">Sold Qty</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"soldQty\" class=\"form-control\" placeholder=\"Sold Qty\" ng-model=\"product.soldQty\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"cost\" class=\"col-xs-3 control-label\">Cost</label>\n" +
    "                            <div class=\"col-xs-5\">\n" +
    "                                <input type=\"text\" id=\"cost\" class=\"form-control\" placeholder=\"Cost\" ng-model=\"product.cost\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-xs-5 col-xs-offset-3\">\n" +
    "                                <button class=\"btn btn-primary\" type=\"submit\">Update</button>\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
