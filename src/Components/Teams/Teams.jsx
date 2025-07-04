import React from 'react';
import './Teams.scss';
import { teamsImages } from './images';
import { Link as ScrollLink, Element } from 'react-scroll';
import placeholder from '../../assets/placeholder.png';

const Teams = () => {
  return (
    <div className="teams-container">
      <Element name="top" />
      <h1 className="teams-title">Naruto Teams & Fan Art 🍥</h1>
      <ScrollLink
        className="fan-art-link"
        to="fan-art"
        duration={100}
        offset={-60}
        smooth={true}
      >
        Go to Fan Art Section
      </ScrollLink>

      <section className="team-section">
        <h2 className="team-title">Akatsuki ❟❛❟</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.pain, name: 'Pain', role: 'Leader' },
            { img: teamsImages.itachi, name: 'Itachi', role: 'Member' },
            { img: teamsImages.tobi, name: 'Tobi', role: 'Member' },
            { img: teamsImages.konan, name: 'Konan', role: 'Member' },
            { img: teamsImages.blackZetsu, name: 'Black Zetsu', role: 'Member' },
            { img: teamsImages.deidara, name: 'Deidara', role: 'Member' },
            { img: teamsImages.hidan, name: 'Hidan', role: 'Member' },
            { img: teamsImages.kakuzu, name: 'Kakuzu', role: 'Member' },
            { img: teamsImages.orochimaru, name: 'Orochimaru', role: 'Member' },
            { img: teamsImages.sasori, name: 'Sasori', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Akatsuki`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>
              The Akatsuki aimed to bring peace by unifying the world under their control,
              collecting all Tailed Beasts to create a superweapon to deter war.
            </p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>
              Founded by Yahiko to bring peace to the Hidden Rain Village, later led by Nagato (Pain)
              who believed pain and suffering could teach humanity peace.
            </p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>
              Members were defeated by allied shinobi forces; key figures like Itachi, Kisame,
              and Deidara fell in battle.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Legendary Sannin ⛩️</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.youngKakuzu, name: 'Hiruzen', role: 'Member' },
            { img: teamsImages.youngJiraiya, name: 'Jiraiya', role: 'Member' },
            { img: teamsImages.youngOrochimaru, name: 'Orochimaru', role: 'Member' },
            { img: teamsImages.youngTsunade, name: 'Tsunade', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Legendary Sannin`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>Various missions during the First and Second Shinobi World Wars.</p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>To protect Konoha and gain power.</p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>
              Orochimaru becomes a rogue ninja, Jiraiya mentors Naruto, Tsunade becomes the Fifth Hokage.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Team Minato 🟡</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.youngMinato, name: 'Minato', role: 'Leader' },
            { img: teamsImages.youngKakashi, name: 'Kakashi', role: 'Member' },
            { img: teamsImages.youngObito, name: 'Obito', role: 'Member' },
            { img: teamsImages.youngRin, name: 'Rin', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Team Minato`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>Various missions during the Third Shinobi World War, including destroying the Kannabi Bridge.</p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>Protect Konoha and complete missions.</p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>
              Obito is presumed dead, later revealed as a major antagonist. Rin dies, leading to Obito's descent.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Team 7 🦊</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.teamsKakashi, name: 'Kakashi', role: 'Leader' },
            { img: teamsImages.teamsNaruto, name: 'Naruto', role: 'Member' },
            { img: teamsImages.teamsSasuke, name: 'Sasuke', role: 'Member' },
            { img: teamsImages.teamsSakura, name: 'Sakura', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Team 7`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>Undertake various ninja missions, including retrieving Sasuke and combating the Akatsuki.</p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>
              Naruto aims to become Hokage and bring back Sasuke, Sasuke seeks revenge against Itachi,
              Sakura wants to protect her friends.
            </p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>
              Team splits after Sasuke leaves, reforms later to combat threats like Kaguya Otsutsuki.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Team Guy 🛡️</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.guy, name: 'Guy', role: 'Leader' },
            { img: teamsImages.rocklee, name: 'Rock Lee', role: 'Member' },
            { img: teamsImages.neji, name: 'Neji', role: 'Member' },
            { img: teamsImages.tenten, name: 'TenTen', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Team Guy`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>Various missions, including the fight against the Akatsuki.</p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>
              Lee wants to prove his worth, Neji seeks to understand his fate, Tenten supports her teammates.
            </p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>
              Team remains strong, contributes in the Fourth Shinobi World War. Neji sacrifices himself.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Taka 🏴‍☠️</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.takaSasuke, name: 'Sasuke', role: 'Leader' },
            { img: teamsImages.karin, name: 'Karin', role: 'Member' },
            { img: teamsImages.suigetsu, name: 'Suigetsu', role: 'Member' },
            { img: teamsImages.jugo, name: 'Jugo', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Taka`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>Formed to help Sasuke kill Itachi, later to capture Killer Bee.</p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>Sasuke's quest for revenge against Itachi and later Konoha.</p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>Itachi is killed, Sasuke learns the truth, team disbands.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Team Jiraiya 🐸</h2>
        <div className="team-grid">
          {[
            { img: teamsImages.leaderJiraiya, name: 'Jiraiya', role: 'Leader' },
            { img: teamsImages.yahiko, name: 'Yahiko', role: 'Member' },
            { img: teamsImages.nagato, name: 'Nagato', role: 'Member' },
            { img: teamsImages.youngKonan, name: 'Konan', role: 'Member' },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.img}
                alt={`${member.name} from Team Jiraiya`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <div className="team-description">
          <div>
            <h3>Mission:</h3>
            <p>Survive and bring peace to Amegakure, train under Jiraiya.</p>
          </div>
          <div>
            <h3>Motivation:</h3>
            <p>Bring peace to Amegakure.</p>
          </div>
          <div>
            <h3>What happened to them?</h3>
            <p>
              Transformed from war orphans to leaders with conflicting peace methods, eventually kill Jiraiya.
            </p>
          </div>
        </div>
      </section>

      <section className="fan-art-section">
        <Element name="fan-art" />
        <h2 className="team-title">Fan Art 🎨</h2>
        <div className="fan-art-grid">
          {[
            teamsImages.a, teamsImages.b, teamsImages.c, teamsImages.d,
            teamsImages.e, teamsImages.f, teamsImages.g, teamsImages.h,
            teamsImages.i, teamsImages.j, teamsImages.k, teamsImages.l,
            teamsImages.m, teamsImages.n, teamsImages.o, teamsImages.p,
            teamsImages.q, teamsImages.r, teamsImages.s, teamsImages.t,
            teamsImages.u, teamsImages.v, teamsImages.w, teamsImages.x,
            teamsImages.y, teamsImages.z, teamsImages.aa, teamsImages.bb,
            teamsImages.cc, teamsImages.dd, teamsImages.ee, teamsImages.ff,
            teamsImages.gg,
          ].map((img, index) => (
            <div key={index} className="fan-art-card">
              <img
                src={img}
                alt={`Naruto Fan Art ${index + 1}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <ScrollLink
        className="top-link"
        to="top"
        duration={100}
        smooth={true}
        offset={-60}
      >
        Back to Top
      </ScrollLink>
      <footer className="footer">
        Created by Suad Pllana
      </footer>
    </div>
  );
};

export default Teams;