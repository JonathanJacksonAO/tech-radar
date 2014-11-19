//This is the title for your window tab, and your Radar
document.title = "Technology Radar";

var h = 650;
var w = 650;

var yearsToDisplay = 6;

var baseYearSize = (h / 2) / yearsToDisplay;

baseYearSize = Math.floor(baseYearSize);

//This is the concentic circles that want on your radar
var radar_arcs = [
//    {'r':100,'name':'Adopt'}
//    ,{'r':200,'name':'Trial'}
//    ,{'r':300,'name':'Assess'}
//    ,{'r':400,'name':'Hold'}
    // ,{'r':500,'name':'Possible Extra if you want it'}
//    {'r':80,'name':'2015'}
//    ,{'r':160,'name':'2016'}
//    ,{'r':240,'name':'2017'}
//    ,{'r':320,'name':'2018'}

    {'r': baseYearSize, 'name': '2015'}
    ,
    {'r': baseYearSize * 2, 'name': '2016'}
    ,
    {'r': baseYearSize * 3, 'name': '2017'}
    ,
    {'r': baseYearSize * 4, 'name': '2018'}
    ,
    {'r': baseYearSize * 5, 'name': '2019'}
    ,
    {'r': baseYearSize * 6, 'name': '2020'}
];

var blipSize = 200;

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.


var radar_data = [
    { "quadrant": "Techniques",
        "guid":"aaa-aaa-aaa",
        "description": "Some interesting techniques being looked at by the CTO Team.",
        "left": 45,
        "top": 18,
//        "color" : "#8FA227",
        "color": "#FF5722", //colour for blimps for this specific quadrant
        "items": [
            {
                "name": "Microservices",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear": "2018",
                "description": "The term **Microservice Architecture** has sprung up over the last few years to describe a particular way of designing software applications as suites of independently deployable services. While there is no precise definition of this architectural style, there are certain common characteristics around organization around business capability, automated deployment, intelligence in the endpoints, and decentralized control of languages and data.",
                "pc": {"r": 270, "t": 135},
                "movement": "t",
                "blipSize": blipSize
            },
            {
                "name": "Scrum Certification",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear": "2020",
                "description": "**Certifications in Scrum**, the leading framework for Agile software development.\n\nScrum training and certification fulfill the vision of the Agile manifesto by fostering greater collaboration, productivity, and success among team members. This global movement transforms organizations and takes them to higher levels of performance.",
                "pc": {"r": 110, "t": 135},
                "movement": "c",
                "blipSize": blipSize},
            {
                "name": "Test",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2015",
                "description":"Description to go **here**.",
                "pc": {"r": 160, "t": 140},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "Incremental data warehousing",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2015",
                "description":"Description to go **here**.",
                "pc": {"r": 180, "t": 165},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "DevOps",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2015",
                "description":"**DevOps** (a portmanteau of **development** and **operations**) is a software development method that stresses communication, collaboration and integration between software developers and Information Technology(IT) professionals.  DevOps is a response to the interdependence of software development and IT operations. It aims to help an organization rapidly produce software products and services.\n\nFor more information, [click here](http://en.wikipedia.org/wiki/DevOps).",
                "pc": {"r": 200, "t": 110},
                "movement": "c",
                "blipSize": blipSize
            }

        ]
    },
    { "quadrant": "Tools",
        "guid":"bbb-bbb-bbb",
        "description": "Some interesting _tools_ being looked at by the CTO Team.",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#3F51B5", // indigo
        "items": [
            {
                "name": "ESB",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2016",
                "description":"Description goes **here**.",
                "pc": {"r": 80, "t": 20},
                "movement": "t",
                "blipSize": blipSize},
            {
                "name": "Intentional Programming",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2016",
                "description":"Description goes **here**.",
                "pc": {"r": 210, "t": 10},
                "movement": "c",
                "blipSize": blipSize},
            {
                "name": "Cross mobile platforms",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2016",
                "description":"Description goes **here**.",
                "pc": {"r": 140, "t": 70},
                "movement": "c",
                "blipSize": blipSize},
            {
                "name": "Github",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear": "2019",
                "description": "GitHub is a Git repository web-based hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. Unlike Git, which is strictly a command-line tool, GitHub provides a web-based graphical interface and desktop as well as mobile integration. It also provides access control and several collaboration features such as wikis, task management, and bug tracking and feature requests for every project.\n\nGitHub offers both paid plans for private repositories and free accounts, which are usually used to host open-source software projects. As of 2014, GitHub reports having over 3.4 million users,[4] making it the largest code host in the world",
                "pc": {"r": 210, "t": 70},
                "movement": "c",
                "blipSize": blipSize},
            {
                "name": "Restfulie",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2016",
                "description":"Description goes **here**.",
                "pc": {"r": 210, "t": 50},
                "movement": "c",
                "blipSize": blipSize}
        ]
    },
    { "quadrant": "Platforms",
        "guid":"ccc-ccc-ccc",
        "description": "Here we cover off cloud, web and application platforms.",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#673AB7", // deep purple
        "items": [
            {
                "name": "Rich internet applications",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2017",
                "description":"Description goes **here**.",
                "pc": {"r": 120, "t": 200},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "GWT",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2017",
                "description":"Description goes **here**.",
                "pc": {"r": 220, "t": 210},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "IE8",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2017",
                "description":"Description goes **here**.",
                "pc": {"r": 170, "t": 240},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "WS-* beyond basic profile",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2017",
                "description":"Description goes **here**.",
                "pc": {"r": 260, "t": 230},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "Azure",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2017",
                "description":"Description goes **here**.",
                "pc": {"r": 20, "t": 240},
                "movement": "c",
                "blipSize": blipSize
            }
        ]
    },
    { "quadrant": "Languages",
        "guid":"ddd-dddd-ddd",
        "description": "Some of the languages we are looking at around web and mobile development.",
        "color": "#8BC34A", // light green
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            {
                "name": "Java language end of life",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2018",
                "description":"Description goes **here**.",
                "pc": {"r": 60, "t": 340},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "F#",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2018",
                "description":"Description goes **here**.",
                "pc": {"r": 270, "t": 340},
                "movement": "c",
                "blipSize": blipSize
            },
            {
                "name": "Scala",
                "team":"Technical Authority; Technical Lead; Project Manager; Business Analyst; Application Developer",
                "targetYear":"2018",
                "description":"Description goes **here**.",
                "pc": {"r": 220, "t": 320},
                "movement": "c",
                "blipSize": blipSize
            }
        ]
    }
];
