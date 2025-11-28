import styles from "../styles/Home.module.css";
import Image from "next/image";
import Face from "../components/Face";
import HeadWrapper from "../components/HeadWrapper";
import HoverImage from "../components/HoverImage";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.content}>
      <section id="home">
        <HeadWrapper />
        <Face />
        <div className={styles.titleContent}>
          <h1 className={styles.mainHeader}>SPASTIC BOMBASTIC</h1>
          <Image src={"/img/world.gif"} width={100} height={100} alt="world" />
          <Nav />
        </div>
        <img src={"/img/Bocas.gif"} width={`100%`} height={200} alt="sky" />
      </section>
      <section id="bio">
        <h1 className={styles.sectionTitle}>Bio</h1>
        <p className={styles.sectionParagraph}>
          Spastic Bombastic is the rambunctious philosophy of Kurt Gunk. A
          Midwestern American mytholoigical legend and folk hero he is known by
          many names and aliases - Kirt Junkt, Charlie Stone, Victor Gooz,
          Johnny Gash, Vivek Big Below among others. A man with ten minds and
          two hearts who descended on the world like a dark spector, a jester of
          love. Blink and you'll miss him. Neither punk nor mod, but spaz. Mr.
          Gunk welcomes you to join the movement{" "}
          <Image
            src={"/img/smileyguy.gif"}
            width={20}
            height={20}
            alt="smileyguy"
          />
        </p>
      </section>
      <section id="archive">
        <h1 className={styles.sectionTitle}>Archive</h1>
        <nav className={styles.nav}>
          <Link className={styles.navLink} href="#2025">
            2025
          </Link>
          <Link className={styles.navLink} href="#2024">
            2024
          </Link>
          <Link className={styles.navLink} href="#2023">
            2023
          </Link>
          <Link className={styles.navLink} href="#2022">
            2022
          </Link>
        </nav>
        <div className={styles.archiveNavigation}>
          <p id="2025" className={styles.sectionParagraph}>
            2025
          </p>{" "}
          <Link className={styles.navLink} href="#2024">
            <p className={styles.sectionParagraph}>&darr;</p>
          </Link>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            href={"https://statestreetpub.bandcamp.com/album/ssp-lives-vol-1"}
            rel="noopener noreferrer"
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/ssplivescassette.jpg"}
              imgAlt={"SSP Lives Vol. 1 Cassette"}
              content={
                "A live recording of the Spastic Bombastic track Anna was included on the SSP Lives Vol. 1 compilation tape"
              }
            />
          </Link>
          <Link
            target="_blank"
            href={"/img/spasticbombastic/dusk.jpg"}
            rel="noopener noreferrer"
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/dusk.jpg"}
              imgAlt={"Dusk Flier"}
              content={
                "Show with Dusk from WI and Maura Weaver from Cincy at Dear Mom."
              }
            />
          </Link>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/gardenoflove.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/gardenoflove.jpg"}
              imgAlt={"Garden of Love Flier"}
              content={
                "Show with Garden of Love from Montreal and Miranda Spatula from Btown at Dear Mom. Two Fat Sisters is a side project with my friend CJ."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/twofatsisters.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/twofatsisters.jpg"}
              imgAlt={"Two Fat Sisters"}
              content={
                "Two Fat Sisters, named after the song by The Clean. Photo captured by my friend Ian."
              }
            />
          </Link>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/rLwxaIeXtWw?si=k5CmeuiUARtysCss"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; full-screen; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            Three piece live set at SSP recorded on VHS by CJ 9/3/2025
          </p>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/ssp.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/ssp.jpg"}
              imgAlt={"Three Piece at SSP"}
              content={
                "The three piece band with Jacki on Bass and Ryan on Drums. This show was at State Street Pub, the best venue in Indy."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://sooflay.bandcamp.com/album/sooflay"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/sooflay.jpg"}
              imgAlt={"Sooflay Flier"}
              content={"Show with Sooflay, the king of cardboard."}
            />
          </Link>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/3CNR565cbww?si=9XyFHNBuPLlfV-TY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            Live cover set with CJ billed as Plastic Bombastic
          </p>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/autobahn.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/autobahn.jpg"}
              imgAlt={"Autobahn Flier"}
              content={
                "Show with Autobahn from NYC, they were amazing. TV Buddha from Chicago. Johnny Skins from Indy. I drew this flier for the show."
              }
            />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/ianssp.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/ianssp.jpg"}
              imgAlt={"ianssp"}
              content={"Three piece live band playing SSP. Photo by Ian."}
            />
          </Link>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/lavenderjets.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/lavenderjets.jpg"}
              imgAlt={"Lavender Jets Flier"}
              content={
                "Show with Lavender Jets and Lucy Furr. Flier was drawn by Jacki Guitar."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/matthewdangerlippman.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/matthewdangerlippman.jpg"}
              imgAlt={"Matthew Danger Lippman Flier"}
              content={
                "Show with Matthew Danger Lippman and Home Phone at Slaugherhouse 4."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/memorycard.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/memorycard.jpg"}
              imgAlt={"Memory Card Flier"}
              content={
                "Show with Memory Card at SSP. One of the rare solo sets."
              }
            />
          </Link>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/hybridhead.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/hybridhead.jpg"}
              imgAlt={"Hybrid Head Flier"}
              content={
                "Show with Googoloplexia from St. Louis and Hybrid Head, one of Richard Edge's side projects. I drew this flier, probably my sloppiest one. Ryan and I played this show as a two piece."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/ryandavis.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/ryandavis.jpg"}
              imgAlt={"Ryan Davis Flier"}
              content={
                "Show at SSP with Stephen Orbahn of Living Dream and Ryan Davis."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/npc.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/npc.jpg"}
              imgAlt={"National Photo Committee Flier"}
              content={
                "Stacked show booked by Kellen Baker with National Photo Committee, P. Noid, and Jason Shapiro from Chicago and Bullseye from NYC. I played this one solo."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/supportssp.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/supportssp.jpg"}
              imgAlt={"Support SSP Flier"}
              content={
                "Played a solo set at this show at SSP meant to raise some funds for the venue."
              }
            />
          </Link>
        </div>
        <div className={styles.archiveNavigation}>
          <p id="2024" className={styles.sectionParagraph}>
            2024
          </p>{" "}
          <Link className={styles.navLink} href="#2023">
            <p className={styles.sectionParagraph}>&darr;</p>
          </Link>
          <Link className={styles.navLink} href="#2025">
            <p className={styles.sectionParagraph}>&uarr;</p>
          </Link>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/artificialgo.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/artificialgo.jpg"}
              imgAlt={"Artificial Go Flier"}
              content={
                "One of the early 4 piece shows at SSP with Artificial Go from Cincy. Joined by Share and Cairo Jag."
              }
            />
          </Link>
          <div className={styles.rowItem}>
            <div className={styles.videoFrame}>
              <iframe
                className={styles.iframe}
                src="https://www.youtube.com/embed/G4s4rJJW24E?si=5Uf8Ax0ku4MgeM36"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className={styles.sectionParagraph}>
                Four piece set recorded on VHS at SSP courtesy of Barbie. The
                four piece band included Barbie on Bass, Jacki on Guitar, Ryan
                on Drums, and Victor Gooz on Guitar and Vocals
              </p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/tuft.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/tuft.jpg"}
              imgAlt={"Tuft Flier"}
              content={
                "The infamous show where I got too drunk and threw my guitar. Unlimited Hams is a bad idea."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/spastic-flyer.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/spastic-flyer.jpg"}
              imgAlt={"Devil Flier"}
              content={
                "Show at Dear Mom with Bad Crime and Night Manager. I drew this flier for the show."
              }
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/shadowshow.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/shadowshow.jpg"}
              imgAlt={"Shadow Show Flier"}
              content={"Show at SSP with Shadow Show and Share."}
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"/img/spasticbombastic/debut.jpg"}
            className={styles.rowItem}
          >
            <HoverImage
              imgSrc={"/img/spasticbombastic/debut.jpg"}
              imgAlt={"First Show Flier"}
              content={
                "This was the first show with a full band. We played with Lightheaded, Jeanines, and GFB at State Street Pub."
              }
            />
          </Link>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/ZwmTQOv6BFs?si=ejfqk3asulfjdCCT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            The first Spastic Bombastic performance, live at The Burger Palace.
          </p>
        </div>

        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/uD-w36klXM8?si=MQ1KvxiYHS7gHbaC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            On and On, a B side not released on the first album
          </p>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/2m3r9rWgRhU?si=PqmUo6ZZjwytq7bl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen="true"
          ></iframe>
          <p className={styles.sectionParagraph}>
            Single music video for My Brain is a Spider. Shot on VHS.
          </p>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/V1xeFOkKN_4?si=J6yt6SEbSWGU6eI0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            The full length album, My Brain is a Spider, recorded on a 4 track
            and released 3/28/2024 on Twisted Twin Sister Tapes.
          </p>
        </div>

        <div className={styles.archiveNavigation}>
          <p id="2023" className={styles.sectionParagraph}>
            2023
          </p>{" "}
          <Link className={styles.navLink} href="#2022">
            <p className={styles.sectionParagraph}>&darr;</p>
          </Link>
          <Link className={styles.navLink} href="#2024">
            <p className={styles.sectionParagraph}>&uarr;</p>
          </Link>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/kfGsnWNy0M4?si=ijH8VucM5VkvJVhv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            Die Today and Hometown recorded and released after the demise of AHW
            273
          </p>
        </div>
        <div className={styles.archiveNavigation}>
          <p id="2022" className={styles.sectionParagraph}>
            2022
          </p>{" "}
          <Link className={styles.navLink} href="#2023">
            <p className={styles.sectionParagraph}>&uarr;</p>
          </Link>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            className={styles.iframe}
            src="https://www.youtube.com/embed/nF_oBnRMvP8?si=xrtSIZRIjqiK2x6E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className={styles.sectionParagraph}>
            The first Spastic Bombastic song Lost World
          </p>
        </div>
      </section>
      <section>
        <p className={styles.sectionParagraph}>
          <Link className={styles.navLink} href="#home">
            Back to Top
          </Link>
        </p>
      </section>
    </div>
  );
}
