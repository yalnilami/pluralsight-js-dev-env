/*
	This file contains references to the vendor libraries we're using in this project.
	This is used by wepack in the productino buld only.
	A separet bundle for vendor code is useufl since it's unlikely to hange as often as the application's code.
	So all the libraries we reference here will be written to vendor.js so they can be cached until on of them change.
	So basically, this avoids customers having to download a hug JS file anytime a line of code changes.
	They only have to download vendor.js when a vendor library chagnes which should be less frequent.
	Any files that arent' referenced here will be bundled ino main.js for teh production buld.
*/

/*eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
