import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    const state = JSON.parse(localStorage.getItem('state'));

    this.state = {
      avatar: `https://www.gravatar.com/avatar/${(md5(state.player.gravatarEmail))}`,
      score: state.player.score,
      name: state.player.name,
    };
  }

  render() {
    const { avatar, score, name } = this.state;
    return (
      <header className="header">
        <div>
          <img
            src={ avatar }
            alt="avatar"
            data-testid="header-profile-picture"
            className="avatar"
          />
          <strong data-testid="header-player-name">{` Jogador: ${name}`}</strong>
          <div className="score">
            <strong>
              <span>Pontos: </span>
              <span data-testid="header-score">{ score }</span>
            </strong>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
