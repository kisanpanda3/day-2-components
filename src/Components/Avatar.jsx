import Button from "./Button";

function Avatar(props) {
  //props means properties
  const { name, src, rounded } = props;
  const style = {
    borderRadius: "1rem"
    // rem is the relative unit 1rem = 16px
  };
  if (rounded) {
    // or you can use props.rounded both are same
    style.borderRadius = "50%";
  }
  return (
    <div>
      <img style={style} src={src} alt="icon" width="150px" />
      <h3>{name}</h3>
      <Button text="SAY HELLO" onClick={() => alert(`say hello to ${name}`)} />
      <br />
      <br />
    </div>
  );
}
export default Avatar;
//https://avatars3.githubusercontent.com/u/12158859?v=4
//https://avatars.githubusercontent.com/u/101393393?v=4
