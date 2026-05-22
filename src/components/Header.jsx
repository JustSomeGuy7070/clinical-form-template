import practiceProfile from "../data/practiceProfile";

export default function Header() {
  return (
    <div className="header-box">
      <div className="header-left">
        <div className="logo-box">
          <span>MED</span>
        </div>

        <div className="address-block">
          {practiceProfile.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="header-center">
        <h1>{practiceProfile.name}</h1>
        <p>{practiceProfile.specialty}</p>

        <div className="registration-info">
          {practiceProfile.credentials.map((credential) => (
            <p key={credential}>{credential}</p>
          ))}
        </div>
      </div>

      <div className="header-right">
        <p>Phone:</p>
        {practiceProfile.contact.phone.map((number) => (
          <p key={number}>{number}</p>
        ))}
        <p>Email:</p>
        <p>{practiceProfile.contact.email}</p>
      </div>
    </div>
  );
}
