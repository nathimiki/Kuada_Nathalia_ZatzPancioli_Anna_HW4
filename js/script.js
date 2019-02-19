(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            videodata : [],
            singledata : [],

            videoTitle : "",
			videoDirector : "",
			videoDesc : "",
			videoYear : "",
			videoDuration : "",
            videoRating : "",
            videoVisitors : "",
            videoPath : "",
            
            showDetails : false
        },

        created : function() {
            this.fetchVideoData(null);
        },

        methods : {
            fetchOne(e) {
                this.fetchVideoData(e.currentTarget.dataset.video);
            },

            loadMovie(e) {
                // stub
                e.preventDefault();

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.videodata.filter(video => video.video_url === dataKey);

                this.videoTitle = currentData[0].video_title;
                this.videoDirector = currentData[0].video_director;
				this.videoDesc = currentData[0].video_description;
				this.videoYear = currentData[0].video_year;
				this.videoDuration = currentData[0].video_duration;
                this.videoRating = currentData[0].video_rating;
                this.videoVisitors = currentData[0].video_visitors;
                this.videoPath = dataKey;

                this.showDetails = true;
            },

            fetchMovieData(video) {
                url = video ? `./includes/index.php?video=${video}` : './includes/index.php';

                fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (movie) {
                        this.videodata = data;
                    } else {
                        this.singledata = data;
                    }
                })
                .catch(function(error) {

                });
            }
        }
    });
})();

