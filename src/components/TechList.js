import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      'Docker'
    ]
  };

  handleInputChange = e => {
    this.setState({newTech: e.target.value });
  }

  handleDelete = tech => {
    console.log(tech);  
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    }); 
  }

  render() {
    let newTech = this.state.newTech;

    return(
      <>
        <h1>{newTech}</h1>
        <ul>
          { this.state.techs.map((tech) => 
            <TechItem 
              tech={tech} 
              key={tech} 
              onDelete={ () => this.handleDelete(tech) }
            />
          ) }
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            onChange={this.handleInputChange}
            value={this.state.newTech} 
          />

          <button type='submit'>Enviar</button>
        </form>  
      </>
    );
  }
}

export default TechList;