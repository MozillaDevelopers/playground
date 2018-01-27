import React from 'react';
import PropTypes from 'prop-types';

// components
import ModalVideo from 'react-modal-video';

// CSS
import '../../node_modules/react-modal-video/scss/modal-video.scss';

// images

import play from './img/play.svg';

class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    return (
      <div className="video-player">

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />

        <span onClick={this.openModal}>
          <span className="h2 video-player__text">Launch Video Player</span>
          <img className="video-player__icon" src={play} alt="play icon" />
        </span>

      </div>
    );
  }
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoPlayer;
