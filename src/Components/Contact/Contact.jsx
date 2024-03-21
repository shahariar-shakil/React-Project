import "./Contact.css";

const Contact = () => {
  // return function
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque qui
          dignissimos officiis odit magnam nostrum ipsa nesciunt nulla vel
          earum. Mollitia quibusdam officiis fuga praesentium! Reiciendis ipsam
          enim similique quis.
        </p>
        <ul>
          <li>shahriar@shakil.com</li>
          <li>++0 - 177784-2636</li>
          <li>road #04, Tangail</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Teliphone"
            required
          />
          <label>Write Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn ">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
