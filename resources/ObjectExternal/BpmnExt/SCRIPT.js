let BpmnExt = (function() {
	let editor;

	function render(params, data) {
		const div = $('#bpmn');
		try {
			editor = new BpmnJS({ container: div, height: 500 });
			editor.importXML(data.xml).then(() => {
				console.log('Diagram imported');
			}).catch(e => {
				throw e;
			});
		} catch (e) {
			div.text(e.message);
		}
	}

	function saveXML(success, failure) {
		editor.saveXML({ format: true }).then(res => {
			success && success(res.xml);
		}).catch(e => {
			failure && failure(e);
		});
	}

	function saveSVG(success, failure) {
		editor.saveSVG().then(res => {
			success && success(res.svg);
		}).catch(e => {
			failure && failure(e);
		});
	}

	return {
		render: render,
		saveXML: saveXML,
		saveSVG: saveSVG
	};
})();