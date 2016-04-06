import React from 'react';
import { shallow, mount } from 'enzyme';
import MainComponent from './rewire-component/main-component';
import ChildComponent from './rewire-component/child-component';

describe('MainComponent', () => {
    it('should test it', () => {
        expect(<MainComponent/>).to.be.jsx;
        expect('<MainComponent/>').not.to.be.jsx;
    });

    it('should rewire child component', () => {
        MainComponent.__Rewire__('ChildComponent', React.createClass({
            render() {
                return <p>Rewire</p>;
            }
        }));

        let component = mount(<MainComponent />);

        expect(component.html()).to.equal('<div class="main"><h1>Hello</h1><p>Rewire</p></div>');

        MainComponent.__ResetDependency__('ChildComponent');

        component = mount(<MainComponent />);

        expect(component.html()).to.equal('<div class="main"><h1>Hello</h1><p>Children</p></div>');
    });
    
    it('should use jsx expect', () => {
        let component = shallow(<MainComponent />);

        expect(component.node).to.deep.equal(
            <div className="main">
                <h1>Hello</h1>
                <ChildComponent />
            </div>
        );
    });
});