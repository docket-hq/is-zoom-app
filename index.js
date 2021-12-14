const isZoomApp = () => {
	if (
		typeof navigator === 'object' &&
		typeof navigator.userAgent === 'string' &&
		navigator.userAgent.indexOf('ZoomApps') >= 0
	) {
		return true;
	}

	return false;
};

module.exports = isZoomApp;
