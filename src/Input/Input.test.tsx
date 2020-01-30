import Input from './Input';
import React from 'react';
import { shallow } from 'enzyme';

describe('Input', () => {
  it('should mount', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should accept a controlled input', () => {
    const value = 'my test value';
    const wrapper = shallow(<Input value={value} readOnly />);
    expect(wrapper.find('input').props().value).toBe(value);
  });

  it('should emit proper values on change', done => {
    const wrapper = shallow(
      <Input
        onChange={e => {
          expect(e.target.value).toBe('foo');
          done();
        }}
      />
    );

    expect(wrapper.find('input').props().value).toBeFalsy();

    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
  });

  it('should show label, and move when focused', () => {
    const wrapper = shallow(<Input label="Email" />);

    expect(wrapper.find('.label').hasClass('inactive')).toBe(true);

    wrapper.find('input').simulate('focus');
    expect(wrapper.find('.label').hasClass('inactive')).toBe(false);

    wrapper.find('input').simulate('blur', {
      currentTarget: { value: '' }
    });
    expect(wrapper.find('.label').hasClass('inactive')).toBe(true);

    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('change', {
      currentTarget: { value: 'foo' }
    });
    wrapper.find('input').simulate('blur', {
      currentTarget: { value: 'foo' }
    });
    expect(wrapper.find('.label').hasClass('inactive')).toBe(false);
  });
});
