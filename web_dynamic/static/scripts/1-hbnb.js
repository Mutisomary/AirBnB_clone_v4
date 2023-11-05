$(document).ready(function() {
    let amenityDict = {};
    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
            amenityDict[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenityDict[$(this).data('id')];
        }
        let amenities = Object.values(amenityDict);
        if (amenities.length === 0) {
            $('.amenities h4').html(' ');
        } else {
            $('.amenities h4').text(amenities.join(', '));
        }
    });
});
