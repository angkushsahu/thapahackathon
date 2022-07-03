export interface courseInterface {
	title: string;
	description: string;
	route: string;
	image: {
		src: string;
		height: number;
		width: number;
	};
	links: {
		youtube: string;
		docs: string;
	};
}

const courseArray: courseInterface[] = [
	{
		title: "HTML / CSS",
		description:
			"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.",
		route: "/javascript",
		image: { src: "htmlCss.jfif", width: 320, height: 192 },
		links: {
			youtube: "https://youtu.be/5p8e2ZkbOFU",
			docs: "https://www.w3.org/standards/webdesign/htmlcss",
		},
	},
	{
		title: "Javascript",
		description:
			"JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).",
		route: "/javascript",
		image: { src: "javascript.jfif", width: 320, height: 183.206 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp1hqyT6h7pY0RlXIIGlE5U0",
			docs: "https://developer.mozilla.org/en-US/docs/Web/javascript",
		},
	},
	{
		title: "SCSS / SASS",
		description:
			'Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, "SCSS" (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block. The indented syntax and SCSS files are traditionally given the extensions .sass and .scss, respectively. CSS3 consists of a series of selectors and pseudo-selectors that group rules that apply to them. Sass (in the larger context of both syntaxes) extends CSS by providing several mechanisms available in more traditional programming languages, particularly object-oriented languages, but that are not available to CSS3 itself. When SassScript is interpreted, it creates blocks of CSS rules for various selectors as defined by the Sass file. The Sass interpreter translates SassScript into CSS. Alternatively, Sass can monitor the .sass or .scss file and translate it to an output .css file whenever the .sass or .scss file is saved.',
		route: "/scss",
		image: { src: "scss.jfif", width: 320, height: 160 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp0732IWJ71s04jO8rj5XBEX",
			docs: "https://sass-lang.com/documentation/",
		},
	},
	{
		title: "Tailwind CSS",
		description:
			"Tailwind CSS is a CSS framework that offers a new concept with the concept of utility first where you no longer need to think about the length of class names for HTML components. Tailwind consists of class names that are quite intuitive to use. Tailwind CSS was created by Adam Wathan, a person who is quite famous in the Laravel community with several courses. This time he offers a new concept that is different from Bootstrap, Bulma, or other CSS frameworks through Tailwind CSS. The website and the documentation itself are really pretty and it’s easy to find something, you should try the Tailwind documentation. In addition to complete notes for each attribute or class name that can be used, there is also a tailwind playground for you to start playing with the class in the browser without having to use your own text editor.",
		route: "/javascript",
		image: { src: "tailwindcss.jfif", width: 320, height: 159.633 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp3l8tWTcB7R7Bsgd86lCa8a",
			docs: "https://tailwindcss.com/docs/installation",
		},
	},
	{
		title: "React JS",
		description:
			"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.",
		route: "/react-js",
		image: { src: "reactjs.jfif", width: 320, height: 187.99 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
			docs: "https://reactjs.org/docs/getting-started.html",
		},
	},
	{
		title: "Figma",
		description:
			'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allow viewing and interacting with Figma prototypes in real-time mobile devices. The feature set of Figma focuses on use in user interface and user experience design, with an emphasis on real-time collaboration. Dylan Field and Evan Wallace began working on Figma in 2012 while computer science students at Brown University. Wallace studied graphics and was a Teacher Assistant for the Computer Science Department while Field chaired the CS Departmental Undergraduate Group. The original objective behind Figma was to enable "anyone [to] be creative by creating free, simple, creative tools in a browser." Field and Wallace experimented with different ideas, including software for drones and a meme generator before settling on web-based graphics editor software.',
		route: "/figma",
		image: { src: "figma.jfif", width: 320, height: 200.992 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp0TlgR6uPLR1s6X_w65FlTl",
			docs: "https://help.figma.com/hc/en-us/categories/360002051613-Get-started",
		},
	},
	{
		title: "Node JS",
		description:
			'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).',
		route: "/node-js",
		image: { src: "nodejs.jfif", width: 320, height: 182.278 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8",
			docs: "https://nodejs.org/en/docs/",
		},
	},
	{
		title: "Express JS",
		description:
			"Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. The original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library.",
		route: "/express-js",
		image: { src: "expressjs.jfif", width: 320, height: 182.278 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp3Vqww2cL5KbDkShj4NMRzk",
			docs: "https://expressjs.com/",
		},
	},
	{
		title: "Next JS",
		description:
			"Next.js is a flexible React framework that gives you building blocks to create fast web applications. Next.js is a React framework that gives you building blocks to create web applications.By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application. You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience. Whether you’re an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.",
		route: "/next-js",
		image: {
			src: "nextjs.png",
			width: 320,
			height: 168,
		},
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp2rDbpfKAeUi9f8qZMS7_cv",
			docs: "https://nextjs.org/docs",
		},
	},
	{
		title: "React Native",
		description:
			"React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities. It is also being used to develop virtual reality applications at Oculus. The working principles of React Native are virtually identical to React except that React Native does not manipulate the DOM via the Virtual DOM. It runs in a background process (which interprets the JavaScript written by the developers) directly on the end-device and communicates with the native platform via serialized data over an asynchronous and batched bridge.",
		route: "/react-native",
		image: { src: "reactNative.jfif", width: 320, height: 178.071 },
		links: {
			youtube: "https://youtube.com/playlist?list=PLwGdqUZWnOp354xMD8u0hxX-1qmCvfLiY",
			docs: "https://reactnative.dev/docs/getting-started",
		},
	},
];

export default courseArray;
