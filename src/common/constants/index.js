// export const BASE_URL = "https://codelockr-api.herokuapp.com"
export const BASE_URL = "http://localhost:3030"

export const DEFAULT_SNIPPET_FORM = {
	title: "",
	parentFolder: "",
	parseFormat: "",
	code: "",
	notes: "",
	isPrivate: false,
}

export const INITIAL_APP_STATE = {
	showRegistration: false,
	loggedIn: false,
	isAdmin: false,
	username: "",
	token: "",
	folderFilter: "",
	submitMode: "POST",
	snippetForm: { ...DEFAULT_SNIPPET_FORM },
	snippets: [],
	friendSnippets: [],
	refreshUser: false,
	refreshSnippets: false,
	userData: {},
}

export const DEFAULT_REGISTRATION_FORM = {
	firstName: "",
	lastName: "",
	email: "",
	username: "",
	password: "",
	confirmPassword: "",
}

export const EMAIL_REGEX =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

export const CUSTOMER_STORIES = [
	{
		name: "Brian S.",
		review: "🧙🏽‍♀️ This is proFESH! So many good little features.",
		link: "https://www.brianpstewart.com/",
	},
	{
		name: "Tyler C.",
		review: "THIS. I need this in my life. Such a great idea. AND A SOCIAL ASPECT!",
		link: "",
	},
	{
		name: "Drew Wilson",
		review: "Love this concept. I’ll be using it for all my run commands.",
		link: "",
	},
	{
		name: "Mark R.",
		review: "This is a great idea. So dope.",
		link: "",
	},
	{
		name: "Arthur B.",
		review: "🐐",
		link: "https://www.arthurbernierjr.com/",
	},
	{
		name: "Bunmee V.",
		review: "Wow this is really nice and useful. A great idea!",
		link: "",
	},
	{
		name: "Kristen P.",
		review: "Yeah, I want to use this. LOVE!",
		link: "",
	},
	{
		name: "Evan J.",
		review: "Incredibly useful. This is awesome!",
		link: "",
	},
]

