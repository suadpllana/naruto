import React from 'react'
import "./Teams.css"
import { teamsImages } from './images'
import { Link as ScrollLink, Element } from "react-scroll";


const Teams = () => {
  return (
    <div className="teamsContainer">
        <Element name="top" />
      <h1 id="top">Here you can find information about every team and some cool FanArt in Naruto🍥 </h1>
    <ScrollLink className="fanArtSection" to="fan-art" duration={100}  offset={-40} smooth={true}>Go to Fan Art Section</ScrollLink>

<h1>Akatsuki❟❛❟</h1>
<div className="teamContainer">
    <div>
        <img src={teamsImages.pain} alt=""/>
         <h2>Pain</h2><br/>
         <h2>Leader</h2>
    </div>
    <div>
        <img src={teamsImages.itachi} alt=""/>
        <h2>Itachi</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.tobi} alt=""/>
        <h2>Tobi</h2><br/>
         <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.konan} alt=""/>
        <h2>Konan</h2><br/>
        <h2>Member</h2>
    </div>
    

  



    <div>
        <img src={teamsImages.blackZetsu} alt=""/>
        <h2>Black Zetsu</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.deidara} alt=""/>
        <h2>Deidara</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.hidan} alt=""/>
        <h2>Hidan</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.kakuzu} alt=""/>
        <h2>Kakuzu</h2><br/>
         <h2>Member</h2>
    </div>




    <div>
        <img src={teamsImages.orochimaru} alt=""/>
        <h2>Orochimaru</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.sasori} alt=""/>
        <h2>Sasori</h2><br/>
        <h2>Member</h2>
    </div>
    <div className="remainingDiv">
     
    </div>
    <div className="remainingDiv">    
    </div>
</div>

<div className="description">
    <div>
        <h2>Mission:</h2>
        <p><strong><em>the Akatsuki aimed to br/ing peace to the world by unifying 
            it under their control. They intended to achieve this by
             collecting all the Tailed Beasts (Bijuu) to create
              a superweapon that would deter any war.</em></strong></p>
    </div>
    <div>
        <h2>Motivation:</h2>
        <p><strong><em>The original Akatsuki, founded by Yahiko, sought to br/ing peace to the war-torn
            world, particularly their homeland, the Hidden Rain Village (Amegakure).
           After Yahiko's death, Nagato (Pain) took over and believed
            that through immense pain and suffering, humanity could understand and achieve peace.</em></strong></p>
    </div>
    <div>
        <h2>What happened to them?</h2> 
        <p> <strong><em>
            Defeat of Akatsuki Members: One by one, the members of the Akatsuki
             were defeated by the allied shinobi forces.
             Key figures like Itachi, Kisame, Deidara, and others fell in battle.
        </em>
            
        </strong></p>
    </div>
</div>



<h1>Legendary Sannin⛩️</h1>


<div className="teamContainer">
    <div>
        <img src={teamsImages.youngKakuzu} alt=""/>
        <h2>Hiruzen</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.youngJiraiya} alt=""/>
        <h2>Jiraiya</h2><br/>
         <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.youngOrochimaru} alt=""/>
        <h2>Orochimaru</h2><br/>
        <h2>Member</h2>
    </div>
    <div>
        <img src={teamsImages.youngTsunade} alt=""/>
        <h2>Tsunade</h2><br/>
        <h2>Member</h2>
    </div>
</div>    

<div className="description">
    <div>
        <h2>Mission:</h2>
        <p><strong><em>Various missions during the First and Second Shinobi World Wars.</em></strong>
        </p>
    </div>
    <div>
        <h2>Motivation:</h2>
        <p> <strong><em>To protect Konoha and gain power.</em></strong></p>
    </div>
    <div>
        <h2>What happened to them?</h2> 
        <p><strong><em>Orochimaru becomes a rogue ninja, Jiraiya becomes a mentor to Naruto
            , and Tsunade becomes the Fifth Hokage.</em></strong></p>
    </div>
</div>

    <h1>Team Minato🟡</h1>
    <div className="teamContainer">
        <div>
            <img src={teamsImages.youngMinato} alt=""/>
            <h2>Minato</h2><br/>
            <h2>Leader</h2>
        </div>
        <div>
            <img src={teamsImages.youngKakashi} alt=""/>
            <h2>Kakashi</h2><br/>
            <h2>Member</h2>
        </div>
        <div>
            <img src={teamsImages.youngObito} alt=""/>
            <h2>Obito</h2><br/>
         <h2>Member</h2>
        </div>
        <div>
            <img src={teamsImages.youngRin} alt=""/>
            <h2>Rin</h2><br/>
            <h2>Member</h2>
        </div>
    </div>  

    <div className="description">
        <div>
            <h2>Mission:</h2>
            <p><strong><em>Various missions during the Third Shinobi World War, 
                including destroying the Kannabi br/idge.</em></strong></p>
        </div>
        <div>
            <h2>Motivation:</h2>
            <p><strong><em>Protect Konoha and complete missions.</em></strong></p>
        </div>
        <div>
            <h2>What happened to them?</h2> 
            <p><strong><em>Obito is presumed dead, later revealed to be alive and becomes a major antagonist.
                Rin dies, leading to Obito's descent into darkness.</em></strong></p>
        </div>
    </div>



    <h1>Team 7🦊</h1>

