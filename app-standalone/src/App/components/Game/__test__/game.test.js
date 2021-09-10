import React from 'react';
import { shallow } from 'enzyme';

import Game from '../index';

describe('Game', () => {

    const wrapper = shallow(<Game title="Play Again" />);
  
    it("should have a button with the properly text", () => {
    
      expect(wrapper.find(".score-button").text()).toEqual("Play Again");
    });
    it("should have a button with the properly text", () => {
    
      expect(wrapper.find(".game-info").text()).toEqual("Next player: XGo to game start");
    });
  });