$(document).ready(function() {
    $('#player-table').DataTable( {
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'os',
            selector: 'td:first-child', 'td:second-child'
        },
        order: [[ 1, 'asc' ]]
    } );
} );
