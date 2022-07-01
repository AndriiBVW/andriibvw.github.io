const oxjs = ".ox__c1";
const oxapi = ".ox__c2";

const sources1 = ".sources .sources__a1";
const sources2 = ".sources .sources__a2";
const sources3 = ".sources .sources__a3";
const sources4 = ".sources .sources__a4";
const sources5 = ".sources .sources__a5";

const destination1 = ".destination .destination__b1";
const destination2 = ".destination .destination__b2";
const destination3 = ".destination .destination__b3";
const destination4 = ".destination .destination__b4";
const destination5 = ".destination .destination__b5";
const destination6 = ".destination .destination__b6";

const path1 = ".animated__bg-1 path.st0";
const path2 = ".animated__bg-1 path.st3";
const path3 = ".animated__bg-1 path.st2";
const path4 = ".animated__bg-1 path.st4";
const path4Line = ".animated__bg-1 path#path-4-line";
const path5 = ".animated__bg-1 path.st1";

const pathJS = "#animated__bg-2 path.st0-bg-2";
const pathJSLine = "#animated__bg-2 path#pathJS";
const colorPathJS = "#animated__bg-2 svg stop";

const path6 = ".animated__bg-4 path.st0-bg-4";
const path7 = ".animated__bg-4 path.st1-bg-4";
const path8 = ".animated__bg-4 path.st2-bg-4";
const path9 = ".animated__bg-4 path.st5-bg-4";
const path10 = ".animated__bg-4 path.st4-bg-4";
const path11 = ".animated__bg-4 path.st3-bg-4";

const pathAPI = "#animated__bg-3 path";
const colorPathAPI = "#animated__bg-3 svg stop";

const colorPath1 = ".animated__bg-1 #path-1_1_ stop";
const colorPath2 = ".animated__bg-1 #path-2_1_ stop";
const colorPath3 = ".animated__bg-1 #path-3_1_ stop";
const colorPath4 = ".animated__bg-1 #path-4_1_ stop";
const colorPath5 = ".animated__bg-1 #path-5_1_ stop";
const colorPath6 = ".animated__bg-4 #path-6_2_ stop";
const colorPath7 = ".animated__bg-4 #path-7_2_ stop";
const colorPath8 = ".animated__bg-4 #path-8_2_ stop";
const colorPath9 = ".animated__bg-4 #path-9_1_ stop";
const colorPath10 = ".animated__bg-4 #path-10_1_ stop";
const colorPath11 = ".animated__bg-4 #path-11_1_ stop";

const cardBody = "#card_body";
const event1 = "#event-1";
const event2 = "#event-2";
const event3 = "#event-3";
const event4 = "#event-4";
const event5 = "#event-5";
const event6 = "#event-6";
const event7 = "#event-7";
const event8 = "#event-8";
const event9 = "#event-9";
const event10 = "#event-10";
const event11 = "#event-11";
const event12 = "#event-12";

const msg0 = "#octopus-msg-0";
const msg1 = "#octopus-msg-1";
const msg2 = "#octopus-msg-2";
const msg3 = "#octopus-msg-3";
const msg4 = "#octopus-msg-4";
const msg5 = "#octopus-msg-5";
const msg6 = "#octopus-msg-6";
const msg7 = "#octopus-msg-7";
const msg8 = "#octopus-msg-8";
const msg9 = "#octopus-msg-9";
const msg10 = "#octopus-msg-10";
const msg11 = "#octopus-msg-11";
const msg12 = "#octopus-msg-12";
const msg13 = "#octopus-msg-13";
const msg14 = "#octopus-msg-14";
const msg15 = "#octopus-msg-15";
const msg16 = "#octopus-msg-16";
const msg17 = "#octopus-msg-17";
const msg18 = "#octopus-msg-18";
const msg19 = "#octopus-msg-19";
const msg20 = "#octopus-msg-20";
const msg21 = "#octopus-msg-21";
const msg22 = "#octopus-msg-22";
const msg23 = "#octopus-msg-23";
const msg24 = "#octopus-msg-24";
const msg25 = "#octopus-msg-25";

