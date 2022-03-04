import photo from "./photo-new.png";

function Profile() {
  return (
    <>
      <section id="profile">
        <div className="row">
          <div className="col-lg-3 profile-photo">
            <img
              src={photo}
              style={{ width: "100%", height: "100%" }}
              alt="jeffery"
            />
          </div>

          <div className="col-lg-9 ">
            <p className="profile-text">
              Welcome, and thanks for visiting my page. A little about myself: I
              am a Ghanaian currently living and working in Stavanger, Norway. I
              develop interactive, scalable and robust web applications using a
              variety of programming languages, technologies and tools. Do check
              out my projects; I hope you'll enjoy them!
              <br />
              During my leisure time you'll find me <b>hiking</b>,
              <b> playing padel tennis</b>, or
              <b> relaxed at home listening to my curated Spotify playlists</b>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
