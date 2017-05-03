import { observable } from 'mobx';

import $ from 'jquery'

class AppState {
  @observable timer = 0;
  @observable videoList = []
  @observable selectedVideo = {}

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }

  selectVideo(video) {
    this.selectedVideo = video
  }

  fetchYoutubeVideos(query) {
    $.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        contentType: 'application/json',
        q: query,
        maxResults: 10,
        key: 'AIzaSyC08ULv9IlOoF4vSZvkyX4E3lviClgnqjM',
      },
      success: (response) => {
        this.videoList = response.items
      },
      error: (response) => {
        this.errors = {
          fetchingVideosError: 'There was an error fetching the videos'
        }
      }
    })
  }
}

export default AppState;
