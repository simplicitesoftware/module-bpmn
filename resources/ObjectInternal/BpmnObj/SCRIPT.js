(function(ui) {
	Simplicite.UI.hooks.BpmnObj = function(o, cbk) {
		try {
			var p = o.locals.ui;
			var app = ui.getAjax();
			if (p && o.isMainInstance()) {
				p.form.beforesave = function(ctn, obj, rowId, bscbk) {
					BpmnExt.saveXML(xml => {
						let doc = 'bpmnObjDocument';
						obj.getField(doc).value({
							object: obj.getName(),
							rowid: obj.getRowId(),
							field: doc,
							id: '0',
							mime: 'text/xml',
							name: 'diagram-' + new Date().getTime() + '.xml',
							content: app.base64Encode(xml)
						});
						bscbk && bscbk();
					}, err => {
						console.error(err);
						bscbk && bscbk(false);
					});
				};
			}
		} catch (e) {
			app.error(e.message);
		} finally {
			cbk && cbk();
		}
	};
})(window.$ui);