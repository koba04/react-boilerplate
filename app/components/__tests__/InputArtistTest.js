'use strict';

jest.dontMock('../InputArtist');

import React                    from 'react/addons';
import InputArtist              from '../InputArtist';
import AppTracksActionCreators  from '../../actions/AppTracksActionCreators';

describe("inputArtist", () => {
  let inputArtist;
  beforeEach(() => {
    inputArtist = React.addons.TestUtils.renderIntoDocument(<InputArtist />);
  });

  describe("state",  () => {
    it("set inputArtist radiohead", () => {
      expect(inputArtist.state.inputArtist).toBe("radiohead");
    });
  });

  describe("handleSubmit", () => {
    let preventDefault;
    beforeEach(() => {
      preventDefault = jest.genMockFunction();
      inputArtist.setState({ inputArtist: 'travis' });
      React.addons.TestUtils.Simulate.submit(inputArtist.getDOMNode(), {
        preventDefault: preventDefault
      });
    });
    it ("calls AppTracksActionCreators.fetchByArtist with state.inputArtist", () => {
      expect(AppTracksActionCreators.fetchByArtist).toBeCalled();
      expect(AppTracksActionCreators.fetchByArtist).toBeCalledWith('travis');
    });
    it ("calls e.preventDefault", () => {
      expect(preventDefault).toBeCalled();
    });

  });

});
