/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["sapui5demoapp01/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