export const LANGUAGES = [
	{ name: "1C", value: "1c" },
	{ name: "ABNF", value: "abnf" },
	{ name: "Access logs", value: "accesslog" },
	{ name: "Ada", value: "ada" },
	{ name: "Arduino (C++ w/Arduino libs)", value: "arduino" },
	{ name: "ARM assembler", value: "armasm" },
	{ name: "AVR assembler", value: "avrasm" },
	{ name: "ActionScript", value: "actionscript" },
	{ name: "AngelScript", value: "angelscript" },
	{ name: "Apache", value: "apache" },
	{ name: "AppleScript", value: "applescript" },
	{ name: "Arcade", value: "arcade" },
	{ name: "AsciiDoc", value: "asciidoc" },
	{ name: "AspectJ", value: "aspectj" },
	{ name: "AutoHotkey", value: "autohotkey" },
	{ name: "AutoIt", value: "autoit" },
	{ name: "Awk", value: "awk" },
	{ name: "Bash", value: "bash" },
	{ name: "Basic", value: "basic" },
	{ name: "BNF", value: "bnf" },
	{ name: "Brainfuck", value: "brainfuck" },
	{ name: "C#", value: "csharp" },
	{ name: "C", value: "c" },
	{ name: "C++", value: "cpp" },
	{ name: "C/AL", value: "cal" },
	{ name: "Cache Object Script", value: "cos" },
	{ name: "CMake", value: "cmake" },
	{ name: "Coq", value: "coq" },
	{ name: "CSP", value: "csp" },
	{ name: "CSS", value: "css" },
	{ name: "Cap’n Proto", value: "capnproto" },
	{ name: "Clojure", value: "clojure" },
	{ name: "CoffeeScript", value: "coffeescript" },
	{ name: "Crmsh", value: "crmsh" },
	{ name: "Crystal", value: "crystal" },
	{ name: "D", value: "d" },
	{ name: "DNS Zone file", value: "dns" },
	{ name: "DOS", value: "dos" },
	{ name: "Dart", value: "dart" },
	{ name: "Delphi", value: "delphi" },
	{ name: "Diff", value: "diff" },
	{ name: "Django", value: "django" },
	{ name: "Dockerfile", value: "dockerfile" },
	{ name: "dsconfig", value: "dsconfig" },
	{ name: "DTS (Device Tree)", value: "dts" },
	{ name: "Dust", value: "dust" },
	{ name: "EBNF", value: "ebnf" },
	{ name: "Elixir", value: "elixir" },
	{ name: "Elm", value: "elm" },
	{ name: "Erlang", value: "erlang" },
	{ name: "Excel", value: "excel" },
	{ name: "F#", value: "fsharp" },
	{ name: "FIX", value: "fix" },
	{ name: "Fortran", value: "fortran" },
	{ name: "G-Code", value: "gcode" },
	{ name: "Gams", value: "gams" },
	{ name: "GAUSS", value: "gauss" },
	{ name: "Gherkin", value: "gherkin" },
	{ name: "Go", value: "go" },
	{ name: "Golo", value: "golo" },
	{ name: "Gradle", value: "gradle" },
	{ name: "Groovy", value: "groovy" },
	{ name: "HTML, XML", value: "xml" },
	{ name: "HTTP", value: "http" },
	{ name: "Haml", value: "haml" },
	{ name: "Handlebars", value: "handlebars" },
	{ name: "Haskell", value: "haskell" },
	{ name: "Haxe", value: "haxe" },
	{ name: "Hy", value: "hy" },
	{ name: "Ini, TOML", value: "ini" },
	{ name: "Inform7", value: "inform7" },
	{ name: "IRPF90", value: "irpf90" },
	{ name: "JSON", value: "json" },
	{ name: "Java", value: "java" },
	{ name: "JavaScript", value: "javascript" },
	{ name: "Julia", value: "julia" },
	{ name: "Kotlin", value: "kotlin" },
	{ name: "LaTeX", value: "tex" },
	{ name: "Leaf", value: "leaf" },
	{ name: "Lasso", value: "lasso" },
	{ name: "Less", value: "less" },
	{ name: "LDIF", value: "ldif" },
	{ name: "Lisp", value: "lisp" },
	{ name: "LiveCode Server", value: "livecodeserver" },
	{ name: "LiveScript", value: "livescript" },
	{ name: "Lua", value: "lua" },
	{ name: "Makefile", value: "makefile" },
	{ name: "Markdown", value: "markdown" },
	{ name: "Mathematica", value: "mathematica" },
	{ name: "Matlab", value: "matlab" },
	{ name: "Maxima", value: "maxima" },
	{ name: "Maya Embedded name", value: "mel" },
	{ name: "Mercury", value: "mercury" },
	{ name: "Mizar", value: "mizar" },
	{ name: "Mojolicious", value: "mojolicious" },
	{ name: "Monkey", value: "monkey" },
	{ name: "Moonscript", value: "moonscript" },
	{ name: "N1QL", value: "n1ql" },
	{ name: "NSIS", value: "nsis" },
	{ name: "Nginx", value: "nginx" },
	{ name: "Nim", value: "nim" },
	{ name: "Nix", value: "nix" },
	{ name: "OCaml", value: "ocaml" },
	{ name: "Objective C", value: "objectivec" },
	{ name: "OpenGL Shading name", value: "glsl" },
	{ name: "OpenSCAD", value: "openscad" },
	{ name: "Oracle Rules name", value: "ruleslanguage" },
	{ name: "Oxygene", value: "oxygene" },
	{ name: "PF", value: "pf" },
	{ name: "PHP", value: "php" },
	{ name: "Parser3", value: "parser3" },
	{ name: "Perl", value: "perl" },
	{ name: "Plaintext", value: "plaintext" },
	{ name: "Pony", value: "pony" },
	{ name: "PostgreSQL & PL/pgSQL", value: "pgsql" },
	{ name: "PowerShell", value: "powershell" },
	{ name: "Processing", value: "processing" },
	{ name: "Prolog", value: "prolog" },
	{ name: "Properties", value: "properties" },
	{ name: "Protocol Buffers", value: "protobuf" },
	{ name: "Puppet", value: "puppet" },
	{ name: "Python", value: "python" },
	{ name: "Python profiler results", value: "profile" },
	{ name: "Python REPL", value: "python-repl" },
	{ name: "Q", value: "k" },
	{ name: "QML", value: "qml" },
	{ name: "R", value: "r" },
	{ name: "ReasonML", value: "reasonml" },
	{ name: "RenderMan RIB", value: "rib" },
	{ name: "RenderMan RSL", value: "rsl" },
	{ name: "Roboconf", value: "graph" },
	{ name: "Ruby", value: "ruby" },
	{ name: "Rust", value: "rust" },
	{ name: "SAS", value: "SAS" },
	{ name: "SCSS", value: "scss" },
	{ name: "SQL", value: "sql" },
	{ name: "STEP Part 21", value: "p21" },
	{ name: "Scala", value: "scala" },
	{ name: "Scheme", value: "scheme" },
	{ name: "Scilab", value: "scilab" },
	{ name: "Shell", value: "shell" },
	{ name: "Smali", value: "smali" },
	{ name: "Smalltalk", value: "smalltalk" },
	{ name: "SML", value: "sml" },
	{ name: "Stan", value: "stan" },
	{ name: "Stata", value: "stata" },
	{ name: "Stylus", value: "stylus" },
	{ name: "SubUnit", value: "subunit" },
	{ name: "Swift", value: "swift" },
	{ name: "Tcl", value: "tcl" },
	{ name: "Test Anything Protocol", value: "tap" },
	{ name: "Thrift", value: "thrift" },
	{ name: "TP", value: "tp" },
	{ name: "Twig", value: "twig" },
	{ name: "TypeScript", value: "typescript" },
	{ name: "VB.Net", value: "vbnet" },
	{ name: "VBScript", value: "vbscript" },
	{ name: "VHDL", value: "vhdl" },
	{ name: "Vala", value: "vala" },
	{ name: "Verilog", value: "verilog" },
	{ name: "Vim Script", value: "vim" },
	{ name: "X++", value: "axapta" },
	{ name: "x86 Assembly", value: "x86asm" },
	{ name: "XL", value: "xl" },
	{ name: "XQuery", value: "xquery" },
	{ name: "YAML", value: "yml" },
]
