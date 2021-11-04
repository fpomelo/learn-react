import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { addPersonAction } from '../../redux/actions/person';

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id:nanoid(), name, age};
    this.props.addPerson(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>Person 组件</h2>
        <h4>求和为{this.props.count}</h4>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入姓名" />
        <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map(person => (
              <li key={person.id}>姓名---{person.name}，年龄---{person.age}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  persons: state.persons,
  count: state.count
})
const mapDispatchToProps = {
  addPerson: addPersonAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Person);
