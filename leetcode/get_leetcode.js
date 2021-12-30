const createSection = (topics) => {
	var section = $('<div/>',{
						'class': 'list-group',
					});

	topics.subtopics.forEach(function(subtopic) {
		var subsection = $('<div/>',{
							'class': 'list-group-item  flex-column align-items-start subsection',
						});

		subsection.append(`<div><h6 class="mb-2 mt-1 subtopic-title">${subtopic.title} (${subtopic.problems.length})</h6></div>`);
		
		var problems = $('<div/>');
		var list = $('<ul/>',{
							'class': 'list-group list-group-flush',
						});
		
		subtopic.problems.forEach(function(problem) {
			color = "#B2DFDB";
			if (problem.difficulty == "Medium") {
				color = "#FFE0B2";
			} else if (problem.difficulty == "Hard") {
				color = "#FFCDD2";
			}
			
			var wrapper = $('<a/>', {
				css: {
					'height': '100%',
					'width': '100%'
				},
				'class': 'd-flex justify-content-between align-items-center wrapper'
			});
			wrapper.attr("href", problem.url);
			wrapper.attr("target", "_blank");

			var item = $('<li/>',{
							'class': 'list-group-item',
							css: {
								'background-color': color
							}
						});
			
			item.append(wrapper);
			wrapper.append(`<div style="color: #454360" class="problem-name">${problem.title}</div>`);
			
			if (problem.difficulty == "Easy") {
				wrapper.append(`<span class="badge badge-success badge-pill">Easy</span>`);
			} else if (problem.difficulty == "Medium") {
				wrapper.append(`<span class="badge badge-warning badge-pill">Medium</span>`);
			} else {
				wrapper.append(`<span class="badge badge-danger badge-pill">Hard</span>`);
			}
			
			list.append(item);
		});
		problems.append(list);
		subsection.append(problems);
		section.append(subsection);
	});
	return section;
}

var data;

$.getJSON('problems.json', function(data) {
	data.forEach(function(topic) {
		$("#parent").append(`<h3>${topic.topic}</h3>`)
		$("#parent").append(createSection(topic));
	});
});