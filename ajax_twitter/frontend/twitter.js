const FollowToggle = require('./follow_toggle.js');

// const docReadyCallback = function(){
//     

//     $followToggles.each ((idx, toggle) => {
//         const $follow = new FollowToggle($(toggle));
//         console.log($follow);
//     });
// }

 $(() => {
    const $followToggles = $(".follow-toggle");
    const $followers = $(".followers");
    $followToggles.each ((idx, toggle) => {
        const $follow = new FollowToggle($(toggle, $followers, $followees));
    });
 });

//  docReadyCallback