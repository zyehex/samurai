import React from 'react';
import Tooltip from './Tooltip';
import { shallow } from 'enzyme';

describe('Tooltip', () => {
  it('should display the children', () => {
    const wrapper = shallow(
      <Tooltip text="Hello">
        <div className="something">Hover Me</div>
      </Tooltip>
    );

    expect(wrapper.find('.something').text()).toBe('Hover Me');
  });

  it('should not display the tooltip if not hovering', () => {
    const wrapper = shallow(
      <Tooltip text="Hello">
        <div className="something">Hover Me</div>
      </Tooltip>
    );

    expect(wrapper.find('.tooltip').exists()).toBe(false);
  });

  it('should display the tooltip when hovering', done => {
    const wrapper = shallow(
      <Tooltip text="Hello" timeout={50}>
        <div className="something">Hover Me</div>
      </Tooltip>
    );

    wrapper.simulate('mouseEnter');

    setTimeout(() => {
      expect(wrapper.find('.tooltip').exists()).toBe(true);
      done();
    }, 50);
  });

  it('should remove the tooltip on leave', done => {
    const wrapper = shallow(
      <Tooltip text="Hello" timeout={50} leaveTimeout={50}>
        <div className="something">Hover Me</div>
      </Tooltip>
    );

    wrapper.simulate('mouseEnter');

    setTimeout(() => {
      expect(wrapper.find('.tooltip').exists()).toBe(true);
      wrapper.simulate('mouseLeave');

      setTimeout(() => {
        expect(wrapper.find('.tooltip').exists()).toBe(false);
        done();
      }, 50);
    }, 50);
  });
});
