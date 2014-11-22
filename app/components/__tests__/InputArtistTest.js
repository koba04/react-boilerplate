jest.dontMock('../InputArtist');

var React = require('react/addons'),
    InputArtist = require('../InputArtist'),
    AppTracksActionCreators = require('../../actions/AppTracksActionCreators')
;

describe("inputArtist", function() {
  var inputArtist;
  beforeEach(function() {
    inputArtist = React.addons.TestUtils.renderIntoDocument(<InputArtist />);
  });

  describe("state",  function() {
    it("set inputArtist radiohead", function() {
      expect(inputArtist.state.inputArtist).toBe("radiohead");
    });
  });

  describe("handleSubmit", function() {
    var preventDefault;
    beforeEach(function() {
      preventDefault = jest.genMockFunction();
      inputArtist.setState({ inputArtist: 'travis' });
      React.addons.TestUtils.Simulate.submit(inputArtist.getDOMNode(), {
        preventDefault: preventDefault
      });
    });
    it ("calls AppTracksActionCreators.fetchByArtist with state.inputArtist", function() {
      expect(AppTracksActionCreators.fetchByArtist).toBeCalled();
      expect(AppTracksActionCreators.fetchByArtist).toBeCalledWith('travis');
    });
    it ("calls e.preventDefault", function() {
      expect(preventDefault).toBeCalled();
    });

  });

});
