import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png"


const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 63826 41774
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              vishwaprasanth1411@gmail.com
            </div>
            <div className="c-socialMedia">
            <ul>
                    <li><a href="https://github.com/vishwaprasanth" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" alt="test"/></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/vishwa-prasanth-161850247/" target="_blank" rel="noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="test2"/></a>
                    </li>
                </ul>
                    
            </div>

          </div>
        </div>
        <div className="c-heading">
          <h1 className="c-desc">
            Get in touch
          </h1>
        <div className="c-right">
          <form>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;