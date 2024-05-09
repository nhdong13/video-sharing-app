class Table extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videos: this.props.videos
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.videos.map(video => <Video video={video} />)}
        </tbody>
      </table>
    )
  };
}
