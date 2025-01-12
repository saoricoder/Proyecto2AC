export function Inputs({ props }) {
  return (
    <div className="item_login">
      <label htmlFor={this.props.name} className="item_title">
        {this.props.label}
      </label>
      <input
        className="login_info"
        type={this.props.type}
        name={this.props.name}
        value={this.props.value}
      />
    </div>
  );
}
