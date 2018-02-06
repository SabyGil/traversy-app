import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id){
    // id.preventDefault();
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        <a href='link' onClick={this.deleteProject.bind(this, this.props.project.id)}>e</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.obj,
  onDelete: PropTypes.func
}

export default ProjectItem;
