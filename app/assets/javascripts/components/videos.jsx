class Video extends React.Component {
  render() {
    const video = this.props.video;

    return (
      <tr>
        <td>
          {video.id}
        </td>
        <td>
          {video.title}
        </td>
        <td>
          {video.description}
        </td>
      </tr>
    )
  }
}

