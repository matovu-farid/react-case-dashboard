import './Entry.css';

const Entry = () => (
  <form>
    <label htmlFor="name">Hospital Name</label>
    <input type="text" id="name" name="name" className="input" required />
    <div id="name-error" className="error" />
    <label htmlFor="contact">Contact</label>
    <input type="text" id="contact" name="contact" className="input" required />
    <div id="contact-error" className="error" />
    <fieldset>
      <legend>Location</legend>
      <label htmlFor="latitude">Latitude</label>
      <input type="text" id="latitude" name="latitude" className="input" placeholder="1.3733" required pattern="\d{1}\.\d+" />
      <div id="latitude-error" className="error" />
      <label htmlFor="longitude">Longitude</label>
      <input type="text" id="longitude" name="longitude" className="input" placeholder="32.2903" required pattern="3\d{1}\.\d+" />
      <div id="longitude-error" className="error" />
    </fieldset>
  </form>
);

export default Entry;
