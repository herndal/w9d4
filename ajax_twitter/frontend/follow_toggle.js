class FollowToggle {
    constructor($el, $followers){
        this.$el = $el;
        this.$followers = $followers;
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render(){
        if (this.followState === 'unfollowed'){
            this.$el.html("Follow!");
            if (typeof this.$followers !== 'undefined') {
                const 
                this.$followers.append()
            }
        } else {
            this.$el.html("Unfollow!");
            if (typeof this.$followers !== 'undefined') {
                this.$followers.
            }
        }
    }


    handleClick() {
        event.preventDefault();
        if (this.followState === 'unfollowed'){
            return $.ajax({
                accepts: {
                    text: "application/json"
                },
                dataType: "json",
                method: 'POST',
                url: `/users/${this.userId}/follow`,
                success: () => {
                    this.followState = 'followed';
                    this.render();
                }
            });
        } else {
            return $.ajax({
                accepts: {
                    text: "application/json"
                },
                dataType: "json",
                method: 'DELETE',
                url: `/users/${this.userId}/follow`,
                success: () =>{
                    this.followState = 'unfollowed';
                    this.render();
                }
            });
        }
    }
}

module.exports = FollowToggle;

 
// dataType: ($.browser.msie) ? "text" : "json",
//     accepts: {
//         text: "application/json"
//     }

// const fetchSavedGifAJAX = queryString => {
//   return $.ajax({
//     method: 'GET',
//     url: `/gifs/${queryString}`,
//     success: gif => {
//       debugger;
//       appendGif(gif.url);
//     },
//     error: response => {
//       debugger;
//       postMessage(response.responseJSON[0]);
//     }
//   });
// };


// const setEventHandlers = () => {
//     $('#new-gif-form').on('submit', e => {
//         e.preventDefault();
//         fetchNewGif();
//     });

// bindEvents() {
//     this.$el.on('click','li', (event=>{
//       const $square = $(event.currentTarget);
//       this.makeMove($square);
//     }));
//   }