gsap.registerPlugin(MotionPathPlugin, TextPlugin);
let tl;
const speed = 1;
let screenSize; // "lg" / "md" / "sm"

if (window.innerWidth > 1200) {
	screenSize = "lg";
} else if (window.innerWidth <= 1200 && window.innerWidth >= 768) {
	screenSize = "md";
} else {
	screenSize = "sm";
}

let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.4,
};

function listener() {
	if (window.innerWidth >= 1200) {
		screenSize = "lg";
	} else if (window.innerWidth < 1200 && window.innerWidth >= 768) {
		screenSize = "md";
	} else {
		screenSize = "sm";
	}
	tl.pause(0);
	tl.kill();
	start(speed);
}

let c = function (entries, observer) {
	if (entries[0].isIntersecting) {
		start(speed);

		window.addEventListener("resize", listener);
	} else {
		tl?.pause(0);
		tl?.kill();
		window.removeEventListener("resize", listener);
	}
};

let observer = new IntersectionObserver(c, options);
let t = document.querySelector("#animation-block");
observer.observe(t);

// наблюдатель

function start(speed) {
	tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

	// step 1
	const stepPath1 = [
		{
			msg: msg2,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg3,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
	];
	if (screenSize === "lg") {
		startSession(msg1, sources1, [path1], colorPath1, speed);
	}
	startJS(msg2, speed);
	tl.to(cardBody, {
		maxHeight: "322px",
		marginTop: screenSize === "sm" ? "10px" : "18px",
		duration: 0.3 * speed,
	});
	cardEventStart(event1, 0.3, speed);
	cardEventEnd(event1, 0.3, 0.75, speed);
	startAPI(msg2, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath1, speed);
	}
	resetShortPathActive(stepPath1, speed);

	// step 2
	const stepPath2 = [
		{
			msg: msg4,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg5,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
	];
	startJS(msg4, speed, null);
	cardEventStart(event2, 0.3, speed);
	tl.to(
		event1 + " .msg__date",
		{
			text: "1 min",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event2, 0.3, 0.75, speed);
	startAPI(msg4, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath2, speed);
	}
	resetShortPathActive(stepPath2, speed);

	// step 3
	startJS(msg0, speed, null);
	cardEventStart(event3, 0.3, speed);
	tl.to(
		event2 + " .msg__date",
		{
			text: "1 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 min",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event3, 0.3, 0.75, speed, true);
	resetFullPathActive(sources1, path1, colorPath1, speed);

	// step 4
	const stepPath4 = [
		{
			msg: msg4,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg5,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
		{
			msg: msg6,
			path: path8,
			colorPath: colorPath8,
			destination: destination3,
		},
	];
	if (screenSize === "lg") {
		startSession(msg1, sources2, [path2], colorPath2, speed);
	}
	startJS(msg4, speed);
	cardEventStart(event4, 0.3, speed);
	tl.to(
		event3 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event4, 0.3, 0.75, speed);
	startAPI(msg4, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath4, speed);
	}
	resetShortPathActive(stepPath4, speed);

	// step 5
	const stepPath5 = [
		{
			msg: msg7,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg8,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
		{
			msg: msg9,
			path: path8,
			colorPath: colorPath8,
			destination: destination3,
		},
	];
	startJS(msg7, speed, null);
	cardEventStart(event5, 0.3, speed);
	tl.to(
		event4 + " .msg__date",
		{
			text: "4 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event5, 0.3, 0.75, speed);
	startAPI(msg7, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath5, speed);
	}
	resetShortPathActive(stepPath5, speed);

	// step 6
	startJS(msg0, speed, null);
	cardEventStart(event6, 0.3, speed);
	tl.to(
		event5 + " .msg__date",
		{
			text: "12 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "16 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event6, 0.3, 0.75, speed, true);
	resetFullPathActive(sources2, path2, colorPath2, speed);

	// step 7
	const stepPath7 = [
		{
			msg: msg10,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg11,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
		{
			msg: msg12,
			path: path8,
			colorPath: colorPath8,
			destination: destination3,
		},
		{
			msg: msg13,
			path: path10,
			colorPath: colorPath10,
			destination: destination5,
		},
	];
	if (screenSize === "lg") {
		startSession(msg1, sources4, [path4, path4Line], colorPath4, speed);
	}
	startJS(msg10, speed);
	cardEventStart(event7, 0.3, speed);
	tl.to(
		event6 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event5 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event7, 0.3, 0.75, speed);
	startAPI(msg10, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath7, speed);
	}
	resetShortPathActive(stepPath7, speed);

	// step 8
	const stepPath8 = [
		{
			msg: msg14,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg15,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
		{
			msg: msg16,
			path: path8,
			colorPath: colorPath8,
			destination: destination3,
		},
		{
			msg: msg17,
			path: path10,
			colorPath: colorPath10,
			destination: destination5,
		},
	];
	startJS(msg14, speed, null);
	cardEventStart(event8, 0.3, speed);
	tl.to(
		event7 + " .msg__date",
		{
			text: "2 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event6 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event5 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event8, 0.3, 0.75, speed);
	startAPI(msg14, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath8, speed);
	}
	resetShortPathActive(stepPath8, speed);

	// step 9
	const stepPath9 = [
		{
			msg: msg18,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg19,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
		{
			msg: msg20,
			path: path8,
			colorPath: colorPath8,
			destination: destination3,
		},
		{
			msg: msg21,
			path: path10,
			colorPath: colorPath10,
			destination: destination5,
		},
	];
	startJS(msg18, speed, null);
	cardEventStart(event9, 0.3, speed);
	tl.to(
		event8 + " .msg__date",
		{
			text: "3 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event7 + " .msg__date",
		{
			text: "8 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event6 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event5 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event9, 0.3, 0.75, speed);
	startAPI(msg18, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath9, speed);
	}
	resetShortPathActive(stepPath9, speed);

	// step 10
	const stepPath10 = [
		{
			msg: msg22,
			path: path6,
			colorPath: colorPath6,
			destination: destination1,
		},
		{
			msg: msg23,
			path: path7,
			colorPath: colorPath7,
			destination: destination2,
		},
		{
			msg: msg24,
			path: path8,
			colorPath: colorPath8,
			destination: destination3,
		},
		{
			msg: msg25,
			path: path10,
			colorPath: colorPath10,
			destination: destination5,
		},
	];
	boxActive(oxjs, 0.3, speed, null);
	activeShortPath(pathJS, colorPathJS, 0.15, speed);
	cardEventStart(event10, 0.3, speed);
	tl.to(
		event9 + " .msg__date",
		{
			text: "5 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event8 + " .msg__date",
		{
			text: "11 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event7 + " .msg__date",
		{
			text: "16 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event6 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event5 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event10, 0.3, 0.75, speed);
	startAPI(msg22, speed);
	if (screenSize === "lg") {
		startDestinations(stepPath10, speed);
	}
	resetShortPathActive(stepPath10, speed, false);

	// step 11
	cardEventStart(event11, 0.3, speed);
	tl.to(
		event10 + " .msg__date",
		{
			text: "1 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event9 + " .msg__date",
		{
			text: "6 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event8 + " .msg__date",
		{
			text: "12 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event7 + " .msg__date",
		{
			text: "17 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event6 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event5 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event11, 0.3, 0.75, speed);

	// step 12
	startJS(msg0, speed, null);
	cardEventStart(event12, 0.3, speed);
	tl.to(
		event11 + " .msg__date",
		{
			text: "1 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event10 + " .msg__date",
		{
			text: "2 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event9 + " .msg__date",
		{
			text: "7 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event8 + " .msg__date",
		{
			text: "13 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event7 + " .msg__date",
		{
			text: "18 min",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event6 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event5 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event4 + " .msg__date",
		{
			text: "1 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event3 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event2 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	tl.to(
		event1 + " .msg__date",
		{
			text: "2 day",
			duration: 0,
		},
		"<"
	);
	cardEventEnd(event12, 0.3, 0.75, speed, true);

	resetFullPathActive(sources4, path4, colorPath4, speed);

	reset(0.5, speed);
}

function startSession(msg, target, path, colorPath, speed) {
	boxActive(target, 0.3, speed);
	showMsg(msg1, 0.15, speed);
	activeLongPath(path[0], colorPath, 0.15, speed);
	path[1]
		? moveMsg(msg, path[1], 1.5, speed)
		: moveMsg(msg, path[0], 1.5, speed);
	hideMsg(msg, 0.15, speed);
}
function startJS(msg, speed, label) {
	boxActive(oxjs, 0.3, speed, label);
	showMsg(msg, 0.15, speed);
	activeShortPath(pathJS, colorPathJS, 0.15, speed);
	moveMsg(msg, pathJSLine, 0.6, speed);
	hideMsg(msg, 0.15, speed);
}
function startAPI(msg, speed) {
	showMsg(msg, 0.15, speed);
	activeShortPath(pathAPI, colorPathAPI, 0.15, speed);
	moveMsg(msg, pathAPI, 0.6, speed);
	hideMsg(msg, 0.15, speed);
	boxActive(oxapi, 0.3, speed);
}
function startDestinations(arrMsg, speed) {
	boxActive(oxapi, 0.3, speed, null);
	arrMsg.forEach((item, i) => {
		showMsg(item.msg, 0.15, speed, "<");
	});
	arrMsg.forEach((item) => {
		activeLongPath(item.path, item.colorPath);
	});

	arrMsg.forEach((item, i) => {
		moveMsg(item.msg, item.path, 1.5, speed);
	});

	arrMsg.forEach((item, i) => {
		hideMsg(item.msg, 0.15, speed);
	});

	arrMsg.forEach((item) => {
		boxActive(item.destination, 0.3, speed);
	});
}
function resetShortPathActive(arrMsg, speed, isoxjs = true) {
	if (isoxjs) {
		boxNotActive(oxjs, 0.3, 0, speed, ">+0.5");
		notActiveShortPath(pathJS, colorPathJS, 0.3, speed);
	}
	boxNotActive(oxapi, 0.3, 0, speed, "<");
	notActiveShortPath(pathAPI, colorPathAPI, 0.3, speed);

	arrMsg.forEach((item) => {
		notActiveLongPath(item.path, item.colorPath, 0.3, speed);
		boxNotActive(item.destination, 0.3, 0, speed, "<");
	});
}
function resetFullPathActive(sources, sourcePath, sourceColorPath, speed) {
	boxNotActive(oxjs, 0.5, 0, speed, ">+0.5");
	notActiveShortPath(pathJS, colorPathJS, 0.3, speed);
	notActiveLongPath(sourcePath, sourceColorPath, 0.3, speed);
	boxNotActive(sources, 0.5, 0, speed, "<");
}

function moveMsg(target, path, duration, speed) {
	tl.to(
		target,
		{
			duration: duration * speed,
			ease: "linear",
			motionPath: {
				path: path,
				align: path,
				alignOrigin: [0.2, 0.5],
			},
		},
		"<"
	);
}
function showMsg(target, duration, speed, label = null) {
	tl.to(
		target,
		{
			opacity: 1,
			duration: duration * speed,
		},
		label
	);
}
function hideMsg(target, duration, speed, label = ">-0.1") {
	tl.to(
		target,
		{
			opacity: 0,
			duration: duration * speed,
		},
		label
	);
}
function boxActive(target, duration, speed, label = "<") {
	tl.to(
		target,
		{
			background: "#ffffff",
			border: "none",
			boxShadow:
				"0px 0px 12px rgba(190, 190, 190, 0.55), 0px 0px 17px rgba(197, 197, 197, 0.42)",
			duration: duration * speed,
		},
		label
	);
}
function activeLongPath(longPathTarget, longColorPathTarget, duration, speed) {
	tl.to(
		longColorPathTarget,
		{
			stopColor: "#2D9CDB",
			duration: duration * speed,
		},
		"<"
	);
	tl.to(
		longPathTarget,
		{
			strokeWidth: "32",
			duration: duration * speed,
		},
		"<"
	);
}
function activeShortPath(
	shortPathTarget,
	shortColorPathTarget,
	duration,
	speed
) {
	tl.to(
		shortColorPathTarget,
		{
			stopColor: "#2D9CDB",
			duration: duration * speed,
		},
		"<"
	);
	tl.to(
		shortPathTarget,
		{
			strokeWidth: "32",
			duration: duration * speed,
		},
		"<"
	);
}
function boxNotActive(target, duration, delay, speed, label) {
	tl.to(
		target,
		{
			background: "#f5f4f8",
			border: "2px solid #d1d1da",
			boxShadow: "",
			duration: duration * speed,
			delay: delay * speed,
		},
		label
	);
}
function notActiveLongPath(
	longPathTarget,
	longColorPathTarget,
	duration,
	speed
) {
	tl.to(
		longColorPathTarget,
		{
			stopColor: "#A8A8A8",
			duration: duration * speed,
		},
		"<"
	);
	tl.to(
		longPathTarget,
		{
			strokeWidth: "24",
			duration: duration * speed,
		},
		"<"
	);
}
function notActiveShortPath(
	shortPathTarget,
	shortColorPathTarget,
	duration,
	speed
) {
	tl.to(
		shortColorPathTarget,
		{
			stopColor: "#A8A8A8",
			duration: duration * speed,
		},
		"<"
	);
	tl.to(
		shortPathTarget,
		{
			strokeWidth: "24",
			duration: duration * speed,
		},
		"<"
	);
}
function cardEventStart(target, duration, speed) {
	tl.to(
		target,
		{
			height: "40px",
			paddingTop: "11px",
			paddingBottom: "11px",
			marginTop: "6px",
			border: "1px solid #e0e0e0",
			background: "#2d9cdb",
			boxShadow: "0px 7px 16px rgba(45, 156, 219, 0.26)",
			borderRadius: "5px",
			opacity: 1,
			duration: duration * speed,
		},
		"<"
	);

	tl.to(
		target + " .msg__name",
		{
			color: "#ffffff",
			duration: 0,
		},
		"<"
	);

	tl.to(
		target + " .msg__date",
		{
			color: "#ffffff",
			duration: 0,
		},
		"<"
	);
}
function cardEventEnd(target, duration, delay, speed, isDark = false) {
	if (!isDark) {
		tl.to(target, {
			background: "#ffffff",
			boxShadow: "",
			borderRadius: "9px",
			duration: duration * speed,
			delay: delay * speed,
		});

		tl.to(
			target + " .msg__name",
			{
				color: "#4f4f4f",
				duration: duration * speed,
			},
			"<"
		);

		tl.to(
			target + " .msg__date",
			{
				color: "#828282",
				duration: duration * speed,
			},
			"<"
		);
	} else {
		tl.to(
			target,
			{
				background: "#363950",
				boxShadow: "",
				borderRadius: "9px",
				duration: duration * speed,
				delay: delay * speed,
			},
			"<"
		);

		tl.to(
			target + " .msg__name",
			{
				color: "#ffffff",
				duration: duration * speed,
			},
			"<"
		);

		tl.to(
			target + " .msg__date",
			{
				color: "#ffffff",
				duration: duration * speed,
			},
			"<"
		);
	}
}
function reset(duration, speed) {
	tl.to(cardBody, {
		maxHeight: "0",
		marginTop: "0",
		duration: duration * speed,
		delay: 1,
	});
}
