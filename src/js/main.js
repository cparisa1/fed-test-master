var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>'+ // Syntax error observed (+ sign is missing here, So added by Chandrasekhar Parisa)
                    '</a>'+
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h5 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}} <span class="reports_file">({{file_size}} {{file_type}})</span></a>' + // Added File_size and File_type to match as per design
                            '</h5>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();