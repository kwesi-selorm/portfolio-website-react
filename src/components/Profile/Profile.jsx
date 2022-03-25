import photo from "./photo-new.png";

function Profile() {
  return (
    <>
      <section id="profile">
        <div className="profile-container">
          <img src={photo} alt="jeffery" className="profile-photo" />

          <div className="profile-text">
            Welcome, and thanks for visiting my page. A little about myself: I
            am a Ghanaian currently living and working in Stavanger, Norway. I
            develop interactive, scalable and robust web applications using a
            variety of programming languages, technologies and tools. Do check
            out my projects; I hope you'll enjoy them!
            <br />
            During my leisure time you'll find me <b>hiking</b>,
            <b> playing padel tennis</b>, or
            <b> relaxed at home listening to my curated Spotify playlists</b>.
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
