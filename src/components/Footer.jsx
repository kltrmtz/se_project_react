import "../blocks/footer.css";

const date = new Date().getFullYear();

const Footer = () => {
  console.log("footer");

  return (
    <footer className="footer">
      <div>Devoloped by Name Surname</div>
      <div>{date}</div>
    </footer>
  );
};

export default Footer;
