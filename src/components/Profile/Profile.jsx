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
            develop interactive, scalable and robust web applications using
            diverse programming languages (mainly JavaScript, TypeScript, and
            C#), technologies and tools. Do check out my projects; I hope you'll
            enjoy them! During my leisure time you'll find me,{" "}
            <mark>hiking</mark>, <mark>playing football and padel tennis</mark>,
            or{" "}
            <mark>
              relaxed at home listening to my curated Spotify playlists!
            </mark>
            .
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