<div className="teamContainer">
        <div>
            <img src={teamsImages.teamsKakashi} alt=""/>
            <h2>Kakashi</h2><br/>
            <h2>Leader</h2>
        </div>
        <div>
            <img src={teamsImages.teamsNaruto} alt=""/>
            <h2>Naruto</h2><br/>
            <h2>Member</h2>
        </div>
        <div>
            <img src={teamsImages.teamsSasuke} alt=""/>
            <h2>Sasuke</h2><br/>
         <h2>Member</h2>
        </div>
        <div>
            <img src={teamsImages.teamsSakura} alt=""/>
            <h2>Sakura</h2><br/>
            <h2>Member</h2>
        </div>
    </div>



    

    <div className="description">
        <div>
            <h2>Mission:</h2>
            <p><strong><em>Undertake various ninja missions, including retrieving Sasuke and combating the Akatsuki.</em></strong></p>
        </div>
        <div>
            <h2>Motivation:</h2>
            <p><strong><em>Naruto wants to become Hokage and br/ing back Sasuke,
                Sasuke seeks revenge against his br/other Itachi, 
                Sakura wants to protect her friends.</em></strong></p>
        </div>
        <div>
            <h2>What happened to them?</h2> 
            <p><strong><em>Team splits after Sasuke leaves, reforms later to combat threats like Kaguya Otsutsuki.</em></strong></p>
        </div>
    </div>

    
   


        <h1>Team Guy🛡️</h1>


        <div className="teamContainer">
            <div>
                <img src={teamsImages.guy} alt=""/>
                <h2>Guy</h2><br/>
            <h2>Leader</h2>
            </div>
            <div>
                <img src={teamsImages.rocklee} alt=""/>
                <h2>Rock Lee</h2><br/>
            <h2>Member</h2>
            </div>
            <div>
                <img src={teamsImages.neji} alt=""/>
                <h2>Neji</h2><br/>
                <h2>Member</h2>
            </div>
            <div>
                <img src={teamsImages.tenten} alt=""/>
                <h2>TenTen</h2><br/>
                <h2>Member</h2>
            </div>
        </div>

        <div className="description">
            <div>
                <h2>Mission:</h2>
                <p><strong><em>Various missions, including the fight against the Akatsuki.</em></strong></p>
            </div>
            <div>
                <h2>Motivation:</h2>
                <p><strong><em>
                    Lee wants to prove his worth, Neji seeks to understand his fate, Tenten supports her teammates.
                </em></strong></p>
            </div>
            <div>
                <h2>What happened to them?</h2> 
                <p><strong><em>
                    Team remains strong, contributes significantly in the Fourth Shinobi World War.
                     Neji sacrifices himself to protect Naruto and Hinata.
                </em></strong></p>
            </div>
        </div>
    
        <h1>Taka🏴‍☠️</h1>
        <div className="teamContainer">
            <div>
                <img src={teamsImages.takaSasuke} alt=""/>
                <h2>Sasuke</h2><br/>
         <h2>Leader</h2>
            </div>
            <div>
                <img src={teamsImages.karin} alt=""/>
                <h2>Karin</h2><br/>
         <h2>Member</h2>
            </div>
            <div>
                <img src={teamsImages.suigetsu} alt=""/>
                <h2>Suigetsu</h2><br/>
            <h2>Member</h2>
            </div>
            <div>
                <img src={teamsImages.jugo} alt=""/>
                <h2>Jugo</h2><br/>
                <h2>Member</h2>
            </div>
        </div>
        <div className="description">
            <div>
                <h2>Mission:</h2>
                <p><strong><em>
                    Originally formed to help Sasuke find and kill Itachi, later to capture Killer Bee.
                </em></strong></p>
            </div>
            <div>
                <h2>Motivation:</h2>
                <p><strong><em>
                    Sasuke's quest for revenge against Itachi and later against Konoha.
                </em></strong></p>
            </div>
            <div>
                <h2>What happened to them?</h2> 
                <p><strong><em>
                    Itachi is killed, but Sasuke learns the truth about him. Team eventually disbands.
                </em></strong></p>
            </div>
        </div>
    
      
    
        <h1>Team Jiraiya🐸</h1>

        <div className="teamContainer">
            <div>
                <img src={teamsImages.leaderJiraiya} alt=""/>
                <h2>Jiraiya</h2><br/>
                <h2>Leader</h2>
            </div>
            <div>
                <img src={teamsImages.yahiko} alt=""/>
                <h2>Yahiko</h2><br/>
                <h2>Member</h2>
            </div>
            <div>
                <img src={teamsImages.nagato} alt=""/>
                <h2>Nagato</h2><br/>
                <h2>Member</h2>
            </div>
            <div>
                <img src={teamsImages.youngKonan} alt=""/>
                <h2>Konan</h2><br/>
                <h2>Member</h2>
            </div>
        </div>
        <div className="description">
            <div>
                <h2>Mission:</h2>
                <p><strong><em>
                    Survive and bring peace to their war-torn homeland, Amegakure.
                    Train under Jiraiya to become strong enough to protect themselves and their village.
                </em></strong>
                </p>
            </div>
            <div>
                <h2>Motivation:</h2>
                <p><strong><em>
                    bring peace to their village Amegakure.
                </em></strong></p>
            </div>
            <div>
                <h2>What happened to them?</h2> 
                <p><strong><em>
                    Team Jiraiya's journey is marked by their 
                    transformation from war orphans to powerful leaders with conflicting methods of achieving peace, 
                    leaving a lasting impact on the Naruto world. They end up killing Jiraiya
                </em></strong></p>
            </div>
        </div>

            <Element  name="fan-art" />
            <h1 id="fanart">Fan Art🎨</h1>
        <div className="artContainer">
            <div>
                <img src={teamsImages.a} alt=""/>
            </div>
            <div>
                <img src={teamsImages.b} alt=""/>
            </div>
            <div>
                <img src={teamsImages.c} alt=""/>
            </div>
            <div>
                <img src={teamsImages.d} alt=""/>
            </div>
            <div>
                <img src={teamsImages.e} alt=""/>
            </div>
            <div>
                <img src={teamsImages.f} alt=""/>
            </div>
            
            <div>
                <img src={teamsImages.g} alt=""/>
            </div>
            <div>
                <img src={teamsImages.h} alt=""/>
            </div>
            <div>
                <img src={teamsImages.i} alt=""/>
            </div>
       
    
      
           
            <div>
                <img src={teamsImages.j} alt=""/>
            </div>
            <div>
                <img src={teamsImages.k} alt=""/>
            </div>
            <div>
                <img src={teamsImages.l} alt=""/>
            </div>
        
    
            <div>
                <img src={teamsImages.m} alt=""/>
            </div>
            <div>
                <img src={teamsImages.n} alt=""/>
            </div>
            <div>
                <img src={teamsImages.o} alt=""/>
            </div>
           
        
    
    
      
            <div>
                <img src={teamsImages.p} alt=""/>
            </div>
            <div>
                <img src={teamsImages.q} alt=""/>
            </div>
            <div>
                <img src={teamsImages.r} alt=""/>
            </div>
       
    
    
    
        
            <div>
                <img src={teamsImages.s} alt=""/>
            </div>
            <div>
                <img src={teamsImages.t} alt=""/>
            </div>
            <div>
                <img src={teamsImages.u} alt=""/>
            </div>
    
    
    
    
    
           
            <div>
                <img src={teamsImages.v} alt=""/>
            </div>
            <div>
                <img src={teamsImages.w} alt=""/>
            </div>
            <div>
                <img src={teamsImages.x} alt=""/>
            </div>
     
    
    
    
            <div>
                <img src={teamsImages.y} alt=""/>
            </div>
            <div>
                <img src={teamsImages.z} alt=""/>
            </div>
            <div>
                <img src={teamsImages.aa} alt=""/>
            </div>
           
       
    
        
            <div>
                <img  src={teamsImages.bb} alt=""/>
            </div>
            <div>
                <img src={teamsImages.cc} alt=""/>
            </div>
            <div>
                <img src={teamsImages.dd} alt=""/>
            </div>
        
        
    
        <div>
            <img src={teamsImages.ee} alt=""/>
        </div>
        <div>
            <img src={teamsImages.ff} alt=""/>
        </div>
        <div>
            <img src={teamsImages.gg} alt=""/>
        </div>   
    
    </div>
    
      
    
        <ScrollLink duration={100} smooth={true} offset={-50}  className="top" to="top">Go on top</ScrollLink>
        <footer>
            -Created By Suad Pllana-
        </footer>
    </div>
  )
}

export default Teams
