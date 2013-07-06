App.Post = DS.Model.extend({
	title: DS.attr('string'),
	post: DS.attr('string'),

	evernoteActive: DS.attr('string'),
	evernoteNotebook: DS.attr('string'),

	tumblrActive: DS.attr('boolean'),
	tumblrBlog: DS.attr('string'),

	sbwcActive: DS.attr('boolean'),
	sbwcThreadId: DS.attr('string'),

	evernoteSession: DS.attr('boolean'),
	tumblrSession: DS.attr('boolean'),
	sbwcSession: DS.attr('boolean')

});

App.SBWC = DS.Model.extend({
	userName: DS.attr('string'),
	password: DS.attr('string')
})

App.Notebook = DS.Model.extend({
	name: DS.attr('string'),
	guid: DS.attr('string')
});

App.Blog = DS.Model.extend({
	name: DS.attr('string'),
	title: DS.attr('string'),
	description: DS.attr('string'),
	url: DS.attr('string')
});