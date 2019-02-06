import React from "react";
import PropTypes from "prop-types";

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = "Yes";
    } else {
      selectedStatus = "No";
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
          <tr>
              <td><input type={"checkbox"} onClick={this.onClick.bind(this)}/></td>
              <td colSpan={"1"} rowSpan={"1"}>{selectedStatus}</td>
              <td colSpan={"3"} rowSpan={"1"}><author>&ldquo;{this.props.author}&rdquo;</author></td>
              <td colSpan={"3"} rowSpan={"1"}><time>{this.props.date}</time></td>
              <td colSpan={"6"} rowSpan={"1"} class="text">{this.props.shortText}</td>
          </tr>
    );
  }
}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
