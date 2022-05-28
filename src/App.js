import './App.css';
import React from 'react';
const initialState = {
  title: '',
  content: ''
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.state.allContents = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(state, event) {
    this.setState({ [state]: event.target.value });
  }

  handleSubmit(event) {
    let newVal = { title: this.state.title, content: this.state.content };
    this.state.allContents.push(newVal);
    this.setState(initialState);
    this.setState({ allContents: this.state.allContents });
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div className="col-md-12">
            <div><b>Create New Blog</b></div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input value={this.state.title} onChange={this.handleChange.bind(this, 'title')} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                <textarea value={this.state.content} onChange={this.handleChange.bind(this, 'content')} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
            <div>
              <br></br>
              <br></br>
              <div><b>Blogs</b></div>
              <table class="table" style={{color : 'white'}}>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                  </tr>
                <tbody>
                {this.state.allContents && this.state.allContents.map((content, _index) => (
                  <tr>
                  <td>{content.title}</td>
                  <td>{content.content}</td>
                </tr>
                ))}
                {!this.state.allContents.length &&
                  <tr>
                  <td colSpan={2}>Datas not found</td>
                </tr>
                }
                </tbody>
              </table>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
