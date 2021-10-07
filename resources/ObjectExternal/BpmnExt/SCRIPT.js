var BpmnExt = (function() {
	function render(params, data) {
		console.log(params);
		console.log(data);
		const div = $('#bpmnext');
		try {
			const editor = new BpmnJS({ container: div, height: 500 });
			editor.importXML(data.bpmn).then(() => {
				console.log('Diagram imported');
			});
		} catch (err) {
			div.text(err.message);
		}
	}

	return { render: render };
})();
