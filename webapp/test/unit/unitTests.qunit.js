/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AbarroCurso/facturas/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
